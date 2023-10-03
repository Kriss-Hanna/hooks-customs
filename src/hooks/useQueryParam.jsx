import { useState, useEffect } from "react";

function useQueryParam(key, initialValue) {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || initialValue;
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.replaceState({}, "", "?" + params.toString());
  }, [value, key]);
  return [value, setValue];
}

export default useQueryParam;
