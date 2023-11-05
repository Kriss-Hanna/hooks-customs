import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function UseDebounceComponent() {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`Recherche pour: ${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tapez pour rechercher..."
      />
      {debouncedSearchTerm && <p>Recherche pour: {debouncedSearchTerm}</p>}
    </div>
  );
}

export default UseDebounceComponent;
