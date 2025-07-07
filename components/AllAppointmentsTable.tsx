"use client";

import React, { useState } from "react";
import { IAppointment } from "@/types/appointment";
import { useRouter } from "next/navigation";

interface Props {
  data: IAppointment[];
}

const AllAppointmentsTable: React.FC<Props> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const router = useRouter();

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="space-y-4">
      {/* Top Filter Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <input
            type="date"
            className="border px-3 py-1.5 rounded text-sm text-gray-700"
          />
          <select className="border px-3 py-1.5 rounded text-sm text-gray-700">
            <option value="">Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
          <input
            type="text"
            placeholder="Agent"
            className="border px-3 py-1.5 rounded text-sm text-gray-700"
          />
          <input
            type="text"
            placeholder="Patient Name"
            className="border px-3 py-1.5 rounded text-sm text-gray-700"
          />
          <select className="border px-3 py-1.5 rounded text-sm text-gray-700">
            <option value="">Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <button
          onClick={() => router.push("/book")}
          className="bg-[#00796B] text-white text-sm px-4 py-2 rounded hover:bg-[#00695c]"
        >
          + New Appointment
        </button>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-xl border bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                "ID",
                "Service",
                "Date",
                "Department",
                "Agent",
                "Patient Name",
                "Status",
                "Created On",
                "Actions",
              ].map((col) => (
                <th key={col} className="px-4 py-3 text-left font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((apt) => (
              <tr key={apt.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{apt.id}</td>
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                  {apt.service}
                </td>
                <td className="px-4 py-2">{apt.date}</td>
                <td className="px-4 py-2">{apt.department}</td>
                <td className="px-4 py-2 text-blue-600">{apt.agent}</td>
                <td className="px-4 py-2">{apt.patientName}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      apt.status === "Approved"
                        ? "bg-green-500"
                        : "bg-yellow-400"
                    }`}
                  >
                    {apt.status}
                  </span>
                </td>
                <td className="px-4 py-2">{apt.createdOn}</td>
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-between text-sm px-1">
        <p className="text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1}–
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}{" "}
          bookings
        </p>

        <div className="flex gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#00796B] text-white"
                  : "border bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllAppointmentsTable;
