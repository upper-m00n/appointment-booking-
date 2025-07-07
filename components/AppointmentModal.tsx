import React, { useState } from "react";

interface Props {
  doctor: string;
  time: string;
  date: string;
  onClose: () => void;
  onBook: (data: any) => void;
}

const AppointmentModal: React.FC<Props> = ({ doctor, time, date, onClose, onBook }) => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onBook({ ...form, doctor, time, date });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-[#00796B]">Book Appointment</h2>
        <p className="text-sm mb-2 hover:shadow">Doctor: <strong>{doctor}</strong></p>
        <p className="text-sm mb-4">Time: <strong>{time}</strong> | Date: <strong>{date}</strong></p>

        <input name="firstName" onChange={handleChange} placeholder="First Name" className="input mb-2 w-full border p-2 rounded" />
        <input name="lastName" onChange={handleChange} placeholder="Last Name" className="input mb-2 w-full border p-2 rounded" />
        <input name="email" onChange={handleChange} placeholder="Email" className="input mb-4 w-full border p-2 rounded" />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded border text-gray-600">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
