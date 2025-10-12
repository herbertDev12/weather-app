import { CustomSelect } from "../components/shared/CustomSelect";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import TodayCard from "@/components/shared/TodayCard";
import DetailsCard from "@/components/shared/DetailsCard";
import DayForecastCard from "@/components/shared/DayForecastCard";
import HourlyForecastPanelCard from "@/components/shared/HourlyForecastPanelCard";
import { SearchBar } from "@/components/shared/SearchBar";

export default function Home() {
  return (
    <div className="text-white min-h-97 md:px-25 md:pt-10">
      <div className="relative min-97 ">
        <div className="absolute top-0 left-0 m-4 ">
          <Image
            src="/logo.svg"
            width={180}
            height={500}
            alt="Logo image"
          />
        </div>
        <div className="absolute top-0 right-0 m-4">
          <CustomSelect />
        </div>
        <div className="py-28 text-center">
          <h1 className="text-6xl font-bold font-mono">How's the sky looking today?</h1>
        </div>
        <div className="px-4 flex items-center flex-col md:flex-row justify-center gap-3 md:gap-4 -mt-12 mb-6">
          <SearchBar/>
          <Button variant="default" size="lg" className="w-full md:w-auto focus-visible:ring-offset-3 focus-visible:ring-3 focus-visible:ring-offset-background focus-visible:ring-button">Search</Button>
        </div>
        <div className="md:flex md:gap-6 px-2 pt-4 pb-20">
          <div className="md:flex-1">
            <div className="pb-4 md:pb-8">
              <TodayCard />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 md:pb-13 grid-rows-2 gap-4 pb-2 md:mt-6">
              <DetailsCard indicator="Feels Like" value="64°"/>
              <DetailsCard indicator="Humidity" value="46%"/>
              <DetailsCard indicator="Wind" value="9 mph"/>
              <DetailsCard indicator="Precipitation" value="0 in"/>
            </div>
            <div className="pt-4 md:pb-5 pb-1 font-bold ">
              Daily Forecast
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 md:grid-rows-1 grid-rows-3 gap-4 pt-2">
              <div><DayForecastCard day="Tue" icon="rain" max_temperature={68} min_temperature={57}/></div>
              <div><DayForecastCard day="Wind" icon="drizzle" max_temperature={68} min_temperature={57}/></div>
              <div><DayForecastCard day="Thu" icon="sun" max_temperature={68} min_temperature={57}/></div>
              <div><DayForecastCard day="Fri" icon="partly_cloudy" max_temperature={68} min_temperature={57}/></div>
              <div><DayForecastCard day="Sat" icon="storm" max_temperature={68} min_temperature={57}/></div>
              <div><DayForecastCard day="Sun" icon="snow" max_temperature={68} min_temperature={57}/></div>
              <div><DayForecastCard day="Mon" icon="fog" max_temperature={68} min_temperature={57}/></div>
            </div>
          </div>
          
          <div className="md:w-80  mt-4 md:mt-0 h-1">
            <HourlyForecastPanelCard/>
          </div>
        </div>

      </div>
    </div>
  );
}