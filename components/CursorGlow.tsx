"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed w-64 h-64 rounded-full opacity-30 blur-3xl bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 ease-out"
      style={{
        left: position.x - 128,
        top: position.y - 128,
      }}
    />
  )
}
