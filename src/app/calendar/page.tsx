'use client';
import { useState } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); // 0-indexed
const daysInMonth = new Date(year, month + 1, 0).getDate();
const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0: Sunday

// Dữ liệu lịch hẹn mẫu cho từng ngày
const appointmentsByDay = Array.from({ length: daysInMonth }, (_, i) => {
  const day = i + 1;
  // Giả lập số khách và danh sách khách mỗi ngày
  const count = Math.floor(Math.random() * 6);
  const list = Array.from({ length: count }, (_, idx) => ({
    id: `${day}-${idx}`,
    name: `Khách ${day}-${idx + 1}`,
    phone: `090${day}${idx}1234`,
    service: ['Trị nám', 'Chăm sóc da', 'Tắm trắng', 'Trị mụn'][Math.floor(Math.random() * 4)],
    time: `${8 + idx}:00`,
  }));
  return { day, count, list };
});

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const selectedList = appointmentsByDay[selectedDay - 1]?.list || [];

  // Tạo mảng 35 ô (5 hàng x 7 cột), điền ngày/tháng hiện tại đúng vị trí
  const calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(null); // Ô trống đầu tháng
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(appointmentsByDay[d - 1]);
  }
  while (calendarCells.length < 35) calendarCells.push(null);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Lịch hẹn khách hàng</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-xl font-semibold shadow transition">
          <FaCalendarPlus />
          <span>Thêm lịch hẹn</span>
        </button>
      </div>
      {/* Lịch dạng calendar lớn */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6">
        <div className="font-semibold text-pink-500 mb-2">Lịch tháng {month + 1}/{year}</div>
        <div className="grid grid-cols-7 gap-2 text-center font-semibold text-pink-400 mb-2">
          <div>CN</div><div>T2</div><div>T3</div><div>T4</div><div>T5</div><div>T6</div><div>T7</div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarCells.map((cell, idx) => cell ? (
            <button
              key={cell.day}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition h-20 w-full
                ${selectedDay === cell.day ? 'bg-pink-100 border-pink-400 text-pink-600 font-bold' : 'bg-white border-pink-50 text-gray-500 hover:bg-pink-50'}`}
              onClick={() => setSelectedDay(cell.day)}
            >
              <span>{cell.day}</span>
              <span className={`mt-1 text-xs px-2 py-0.5 rounded-full ${cell.count > 0 ? 'bg-pink-200 text-pink-700' : 'bg-gray-100 text-gray-400'}`}>{cell.count} KH</span>
            </button>
          ) : (
            <div key={idx} />
          ))}
        </div>
      </div>
      {/* Danh sách khách của ngày đã chọn */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6">
        <div className="font-semibold text-pink-500 mb-2">Khách hàng ngày {selectedDay}/{month + 1}/{year}</div>
        {selectedList.length === 0 ? (
          <div className="text-gray-400 italic">Không có lịch hẹn nào.</div>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-pink-500 text-left">
                <th className="py-2 px-3 font-semibold">Giờ</th>
                <th className="py-2 px-3 font-semibold">Họ tên</th>
                <th className="py-2 px-3 font-semibold">SĐT</th>
                <th className="py-2 px-3 font-semibold">Dịch vụ</th>
              </tr>
            </thead>
            <tbody>
              {selectedList.map((a) => (
                <tr key={a.id} className="border-b last:border-b-0 border-pink-50 hover:bg-pink-50 transition">
                  <td className="py-2 px-3 font-mono">{a.time}</td>
                  <td className="py-2 px-3 font-semibold">{a.name}</td>
                  <td className="py-2 px-3">{a.phone}</td>
                  <td className="py-2 px-3">{a.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
} 