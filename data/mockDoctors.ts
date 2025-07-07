import { IDoctor } from "@/types/doctor";
export const mockDoctors: IDoctor[] = [
  {
    id: "d1",
    name: "Dr. Aarti Sharma",
    department: "Cardiology",
    dutyTime: "08:00 am – 05:00 pm",
    profileImage: "/images/doctor1.png",
    onDuty: true,
    hasMultipleDuties: false,
  },
  {
    id: "d2",
    name: "Dr. Rahul Mehta",
    department: "Orthopedics",
    dutyTime: "10:00 am – 07:00 pm",
    profileImage: "/images/doctor2.png",
    onDuty: false,
    hasMultipleDuties: true,
  },
 
];
