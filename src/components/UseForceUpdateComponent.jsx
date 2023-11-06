import useForceUpdate from "../hooks/useForceUpdate";

function UseForceUpdateComponent() {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      <p>Date actuelle: {new Date().toString()}</p>
      <button onClick={forceUpdate}>Forcer le rendu</button>
    </div>
  );
}

export default UseForceUpdateComponent;
