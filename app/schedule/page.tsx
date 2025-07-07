"use client";

import React, { useState } from "react";
import { mockDoctors } from "@/data/mockDoctors";
import DoctorCard from "@/components/DoctorCard";

export default function DoctorSchedulePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = mockDoctors.filter((doc) =>
    `${doc.name} ${doc.department}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-[#00796B] mb-4">
        Doctor Schedule
      </h1>

      <input
        type="text"
        placeholder="Search by doctor name or department"
        className="mb-6 w-full md:w-1/2 border rounded px-4 py-2 text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
