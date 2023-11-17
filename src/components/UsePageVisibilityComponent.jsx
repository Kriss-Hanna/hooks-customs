import usePageVisibility from "../hooks/usePageVisibility";

const UsePageVisibilityComponent = () => {
  const isVisible = usePageVisibility();

  return (
    <div>
      <p>La page est actuellement {isVisible ? "visible" : "cachée"}.</p>
    </div>
  );
};

export default UsePageVisibilityComponent;
