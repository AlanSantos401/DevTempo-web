import { getWeatherIcon } from "../services/weatherService";
import {
  CardDaily,
  Container,
  Date,
  Temperature,
  Text,
} from "../styles/dailyStyles";
import type { DailyForecastItem } from "../types/forescat";

interface DailyForecastProps {
  data: DailyForecastItem[];
}


export default function DailyForecast({ data }: DailyForecastProps) {
  return (
    <Container>
      {data.map((item) => (
        <CardDaily key={item.date}>
          <Date>
            <Text>{item.day}</Text>
            <Text>{item.date}</Text>
          </Date>

          <img
            src={getWeatherIcon(item.icon)}
            alt="weather icon"
          />

          <Temperature>
            {Math.round(item.min)}° / {Math.round(item.max)}°
          </Temperature>
        </CardDaily>
      ))}
    </Container>
  );
}
