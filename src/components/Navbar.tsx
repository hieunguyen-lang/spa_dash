'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow-sm border-b border-[#F8D6D6] px-8 py-3 flex items-center gap-6 sticky top-0 z-30">
      <span className="text-[#E7A6A6] font-bold text-xl mr-8">SPA THERAPY</span>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`font-semibold transition px-3 py-1 rounded-lg hover:bg-[#F8D6D6] hover:text-[#E7A6A6] ${pathname === item.href ? 'bg-[#F8D6D6] text-[#E7A6A6]' : 'text-gray-500'}`}
        >
          {item.label}
        </Link>
      ))}
      <div className="flex-1" />
      <input type="text" placeholder="" className="rounded-full border border-[#F8D6D6] px-4 py-1 ml-4 focus:outline-none focus:ring-2 focus:ring-[#F8D6D6] bg-[#FFF6F6] w-48" />
    </nav>
  );
} 