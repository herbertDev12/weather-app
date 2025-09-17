import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export default function HourlyForecastCard(){
    return (
        <Card className="bg-gray-600 bg-cover bg-center text-white">
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    <div className="text-lg font-medium">Hourly forecast</div>
                    <div className="ml-auto">
                        <Select>
                            <SelectTrigger className="w-[100px] bg-gray-500">
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
            <CardContent className="grid gap-4">
                    
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className=" bg-gray-500">
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
            </CardContent>
            
        </Card>
    )
}