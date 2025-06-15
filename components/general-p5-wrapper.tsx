"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import { cn } from "@/lib/utils";

type screenSize = "full" | "mini";
interface P5WrapperProps {
  sketch: (p: p5) => void;
  size: screenSize;
  className?: string;
}

export function P5Wrapper({ sketch, size, className }: P5WrapperProps) {
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

  return size === "full" ? (
    <div
      ref={containerRef}
      className={cn(
        "border border-slate-700 rounded-lg overflow-hidden",
        className
      )}
    />
  ) : (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-48 flex items-center justify-center bg-black rounded-lg",
        className
      )}
      style={{ minHeight: "192px" }}
    />
  );
}
