import { getWeatherIcon } from "../services/weatherService";
import { City, Container, Description, DetailLabel, Details, DetailsItems, Temperature } from "../styles/weatherStyle";
import type { WeatherData } from "../types/weather";

interface WeatherProps {
  weather: WeatherData | null;
}

export default function WeatherCard({ weather }: WeatherProps) {

  if (!weather) {
    return (
      <Container>
        <City>Buscando clima...</City>
      </Container>
    );
  }

  return (
    <Container>
      <City>{weather.name}</City>

      {weather.weather?.[0] && (
        <img
          className="weatherIcon"
          src={getWeatherIcon(weather.weather[0].icon)}
          alt={weather.weather[0].description}
        />
      )}

      <Temperature $temp={weather.main.temp}>
        {Math.round(weather.main.temp)}°c
      </Temperature>

      <Description>{weather.weather[0]?.description}</Description>

      <Details>
        <DetailsItems>
          <DetailLabel>Sensação térmica</DetailLabel>
          <DetailLabel>{Math.round(weather.main.feels_like)}°c</DetailLabel>
        </DetailsItems>

        <DetailsItems>
          <DetailLabel>Umidade</DetailLabel>
          <DetailLabel>{weather.main.humidity}%</DetailLabel>
        </DetailsItems>

        <DetailsItems>
          <DetailLabel>Vento</DetailLabel>
          <DetailLabel>{weather.wind.speed} m/s</DetailLabel>
        </DetailsItems>
      </Details>
    </Container>
  );
}
