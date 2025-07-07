"use client";

import React, { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import { mockDoctors } from "@/data/mockDoctors";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = mockDoctors.filter((doc) =>
    `${doc.name} ${doc.department}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-[#00796B] mb-4">Doctor Schedule</h1>

      <input
        type="text"
        placeholder="Search by name or department..."
        className="w-full mb-6 p-3 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
