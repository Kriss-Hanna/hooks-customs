import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const UsePreviousComponent = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <h1>Compteur actuel : {count}</h1>
      <h2>Compteur précédent : {previousCount}</h2>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
};

export default UsePreviousComponent;
