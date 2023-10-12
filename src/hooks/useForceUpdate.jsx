import { useState } from "react";

function useForceUpdate() {
  const [, setState] = useState(0);
  const forceUpdate = () => setState((prev) => prev + 1);
  return forceUpdate;
}

export default useForceUpdate;
