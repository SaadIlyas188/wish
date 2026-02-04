"use client"

import { useRouter } from "next/navigation"
import StadiumBackground from "@/components/StadiumBackground"
import MomentCard from "@/components/MomentCard"
import NavigationDots from "@/components/NavigationDots"

export default function MomentsPage() {
  const router = useRouter()

  const moments = [
    {
      title: "The Teammate Everyone Wants",
      description: "You've got that magic ability to make everyone feel like they're part of the winning squad. Seriously, you're the glue that holds the team together—on and off the field! 🤝",
      icon: "🏅",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "The Comeback King/Queen",
      description: "Down but never out! You've turned so many tough moments into epic victories. Your resilience? Absolutely unmatched. You're built different! 💪⚡",
      icon: "👑",
      color: "from-gold to-yellow-500"
    },
    {
      title: "Heart of a Champion",
      description: "Whether it's cheering me up or crushing your goals, you do everything with passion. That fire in you? It's contagious and inspiring AF! ❤️‍🔥",
      icon: "❤️",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "The Ultimate Hype Person",
      description: "You celebrate wins like they're World Cup finals and turn ordinary days into legendary moments. Life's just better with your energy! 🎉🔥",
      icon: "🎊",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Loyal Through It All",
      description: "Ride or die doesn't even begin to cover it. Through thick and thin, wins and losses, you've always had my back. That's real friendship right there! 🙌",
      icon: "🤜🤛",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Living Legend Status",
      description: "Already a hall of famer in the game of life. Every year you level up and somehow get even more amazing. The legacy continues! ⭐🏆",
      icon: "🌟",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <main className="relative min-h-screen py-24 overflow-hidden">
      <StadiumBackground />
      <NavigationDots currentPage={1} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Grand Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 text-gold text-base md:text-lg tracking-[0.4em] font-bold mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
              <span>WHY YOU&apos;RE INCREDIBLE</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>
          
          <h2 className="font-bebas text-7xl sm:text-8xl md:text-9xl mb-8 leading-none">
            <span className="gold-shine block mb-4">YOUR GREATEST</span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">HIGHLIGHTS</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Just a few reasons why you&apos;re the <span className="text-gold font-bold">MVP</span> of this friendship 🏆
          </p>
        </div>

        {/* Massive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {moments.map((moment, index) => (
            <MomentCard
              key={index}
              title={moment.title}
              description={moment.description}
              icon={moment.icon}
              color={moment.color}
              index={index}
            />
          ))}
        </div>

        {/* Big CTA */}
        <div className="text-center">
          <button
            onClick={() => router.push("/message")}
            className="group relative px-16 py-7 bg-gradient-to-r from-gold to-yellow-400 text-stadium-dark font-black text-xl rounded-full hover:scale-110 transition-all duration-500 glow-gold"
          >
            <span className="flex items-center gap-4">
              ONE MORE THING...
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </button>
        </div>
      </div>
    </main>
  )
}
