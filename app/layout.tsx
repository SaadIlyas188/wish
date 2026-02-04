import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const bebas = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
})

export const metadata: Metadata = {
  title: "Happy Birthday ⚽",
  description: "A special day for a champion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
