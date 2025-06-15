"use client"

import { useEffect, useRef } from "react"

interface P5WrapperProps {
  sketch: (p: any) => void
}

export function P5Wrapper({ sketch }: P5WrapperProps) {
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

  return <div ref={containerRef} className="border border-slate-700 rounded-lg overflow-hidden" />
}
