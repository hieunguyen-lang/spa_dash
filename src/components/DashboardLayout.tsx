import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-pink-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 min-h-screen">
        <Header />
        <main className="flex-1 p-8 bg-pink-50">
          {children}
        </main>
      </div>
    </div>
  );
} 