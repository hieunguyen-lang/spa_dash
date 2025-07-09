import { FaUserPlus } from "react-icons/fa";

type StatusType = "Đang làm" | "Nghỉ phép" | "Nghỉ việc";

const employees: Array<{
  id: number;
  name: string;
  code: string;
  department: string;
  position: string;
  phone: string;
  status: StatusType;
}> = [
  { id: 1, name: "Nguyễn Thị A", code: "NV001", department: "Lễ tân", position: "Trưởng nhóm", phone: "0901234567", status: "Đang làm" },
  { id: 2, name: "Trần Văn B", code: "NV002", department: "Kỹ thuật viên", position: "Nhân viên", phone: "0902345678", status: "Nghỉ phép" },
  { id: 3, name: "Lê Thị C", code: "NV003", department: "Chăm sóc khách hàng", position: "Nhân viên", phone: "0903456789", status: "Đang làm" },
  { id: 4, name: "Phạm Văn D", code: "NV004", department: "Kỹ thuật viên", position: "Nhân viên", phone: "0904567890", status: "Nghỉ việc" },
];

const statusColor: Record<StatusType, string> = {
  "Đang làm": "bg-green-100 text-green-600",
  "Nghỉ phép": "bg-yellow-100 text-yellow-600",
  "Nghỉ việc": "bg-gray-100 text-gray-500",
};

export default function HRMPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Danh sách nhân viên</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-xl font-semibold shadow transition">
          <FaUserPlus />
          <span>Thêm nhân viên</span>
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-pink-500 text-left">
              <th className="py-2 px-3 font-semibold">Mã NV</th>
              <th className="py-2 px-3 font-semibold">Họ tên</th>
              <th className="py-2 px-3 font-semibold">Phòng ban</th>
              <th className="py-2 px-3 font-semibold">Chức vụ</th>
              <th className="py-2 px-3 font-semibold">SĐT</th>
              <th className="py-2 px-3 font-semibold">Trạng thái</th>
              <th className="py-2 px-3 font-semibold">Quản lý</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b last:border-b-0 border-pink-50 hover:bg-pink-50 transition">
                <td className="py-2 px-3 font-mono">{emp.code}</td>
                <td className="py-2 px-3 font-semibold">{emp.name}</td>
                <td className="py-2 px-3">{emp.department}</td>
                <td className="py-2 px-3">{emp.position}</td>
                <td className="py-2 px-3">{emp.phone}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[emp.status]}`}>{emp.status}</span>
                </td>
                <td className="py-2 px-3">
                  <button className="text-pink-500 hover:underline font-semibold">Xem</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 