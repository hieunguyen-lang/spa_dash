import { FaUserFriends, FaDollarSign, FaCalendarAlt, FaUserTie } from "react-icons/fa";

interface CardStatsProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: string;
  subtext?: string;
}

export default function CardStats({ title, value, icon, accent = "bg-pink-100 text-pink-500", subtext }: CardStatsProps) {
  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md border border-pink-50 min-w-[220px]">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl font-bold ${accent}`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <div className="text-sm text-pink-500 font-semibold">{title}</div>
        {subtext && <div className="text-xs text-gray-400 mt-1">{subtext}</div>}
      </div>
    </div>
  );
} 