"use client";

import React from "react";
import AllAppointmentsTable from "@/components/AllAppointmentsTable";
import { mockAppointments } from "@/data/mockAppointments";

export default function AppointmentsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-[#00796B]">
        All Appointments
      </h1>

      {/* The full filter bar and "New Appointment" button are handled inside AllAppointmentsTable */}
      <AllAppointmentsTable data={mockAppointments} />
    </div>
  );
}
