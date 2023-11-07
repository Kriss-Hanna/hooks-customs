import useHover from "../hooks/useHover";

function UseHoverComponent() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      {isHovered ? "Je suis survolé!" : "Passez votre souris ici!"}
    </div>
  );
}

export default UseHoverComponent;
