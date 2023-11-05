import useFetch from "../hooks/useFetch";
import Proptypes from "prop-types";

function UseFetchComponent({ url }) {
  const data = useFetch(url);

  if (!data) return <p>Chargement...</p>;
  console.log(data);

  return (
    <div>
      <h1>Données récupérées</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.message} width="300" alt="" />
    </div>
  );
}

export default UseFetchComponent;

UseFetchComponent.propTypes = {
  url: Proptypes.string.isRequired,
};
