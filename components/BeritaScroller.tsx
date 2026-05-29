'use client'

import { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Image from 'next/image'
import Link from 'next/link'

interface BeritaItem {
  id: string
  title: string
  content: string
  imageUrl?: string
  date: string
}

export default function BeritaScroller() {
  const [items, setItems] = useState<BeritaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const q = query(
          collection(db, 'berita'),
          orderBy('createdAt', 'desc'),
          limit(3)
        )
        const snap = await getDocs(q)
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as BeritaItem)))
      } catch {
        // silently show empty state if Firebase is not configured
      } finally {
        setLoading(false)
      }
    }
    fetchBerita()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0B5E8E]" />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl">
        <svg
          className="w-14 h-14 mx-auto text-gray-300 mb-4"
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
        <p className="text-gray-400 text-lg font-medium">Belum ada berita terbaru</p>
        <p className="text-gray-300 text-sm mt-1">Pantau terus untuk informasi terkini</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => {
        const formattedDate = new Date(item.date).toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        const excerpt =
          item.content.length > 120 ? item.content.substring(0, 120) + '...' : item.content

        return (
          <Link
            key={item.id}
            href={`/berita/${item.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {item.imageUrl ? (
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-[#0B5E8E] to-[#1a7db8] flex items-center justify-center flex-shrink-0">
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

            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs text-[#FF7733] font-semibold mb-2 tracking-wide">
                {formattedDate}
              </p>
              <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-[#0B5E8E] transition-colors leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed flex-1">{excerpt}</p>
              <div className="mt-4 flex items-center text-[#0B5E8E] text-sm font-medium">
                <span>Baca selengkapnya</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
