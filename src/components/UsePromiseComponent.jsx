import usePromise from "../hooks/usePromise";

const UsePromiseComponent = () => {
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json());
  };

  const { data, error, loading } = usePromise(fetchData, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  return <div>{data && <p>Données : {JSON.stringify(data)}</p>}</div>;
};

export default UsePromiseComponent;
