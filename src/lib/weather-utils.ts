import type { WeatherIcon } from "@/types/weather-app.types";

export const getIconFromWeatherCode = (
  code: number,
  precipitation?: number
): WeatherIcon => {
  if (precipitation && precipitation > 10) return "storm";
  if (precipitation && precipitation > 2) return "rain";

  switch (true) {
    case code === 0:
      return "sun";
    case [1, 2].includes(code):
      return "partly_cloudy";
    case code === 3:
      return "overcast";
    case [45, 48].includes(code):
      return "fog";
    case [51, 53, 55, 56, 57].includes(code):
      return "drizzle";
    case [61, 63, 65, 66, 67, 80, 81, 82].includes(code):
      return "rain";
    case [71, 73, 75, 77, 85, 86].includes(code):
      return "snow";
    case [95, 96, 99].includes(code):
      return "storm";
    default:
      return "partly_cloudy";
  }
};