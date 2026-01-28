import { getWeatherIcon } from "../services/weatherService"
import { CardHourly, Container, DetailHourly, Hourly, Text, Temperature } from "../styles/hourlyStyles"
import type { HourlyForecastItem } from "../types/forescat"


interface HourlyForecastProps {
  data: HourlyForecastItem[]
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <Container>
      <Text>Próximas horas</Text>

      <CardHourly>
        {data.map((item) => {
          const hour = new Date(item.dt * 1000).getHours();

          return (
            <DetailHourly key={item.dt}>
              <Hourly>{hour}h</Hourly>

              <img
                className="weatherIcon"
                src={getWeatherIcon(item.weather[0].icon)}
                alt={item.weather[0].description}
              />

              <Temperature>{Math.round(item.main.temp)}°</Temperature>
            </DetailHourly>
          );
        })}
      </CardHourly>
    </Container>
  );
}
