"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { VisualizerGrid } from "@/components/visualizer-grid";
import { VisualizationModal } from "@/components/visualization-modal";
import type p5 from "p5";

export interface Equation {
  id: string;
  title: string;
  description: string;
  formula: string;
  sketch: (p: p5) => void;
  miniSketch: (p: p5) => void;
}

export default function Home() {
  const [selectedEquation, setSelectedEquation] = useState<Equation | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <VisualizerGrid onEquationClick={setSelectedEquation} />
      <VisualizationModal
        equation={selectedEquation}
        onClose={() => setSelectedEquation(null)}
      />
    </div>
  );
}
