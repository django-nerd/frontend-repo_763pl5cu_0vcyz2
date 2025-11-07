import { BookOpen, Layers, GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'Aqidah Ahlus Sunnah',
    level: 'Dasar',
    description: 'Pondasi keimanan yang lurus dengan pendekatan klasik dan kontemporer.',
    icon: GraduationCap,
  },
  {
    title: 'Fiqih Ibadah',
    level: 'Menengah',
    description: 'Thaharah, shalat, zakat, puasa, dan haji berdasarkan dalil yang shahih.',
    icon: BookOpen,
  },
  {
    title: 'Tafsir Juz Amma',
    level: 'Dasar',
    description: 'Memahami makna ayat-ayat pendek untuk diamalkan dalam kehidupan.',
    icon: Layers,
  },
  {
    title: 'Akhlak & Tazkiyatun Nafs',
    level: 'Lanjutan',
    description: 'Membersihkan hati, memperbaiki akhlak, dan membangun karakter muslim.',
    icon: GraduationCap,
  },
];

function CourseCard({ title, level, description, icon: Icon }) {
  return (
    <div className="group rounded-xl border bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
          <Icon size={20} />
        </div>
        <div className="text-xs font-medium text-emerald-700">{level}</div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <button className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800">
        Lihat Silabus →
      </button>
    </div>
  );
}

function CourseGrid() {
  return (
    <section id="kelas" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Kurikulum Bertingkat</h2>
            <p className="mt-2 text-gray-600">Belajar bertahap dari dasar hingga lanjut dengan jalur yang jelas.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">Lihat semua</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseGrid;
