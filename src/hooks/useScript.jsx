import { useState, useEffect } from "react";

function useScript(src) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [src]);
  return loaded;
}

export default useScript;
