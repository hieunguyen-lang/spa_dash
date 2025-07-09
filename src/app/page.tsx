import CardStats from "@/components/CardStats";
import RevenueChart from "@/components/RevenueChart";
import { FaUserFriends, FaDollarSign, FaCalendarAlt, FaUserTie } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">SPA Dashboard</h1>
      <p className="text-lg text-gray-700">
        Chào mừng bạn đến với hệ thống quản lý spa hiện đại! Hãy đăng nhập để bắt đầu quản lý khách hàng, doanh thu, lịch hẹn, nhân sự và báo cáo một cách trực quan, dễ sử dụng và tối ưu cho trải nghiệm người dùng.
      </p>
    </div>
  );
}
