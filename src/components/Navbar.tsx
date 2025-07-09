import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-pink-100 px-8 py-3 flex items-center gap-6 sticky top-0 z-30">
      <span className="text-pink-600 font-bold text-xl mr-8">SPA Dashboard</span>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-pink-500 hover:text-pink-700 font-semibold transition px-3 py-1 rounded-lg hover:bg-pink-50"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
} 