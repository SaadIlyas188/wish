"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import StadiumBackground from "@/components/StadiumBackground"
import NavigationDots from "@/components/NavigationDots"

export default function MessagePage() {
  const [confetti, setConfetti] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setConfetti(true), 800)
  }, [])

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      <StadiumBackground />
      <NavigationDots currentPage={2} />

      {/* Golden Confetti Rain */}
      {confetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                background: ['#ffd700', '#ffed4e', '#ff6b9d', '#5f27cd', '#00d2d3'][i % 5],
                animation: `confettiFall ${3 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Trophy */}
        <div className="mb-12 inline-block">
          <div className="text-9xl filter drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]">
            🏆
          </div>
        </div>

        {/* Epic Heading */}
        <h1 className="font-bebas text-8xl sm:text-9xl md:text-[11rem] mb-12 leading-none">
          <span className="gold-shine block mb-2">YOU'RE THE</span>
          <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">CHAMPION</span>
        </h1>

        {/* The Heartfelt Message */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-gold/30 rounded-3xl p-10 sm:p-16 mb-12 hover:border-gold/60 transition-all duration-700 glow-white">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gold rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-gold rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold rounded-br-3xl" />

          <div className="space-y-8 text-lg sm:text-2xl text-gray-100 leading-relaxed">
            <p>
              <span className="gold-shine font-bold text-3xl">Hey champ,</span>
            </p>
            
            <p>
              Another year older, another level unlocked! 🎮 You keep leveling up in the game of life and honestly? I'm just grateful I get a front-row seat to watch you absolutely crush it.
            </p>
            
            <p>
              From the football pitch to real life, you've got that <span className="text-gold font-bold">unbeatable spirit</span> that makes everything better. You turn ordinary moments into legendary memories and somehow make even the toughest times feel like we're gonna win in the end.
            </p>
            
            <p>
              So here's to you: the <span className="text-gold font-bold">best teammate</span>, the <span className="text-gold font-bold">truest friend</span>, and someone who makes life feel like one big celebration. Keep being the absolute legend you are. ⚽💛
            </p>
            
            <p className="text-3xl sm:text-4xl font-bold gold-shine pt-6">
              Happy Birthday, Superstar! 🎂🎉
            </p>
          </div>
        </div>

        {/* Signature */}
        <p className="text-base sm:text-lg text-gray-400 italic mb-12">
          Made with mad respect and even more love 💙⚽
        </p>

        {/* Replay Button */}
        <button
          onClick={() => router.push("/")}
          className="px-10 py-5 bg-white/5 backdrop-blur-lg border-2 border-white/20 rounded-full hover:bg-white/10 hover:border-gold/50 hover:scale-105 transition-all duration-500 text-lg font-semibold"
        >
          ← Relive the Magic
        </button>
      </div>
    </main>
  )
}
