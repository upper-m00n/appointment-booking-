import "./globals.css";
import Sidebar from "@/components/Sidebar";
import {Open_Sans} from 'next/font/google'


const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

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
    <html lang="en" className={openSans.variable}>
      <body className="flex font-sans bg-gray-50">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen p-6">{children}</main>
      </body>
    </html>
  );
}
