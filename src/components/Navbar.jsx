import { Book, Search } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
              <Book size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Ilmu Islam Nusantara</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#beranda" className="hover:text-emerald-700 transition">Beranda</a>
            <a href="#kelas" className="hover:text-emerald-700 transition">Kelas</a>
            <a href="#tentang" className="hover:text-emerald-700 transition">Tentang</a>
            <a href="#kontak" className="hover:text-emerald-700 transition">Kontak</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari ilmu..."
                className="w-48 rounded-md border border-gray-300 bg-white/80 py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <a
              href="#kelas"
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
            >
              Mulai Belajar
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
