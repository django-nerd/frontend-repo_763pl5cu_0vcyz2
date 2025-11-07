import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Adab Menuntut Ilmu: Panduan Santri Modern',
    date: '12 Oktober 2025',
    excerpt: 'Langkah-langkah praktis menata niat, menjaga adab, dan konsistensi belajar.',
  },
  {
    title: 'Fikih Sehari-hari: Menghindari Syubhat dalam Muamalah',
    date: '30 September 2025',
    excerpt: 'Bagaimana bersikap hati-hati namun tetap produktif dalam transaksi masa kini.',
  },
  {
    title: 'Mengenal Ulumul Qur’an untuk Pemula',
    date: '18 September 2025',
    excerpt: 'Memahami istilah-istilah dasar ilmu Al-Qur’an agar tadabbur lebih bermakna.',
  },
];

function ArticleCard({ title, date, excerpt }) {
  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      <p className="mt-3 text-sm text-gray-600">{excerpt}</p>
      <button className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800">
        Baca selengkapnya <ArrowRight size={16} className="ml-1" />
      </button>
    </article>
  );
}

function Articles() {
  return (
    <section id="artikel" className="py-16 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Artikel Pilihan</h2>
            <p className="mt-2 text-gray-600">Bacaan ringkas untuk memperkaya wawasan.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">Lihat semua</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
