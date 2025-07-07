import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Appointment Booking",
  description: "Healthcare App with Booking Flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen p-6">{children}</main>
      </body>
    </html>
  );
}
