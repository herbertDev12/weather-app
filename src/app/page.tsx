import { CustomSelect } from "./components/shared/CustomSelect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white min-h-screen">
      <div className="relative min-h-screen">
        <div className="absolute top-0 left-0 m-4 ">
          <Image
            src="/logo.svg"
            width={180}
            height={500}
            alt="Logo image"
          />
        </div>
        <div className="absolute top-0 right-0 m-4">
          <CustomSelect />
        </div>

        <div className="py-28 text-center">
          <h1 className="text-6xl font-bold">How's the sky looking today?</h1>
        </div>

      </div>
    </div>
  );
}