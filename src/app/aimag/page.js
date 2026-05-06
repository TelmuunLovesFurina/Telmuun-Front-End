'use client';
import DataJson from "@/utils/aimag.json";
import { useRouter } from 'next/navigation';

export default function CountrysidePage() {
  const router = useRouter();

  return (
    <div className="p-3 md:p-6 bg-gray-100 min-h-screen">
      <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors text-sm md:text-base">Go Back</button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
        {DataJson.map((place) => (
          <div
            key={place.id}
            className="bg-black p-3 md:p-4 rounded-xl flex items-center justify-center cursor-pointer group hover:bg-gray-800 transition-colors"
          >
            <p
              className="hover:scale-110 inline-flex items-center text-white text-xs md:text-sm lg:text-base font-bold text-center transition-transform"
            >
              {place.name ?? "Aimag"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}