'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';

const routes = [
  { ner: "Contact", link: "/contact" },
  { ner: "Content", link: "/content" },
  { ner: "Weather", link: "/weather" },
  { ner: "Users", link: "/users" },
  { ner: "Aimag", link: "/aimag" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <header className="w-full h-16 bg-purple-700 text-white flex items-center justify-between px-6 shadow-lg border-b-2 border-purple-900">
        
        <div className="font-bold text-lg">
          Telmuun • 11A
        </div>

        <div className="text-sm opacity-90">
          Student Dashboard
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <button onClick={() => router.push("/")} className="hover:text-purple-200 transition-colors">
            Home
          </button>
          <button onClick={() => router.push("/content")} className="hover:text-purple-200 transition-colors">
            Content
          </button>
          <button onClick={() => router.push("/contact")} className="hover:text-purple-200 transition-colors">
            Contact
          </button>
        </div>
      </header>

      {/* MAIN */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 pt-20">

        <img
          src="https://nhs.edu.mn/favicon.ico"
          className="h-28 w-auto"
          alt="logo"
        />

        <div className="flex justify-center gap-4">
          {routes.map((route) => (
            <Link
              key={route.link}
              href={route.link}
              className="rounded-2xl border border-black px-4 py-4 font-semibold hover:bg-purple-100"
            >
              {route.ner}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}