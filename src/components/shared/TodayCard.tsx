import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TodayCard() {
  return (
    <Card className="bg-[url('/bg-today-small.svg')] md:bg-[url('/bg-today-large.svg')] bg-cover bg-center text-white h-48 md:h-64 lg:h-96">
      <CardContent className="flex justify-between items-center h-full">
        {/* Left side */}
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">Berlin, Germany</h2>
          <p className="text-lg  text-gray-300">Tuesday, Aug 5, 2025</p>
        </div>

        {/* Right side (icon + temp) */}
        <div className="flex items-center gap-4">
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
          <p className="text-[clamp(2rem,8vw,8rem)] italic font-semibold leading-none">
            68°
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
