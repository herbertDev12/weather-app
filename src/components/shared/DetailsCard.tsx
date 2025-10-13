import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeatherDetailsProps } from "@/lib/weather";

export default function DetailsCard({
  indicator,
  value,
}: Readonly<WeatherDetailsProps>) {

  return (
    <Card className="max-w-sm py-4 md:py-6">
      <CardHeader className="px-4 md:px-3 xl:px-6">
        <CardTitle className="text-md capitalize text-muted-foreground">{indicator}</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto px-4 md:px-3 xl:px-6">
        <CardDescription className="text-primary text-2xl md:text-1xl lg:text-3xl">{value}</CardDescription>
      </CardContent>
    </Card>
  );
}
