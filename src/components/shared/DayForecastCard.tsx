import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DayForecastCardProps, iconMap } from "@/types/weather-app.types";
import Image from "next/image";

export default function DayForecastCard({
  day,
  icon,
  min_temperature,
  max_temperature,
}: Readonly<DayForecastCardProps>) {
  const iconSrc = iconMap[icon] || iconMap["sun"];

  return (
    <Card className="flex flex-col items-center justify-between gap-4 text-center py-4 w-full">
      <CardHeader className="p-0 w-full">
        <CardTitle className="capitalize text-base md:text-lg truncate">
          {day}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center items-center flex-grow p-0 relative w-14 h-14 md:w-20 md:h-20">
          <Image
            src={iconSrc}
            alt={icon}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
          />
      </CardContent>

      <CardFooter className="flex justify-between items-center w-full px-2 pb-1 text-xs sm:text-sm md:text-base">
        <CardDescription className="text-primary font-medium truncate">
          {max_temperature}°
        </CardDescription>
        <CardDescription className="truncate">
          {min_temperature}°
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
