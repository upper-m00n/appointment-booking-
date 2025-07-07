"use client";

import React, { useState, useMemo } from "react";
import { ISlot } from "@/types/slot";
import CalendarSlot from "./CalendarSlot";
import PopupModal from "./PopupModal";
import BookAppointmentForm from "./BookAppointmentForm";

const mockSlots: ISlot[] = [
  {
    id: "1",
    doctorId: "d1",
    doctorName: "Dr. A. Sharma",
    date: "2025-07-07",
    time: "09:00 AM",
    booked: false,
  },
  {
    id: "2",
    doctorId: "d1",
    doctorName: "Dr. A. Sharma",
    date: "2025-07-07",
    time: "10:00 AM",
    booked: true,
    patientName: "Ankit S.",
  },
  {
    id: "3",
    doctorId: "d2",
    doctorName: "Dr. B. Mehta",
    date: "2025-07-08",
    time: "09:00 AM",
    booked: false,
  },
  
];

const CalendarView: React.FC = () => {
  const [slots, setSlots] = useState<ISlot[]>(mockSlots);
  const [selectedSlot, setSelectedSlot] = useState<ISlot | null>(null);

  const handleBook = (
    slot: ISlot,
    patient: { firstName: string; lastName: string; email: string }
  ) => {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === slot.id
          ? {
              ...s,
              booked: true,
              patientName: `${patient.firstName} ${patient.lastName}`,
            }
          : s
      )
    );
    setSelectedSlot(null);
  };

  const doctorNames = useMemo(
    () => Array.from(new Set(slots.map((s) => s.doctorName))),
    [slots]
  );

  return (
    <div className="space-y-6">
      {doctorNames.map((doctor) => {
        const doctorSlots = slots.filter((s) => s.doctorName === doctor);
        return (
          <div key={doctor}>
            <h3 className="font-semibold mb-2">{doctor}</h3>
            <div className="grid grid-cols-4 gap-2">
              {doctorSlots.map((slot) => (
                <CalendarSlot key={slot.id} slot={slot} onClick={setSelectedSlot} />
              ))}
            </div>
          </div>
        );
      })}

      <PopupModal isOpen={!!selectedSlot} onClose={() => setSelectedSlot(null)}>
        {selectedSlot && (
          <BookAppointmentForm
            slot={selectedSlot}
            onBook={handleBook}
            onCancel={() => setSelectedSlot(null)}
          />
        )}
      </PopupModal>
    </div>
  );
};

export default CalendarView;
