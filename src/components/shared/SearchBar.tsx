"use client";

import { useForm } from 'react-hook-form'
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { DevTool } from '@hookform/devtools'
import { Button } from '../ui/button';

type FormValues = {
  searchBar: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const form = useForm<FormValues>();
  const {register, control, handleSubmit} = form;

  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const defaultSuggestions = [
    "Havana",
    "Santiago de Cuba",
    "Matanzas",
    "Camagüey",
    "Holguín",
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  // Filtra sugerencias dinámicamente
  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions(defaultSuggestions);
    } else {
      const filtered = defaultSuggestions.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.length > 0 ? filtered : ["No results found"]);
    }
    setHighlightedIndex(-1); // reinicia la selección cuando se escribe
  }, [query]);

  const handleSelect = (city: string) => {
    if (city === "No results found") return;
    setQuery(city);
    setOpen(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  // ✅ Cierra el popover al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !inputRef.current?.contains(e.target as Node) &&
        !popoverRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Control del teclado (flechas y enter)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        handleSelect(suggestions[highlightedIndex]);
      }
    }
  };

  return (
    <div className="relative w-full h-12 md:w-md bg-card hover:bg-card-foreground rounded-md">
      <Popover open={open}>
        <PopoverTrigger asChild>
          <div className="relative w-full h-full md:w-md">
            <Image
              src="/icon-search.svg"
              width={18}
              height={18}
              alt="Search icon"
              className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <Input
                  {...register("searchBar")}
                  type="text"
                  placeholder="Search for a place..."
                  onKeyDown={handleKeyDown}
                  className="
                    pl-12
                    w-full
                    h-12
                    border border-transparent
                    font-medium
                    text-md md:text-lg
                    focus-visible:border-transparent
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-background
                  "
                />
              </div>
              <div > 
                <Button
                  variant="default"
                  size="lg"
                  className="w-full md:w-auto cursor-pointer focus-visible:ring-offset-2 
                  focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-button text-md md:text-lg"
                >
                  Search
                </Button>
              </div>
            </form>
            <DevTool control={control}/>
          </div>
        </PopoverTrigger>

        {open && (
          <PopoverContent
            ref={popoverRef}
            align="start"
            sideOffset={4}
            style={{
              width: inputRef.current?.offsetWidth
                ? `${inputRef.current.offsetWidth}px`
                : "100%",
            }}
            className="p-2 mt-2 bg-card border border-transparent rounded-lg shadow-md"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (inputRef.current?.contains(e.target as Node)) {
                e.preventDefault();
              }
            }}
          >
            <ul className="flex flex-col">
              {suggestions.map((city, index) => (
                <li
                  key={city}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(city)}
                  className={`px-3 py-2 text-md font-medium rounded-md cursor-pointer ${
                    index === highlightedIndex
                      ? "bg-popover-hover text-accent-foreground"
                      : "hover:bg-popover-hover hover:text-accent-foreground"
                  }`}
                >
                  {city}
                </li>
              ))}
            </ul>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
