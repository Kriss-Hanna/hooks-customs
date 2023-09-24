import { useState, useEffect } from "react";
function useFetch(url, options) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then(setData);
  }, [url, options]);
  return data;
}

export default useFetch;
