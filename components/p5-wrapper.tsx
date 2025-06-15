"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

export function P5Wrapper({ sketch }: P5WrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    let P5Constructor: typeof p5;

    const loadP5 = async () => {
      const p5Module = await import("p5");
      P5Constructor = p5Module.default as typeof p5;

      if (containerRef.current && !p5InstanceRef.current) {
        p5InstanceRef.current = new P5Constructor(sketch, containerRef.current);
      }
    };

    loadP5();

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [sketch]);

  return (
    <div
      ref={containerRef}
      className="border border-slate-700 rounded-lg overflow-hidden"
    />
  );
}
