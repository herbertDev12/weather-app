"use client";

import { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

/* --- Custom Component for reusable option --- */
function CustomSelectableItem({
  value,
  label,
  selectedValue,
  onSelect,
}: Readonly<{
  value: string;
  label: string;
  selectedValue: string;
  onSelect: (val: string) => void;
}>) {
  const isActive = value === selectedValue;

  return (
    <DropdownMenuItem
      onClick={() => onSelect(value)}
      className={cn(
        "flex justify-between items-center rounded-md px-2 py-1.5 cursor-pointer transition-colors select-none",
        isActive
          ? "bg-primary/10 text-primary"
          : "hover:bg-card-foreground/30 text-[var(--on-primary)]"
      )}
    >
      {label}
      {isActive && (
        <Image
          src="/icon-checkmark.svg"
          width={16}
          height={16}
          alt="Selected"
          className="opacity-90"
        />
      )}
    </DropdownMenuItem>
  );
}

/* --- Main Component --- */
export function UnitsDropdownMenu() {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="bg-card text-[var(--on-primary)] focus-visible:ring-offset-3 
        focus-visible:ring-3 focus-visible:ring-offset-background
        focus-visible:ring-primary hover:bg-card-foreground rounded-md 
        px-3 py-2 flex items-center gap-2 cursor-pointer"
      >
        <Image src="/icon-units.svg" width={18} height={18} alt="Units icon" />
        Units
        <Image
          src="/icon-dropdown.svg"
          width={15}
          height={15}
          alt="Dropdown icon"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52 p-2 mt-2 bg-card rounded-lg shadow-md"
      >
        <DropdownMenuItem className="text-1xl">
          Switch to Imperial
        </DropdownMenuItem>

        {/* TEMPERATURE */}
        <DropdownMenuLabel>Temperature</DropdownMenuLabel>
        <CustomSelectableItem
          value="celsius"
          label="Celsius (°C)"
          selectedValue={temperatureUnit}
          onSelect={setTemperatureUnit}
        />
        <CustomSelectableItem
          value="fahrenheit"
          label="Fahrenheit (°F)"
          selectedValue={temperatureUnit}
          onSelect={setTemperatureUnit}
        />

        <DropdownMenuSeparator />

        {/* WIND SPEED */}
        <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>
        <CustomSelectableItem
          value="kmh"
          label="km/h"
          selectedValue={windSpeedUnit}
          onSelect={setWindSpeedUnit}
        />
        <CustomSelectableItem
          value="mph"
          label="mph"
          selectedValue={windSpeedUnit}
          onSelect={setWindSpeedUnit}
        />

        <DropdownMenuSeparator />

        {/* PRECIPITATION */}
        <DropdownMenuLabel>Precipitation</DropdownMenuLabel>
        <CustomSelectableItem
          value="mm"
          label="Millimeters (mm)"
          selectedValue={precipitationUnit}
          onSelect={setPrecipitationUnit}
        />
        <CustomSelectableItem
          value="in"
          label="Inches (in)"
          selectedValue={precipitationUnit}
          onSelect={setPrecipitationUnit}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
