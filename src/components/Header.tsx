import { FaBell, FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full bg-white flex items-center justify-between px-8 py-4 shadow-sm border-b border-pink-100">
      <div className="flex-1">
        <input
          className="w-96 max-w-full px-4 py-2 rounded-xl border border-pink-100 bg-pink-50 focus:bg-white focus:ring-2 focus:ring-pink-200 focus:border-transparent outline-none transition placeholder:text-pink-300"
          placeholder="Tìm kiếm khách hàng, nhân sự..."
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-full hover:bg-pink-50 transition">
          <FaBell className="text-pink-400 text-xl" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white"></span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-xl font-semibold shadow transition">
          <FaPlus />
          <span>Tạo mới</span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-200 shadow flex items-center justify-center ml-2">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
} 