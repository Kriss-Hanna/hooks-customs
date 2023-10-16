import { useEffect } from "react";

function useKey(key, callback) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [key, callback]);
}

export default useKey;
