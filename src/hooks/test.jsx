import { useEffect, useState } from "react";

function useMeasure(ref) {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (ref.current) {
      setBounds(ref.current.getBoundingClientRect());
    }
  }, [ref]);
  return bounds;
}

export default useMeasure;
