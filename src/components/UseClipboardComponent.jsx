import { useState } from "react";
import useClipboard from "../hooks/useClipboard";

function UseClipboardComponent() {
  const { copyToClipboard } = useClipboard();
  const [text, setText] = useState("Ceci est un exemple de texte à copier.");

  return (
    <div>
      <h1>Utilitaire de copie dans le presse-papiers</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="30"
      ></textarea>

      <button onClick={() => copyToClipboard(text)}>
        Copier dans le presse-papiers
      </button>
    </div>
  );
}

export default UseClipboardComponent;
