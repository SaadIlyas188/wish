"use client"

import { useEffect, useState } from "react"

export default function CartoonTrail() {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    let id = 0
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: id++ }
      setTrails((prev) => [...prev, newTrail].slice(-20)) // Keep last 20 trails
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="pointer-events-none fixed text-2xl animate-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
            opacity: (index + 1) / trails.length,
            animation: `trail 0.8s ease-out forwards`,
          }}
        >
          {["✨", "⭐", "💫", "🌟"][index % 4]}
        </div>
      ))}

      <style jsx>{`
        @keyframes trail {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
