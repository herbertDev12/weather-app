export interface WeatherData {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
        weather_code: string;
        wind_speed_10m: string;
        precipitation: string;
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        weather_code: number;
        wind_speed_10m: number;
        precipitation: number;
        relative_humidity_2m: number;
    };
    daily_units: {
        time: string;
        weather_code: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        precipitation_sum: string;
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        precipitation_sum: number[];
    };
}
