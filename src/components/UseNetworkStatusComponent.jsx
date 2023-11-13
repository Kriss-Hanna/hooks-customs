import useNetworkStatus from "../hooks/useNetworkStatus";

const UseNetworkStatusComponent = () => {
    const isOnline = useNetworkStatus();

  return (
    <p>Statut de la connexion : {isOnline ? 'En ligne' : 'Hors ligne'}</p>
  )
}

export default UseNetworkStatusComponent;
