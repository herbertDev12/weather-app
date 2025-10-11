import { WeatherData } from "./types";

const HAVANA_COORDS = {
  latitude: 23.1136,
  longitude: -82.3666
};
export async function fetchWeather(latitude: number, longitude: number): Promise<WeatherData>{
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
        
        console.log(`Fetching weather data for coordinates: ${latitude}, ${longitude}`);
        console.log(`API URL: ${url}`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); 
        
        const res = await fetch(url, { 
            cache: "no-store",
            signal: controller.signal,
            headers: {
                'User-Agent': 'WeatherApp/1.0'
            }
        }); 
        
        clearTimeout(timeoutId);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch weather: ${res.status} ${res.statusText}`);
        }

        const data: WeatherData = await res.json();
        console.log('Weather data fetched successfully');
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        
        console.log('Retornar mock data por si falla.');
        return getMockWeatherData(latitude, longitude);
    }
}

function getMockWeatherData(latitude: number, longitude: number): WeatherData {
    return {
        latitude,
        longitude,
        generationtime_ms: 0.5,
        utc_offset_seconds: -14400,
        timezone: "America/Havana",
        timezone_abbreviation: "GMT-4",
        elevation: 9.0,
        current_units: {
            time: "iso8601",
            interval: "seconds",
            temperature_2m: "°C",
            weather_code: "wmo code",
            wind_speed_10m: "km/h"
        },
        current: {
            time: new Date().toISOString().slice(0, 16),
            interval: 900,
            temperature_2m: 26.2,
            weather_code: 1,
            wind_speed_10m: 10.5
        },
        daily_units: {
            time: "iso8601",
            weather_code: "wmo code",
            temperature_2m_max: "°C",
            temperature_2m_min: "°C"
        },
        daily: {
            time: ["2025-10-10", "2025-10-11", "2025-10-12", "2025-10-13", "2025-10-14", "2025-10-15", "2025-10-16"],
            weather_code: [1, 2, 3, 1, 2, 1, 3],
            temperature_2m_max: [28.1, 28.6, 29.0, 29.0, 28.5, 27.8, 28.2],
            temperature_2m_min: [22.5, 23.1, 23.8, 23.2, 22.9, 22.0, 22.8]
        }
    };
}
