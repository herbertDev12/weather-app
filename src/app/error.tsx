"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UnitsDropdownMenu } from "../components/shared/UnitsDropdownMenu";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-primary px-2 sm:px-6 lg:px-10 xl:px-20 pt-8 md:pt-10 pb-16 md:pb-20">
      <header className="relative flex justify-between items-center mb-8 px-2">
        <Image
          src="/logo.svg"
          width={180}
          height={500}
          alt="Logo image"
          className="w-28 sm:w-36 lg:w-48 h-auto"
        />
        <UnitsDropdownMenu />
      </header>

      <main className="items-center text-center flex flex-col px-2 mt-10">
        <Image
          src="/icon-error.svg"
          width={150}
          height={150}
          alt="Error icon"
          className="w-8 h-auto my-4"
        />

        <h1 className="text-3xl md:text-5xl font-mono font-bold text-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          {"We couldn’t connect to the server (API error). Please try again in a few moments."}
        </p>

        <Button
          variant="outline"
          onClick={() => reset()}
          className="text-md px-3 py-3"
        >
          <Image
            src="/icon-retry.svg"
            width={18}
            height={18}
            alt="Retry icon"
            className="h-auto"
          />
          Retry
        </Button>
      </main>
    </div>
  );
}
