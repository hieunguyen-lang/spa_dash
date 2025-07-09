import { FaUserPlus } from "react-icons/fa";

const customers = [
  { id: 1, name: "Lê Thị Hoa", phone: "0901111222", email: "hoa.le@gmail.com", dob: "1992-05-10", service: "Trị nám", status: "VIP" },
  { id: 2, name: "Nguyễn Văn An", phone: "0902222333", email: "an.nguyen@gmail.com", dob: "1988-11-22", service: "Chăm sóc da", status: "Tiềm năng" },
  { id: 3, name: "Phạm Thị Mai", phone: "0903333444", email: "mai.pham@gmail.com", dob: "1995-03-15", service: "Tắm trắng", status: "Mới" },
  { id: 4, name: "Trần Văn Bình", phone: "0904444555", email: "binh.tran@gmail.com", dob: "1985-08-30", service: "Trị mụn", status: "Đã quay lại" },
];

const statusColor = {
  "VIP": "bg-pink-100 text-pink-600",
  "Tiềm năng": "bg-yellow-100 text-yellow-600",
  "Mới": "bg-green-100 text-green-600",
  "Đã quay lại": "bg-blue-100 text-blue-600",
};

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Danh sách khách hàng</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-xl font-semibold shadow transition">
          <FaUserPlus />
          <span>Thêm khách hàng</span>
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-pink-50 p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-pink-500 text-left">
              <th className="py-2 px-3 font-semibold">Họ tên</th>
              <th className="py-2 px-3 font-semibold">SĐT</th>
              <th className="py-2 px-3 font-semibold">Email</th>
              <th className="py-2 px-3 font-semibold">Ngày sinh</th>
              <th className="py-2 px-3 font-semibold">Dịch vụ</th>
              <th className="py-2 px-3 font-semibold">Trạng thái</th>
              <th className="py-2 px-3 font-semibold">Quản lý</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cus) => (
              <tr key={cus.id} className="border-b last:border-b-0 border-pink-50 hover:bg-pink-50 transition">
                <td className="py-2 px-3 font-semibold">{cus.name}</td>
                <td className="py-2 px-3">{cus.phone}</td>
                <td className="py-2 px-3">{cus.email}</td>
                <td className="py-2 px-3">{cus.dob}</td>
                <td className="py-2 px-3">{cus.service}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[cus.status]}`}>{cus.status}</span>
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