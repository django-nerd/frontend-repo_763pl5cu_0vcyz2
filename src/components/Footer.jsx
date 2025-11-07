function Footer() {
  return (
    <footer id="tentang" className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Ilmu Islam Nusantara</h3>
            <p className="mt-2 text-sm text-gray-600">Menyajikan pembelajaran Islam yang mendalam, moderat, dan membumi untuk masyarakat Indonesia.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Program</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#kelas" className="hover:text-emerald-700">Kelas Berseri</a></li>
              <li><a href="#kelas" className="hover:text-emerald-700">Kajian Tematik</a></li>
              <li><a href="#artikel" className="hover:text-emerald-700">Artikel</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Email: salam@ilmuislam.id</li>
              <li>Instagram: @ilmuislam.id</li>
              <li>Telegram: t.me/ilmuislamid</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-sm text-gray-500">© {new Date().getFullYear()} Ilmu Islam Nusantara. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
