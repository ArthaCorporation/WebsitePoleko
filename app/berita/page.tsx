'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import PageHero from '@/components/PageHero'
import NewsCard from '@/components/NewsCard'

interface BeritaItem {
  id: string
  title: string
  content: string
  imageUrl: string
  date: string
  slug: string
}

export default function BeritaPage() {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const q = query(collection(db, 'berita'), orderBy('createdAt', 'desc'))
        const snapshot = await getDocs(q)
        const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BeritaItem))
        setBeritaList(items)
      } catch (err) {
        console.error('Error fetching berita:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchBerita()
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Informasi Terkini"
        title="Berita"
        subtitle="Informasi terkini dari PT. Wijaya Kencana Indonesia"
      />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B5E8E]" />
            </div>
          ) : beritaList.length === 0 ? (
            <div className="text-center py-24 border-2 border-dashed border-gray-200 rounded-2xl">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
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
              <p className="text-gray-400 text-xl font-medium">Belum ada berita</p>
              <p className="text-gray-300 text-sm mt-2">
                Pantau terus untuk informasi terkini dari kami
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beritaList.map((news) => (
                <NewsCard
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  content={news.content}
                  imageUrl={news.imageUrl}
                  date={news.date}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
