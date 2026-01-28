import { useEffect, useState } from "react";
import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import WeatherCard from "../components/Weather";
import {
  Container,
  Header,
  Logo,
  Buscar,
  Input,
  Button,
  Error,
  HourlyDate,
  DateView,
  Loading,
  ButtonVoltar
} from "../styles/homeStyles";
import type { WeatherData } from "../types/weather";
import type {
  HourlyForecastItem,
  DailyForecastItem,
} from "../types/forescat";
import {
  getCurrentWeather,
  getForecast,
  getDailyForecast,
  getCurrentWeatherCoods,
} from "../services/weatherService";
import { useLocation } from "../services/useLocation";
import { getWeatherBackground } from "../services/weatherBackground";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecastItem[]>([]);
  const [dailyForecast, setDailyForecast] = useState<DailyForecastItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSearchingCity, setIsSearchingCity] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date())

  const { lat, lon } = useLocation();

  const loadWeatherByCoords = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);

    const weatherResult = await getCurrentWeatherCoods(lat, lon);

    if (!weatherResult.success) {
      setError(weatherResult.error);
      setLoading(false);
      return;
    }

    setWeather(weatherResult.data);

    const forecastList = await getForecast(lat, lon);
    setHourlyForecast(forecastList.slice(0, 6));
    setDailyForecast(getDailyForecast(forecastList));

    setLoading(false);
  };


  const handleSearchCity = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setIsSearchingCity(true);

    const weatherResult = await getCurrentWeather(city);

    if (!weatherResult.success) {
      setError(weatherResult.error);
      setCity("")
      setLoading(false);
      return;
    }

    setWeather(weatherResult.data);

    const { lat, lon } = weatherResult.data.coord;
    const forecastList = await getForecast(lat, lon);

    setHourlyForecast(forecastList.slice(0, 6));
    setDailyForecast(getDailyForecast(forecastList));

    setCity("");
    setLoading(false);
  };


  const handleBackToLocation = async () => {
    if (lat === null || lon === null) return;

    setIsSearchingCity(false);
    await loadWeatherByCoords(lat, lon);
  };


  useEffect(() => {
    if (lat !== null && lon !== null && !isSearchingCity) {
      loadWeatherByCoords(lat, lon);
    }
  }, [lat, lon]);

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000)

    return () => clearInterval(time)
  }, [])

  const formattedDate = currentTime.toLocaleDateString("pt-BR", {
    weekday: "long"
  })

  const formattedTime = currentTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  })

  return (
    <Container
      $background={
        weather
          ? getWeatherBackground(
            weather.weather[0].main,
            weather.weather[0].icon,
            weather.weather[0].description
          )
          : "/assets/images/limpo.png"
      }
    >
      
      <Header>
        <Logo>
          <img src="/assets/images/logo.png" alt="logo" />
        </Logo>

        <Buscar>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Buscar cidade..."
            onKeyDown={(e) => e.key === "Enter" && handleSearchCity()}
          />
          <Button onClick={handleSearchCity}>🔍</Button>
        </Buscar>

        {isSearchingCity || error ? (
          <ButtonVoltar onClick={handleBackToLocation} title="Voltar para Minha localização">📍</ButtonVoltar>
        ) : (
          <HourlyDate>
            <DateView >
              {formattedDate}
            </DateView>
            <DateView>{formattedTime}</DateView>
          </HourlyDate>
        )}
      </Header>

      
      {loading && (
        <Loading >
          <p>Carregando...</p>
        </Loading>
      )}

     
      {!loading && error && (
        <Error>

          <p>{error}</p>

          <button
            onClick={handleBackToLocation}
          >
            Tentar novamente
          </button>
          <img
            src="/assets/images/erro.png"
            alt="Erro"
          />
        </Error>
      )}

      {!loading && !error && weather && (
        <>
          <WeatherCard weather={weather} />

          {hourlyForecast.length > 0 && (
            <HourlyForecast data={hourlyForecast} />
          )}

          {dailyForecast.length > 0 && (
            <DailyForecast data={dailyForecast} />
          )}
        </>
      )}
    </Container>
  );
}
