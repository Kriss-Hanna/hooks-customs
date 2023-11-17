import useMousePosition from "../hooks/useMousePosition";

const UseMousePositionComponent = () => {
  const { x, y } = useMousePosition();

  return (
    <p>
      Position de la souris - X: {x}, Y: {y}
    </p>
  );
};

export default UseMousePositionComponent;
