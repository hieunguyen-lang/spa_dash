'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
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

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-50 w-full h-[340px]">
      <div className="font-bold text-lg text-pink-500 mb-4">Biểu đồ tăng trưởng doanh thu</div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
          <XAxis dataKey="month" tick={{ fill: '#f472b6', fontWeight: 600 }} />
          <YAxis tick={{ fill: '#f472b6', fontWeight: 600 }} />
          <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#f9a8d4' }} />
          <Line type="monotone" dataKey="revenue" stroke="#f472b6" strokeWidth={3} dot={{ r: 5, fill: '#f9a8d4' }} activeDot={{ r: 7, fill: '#f472b6' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 