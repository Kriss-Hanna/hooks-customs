import { useRef } from "react";
import useMeasure from "../hooks/useMeasure";

const UseMeasureComponent = () => {
  const ref = useRef(null);
  const bounds = useMeasure(ref);

  return (
    <div>
      <div ref={ref} style={{ padding: "20px", border: "1px solid black" }}>
        Je suis une boîte. Voici mes mesures.
      </div>
      <pre>{JSON.stringify(bounds, null, 2)}</pre>
    </div>
  );
};

export default UseMeasureComponent;
