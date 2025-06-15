"use client"

import { useEffect, useRef } from "react"

interface MiniP5WrapperProps {
  sketch: (p: any) => void
}

export function MiniP5Wrapper({ sketch }: MiniP5WrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<any>(null)

  useEffect(() => {
    let p5: any

    const loadP5 = async () => {
      const p5Module = await import("p5")
      p5 = p5Module.default

      if (containerRef.current && !p5InstanceRef.current) {
        p5InstanceRef.current = new p5(sketch, containerRef.current)
      }
    }

    loadP5()

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
        p5InstanceRef.current = null
      }
    }
  }, [sketch])

  return (
    <div
      ref={containerRef}
      className="w-full h-48 flex items-center justify-center bg-black rounded-lg"
      style={{ minHeight: "192px" }}
    />
  )
}
