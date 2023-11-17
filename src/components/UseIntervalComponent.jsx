import { useState } from "react";
import useInterval from "../hooks/useInterval";

function UseIntervalComponent() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    console.log("Test");
    setCount((currentCount) => currentCount + 1);
  }, 1000);

  return (
    <div>
      <h1>Compteur : {count}</h1>
    </div>
  );
}

export default UseIntervalComponent;
