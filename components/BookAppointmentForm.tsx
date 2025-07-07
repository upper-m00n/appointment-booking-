import React, { useState } from "react";
import { ISlot } from "@/types/slot";

interface Props {
  slot: ISlot;
  onBook: (slot: ISlot, patient: { firstName: string; lastName: string; email: string }) => void;
  onCancel: () => void;
}

const BookAppointmentForm: React.FC<Props> = ({ slot, onBook, onCancel }) => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook(slot, form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-2 text-[#00796B]">
        Book Appointment
      </h2>
      <p className="text-sm text-gray-600 mb-3">
        Doctor: <strong>{slot.doctorName}</strong><br />
        Time: {slot.date} at {slot.time}
      </p>

      <div className="space-y-3">
        <input
          name="firstName"
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded"
          required
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded"
          required
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-[#00796B] text-white rounded">
          Book Appointment
        </button>
      </div>
    </form>
  );
};

export default BookAppointmentForm;
