import HeroCarousel from '@/components/HeroCarousel'
import StatsCounter from '@/components/StatsCounter'
import BeritaScroller from '@/components/BeritaScroller'
import Link from 'next/link'

export default function BerandaPage() {
  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Tentang Kami ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text side */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#FF7733] mb-3">
                Tentang Kami
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B5E8E] mb-4 leading-tight">
                PT. Wijaya Kencana Indonesia
              </h2>
              <div className="w-16 h-1 bg-[#FF7733] mb-8" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di website resmi PT. Wijaya Kencana Indonesia. Kami adalah perusahaan
                pertambangan yang berkomitmen untuk mengelola sumber daya alam secara bertanggung
                jawab dan berkelanjutan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dengan pengalaman lebih dari dua dekade, kami terus berinovasi dan memberikan yang
                terbaik bagi seluruh pemangku kepentingan, termasuk karyawan, masyarakat sekitar,
                dan lingkungan hidup.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kami percaya bahwa keberhasilan bisnis harus berjalan seiring dengan tanggung jawab
                sosial dan pelestarian lingkungan untuk generasi mendatang.
              </p>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 bg-[#0B5E8E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0a4f78] transition-colors"
              >
                Selengkapnya
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Company data card */}
            <div className="bg-gradient-to-br from-[#0B5E8E] to-[#1a7db8] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-lg font-semibold mb-6 opacity-90 border-b border-white/20 pb-4">
                Data Perusahaan
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Nama Perusahaan', value: 'PT. Wijaya Kencana Indonesia' },
                  { label: 'Bidang Usaha', value: 'Pertambangan & Kehutanan' },
                  { label: 'Lokasi Operasi', value: 'Kalimantan Timur, Indonesia' },
                  { label: 'Kantor Pusat', value: 'Jakarta, Indonesia' },
                  { label: 'Status', value: 'Aktif Beroperasi' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm opacity-70 flex-shrink-0">{label}</span>
                    <span className="text-sm font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Stats ── */}
      <StatsCounter />

      {/* ── Berita Terkini ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#FF7733] mb-3">
                Informasi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B5E8E] mb-4">
                Berita Terkini
              </h2>
              <div className="w-16 h-1 bg-[#FF7733]" />
            </div>
            <Link
              href="/berita"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#0B5E8E] border border-[#0B5E8E] px-4 py-2 rounded-lg hover:bg-[#0B5E8E] hover:text-white transition-colors"
            >
              Lihat Semua
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <BeritaScroller />

          {/* Mobile-only link */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5E8E] border border-[#0B5E8E] px-5 py-2 rounded-lg"
            >
              Lihat Semua Berita →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Kegiatan Operasional ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FF7733] mb-3">
            Operasional
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B5E8E] mb-4">
            Kegiatan Operasional
          </h2>
          <div className="w-16 h-1 bg-[#FF7733] mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Location list */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Lokasi Operasional</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    title: 'KANTOR PUSAT',
                    desc: 'Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: 'LOKASI BASE CAMP 1',
                    desc: 'Kalimantan Timur, Indonesia',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: 'LOKASI BASE CAMP 2',
                    desc: 'Kalimantan Selatan, Indonesia',
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-sm transition-shadow"
                  >
                    <div className="bg-[#0B5E8E] p-2.5 rounded-lg flex-shrink-0">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Peta Lokasi</h3>
              <div className="bg-gray-100 rounded-xl h-72 flex items-center justify-center border-2 border-dashed border-gray-200">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-14 h-14 mx-auto mb-3 opacity-40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <p className="text-sm font-medium">Peta lokasi operasional</p>
                  <p className="text-xs mt-1 opacity-70">Integrasi Google Maps akan ditambahkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
