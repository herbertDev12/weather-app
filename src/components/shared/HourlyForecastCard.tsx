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
                <div className="flex justify-between items-center">
                    <div>
                        Hourly forecast
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[100px] bg-gray-500 border-gray-500">
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
            <CardContent>
                    
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                </Card>
            </CardContent>
            
        </Card>
    )
}