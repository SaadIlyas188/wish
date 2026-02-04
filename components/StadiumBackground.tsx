"use client"

import { useEffect, useRef } from "react"

export default function StadiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Static stadium lights (no flicker)
    const lights: { x: number; y: number; brightness: number }[] = []
    
    for (let i = 0; i < 100; i++) {
      lights.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        brightness: 0.3 + Math.random() * 0.7
      })
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lights.forEach((light) => {
        ctx.beginPath()
        ctx.arc(light.x, light.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 215, 0, ${light.brightness})`
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(255, 215, 0, ${light.brightness})`
        ctx.fill()
      })
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Stadium atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stadium-dark/30 to-stadium-dark pointer-events-none" />
      
      {/* Pitch pattern (subtle) */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 48%, #1a4d2e 50%, transparent 52%),
            linear-gradient(90deg, transparent 48%, #1a4d2e 50%, transparent 52%)
          `,
          backgroundSize: '100px 100px'
        }}
      />
    </>
  )
}
