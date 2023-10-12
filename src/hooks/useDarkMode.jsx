import { useState, useEffect } from "react";

function useDarkMode(initialTheme = "light") {
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return [theme, setTheme];
}

export default useDarkMode;
