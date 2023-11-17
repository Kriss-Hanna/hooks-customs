import { useState, useEffect } from "react";

function usePromise(promiseOrFunction, dependencies) {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });
  useEffect(() => {
    const promise =
      typeof promiseOrFunction === "function"
        ? promiseOrFunction()
        : promiseOrFunction;
    let isSubscribed = true;
    promise.then(
      (data) => isSubscribed && setState({ data, error: null, loading: false }),
      (error) =>
        isSubscribed && setState({ data: null, error, loading: false }),
    );
    return () => (isSubscribed = false);
  }, [dependencies]);
  return state;
}

export default usePromise;
