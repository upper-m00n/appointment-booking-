export interface ISlot {
  id: string;
  doctorId: string;
  doctorName: string;
  date: string; // e.g. "2025-07-07"
  time: string; // e.g. "09:00 AM"
  booked: boolean;
  patientName?: string;
}


export interface IDoctor {
  id: string;
  name: string;
  department: string;
  slots: {
    [day: string]: ISlot[]; 
  };
}
