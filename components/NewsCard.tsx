import Link from 'next/link'
import Image from 'next/image'

interface NewsCardProps {
  id: string
  title: string
  content: string
  imageUrl?: string
  date: string
}

export default function NewsCard({ id, title, content, imageUrl, date }: NewsCardProps) {
  const excerpt = content.length > 120 ? content.substring(0, 120) + '...' : content
  const formattedDate = new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/berita/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {imageUrl ? (
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-52 bg-gradient-to-br from-[#0B5E8E] to-[#1a7db8] flex items-center justify-center flex-shrink-0">
          <svg
            className="w-12 h-12 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-[#FF7733] font-semibold mb-2 tracking-wide">{formattedDate}</p>
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-[#0B5E8E] transition-colors leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-1">{excerpt}</p>
        <div className="mt-4 flex items-center text-[#0B5E8E] text-sm font-medium">
          <span>Baca selengkapnya</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
