'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';

const revenueByService = [
  { name: 'Trị nám', value: 32000 },
  { name: 'Chăm sóc da', value: 21000 },
  { name: 'Tắm trắng', value: 15000 },
  { name: 'Trị mụn', value: 12000 },
];
const COLORS = ['#f472b6', '#f9a8d4', '#fce7f3', '#fbb6ce'];

const revenueByMonth = [
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

const newCustomers = [
  { month: 'T1', value: 32 },
  { month: 'T2', value: 40 },
  { month: 'T3', value: 38 },
  { month: 'T4', value: 45 },
  { month: 'T5', value: 50 },
  { month: 'T6', value: 48 },
  { month: 'T7', value: 55 },
  { month: 'T8', value: 60 },
  { month: 'T9', value: 58 },
  { month: 'T10', value: 62 },
  { month: 'T11', value: 65 },
  { month: 'T12', value: 70 },
];

const repeatRate = [
  { name: 'Khách quay lại', value: 68 },
  { name: 'Khách mới', value: 32 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-pink-500 mb-2">Báo cáo & Phân tích kinh doanh</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie chart doanh thu theo dịch vụ */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6">
          <div className="font-semibold text-pink-500 mb-2">Doanh thu theo dịch vụ</div>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={revenueByService} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {revenueByService.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Doughnut chart tỷ lệ khách quay lại */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6">
          <div className="font-semibold text-pink-500 mb-2">Tỷ lệ khách quay lại</div>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={repeatRate} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} label>
                {repeatRate.map((entry, idx) => (
                  <Cell key={`cell-repeat-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Line chart doanh thu theo tháng */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6 col-span-1 md:col-span-2">
          <div className="font-semibold text-pink-500 mb-2">Doanh thu theo tháng</div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
              <XAxis dataKey="month" tick={{ fill: '#f472b6', fontWeight: 600 }} />
              <YAxis tick={{ fill: '#f472b6', fontWeight: 600 }} />
              <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#f9a8d4' }} />
              <Line type="monotone" dataKey="revenue" stroke="#f472b6" strokeWidth={3} dot={{ r: 5, fill: '#f9a8d4' }} activeDot={{ r: 7, fill: '#f472b6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Bar chart khách hàng mới */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6 col-span-1 md:col-span-2">
          <div className="font-semibold text-pink-500 mb-2">Số lượng khách hàng mới theo tháng</div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={newCustomers}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
              <XAxis dataKey="month" tick={{ fill: '#f472b6', fontWeight: 600 }} />
              <YAxis tick={{ fill: '#f472b6', fontWeight: 600 }} />
              <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#f9a8d4' }} />
              <Bar dataKey="value" fill="#f472b6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 