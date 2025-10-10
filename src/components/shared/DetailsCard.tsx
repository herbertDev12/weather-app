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
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="capitalize text-muted-foreground">{indicator}</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto">
        <CardDescription className="text-primary text-3xl">{value}</CardDescription>
      </CardContent>
    </Card>
  );
}
