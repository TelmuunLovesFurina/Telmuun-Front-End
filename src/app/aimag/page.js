'use client';
import DataJson from "@/utils/aimag.json";
import { useRouter } from 'next/navigation';

export default function CountrysidePage() {
  const router = useRouter();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-black rounded">Go Back</button>
      <div className="grid grid-cols-6 gap-4">
        {DataJson.map((place) => (
          <div
            key={place.id}
            className="bg-black p-4 rounded-xl flex items-center justify-center cursor-pointer group"
          >
            <p
              className="hover:scale-110 inline-flex items-center"
              style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}
            >
              {place.name ?? "Aimag"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}