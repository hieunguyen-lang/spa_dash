import CardStats from "@/components/CardStats";
import RevenueChart from "@/components/RevenueChart";
import { FaUserFriends, FaDollarSign, FaCalendarAlt, FaUserTie } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Card thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardStats title="Tổng số khách" value={1240} icon={<FaUserFriends />} />
        <CardStats title="Tổng doanh thu" value="$85,200" icon={<FaDollarSign />} accent="bg-pink-200 text-pink-700" />
        <CardStats title="Lịch hẹn hôm nay" value={18} icon={<FaCalendarAlt />} accent="bg-pink-100 text-pink-500" />
        <CardStats title="Nhân viên xuất sắc" value="Nguyễn Thị A" icon={<FaUserTie />} accent="bg-pink-50 text-pink-600" subtext="Doanh thu: $12,500" />
      </div>
      {/* Biểu đồ doanh thu */}
      <div className="mt-2">
        <RevenueChart />
      </div>
    </div>
  );
}
