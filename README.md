#  Healthcare Appointment Booking App

A responsive healthcare appointment booking system built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This app allows patients to view doctor schedules, browse and book appointment slots, and manage bookings with filters and a clean UI.

##  Features

-  Doctor Schedule with search
-  All Appointments Table with filters & pagination
-  Weekly Slot Calendar with patient names on booked slots
-  Book Appointment Popup with form & calendar
-  Reusable components using TypeScript interfaces
-  Fully responsive UI (mobile → desktop)

##  Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Heroicons**
- Mock Data (in `/data`) used for demo purposes

---

##  Project Structure

appointment-booking/
│
├── app/ # App router pages (e.g., /appointments, /schedule)
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ └── appointments/ # Appointments screen
│
├── components/ # Reusable UI components
│ ├── DoctorCard.tsx
│ ├── Sidebar.tsx
│ ├── CalendarSlot.tsx
│ ├── PopupModal.tsx
│ ├── AllAppointmentsTable.tsx
│
├── data/ # Mock data (doctors, appointments)
│ ├── mockDoctors.ts
│ └── mockAppointments.ts
│
├── public/images/ # Static doctor images
│ ├── doctor1.png
│ └── doctor2.png
│
├── styles/ # Global CSS (optional)
│
├── types/ # TypeScript interfaces
│ ├── appointment.ts
│ └── doctor.ts
│
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── package.json


---

##  Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/appointment-booking.git
cd appointment-booking
```

### 2. **Install Dependencies**

npm install

### 3. **Run the Development Server**

npm run dev
Visit: http://localhost:3000


## Auhtor

Ashutosh Sharma
github- ```https://github.com/upper-m00n```
