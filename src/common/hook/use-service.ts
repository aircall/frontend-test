import { useState, useEffect } from "react";

const noop = () => {};

/**
 * Calls an asynchronous service and keep track of loading state, data and errors
 * @param func Asynchronous function to call
 * @param callbacks
 * @param [callbacks.onSuccess] Function called in case of success
 * @param [callbacks.onError] Function called in case of error
 * @param deps Dependencies
 */
export function useService<T = any, E = Error>(
  func: () => Promise<T>,
  {
    onSuccess = noop,
    onError = noop,
  }: { onSuccess?: (data: T) => void; onError?: (error: E) => void } = {},
  deps: string[] = []
) {
  const [error, setError] = useState<E | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    func()
      .then(onSuccess, (error: E) => {
        setError(error);
        onError(error);
      })
      .finally(() => setIsLoading(false));
  }, deps);

  return { error, isLoading };
}
