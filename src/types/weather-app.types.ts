export type WeatherIcon =
  | "sun"
  | "rain"
  | "snow"
  | "storm"
  | "fog"
  | "drizzle"
  | "overcast"
  | "partly_cloudy";

export interface TodayCardProps {
  country: string;
  city: string;
  date: string;
  temperature: number;
  weatherCode: number;
}

export interface DetailsCardProps {
  indicator: string;
  value: number;
  unit: string;
}

export interface WeatherCardProps {
  city: string;
  date: string;
  temperature: number;
  icon: WeatherIcon;
}

export interface DayForecastCardProps {
  day: string;
  icon: WeatherIcon;
  minTemperature: number;
  maxTemperature: number;
}

export interface HourlyElementCardProps {
  icon: WeatherIcon;
  hour: string;
  temperature: number;
}

export const iconMap: Record<WeatherIcon, string> = {
  sun: "/icon-sunny.webp",
  rain: "/icon-rain.webp",
  snow: "/icon-snow.webp",
  storm: "/icon-storm.webp",
  fog: "/icon-fog.webp",
  drizzle: "/icon-drizzle.webp",
  overcast: "/icon-overcast.webp",
  partly_cloudy: "/icon-partly-cloudy.webp",
};
