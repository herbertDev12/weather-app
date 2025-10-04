import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export function CustomSelect({  }) {
  return (
    <Select>
        <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Units" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Celcius(C)</SelectItem>
            <SelectItem value="dark">Fahrenheit(F)</SelectItem>
            <SelectItem value="system">Wind Speed (km/h)</SelectItem>
        </SelectContent>
    </Select>
  )
}