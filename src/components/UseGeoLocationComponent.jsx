import useGeolocation from "../hooks/useGeoLocation";

const UseGeoLocationComponent = () => {
  const location = useGeolocation();

  return (
    <div>
      {location ? (
        <p>
          Latitude: {location.coords.latitude}, Longitude:{" "}
          {location.coords.longitude}
        </p>
      ) : (
        <p>La géolocalisation nest pas disponible ou pas encore récupérée.</p>
      )}
    </div>
  );
};

export default UseGeoLocationComponent;
