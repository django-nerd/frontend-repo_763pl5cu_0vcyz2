import { PlayCircle, ShieldCheck } from 'lucide-react';

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-xs font-medium mb-4">
              <ShieldCheck size={14} />
              Bersanad & moderat
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Belajar Ilmu Islam yang Mendalam, Terarah, dan Relevan
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Platform pembelajaran untuk Muslim Indonesia: aqidah, fiqih, tafsir, hadis, akhlak, hingga sejarah — dengan kurikulum bertingkat dan pengajar berpengalaman.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#kelas" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition">
                Mulai Kelas
              </a>
              <a href="#pratinjau" className="inline-flex items-center gap-2 rounded-md border border-emerald-200 px-5 py-3 text-emerald-700 font-medium hover:bg-emerald-50 transition">
                <PlayCircle size={18} /> Lihat Pratinjau
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>Materi bertingkat</div>
              <div>Diskusi & tanya jawab</div>
              <div>Sertifikat penyelesaian</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-200">
              <img src="https://images.unsplash.com/photo-1671609888498-c22bf328037b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWxhamFyJTIwSXNsYW18ZW58MHwwfHx8MTc2MjUwNTg0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Belajar Islam" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-lg bg-white p-4 shadow-md ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-900">10.000+ santri belajar</p>
              <p className="text-xs text-gray-600">Dari Sabang sampai Merauke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
