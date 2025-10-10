// src/lib/weather.ts

export type WeatherIcon =
  | "sun"
  | "rain"
  | "snow"
  | "storm"
  | "fog"
  | "drizzle"
  | "overcast"
  | "partly_cloudy";

export type WeatherCardProps = {
  city: string;
  date: string;
  temperature: number;
  icon: WeatherIcon;
};

export type WeatherDetailsProps = {
  indicator: string;
  value: string;
};

export type HourlyElementCardProps = {
  icon: WeatherIcon;
  hour: string;
  temperature: number;
};

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
