import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

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
    <Card className="grid gap-3">
      {/* Header */}
      <CardHeader>
        <div className="flex justify-between items-center mt-3">
          <span className="font-medium">Hourly forecast</span>

          <Select>
            <SelectTrigger
              className="w-auto text-[var(--on-primary)] border-transparent
              focus-visible:ring-offset-3 focus-visible:ring-3 cursor-pointer
              focus-visible:ring-offset-card focus-visible:ring-primary 
              focus-visible:border-transparent"
            >
              <SelectValue placeholder="Days" />
              <Image
                src="/icon-dropdown.svg"
                width={15}
                height={15}
                alt="Dropdown icon"
                className="ml-2 pointer-events-none"
              />
            </SelectTrigger>

            <SelectContent
              align="end"
              className="p-2 mt-2 bg-card rounded-lg shadow-md"
            >
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="tuesday">Tuesday</SelectItem>
              <SelectItem value="wednesday">Wednesday</SelectItem>
              <SelectItem value="thursday">Thursday</SelectItem>
              <SelectItem value="friday">Friday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
              <SelectItem value="sunday">Sunday</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      {/* Scrollable content */}
      <CardContent className="p-0 h-163">
        <ScrollArea className="h-full px-4 pb-2">
          <div className="flex flex-col gap-3">
            <HourlyForecastElementCard icon="sun" hour="1 AM" temperature={20} />
            <HourlyForecastElementCard icon="overcast" hour="2 AM" temperature={18} />
            <HourlyForecastElementCard icon="rain" hour="3 AM" temperature={16} />
            <HourlyForecastElementCard icon="snow" hour="4 AM" temperature={15} />
            <HourlyForecastElementCard icon="storm" hour="5 AM" temperature={14} />
            <HourlyForecastElementCard icon="fog" hour="6 AM" temperature={13} />
            <HourlyForecastElementCard icon="drizzle" hour="7 AM" temperature={12} />
            <HourlyForecastElementCard icon="sun" hour="8 AM" temperature={20} />
            <HourlyForecastElementCard icon="overcast" hour="9 AM" temperature={18} />
            <HourlyForecastElementCard icon="rain" hour="10 AM" temperature={16} />
            <HourlyForecastElementCard icon="snow" hour="11 AM" temperature={15} />
            <HourlyForecastElementCard icon="storm" hour="12 PM" temperature={14} />
            <HourlyForecastElementCard icon="fog" hour="1 PM" temperature={13} />
            <HourlyForecastElementCard icon="drizzle" hour="2 PM" temperature={12} />
            <HourlyForecastElementCard icon="sun" hour="3 PM" temperature={20} />
            <HourlyForecastElementCard icon="overcast" hour="4 PM" temperature={18} />
            <HourlyForecastElementCard icon="rain" hour="5 PM" temperature={16} />
            <HourlyForecastElementCard icon="snow" hour="6 PM" temperature={15} />
            <HourlyForecastElementCard icon="storm" hour="7 PM" temperature={14} />
            <HourlyForecastElementCard icon="fog" hour="8 PM" temperature={13} />
            <HourlyForecastElementCard icon="drizzle" hour="9 PM" temperature={12} />
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
