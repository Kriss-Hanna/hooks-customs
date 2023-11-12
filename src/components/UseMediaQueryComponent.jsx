import useMediaQuery from "../hooks/useMediaQuery";

const UseMediaQueryComponent = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // Exemple de requête pour les écrans larges
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // Exemple de requête pour le mode sombre

  return (
    <div>
      {isLargeScreen ? (
        <p>L'écran est large.</p>
      ) : (
        <p>L'écran n'est pas large.</p>
      )}
      {prefersDarkMode ? (
        <p>Le mode sombre est préféré.</p>
      ) : (
        <p>Le mode clair est préféré.</p>
      )}
    </div>
  );
};

export default UseMediaQueryComponent;
