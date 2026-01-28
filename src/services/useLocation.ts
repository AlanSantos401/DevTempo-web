import { useEffect, useState } from "react";

interface LocationState {
  lat: number | null;
  lon: number | null;
  error: string | null;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>({
    lat: null,
    lon: null,
    error: null,
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation({
        lat: null,
        lon: null,
        error: "Geolocalização não suportada",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          error: null,
        });
      },
      () => {
        setLocation({
          lat: null,
          lon: null,
          error: "Permissão de localização negada",
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, []);

  return location;
}
