"use client";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/about") {
    return <>{children}</>;
  }
  return <DashboardLayout>{children}</DashboardLayout>;
} 