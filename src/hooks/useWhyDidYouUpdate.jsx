import { useEffect, useRef } from "react";

function useWhyDidYouUpdate(name, props) {
  const previousProps = useRef();
  useEffect(() => {
    if (previousProps.current) {
      const changedProps = Object.keys(props).filter(
        (key) => previousProps.current[key] !== props[key],
      );
      if (changedProps.length > 0) {
        console.log(name, "changed props:", changedProps);
      }
    }
    previousProps.current = props;
  });
}

export default useWhyDidYouUpdate;
