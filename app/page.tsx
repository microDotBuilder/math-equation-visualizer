"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { VisualizerGrid } from "@/components/visualizer-grid";
import { VisualizationModal } from "@/components/visualization-modal";

import type { Equation } from "@/lib/types";

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
