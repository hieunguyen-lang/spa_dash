'use client';
import { useState } from 'react';
import { FaFileExport, FaMoneyBill, FaChartLine, FaUserTie, FaFileInvoiceDollar } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { title: 'Doanh thu', value: '$85,200', icon: <FaMoneyBill />, accent: 'bg-pink-100 text-pink-500' },
  { title: 'Chi phí', value: '$32,500', icon: <FaFileInvoiceDollar />, accent: 'bg-yellow-100 text-yellow-600' },
  { title: 'KPI nhân viên', value: '92%', icon: <FaUserTie />, accent: 'bg-green-100 text-green-600' },
  { title: 'Công nợ', value: '$8,200', icon: <FaChartLine />, accent: 'bg-blue-100 text-blue-600' },
];

const revenueData = [
  { month: 'T1', revenue: 12000 },
  { month: 'T2', revenue: 14500 },
  { month: 'T3', revenue: 13200 },
  { month: 'T4', revenue: 15800 },
  { month: 'T5', revenue: 17200 },
  { month: 'T6', revenue: 16800 },
  { month: 'T7', revenue: 19000 },
  { month: 'T8', revenue: 21000 },
  { month: 'T9', revenue: 20500 },
  { month: 'T10', revenue: 23000 },
  { month: 'T11', revenue: 22500 },
  { month: 'T12', revenue: 25000 },
];

type StatusType = 'Đã thanh toán' | 'Chưa thanh toán' | 'Còn nợ';

const invoices: Array<{
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: StatusType;
}> = [
  { id: 'HD001', customer: 'Lê Thị Hoa', date: '2024-05-01', amount: '$1,200', status: 'Đã thanh toán' },
  { id: 'HD002', customer: 'Nguyễn Văn An', date: '2024-05-02', amount: '$800', status: 'Chưa thanh toán' },
  { id: 'HD003', customer: 'Phạm Thị Mai', date: '2024-05-03', amount: '$1,500', status: 'Đã thanh toán' },
  { id: 'HD004', customer: 'Trần Văn Bình', date: '2024-05-04', amount: '$950', status: 'Còn nợ' },
];
const statusColor: Record<StatusType, string> = {
  'Đã thanh toán': 'bg-green-100 text-green-600',
  'Chưa thanh toán': 'bg-yellow-100 text-yellow-600',
  'Còn nợ': 'bg-red-100 text-red-600',
};

export default function ReportsPage() {
  const [filter, setFilter] = useState('Tháng này');
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-pink-500">Báo cáo tổng hợp</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-xl font-semibold shadow transition">
          <FaFileExport />
          <span>Xuất file</span>
        </button>
      </div>
      {/* Filter thời gian */}
      <div className="flex gap-3 mb-2">
        {['Hôm nay', 'Tuần này', 'Tháng này', 'Năm nay'].map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-lg font-semibold border transition ${filter === f ? 'bg-pink-100 text-pink-600 border-pink-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-pink-50'}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      {/* Card chỉ số chính */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.title} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md border border-pink-50 min-w-[220px]">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl font-bold ${s.accent}`}>{s.icon}</div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{s.value}</div>
              <div className="text-sm text-pink-500 font-semibold">{s.title}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Mini chart doanh thu */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6">
        <div className="font-semibold text-pink-500 mb-2">Biểu đồ doanh thu</div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
            <XAxis dataKey="month" tick={{ fill: '#f472b6', fontWeight: 600 }} />
            <YAxis tick={{ fill: '#f472b6', fontWeight: 600 }} />
            <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#f9a8d4' }} />
            <Line type="monotone" dataKey="revenue" stroke="#f472b6" strokeWidth={3} dot={{ r: 5, fill: '#f9a8d4' }} activeDot={{ r: 7, fill: '#f472b6' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Bảng hóa đơn gần đây */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6">
        <div className="font-semibold text-pink-500 mb-2">Hóa đơn gần đây</div>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-pink-500 text-left">
              <th className="py-2 px-3 font-semibold">Mã HĐ</th>
              <th className="py-2 px-3 font-semibold">Khách hàng</th>
              <th className="py-2 px-3 font-semibold">Ngày</th>
              <th className="py-2 px-3 font-semibold">Số tiền</th>
              <th className="py-2 px-3 font-semibold">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b last:border-b-0 border-pink-50 hover:bg-pink-50 transition">
                <td className="py-2 px-3 font-mono">{inv.id}</td>
                <td className="py-2 px-3 font-semibold">{inv.customer}</td>
                <td className="py-2 px-3">{inv.date}</td>
                <td className="py-2 px-3">{inv.amount}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[inv.status]}`}>{inv.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 