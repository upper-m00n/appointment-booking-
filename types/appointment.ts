export interface IAppointment {
    id: string;
    service: string;
    date: string;
    department: string;
    agent: string;
    patientName?: string; 
    status: "Approved" | "Pending";
    createdOn: string;
}