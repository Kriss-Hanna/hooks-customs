import useDarkMode from "../hooks/useDarkMode";

import "./UseDarkModeComponent.css";

function UseDarkModeComponent() {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ backgroundColor: theme === "light" ? "black" : "white" }}>
      <h1>Le thème actuel est {theme}</h1>
      <button onClick={toggleTheme}>
        Basculer en mode {theme === "light" ? "sombre" : "clair"}
      </button>
    </div>
  );
}

export default UseDarkModeComponent;
