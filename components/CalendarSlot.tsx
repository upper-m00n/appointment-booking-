import React from "react";
import { ISlot } from "@/types/slot";

interface Props {
  slot: ISlot;
  onClick: (slot: ISlot) => void;
}

const CalendarSlot: React.FC<Props> = ({ slot, onClick }) => {
  return (
    <div
      onClick={() => !slot.booked && onClick(slot)}
      className={`rounded p-2 text-xs cursor-pointer text-center border ${
        slot.booked
          ? "bg-gray-200 text-gray-500"
          : "bg-[#E0F2F1] hover:bg-[#B2DFDB]"
      }`}
    >
      {slot.booked ? slot.patientName : slot.time}
    </div>
  );
};

export default React.memo(CalendarSlot);
