import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { render } from "testing-utils";

import { ActivityFeed } from "..";
import { useService } from "../../common/hook/use-service";
import { activityIdsGroupedByDayState } from "../selectors";
import { getActivityList } from "../../common/service/activity";

jest.mock("recoil");
jest.mock("../../common/hook/use-service");
jest.mock("../../common/service/activity");
jest.mock("../components/activity", () => ({
  Activity: ({ id }: any) => <div data-component="Activity" data-id={id}></div>,
}));

describe("activity-feed", () => {
  describe("ActivityFeed", () => {
    const useServiceMock = useService as jest.Mock;
    const useSetRecoilStateMock = useSetRecoilState as jest.Mock;
    const useRecoilValueMock = useRecoilValue as jest.Mock;
    const getActivityListMock = getActivityList as jest.Mock;
    const fakeRecoilState = [
      { activityIds: [4, 1], day: "2018-04-18T22:00:00.000Z" },
      { activityIds: [3], day: "2018-04-17T22:00:00.000Z" },
      { activityIds: [2], day: "2018-04-16T22:00:00.000Z" },
    ];

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe("#render", () => {
      it("should render correctly with a list of activities", () => {
        useRecoilValueMock.mockReturnValueOnce(fakeRecoilState);
        useServiceMock.mockReturnValueOnce({ isLoading: false, error: null });

        const { container } = render(<ActivityFeed />);

        expect(useRecoilValueMock).toHaveBeenCalledWith(
          activityIdsGroupedByDayState
        );
        expect(container).toMatchSnapshot();
      });

      it("should render correctly while loading", () => {
        useRecoilValueMock.mockReturnValueOnce([]);
        useServiceMock.mockReturnValueOnce({ isLoading: true, error: null });

        const { container } = render(<ActivityFeed />);

        expect(container).toMatchSnapshot();
      });

      it("should render correctly when there's an error", () => {
        useRecoilValueMock.mockReturnValueOnce([]);
        useServiceMock.mockReturnValueOnce({
          isLoading: false,
          error: new Error("test_error"),
        });

        const { container } = render(<ActivityFeed />);

        expect(container).toMatchSnapshot();
      });
    });

    describe("#useService", () => {
      it("should call the service and set the activity list state in case of success", () => {
        useRecoilValueMock.mockReturnValueOnce([]);
        useServiceMock
          .mockImplementationOnce((serviceCaller, { onSuccess }) => {
            serviceCaller();
            onSuccess([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
            return { isLoading: false, error: null };
          })
          .mockReturnValueOnce({ isLoading: false, error: null });
        const setStateMock = jest.fn();
        useSetRecoilStateMock.mockReturnValue(setStateMock);

        render(<ActivityFeed />);

        expect(getActivityListMock).toHaveBeenCalledTimes(1);
        expect(setStateMock).toHaveBeenCalledWith([
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
        ]);
      });
    });
  });
});
