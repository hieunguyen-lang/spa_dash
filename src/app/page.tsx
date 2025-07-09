import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-[#FFF6F6] px-6 md:px-20 py-10 relative overflow-hidden">
      {/* Lá cây trái */}
      <div className="absolute left-0 bottom-0 z-0">
        <Image src="/leaf-left.png" alt="leaf" width={120} height={120} className="opacity-70" />
      </div>
      {/* Lá cây phải */}
      <div className="absolute right-0 top-0 z-0">
        <Image src="/leaf-right.png" alt="leaf" width={120} height={120} className="opacity-70" />
      </div>
      {/* Cột trái */}
      <div className="flex-1 z-10 flex flex-col gap-6 max-w-xl">
        <div className="flex items-center gap-3 mb-2">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <span className="text-[#E7A6A6] font-bold text-2xl tracking-wide">YOUR LOGO</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-700 mb-2">SPA THERAPY</h1>
        <p className="text-lg text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="bg-[#8CA08C] text-white px-8 py-3 rounded-full font-semibold text-lg w-max shadow hover:bg-[#6e8b6e] transition">SHOP NOW</button>
        <div className="flex gap-8 mt-8 text-sm text-gray-500">
          <div className="flex items-center gap-2"><span className="material-icons">call</span> +91-878787-12345</div>
          <div>www.website.com</div>
        </div>
        <div className="text-sm text-gray-500 mt-2">Av. Lorem ipsum dolor 2045<br />Dolor sit amet - Adress</div>
      </div>
      {/* Cột phải */}
      <div className="flex-1 flex flex-col items-center z-10 mt-10 md:mt-0">
        <div className="relative">
          <div className="absolute -top-6 -right-6 bg-[#F8D6D6] w-40 h-40 rounded-full -z-10" />
          <Image src="/spa-massage.jpg" alt="spa" width={320} height={320} className="rounded-full object-cover border-8 border-white shadow-lg" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow text-center border-2 border-[#F8D6D6] text-[#E7A6A6] font-bold text-xl" style={{minWidth:120}}>UP TO<br />50%<br />OFF</div>
        </div>
      </div>
    </div>
  );
}
