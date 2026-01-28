import type { ForecastResponse, HourlyForecastItem, DailyForecastItem } from '../types/forescat';
import type { WeatherData, WeatherError } from '../types/weather';
import axios from 'axios';


export type WeatherResult = { success: true; data: WeatherData } | { success: false; error: string }


const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL


const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    lang: "pt_br",
    units: 'metric'
  },
  timeout: 10000,
  headers: {
    "Content-Type": 'application/json'
  }
})

export async function getForecast(
  lat: number,
  lon: number
): Promise<HourlyForecastItem[]> {
  const response = await api.get<ForecastResponse>("/forecast", {
    params: { lat, lon },
  });

  return response.data.list;
}

export function getDailyForecast(
  forecast: HourlyForecastItem[]
): DailyForecastItem[] {
  return forecast
    .filter((item) => {
      const hour = new Date(item.dt * 1000).getHours();
      return hour === 12;
    })
    .slice(0, 5)
    .map((item) => {
      const date = new Date(item.dt * 1000);

      return {
        day: date
          .toLocaleDateString("pt-BR", { weekday: "short" })
          .toUpperCase(),
        date: date.toLocaleDateString("pt-BR"),
        icon: item.weather[0].icon,
        min: Math.round(item.main.temp),
        max: Math.round(item.main.temp),
      };
    });
}

const getErrorMessage = (statusCode: number): string => {

  switch (statusCode) {
    case 400:

      return 'Requisição inválida'

    case 401:

      return 'Chave de acesso inválida'

    case 404:

      return 'Cidade não encontrada'

    case 429:

      return 'Servidor sobrecarregado, tente novamente mais tarde'

    case 500:

      return 'Erro interno no servidor, tente novamente mais tarde'

    case 503:

      return 'Servidor temporiamente indisponível'

    default:
      return 'Erro ao buscar clima, tente novamente mais tarde'

  }

}

export const getCurrentWeather = async (cityName: string): Promise<WeatherResult> => {

  try {
    const trimmedCity = cityName.trim()
    if (!trimmedCity) {
      return {
        success: false,
        error: "Cidade não informada"
      }
    }

    const response = await api.get<WeatherData>("/weather", {
      params: {
        q: trimmedCity
      }
    })

    return {
      success: true,
      data: response.data
    }

  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err)) {

      if (err.response) {
        return {
          success: false,
          error: getErrorMessage(err.response.status)
        }
      } else if (err.request) {
        return {
          success: false,
          error: 'Sem conexão com servidor, tente novamente'
        }
      }
      else {
        return {
          success: false,
          error: "Erro na requisição, Tente novamente"
        }
      }
    }

    return {
      success: false,
      error: "Erro ao buscar o clima"
    }
  }
}

export const getCurrentWeatherCoods = async (latitude: number, longitude: number): Promise<WeatherResult> => {
  try {
    const response = await api.get<WeatherData>('/weather', {
      params: {
        lat: latitude,
        lon: longitude
      }
    })

    return {
      success: true,
      data: response.data
    }

  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err)) {
      if (err.response) {
        return {
          success: false,
          error: getErrorMessage(err.response.status)
        }
      } else if (err.request) {
        return {
          success: false,
          error: 'Sem conexão com servidor, tente novamente'
        }
      }
    }

    return {
      success: false,
      error: "Erro ao buscar clima"
    }
  }
}

export const getWeatherIcon = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}