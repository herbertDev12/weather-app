import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DayForecastCardProps, iconMap } from "@/lib/weather";
import Image from "next/image";

export default function DayForecastCard({
  day,
  icon,
  min_temperature,
  max_temperature,
}: Readonly<DayForecastCardProps>) {
  const iconSrc = iconMap[icon] || iconMap["sun"];

  return (
    <Card className="flex flex-col items-center justify-between text-center p-2 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">

      <CardHeader className="p-0 w-full">
        <CardTitle className="capitalize text-sm sm:text-base md:text-lg truncate">
          {day}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center items-center flex-grow p-0">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <Image
            src={iconSrc}
            alt={icon}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
          />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center w-full px-2 pb-1 text-xs sm:text-sm md:text-base">
        <CardDescription className="text-primary font-medium truncate">
          {max_temperature}°
        </CardDescription>
        <CardDescription className="truncate">{min_temperature}°</CardDescription>
      </CardFooter>
    </Card>
  );
}
