import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GeistMono } from "geist/font/mono"

export const metadata: Metadata = {
  title: "Math Equation Visualizer",
  description: "Interactive mathematical equation visualizations",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased`}>{children}</body>
    </html>
  )
}
