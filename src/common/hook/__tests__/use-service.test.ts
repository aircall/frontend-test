import { renderHook, act } from "@testing-library/react-hooks";

import { useService } from "../use-service";

describe("common/hook/use-service", () => {
  describe("#useService", () => {
    it("should call the service and provide the result in case of success", async () => {
      let resolvePromise: Function = () => {};
      const promise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      const onSuccessMock = jest.fn();

      const { result, waitForNextUpdate } = renderHook(() =>
        useService((() => promise) as any, { onSuccess: onSuccessMock })
      );

      expect(result.current.isLoading).toEqual(true);
      expect(result.current.error).toEqual(null);

      act(() => {
        resolvePromise("test");
      });
      await waitForNextUpdate();

      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toEqual(null);

      expect(onSuccessMock).toHaveBeenCalledWith("test");
    });

    it("should call the service an provide the error in case of failure", async () => {
      let rejectPromise: Function = () => {};
      const promise = new Promise((_resolve, reject) => {
        rejectPromise = reject;
      });
      const onErrorMock = jest.fn();

      const { result, waitForNextUpdate } = renderHook(() =>
        useService(() => promise, { onError: onErrorMock })
      );

      expect(result.current.isLoading).toEqual(true);
      expect(result.current.error).toEqual(null);

      const error = new Error();
      act(() => {
        rejectPromise(error);
      });

      await waitForNextUpdate();

      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toEqual(error);

      expect(onErrorMock).toHaveBeenCalledWith(error);
    });

    it("should execute again only if a dependency changes", () => {
      const serviceMock = jest.fn().mockImplementation(
        () =>
          new Promise((resolve) => {
            act(() => resolve());
          })
      );

      let dependency = "dependency_test";
      const { rerender } = renderHook(() =>
        useService(serviceMock, undefined, [dependency])
      );

      expect(serviceMock).toHaveBeenCalledTimes(1);

      rerender();

      expect(serviceMock).toHaveBeenCalledTimes(1);

      dependency = "test_dependency";
      rerender();

      expect(serviceMock).toHaveBeenCalledTimes(2);
    });
  });
});
