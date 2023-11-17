import useLocalStorage from "../hooks/useLocalStorage";

const UseLocalStorageComponent = () => {
  // Utiliser useLocalStorage pour stocker un nom d'utilisateur. La clé est 'user' et la valeur initiale est '' (chaîne vide).
  const [user, setUser] = useLocalStorage("user", "");

  // Gestion du changement du nom d'utilisateur
  const handleNameChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <input type="text" value={user} onChange={handleNameChange} />
      <p>Bonjour, {user} !</p>
    </div>
  );
};

export default UseLocalStorageComponent;
