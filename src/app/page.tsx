import { UnitsDropdownMenu } from "../components/shared/UnitsDropdownMenu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TodayCard from "@/components/shared/TodayCard";
import DetailsCard from "@/components/shared/DetailsCard";
import DayForecastCard from "@/components/shared/DayForecastCard";
import HourlyForecastPanelCard from "@/components/shared/HourlyForecastPanelCard";
import { fetchWeather } from "@/lib/fetchWeather";
import SearchBar from "@/components/shared/SearchBar";

export default async function Home() {

  const initialWeather = await fetchWeather(23.1136, -82.3666);
  const country = {
    name: 'Cuba',
    city: 'Havana'
  }
  console.log(initialWeather);

  return (
    <div className="text-primary px-2 sm:px-6 lg:px-10 xl:px-20 pt-8 md:pt-10 pb-16 md:pb-20">
      {/* Header */}
      <header className="relative flex justify-between items-center mb-8 px-2">
        <Image
          src="/logo.svg"
          width={180}
          height={500}
          alt="Logo image"
          className="w-28 sm:w-36 lg:w-48 h-auto"
        />
        <UnitsDropdownMenu />
      </header>

      {/* Title */}
      <section className="text-center px-2 my-20 md:my-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono">
          How's the sky looking today?
        </h1>
      </section>

      {/* Search bar */}
      <section className="flex flex-col md:flex-row items-center px-2 justify-center gap-3 md:gap-4 -mt-10 mb-8">
        <SearchBar />
        <Button
          variant="default"
          size="lg"
          className="w-full md:w-auto text-md md:text-lg"
        >
          Search
        </Button>
      </section>

      {/* Main content */}
      <main className="flex flex-col lg:flex-row gap-6 px-2">
        {/* Left column */}
        <div className="flex-[2] flex flex-col">
          <div className="pb-4 md:pb-2">
            <TodayCard 
              country={country.name} 
              city={country.city}
              date={initialWeather.current.time}
              temperature={initialWeather.current.temperature_2m}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:mt-6 gap-4 pb-6">
            <DetailsCard indicator="Feels Like" value={initialWeather.current.temperature_2m} unit="°"/>
            <DetailsCard indicator="Humidity" value={initialWeather.current.relative_humidity_2m} unit="%"/>
            <DetailsCard indicator="Wind" value={initialWeather.current.wind_speed_10m} unit={" " + initialWeather.current_units.wind_speed_10m}/>
            <DetailsCard indicator="Precipitation" value={initialWeather.current.precipitation} unit="%"/>
          </div>

          <h2 className="font-bold md:mt-6 text-lg pb-2">Daily Forecast</h2>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 pt-2">
            <DayForecastCard day="Tue" icon="rain" max_temperature={68} min_temperature={57} />
            <DayForecastCard day="Wed" icon="drizzle" max_temperature={68} min_temperature={57} />
            <DayForecastCard day="Thu" icon="sun" max_temperature={68} min_temperature={57} />
            <DayForecastCard day="Fri" icon="partly_cloudy" max_temperature={68} min_temperature={57} />
            <DayForecastCard day="Sat" icon="storm" max_temperature={68} min_temperature={57} />
            <DayForecastCard day="Sun" icon="snow" max_temperature={68} min_temperature={57} />
            <DayForecastCard day="Mon" icon="fog" max_temperature={68} min_temperature={57} />
          </div>
        </div>

        {/* Right column - Hourly forecast */}
        <div className="flex-1">
          <HourlyForecastPanelCard/>
        </div>
      </main>
    </div>
  );
}
