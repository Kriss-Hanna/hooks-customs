import useArray from "../hooks/useArray";

const useArrayComponent = () => {
  const { array, setArray, push, removeById } = useArray([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]);

  return (
    <div>
      <h1>Liste des éléments</h1>
      <ul>
        {array.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeById(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          const id = array.length ? array[array.length - 1].id + 1 : 1;
          push({ id, name: `Item ${id}` });
        }}
      >
        Ajouter un élément
      </button>

      <button onClick={() => setArray([])}>Vider la liste</button>
    </div>
  );
};

export default useArrayComponent;
