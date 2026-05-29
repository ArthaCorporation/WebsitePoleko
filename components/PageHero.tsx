interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="bg-gradient-to-r from-[#0B5E8E] to-[#1a7db8] py-16 px-8">
      <div className="max-w-7xl mx-auto text-white">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-[#FF7733] mt-6" />
      </div>
    </div>
  )
}
