import React from "react";
import { IDoctor } from "@/types/doctor";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

interface Props {
  doctor: IDoctor;
}

const DoctorCard: React.FC<Props> = ({ doctor }) => {
  if (!doctor) {
    return <div className="text-red-500">No doctor data provided</div>;
  }

  return (
    <div className="relative border rounded-lg shadow-sm p-4 bg-white flex flex-col items-center text-center space-y-2">
      <img
        src={doctor.profileImage || "/images/default.png"}
        alt={doctor.name}
        className="w-20 h-20 rounded-full object-cover border"
      />

      <div className="font-semibold text-gray-800">{doctor.name}</div>
      <div className="text-sm text-gray-500">{doctor.department}</div>
      <div className="text-sm font-medium text-gray-700">{doctor.dutyTime}</div>

      {doctor.onDuty && (
        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
          Today On Duty
        </span>
      )}

      {doctor.hasMultipleDuties && (
        <ExclamationTriangleIcon
          className="absolute top-2 right-2 text-red-500 w-5 h-5"
          title="Has multiple/off duties"
        />
      )}
    </div>
  );
};

export default DoctorCard;
