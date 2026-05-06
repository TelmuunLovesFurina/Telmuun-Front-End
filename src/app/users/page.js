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
    <div className="p-6 bg-gray-100 min-h-screen text-black">
      <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-gray-200 rounded">Go Back</button>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-black rounded-lg px-4 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-6 gap-4">
        {filtered.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-sm">
                {user.first_name} {user.last_name?.charAt(0)}
              </p>
              <span className="hover:scale-110 inline-flex items-center" style={{ backgroundColor: "#ADD8E6", color: "blue", padding: "4px 10px", borderRadius: "25px", fontSize: "10px" }}>
                {user.type}
              </span>
            </div>

            <img src = {user.image} alt="profile" className="w-12 h-12 mx-auto mb-2"/>

            <div className="text-xs space-y-1 text-gray-800 flex-1">
              <p><span className="font-semibold">Email</span>: {user.email}</p>
              <p><span className="font-semibold">Age</span>: {user.age}</p>
              <p><span className="font-semibold">Country</span>: {user.country}</p>
              <p><span className="font-semibold">Points</span>: {user.point ?? ""}</p>
              <p><span className="font-semibold">Created</span>: {user.created_at}</p>
            </div>

            <div className="flex gap-2 mt-2 text-xs">
              {user.item_1 && (
                <div>{user.item_1}</div>
              )}
              {user.item_2 && (
                <div>{user.item_2}</div>
              )}
            </div>

            <div className="mt-2">
              <button style={{ backgroundColor: "red", color: "white", padding: "4px 10px", borderRadius: "6px", fontSize: "15px" }}>Delete</button>
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