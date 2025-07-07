"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Doctor Schedule",
    href: "/schedule",
    icon: UserGroupIcon,
  },
  {
    name: "Appointments",
    href: "/appointments",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Book Appointment",
    href: "/book",
    icon: CalendarDaysIcon,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
      <div className="px-6 py-4 font-bold text-xl text-[#00796B] border-b rounded">
        HealthCare App
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded text-sm font-medium transition ${
                isActive
                  ? "bg-[#E0F2F1] text-[#00796B]"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
