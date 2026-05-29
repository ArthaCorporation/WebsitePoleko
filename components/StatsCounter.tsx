'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
  sublabel?: string
}

// TODO: Replace these with your actual company figures
const STATS: Stat[] = [
  { value: 30, suffix: '+', label: 'Tahun Beroperasi' },
  { value: 65000, prefix: '±', label: 'Hektar', sublabel: 'Area Konsesi' },
  { value: 500000, label: 'm³ / Tahun', sublabel: 'Kapasitas Produksi' },
]

function StatItem({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const intervalMs = duration / steps
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalMs)

    return () => clearInterval(timer)
  }, [started, stat.value])

  return (
    <div ref={ref} className="text-center text-white px-10 py-6">
      <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
        {stat.prefix}
        {count.toLocaleString('id-ID')}
        {stat.suffix}
      </div>
      <div className="text-base font-semibold opacity-90">{stat.label}</div>
      {stat.sublabel && (
        <div className="text-sm opacity-60 mt-0.5">{stat.sublabel}</div>
      )}
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="bg-[#0B5E8E] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
