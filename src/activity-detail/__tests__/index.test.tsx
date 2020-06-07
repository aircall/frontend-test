import React from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

import { render, fireEvent, wait } from "testing-utils";

import { ActivityDetail, Props } from "..";
import { useService } from "../../common/hook/use-service";
import {
  getActivityById,
  archiveActivity,
} from "../../common/service/activity";

jest.mock("recoil");
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useHistory: jest.fn(),
}));
jest.mock("../../common/hook/use-service");
jest.mock("../../common/service/activity");
jest.mock("../../common/components/activity-summary", () => ({
  ActivitySummary: ({ activity }: any) => (
    <div data-component="ActivitySummary">
      {JSON.stringify(activity, null, 2)}
    </div>
  ),
}));

describe("activity-detail", () => {
  describe("ActivityDetail", () => {
    const useServiceMock = useService as jest.Mock;
    const useRecoilStateMock = useRecoilState as jest.Mock;
    const getActivityByIdMock = getActivityById as jest.Mock;
    const archiveActivityMock = archiveActivity as jest.Mock;
    const useHistoryMock = useHistory as jest.Mock;

    const fakeRecoilState = {
      id: 7834,
      created_at: "2018-04-19T09:38:41.000Z",
      direction: "outbound",
      from: "Pierre-Baptiste Béchu",
      to: "06 46 62 12 33",
      via: "NYC Office",
      duration: "120",
      is_archived: false,
      call_type: "answered",
    };

    describe("#render", () => {
      it("should render correctly the activity", () => {
        useRecoilStateMock.mockReturnValueOnce([fakeRecoilState, () => {}]);
        useServiceMock.mockReturnValueOnce({ isLoading: false, error: null });

        const props = {
          match: { params: { id: "42" } },
        } as Props;
        const { container } = render(<ActivityDetail {...props} />);

        expect(container).toMatchSnapshot();
      });

      it("should render correctly while loading", () => {
        useRecoilStateMock.mockReturnValueOnce([null, () => {}]);
        useServiceMock.mockReturnValueOnce({
          isLoading: true,
          error: null,
        });

        const props = {
          match: { params: { id: "42" } },
        } as Props;
        const { container } = render(<ActivityDetail {...props} />);

        expect(container).toMatchSnapshot();
      });

      it("should render correctly when there's an error", () => {
        useRecoilStateMock.mockReturnValueOnce([null, () => {}]);
        useServiceMock.mockReturnValueOnce({
          isLoading: false,
          error: new Error("test_error"),
        });

        const props = {
          match: { params: { id: "42" } },
        } as Props;
        const { container } = render(<ActivityDetail {...props} />);

        expect(container).toMatchSnapshot();
      });
    });

    describe("#useService", () => {
      it("should call the service and set the activity detail in case of success", () => {
        const setActivityMock = jest.fn();
        useRecoilStateMock.mockReturnValueOnce([null, setActivityMock]);
        useServiceMock
          .mockImplementationOnce((serviceCaller, { onSuccess }) => {
            serviceCaller();
            onSuccess(fakeRecoilState);
            return { isLoading: false, error: null };
          })
          .mockReturnValueOnce({ isLoading: false, error: null });

        const props = {
          match: { params: { id: "42" } },
        } as Props;
        render(<ActivityDetail {...props} />);

        expect(getActivityByIdMock).toHaveBeenCalledWith(42);
        expect(setActivityMock).toHaveBeenCalledWith(fakeRecoilState);
      });
    });

    describe("#handleArchiveButtonClick", () => {
      it("should archive the activity and return to the list page", async () => {
        useRecoilStateMock.mockReturnValueOnce([fakeRecoilState, () => {}]);
        useServiceMock.mockReturnValueOnce({ isLoading: false, error: null });

        const pushMock = jest.fn();
        useHistoryMock.mockReturnValue({ push: pushMock });

        archiveActivityMock.mockResolvedValue(null);

        const props = {
          match: { params: { id: "42" } },
        } as Props;
        const { getByTestId } = render(<ActivityDetail {...props} />);

        fireEvent.click(getByTestId("archive-button"));

        await wait();

        expect(archiveActivityMock).toHaveBeenCalledWith(fakeRecoilState);
        expect(pushMock).toHaveBeenCalledWith("/");
      });
    });
  });
});
