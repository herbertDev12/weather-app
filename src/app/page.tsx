import { Main } from "next/document";   
import { Combobox } from "../components/shared/ComboBox";
import { CustomSelect } from "../components/shared/CustomSelect";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import TodayCard from "@/components/shared/TodayCard";
import DetailsCard from "@/components/shared/DetailsCard";
import DayForecastCard from "@/components/shared/DayForecastCard";
import HourlyForecastCard from "@/components/shared/HourlyForecastCard";

export default function Home() {
  return (
    <div className="text-white min-h-screen md:px-25 md:pt-10">
      <div className="relative min-h-screen ">
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 -mt-12 ">
          <Combobox/>
          <Button variant="default" size="sm">Search</Button>
        </div>
        
        <div className="md:flex md:gap-6 px-2 pt-4 pb-20">
          <div className="md:flex-1">
            <div className="pb-4 md:pb-8">
              <TodayCard />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 md:pb-13 grid-rows-2 gap-4 pb-2 md:mt-6">
              <div><DetailsCard /></div>
              <div><DetailsCard /></div>
              <div><DetailsCard /></div>
              <div><DetailsCard /></div>
            </div>
            <div className="pt-4 md:pb-5 pb-1 font-bold ">
              Daily Forecast
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 md:grid-rows-1 grid-rows-3 gap-4 pt-2">
              <div><DayForecastCard /></div>
              <div><DayForecastCard /></div>
              <div><DayForecastCard /></div>
              <div><DayForecastCard /></div>
              <div><DayForecastCard /></div>
              <div><DayForecastCard /></div>
              <div><DayForecastCard /></div>
            </div>
          </div>
          
          <div className="md:w-80  mt-4 md:mt-0">
            <HourlyForecastCard />
          </div>
        </div>

      </div>
    </div>
  );
}