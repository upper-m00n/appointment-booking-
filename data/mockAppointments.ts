import { IAppointment } from "@/types/appointment";

export const mockAppointments: IAppointment[] = [
  {
    id: "1",
    service: "General Consultation",
    date: "2025-07-08",
    department: "General Medicine",
    agent: "Anjali",
    patientName: "John Doe",
    status: "Approved",
    createdOn: "2025-07-05",
  },
  {
    id: "2",
    service: "Skin Checkup",
    date: "2025-07-09",
    department: "Dermatology",
    agent: "Ravi",
    status: "Pending",
    createdOn: "2025-07-06",
  },
  
];
