import React from "react";
import CalendarView from "@/components/CalendarView";

const BookPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4 text-[#00796B]">
        Book Appointment
      </h1>
      <CalendarView />
    </div>
  );
};

export default BookPage;
