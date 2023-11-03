import useCounter from "../hooks/useCounter";

function UseCounterComponent() {
  const initialValue = 0;
  const step = 1;
  const { count, increment, decrement } = useCounter(initialValue, step);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default UseCounterComponent;
