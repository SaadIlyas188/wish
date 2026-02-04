"use client"

import { useState } from "react"

interface MemoryCardProps {
  emoji: string
  title: string
  description: string
  delay: number
}

export default function MemoryCard({ emoji, title, description, delay }: MemoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative bg-white/5 backdrop-blur-lg border-4 border-white/20 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 animate-fade-in ${
        isHovered ? "scale-110 -rotate-2" : "scale-100 rotate-0"
      }`}
      style={{ 
        animationDelay: `${delay}s`,
        boxShadow: isHovered ? "0 20px 60px rgba(168, 213, 255, 0.5)" : "none"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cartoon explosion effect on hover */}
      {isHovered && (
        <>
          <div className="absolute -top-4 -left-4 text-3xl animate-ping">💥</div>
          <div className="absolute -top-4 -right-4 text-3xl animate-ping delay-100">✨</div>
          <div className="absolute -bottom-4 -left-4 text-3xl animate-ping delay-200">⚡</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-ping delay-300">💫</div>
        </>
      )}

      {/* Bouncy emoji */}
      <div className={`text-7xl mb-4 transition-all duration-300 ${isHovered ? "animate-bounce scale-125" : ""}`}>
        {emoji}
      </div>

      <h3 className="handwritten text-3xl mb-3 text-accent-lavender drop-shadow-lg">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>

      {/* Cartoon speech bubble tail */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/5" />
    </div>
  )
}
