import { Card, CardContent } from "@/components/ui/card";
import { TodayCardProps } from "@/lib/types";
import formateDate from "@/utils/dateformatter";
import Image from "next/image";

export default function TodayCard({country, city, date, temperature}: Readonly<TodayCardProps>) {
  const actualDate = formateDate(date);
  return (
    <Card className="bg-[url('/bg-today-small.svg')] md:bg-[url('/bg-today-large.svg')] md:py-15 bg-cover bg-center text-primary">
      <CardContent className="flex flex-col md:flex-row justify-between items-center h-full">
        {/* Location */}
        <div className="space-y-1 text-center md:text-left mt-4 md:mt-0 md:space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">{city}, {country}</h2>
          <p className="text-1xl md:text-lg text-muted-foreground">{actualDate}</p>
        </div>

        {/* Temp */}
        <div className="flex flex-row justify-between items-center my-4 md:my-0 md:gap-0 gap-6">
          <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0">
            <Image
              src="/icon-sunny.webp"
              alt="Weather Icon"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
              priority
            />
          </div>
          <p className="text-6xl lg:text-8xl italic font-semibold leading-none whitespace-nowrap">
            68 <span className="not-italic">°</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
