"use client";
import { useState } from "react";

import Link from "next/link";
import DataJson from "@/utils/data.json";
import { useRouter } from 'next/navigation';

export default function UsersPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const filtered = DataJson.filter((user) => {
    const query = search.toLowerCase();
    return (
      user.first_name?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="p-3 md:p-6 bg-gray-100 min-h-screen text-black">
      <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-sm md:text-base">Go Back</button>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Users</h1>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-auto border border-black rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-4">
        {filtered.map((user) => (
          <div
            key={user.id}
            className="bg-white p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3 gap-2">
              <p className="font-semibold text-xs md:text-sm truncate">
                {user.first_name} {user.last_name?.charAt(0)}
              </p>
              <span className="hover:scale-110 inline-flex items-center text-center" style={{ backgroundColor: "#ADD8E6", color: "blue", padding: "2px 8px", borderRadius: "25px", fontSize: "8px" }}>
                {user.type}
              </span>
            </div>

            <img src={user.image} alt="profile" className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-full"/>

            <div className="text-xs space-y-0.5 text-gray-800 flex-1">
              <p><span className="font-semibold">Email</span>: <span className="text-xs truncate inline-block">{user.email}</span></p>
              <p><span className="font-semibold">Age</span>: {user.age}</p>
              <p><span className="font-semibold">Country</span>: {user.country}</p>
              <p><span className="font-semibold">Points</span>: {user.point ?? ""}</p>
              <p><span className="font-semibold">Created</span>: {user.created_at}</p>
            </div>

            <div className="flex gap-1 mt-2 text-xs flex-wrap">
              {user.item_1 && (
                <div className="bg-gray-100 px-2 py-1 rounded">{user.item_1}</div>
              )}
              {user.item_2 && (
                <div className="bg-gray-100 px-2 py-1 rounded">{user.item_2}</div>
              )}
            </div>

            <div className="mt-3">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs md:text-sm transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && search && (
        <div className="text-center text-gray-500 mt-6">
          Not found
        </div>
      )}
    </div>
  );
}