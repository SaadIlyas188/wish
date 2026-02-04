"use client"

import { useRouter } from "next/navigation"

interface NavigationDotsProps {
  currentPage: number
}

export default function NavigationDots({ currentPage }: NavigationDotsProps) {
  const router = useRouter()

  const pages = [
    { name: "Home", path: "/" },
    { name: "Moments", path: "/moments" },
    { name: "Message", path: "/message" }
  ]

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => router.push(page.path)}
          className="group relative"
          aria-label={page.name}
        >
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentPage === index
                ? "border-gold bg-gold scale-125"
                : "border-white/30 hover:border-gold/50"
            }`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-stadium-dark/90 backdrop-blur px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {page.name}
          </span>
        </button>
      ))}
    </div>
  )
}
