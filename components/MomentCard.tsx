"use client"

interface MomentCardProps {
  title: string
  description: string
  icon: string
  color: string
  index: number
}

export default function MomentCard({ title, description, icon, color, index }: MomentCardProps) {
  return (
    <div
      className="group relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 sm:p-10 hover:border-gold/50 transition-all duration-700 hover:-translate-y-4 hover:scale-105 card-reveal"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Gradient Glow on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl pointer-events-none`} />

      {/* Icon */}
      <div className="text-7xl sm:text-8xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-bebas text-3xl sm:text-4xl gold-shine mb-4 tracking-wide group-hover:text-white transition-all">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
