import useKey from "../hooks/useKey";

function UseKeyPressComponent() {
  const handleEnterPress = () => {
    console.log("Enter key was pressed!");
  };

  useKey("Enter", handleEnterPress);

  return (
    <div>
      <p>
        Appuyez sur la touche Entrée pour déclencher un événement dans la
        console.
      </p>
    </div>
  );
}

export default UseKeyPressComponent;
