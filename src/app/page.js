import Link from "next/link";

const routes = [
  { ner: "Contact", 
    link: "/contact" },
  { ner: "Content", 
    link: "/content" },
  { ner: "Weather", 
    link: "/weather" },
  { ner: "Users", 
    link: "/users" },
  { ner: "Aimag", 
    link: "/aimag" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center gap-8">
      <img src="https://nhs.edu.mn/favicon.ico" className="h-28 w-auto"/>

      <div className="flex justify-center gap-4">
        {routes.map((route) => (
          <Link
            key={route.link} href={route.link}
            className="rounded-2xl border border-black px-4 py-4 font-semibold">
            {route.ner}
          </Link>
        ))}
      </div>
    </div>
  );
}