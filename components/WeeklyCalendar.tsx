import React from "react";

interface Slot {
  time: string;
  bookedBy?: string;
}

interface DoctorSlotProps {
  doctorName: string;
  slots: Slot[];
  onSlotClick: (doctor: string, time: string) => void;
}

const DoctorColumn: React.FC<DoctorSlotProps> = ({ doctorName, slots, onSlotClick }) => (
  <div className="flex flex-col border w-48">
    <div className="bg-gray-100 text-center font-semibold py-2">{doctorName}</div>
    {slots.map((slot, i) => (
      <div
        key={i}
        onClick={() => onSlotClick(doctorName, slot.time)}
        className={`h-14 border-t px-2 py-1 text-sm cursor-pointer ${
          slot.bookedBy ? "bg-purple-100 text-purple-800" : "hover:bg-gray-50"
        }`}
      >
        {slot.bookedBy ? `${slot.time} - ${slot.bookedBy}` : `${slot.time}`}
      </div>
    ))}
  </div>
);

const WeeklyCalendar = ({ onSlotClick }: { onSlotClick: (doctor: string, time: string) => void }) => {
  const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const doctors = ["Nick Knight", "Jane Howard", "Emily Taylor"];

  const slotsPerDoctor: Slot[] = timeSlots.map((t, idx) => ({
    time: t,
    bookedBy: idx === 1 ? "Peter White" : undefined,
  }));

  return (
    <div className="flex overflow-x-auto border rounded-xl">
      {doctors.map((doc) => (
        <DoctorColumn
          key={doc}
          doctorName={doc}
          slots={slotsPerDoctor}
          onSlotClick={onSlotClick}
        />
      ))}
    </div>
  );
};

export default WeeklyCalendar;
