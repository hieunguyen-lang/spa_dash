import { FaUserFriends, FaUserMd, FaChartBar, FaCalendarAlt, FaCog, FaHome, FaChartPie } from "react-icons/fa";
import Link from "next/link";

const menu = [
  { href: "/", label: "Dashboard", icon: <FaHome /> },
  { href: "/customers", label: "Khách hàng", icon: <FaUserFriends /> },
  { href: "/hrm", label: "Nhân sự", icon: <FaUserMd /> }, // Đảm bảo route đúng là /hrm
  { href: "/reports", label: "Báo cáo", icon: <FaChartBar /> },
  { href: "/analytics", label: "Phân tích", icon: <FaChartPie /> },
  { href: "/calendar", label: "Lịch hẹn", icon: <FaCalendarAlt /> },
  { href: "/settings", label: "Cài đặt", icon: <FaCog /> },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-pink-100 shadow-xl flex flex-col z-30">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-pink-100">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-300 to-pink-500 flex items-center justify-center shadow-md">
          <span className="text-white text-2xl font-bold">SPA</span>
        </div>
        <span className="text-xl font-bold text-pink-500 tracking-wide">CRM</span>
      </div>
      <nav className="flex-1 py-6 px-2 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition group"
          >
            <span className="text-pink-400 text-lg group-hover:text-pink-500">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-pink-100 bg-pink-50 rounded-b-2xl mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center">
            <span className="text-pink-600 font-bold">A</span>
          </div>
          <div>
            <div className="font-semibold text-pink-700">Admin</div>
            <div className="text-xs text-pink-400">Quản trị viên</div>
          </div>
        </div>
      </div>
    </aside>
  );
} 