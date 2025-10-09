import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import HourlyForecastElementCard from "./HourlyForecastElementCard";

export default function HourlyForecastPanelCard() {
  return (
    <Card className="grid">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>Hourly forecast</div>
          <div>
            <Select>
              <SelectTrigger className="w-[100px] bg-primary-select border-gray-500">
                <SelectValue placeholder="Units" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Celcius(C)</SelectItem>
                <SelectItem value="dark">Fahrenheit(F)</SelectItem>
                <SelectItem value="system">Wind Speed (km/h)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-220">
        <ScrollArea className="h-full px-4 pb-2">
          <div className="flex flex-col gap-3">
            <HourlyForecastElementCard
              icon="sun"
              hour="1 AM"
              temperature={20}
            />
            <HourlyForecastElementCard
              icon="overcast"
              hour="2 AM"
              temperature={18}
            />
            <HourlyForecastElementCard
              icon="rain"
              hour="3 AM"
              temperature={16}
            />
            <HourlyForecastElementCard
              icon="snow"
              hour="4 AM"
              temperature={15}
            />
            <HourlyForecastElementCard
              icon="storm"
              hour="5 AM"
              temperature={14}
            />
            <HourlyForecastElementCard
              icon="fog"
              hour="6 AM"
              temperature={13}
            />
            <HourlyForecastElementCard
              icon="drizzle"
              hour="7 AM"
              temperature={12}
            />
            <HourlyForecastElementCard
              icon="sun"
              hour="8 AM"
              temperature={20}
            />
            <HourlyForecastElementCard
              icon="overcast"
              hour="9 AM"
              temperature={18}
            />
            <HourlyForecastElementCard
              icon="rain"
              hour="10 AM"
              temperature={16}
            />
            <HourlyForecastElementCard
              icon="snow"
              hour="11 AM"
              temperature={15}
            />
            <HourlyForecastElementCard
              icon="storm"
              hour="12 PM"
              temperature={14}
            />
            <HourlyForecastElementCard
              icon="fog"
              hour="1 PM"
              temperature={13}
            />
            <HourlyForecastElementCard
              icon="drizzle"
              hour="2 PM"
              temperature={12}
            />
            <HourlyForecastElementCard
              icon="sun"
              hour="3 PM"
              temperature={20}
            />
            <HourlyForecastElementCard
              icon="overcast"
              hour="4 PM"
              temperature={18}
            />
            <HourlyForecastElementCard
              icon="rain"
              hour="5 PM"
              temperature={16}
            />
            <HourlyForecastElementCard
              icon="snow"
              hour="6 PM"
              temperature={15}
            />
            <HourlyForecastElementCard
              icon="storm"
              hour="7 PM"
              temperature={14}
            />
            <HourlyForecastElementCard
              icon="fog"
              hour="8 PM"
              temperature={13}
            />
            <HourlyForecastElementCard
              icon="drizzle"
              hour="9 PM"
              temperature={12}
            />
          </div>
          <ScrollBar orientation="vertical"/>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
