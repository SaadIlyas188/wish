"use client"

import { useState, useRef } from "react"

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Toggle music"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  )
}
