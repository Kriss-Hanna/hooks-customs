import { useState, useEffect } from "react";

function useGeoLocation() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position);
      });
    }
  }, []);
  return location;
}

export default useGeoLocation;
