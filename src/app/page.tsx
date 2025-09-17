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
    <div className="text-white min-h-screen">
      <div className="relative min-h-screen">
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
          <h1 className="text-6xl font-bold">How's the sky looking today?</h1>
        </div>
        <div className="flex justify-center -mt-12">
          <Combobox/>
        </div>
        <div className="flex justify-center mt-2">
          <Button variant="default">Search</Button>
        </div>
        <div className="px-2 pt-4">
          <TodayCard />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-4 px-2 pb-2">
          <div><DetailsCard /></div>
          <div><DetailsCard /></div>
          <div><DetailsCard /></div>
          <div><DetailsCard /></div>
        </div>
        <div className="pt-4 pb-1 px-2 font-bold">
          Daily Forecast
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 pt-2 px-2">
          <div><DayForecastCard /></div>
          <div><DayForecastCard /></div>
          <div><DayForecastCard /></div>
          <div><DayForecastCard /></div>
          <div><DayForecastCard /></div>
          <div><DayForecastCard /></div>
          <div><DayForecastCard /></div>
        </div>
        <div className="p-2 pt-10 pb-20">
          <HourlyForecastCard />
        </div>

      </div>
    </div>
  );
}