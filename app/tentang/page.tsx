import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Tentang Kami - PT. Wijaya Kencana Indonesia',
  description: 'Profil dan sejarah PT. Wijaya Kencana Indonesia',
}

const misiItems = [
  'Meningkatkan dan mengembangkan unit usaha dibidang kehutanan secara optimal yang berbasis pada kelestarian sumber daya hutan dan lingkungan.',
  'Mengelola unit usaha kehutanan (PBPH-HA) secara professional guna meningkatkan efisiensi dan pendapatan.',
  'Melaksanakan kegiatan pengusahaan hutan berdasarkan kaidah-kaidah pengelolaan hutan produksi lestari (PHPL) sehingga mendapatkan sertifikat PHPL.',
  'Meningkatkan kesejahteraan karyawan dan masyarakat sekitar hutan secara proporsional.',
  'Berperan serta dalam meningkatkan pembangunan perekonomian daerah dan nasional.',
]

const companyData = [
  { label: 'Nama Perusahaan', value: 'PT. Wijaya Kencana Indonesia' },
  { label: 'Bidang Usaha', value: 'Pertambangan' },
  { label: 'Lokasi Operasi', value: 'Kalimantan Timur, Indonesia' },
  { label: 'Kantor Pusat', value: 'Jakarta, Indonesia' },
  { label: 'Status', value: 'Aktif Beroperasi' },
]

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="PT. Wijaya Kencana Indonesia"
        title="Tentang Kami"
        subtitle="Perusahaan pertambangan yang berkomitmen untuk mengelola sumber daya alam secara bertanggung jawab dan berkelanjutan."
      />

      {/* ── Profil Perusahaan ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FF7733] mb-3">
            Profil
          </p>
          <h2 className="text-3xl font-bold text-[#0B5E8E] mb-4">Profil Perusahaan</h2>
          <div className="w-16 h-1 bg-[#FF7733] mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Description text */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                PT. Wijaya Kencana Indonesia adalah perusahaan yang bergerak di bidang pertambangan
                dan pengelolaan sumber daya alam. Didirikan dengan visi untuk memberikan kontribusi
                positif bagi perekonomian nasional dan kesejahteraan masyarakat.
              </p>
              <p>
                Dengan tim yang berpengalaman dan teknologi terkini, kami berkomitmen untuk
                menjalankan operasional tambang yang efisien, aman, dan ramah lingkungan.
              </p>
              <p>
                Perusahaan kami telah mendapatkan berbagai sertifikasi internasional yang
                membuktikan komitmen kami terhadap standar kualitas, keselamatan, dan lingkungan
                hidup.
              </p>
              <p>
                Kami percaya bahwa keberhasilan bisnis harus berjalan seiring dengan tanggung jawab
                sosial dan pelestarian lingkungan untuk generasi mendatang.
              </p>
            </div>

            {/* Company data card */}
            <div className="bg-gradient-to-br from-[#0B5E8E] to-[#1a7db8] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-lg font-semibold mb-6 opacity-90 border-b border-white/20 pb-4">
                Data Perusahaan
              </h3>
              <div className="space-y-4">
                {companyData.map(({ label, value }) => (
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

      {/* ── Visi & Misi ── */}
      <section id="visi-misi" className="bg-gray-50 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FF7733] mb-3">
            Arah Perusahaan
          </p>
          <h2 className="text-3xl font-bold text-[#0B5E8E] mb-4">Visi &amp; Misi</h2>
          <div className="w-16 h-1 bg-[#FF7733] mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Visi card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-[#0B5E8E]" />
              <div className="p-8">
                <div className="w-12 h-12 bg-[#0B5E8E]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#0B5E8E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B5E8E] mb-4">Visi</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  &quot;Menjadi perusahaan PBPH-HA terkemuka dengan mengedepankan profesionalisme
                  usaha kelestarian hutan serta penerapan teknologi yang sesuai, guna diperoleh
                  manfaat yang sebesar-besarnya bagi perusahaan, karyawan maupun masyarakat
                  disekitar hutan.&quot;
                </p>
              </div>
            </div>

            {/* Misi card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-[#FF7733]" />
              <div className="p-8">
                <div className="w-12 h-12 bg-[#FF7733]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#FF7733]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#FF7733] mb-6">Misi</h3>
                <ul className="space-y-4">
                  {misiItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#FF7733] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
