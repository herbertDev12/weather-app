import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { HourlyElementCardProps, iconMap } from "@/lib/weather";

export default function HourlyForecastElementCard({
  icon,
  hour,
  temperature,
}: Readonly<HourlyElementCardProps>) {
  const iconSrc = iconMap[icon] || iconMap["sun"];

  return (
    <Card className="bg-hourly-element-card h-15">
      <CardContent className="flex justify-between items-center px-4">
        <div className="flex flex-2 space-x-2 items-center">
          <Image
            src={iconSrc}
            alt={icon}
            width={40}
            height={40}
            className="drop-shadow-md"
          />
          <p className="text-lg font-medium text-transform: uppercase text-gray-100">{hour}</p>
        </div>
        <p className="text-white">{temperature}°</p>
      </CardContent>
    </Card>
  );
}
