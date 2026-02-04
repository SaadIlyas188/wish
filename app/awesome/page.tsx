"use client"

import { useRouter } from "next/navigation"
import MemoryCard from "@/components/MemoryCard"
import StarBackground from "@/components/StarBackground"

export default function AwesomePage() {
  const router = useRouter()

  const awesomeThings = [
    {
      emoji: "⚡",
      title: "Main Character Energy",
      description: "You literally walk into a room and it's instantly better"
    },
    {
      emoji: "🎨",
      title: "Creative Genius",
      description: "Your ideas? Chef's kiss. Every single time."
    },
    {
      emoji: "😂",
      title: "Humor Level: Expert",
      description: "You make me laugh until my stomach hurts and I love it"
    },
    {
      emoji: "💪",
      title: "Certified Problem Solver",
      description: "No drama survives when you're around"
    },
    {
      emoji: "🌟",
      title: "Loyal AF",
      description: "Ride or die doesn't even cover it"
    },
    {
      emoji: "🧠",
      title: "Smartest Person I Know",
      description: "Somehow you just *get it* every time"
    }
  ]

  return (
    <div className="relative min-h-screen py-20 px-6">
      <StarBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="handwritten text-6xl md:text-8xl mb-6 glow">
            Why You're Awesome
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Just a few reasons (out of literally thousands) why you're the best
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awesomeThings.map((item, index) => (
            <MemoryCard
              key={index}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="text-center">
          <button
            onClick={() => router.push("/wish")}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,213,255,0.6)]"
          >
            One more thing... 💫
          </button>
        </div>
      </div>
    </div>
  )
}
