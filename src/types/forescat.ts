import type { Weather } from "./weather";

export interface ForecastResponse {
  list: HourlyForecastItem[];
}

export type ForecastResult =
  | {
      success: true;
      data: ForecastResponse;
    }
  | {
      success: false;
      error: string;
    };

export interface HourlyForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Weather[];
}

export interface DailyForecastItem {
  day: string;   // SEG
  date: string;  // 19/01
  icon: string;  // "01d"
  min: number;   // 23
  max: number;   // 35
}

