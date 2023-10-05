import { useState, useRef, useEffect } from "react";

function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      }
    };
  }, []);
  return [ref, hovered];
}

export default useHover;
