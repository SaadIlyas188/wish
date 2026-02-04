"use client"

import { useEffect, useState } from "react"

export default function FootballParticles() {
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float 20s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        >
          ⚽
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translate(50px, -100px) rotate(180deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  )
}
