"use client"

import { useEffect, useState } from "react"

export default function Balloons() {
  const [balloons, setBalloons] = useState<{ id: number; left: string; delay: string; color: string }[]>([])

  useEffect(() => {
    const colors = ['#ff4757', '#5f27cd', '#00d2d3', '#ff6b9d', '#ffd700', '#48dbfb']
    const newBalloons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${5 + (i * 8)}%`,
      delay: `${i * 0.3}s`,
      color: colors[i % colors.length]
    }))
    setBalloons(newBalloons)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 balloon-float"
          style={{
            left: balloon.left,
            animationDelay: balloon.delay,
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div
              className="w-16 h-20 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${balloon.color}, ${balloon.color}dd)`,
                boxShadow: `0 10px 30px ${balloon.color}66`
              }}
            />
            {/* String */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-32 bg-white/30" />
          </div>
        </div>
      ))}
    </div>
  )
}
