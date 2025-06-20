"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Maximize2 } from "lucide-react";

import { equations } from "@/lib/equations";
import { P5Wrapper } from "@/components/general-p5-wrapper";
import type { Equation } from "@/lib/types";
interface VisualizerGridProps {
  onEquationClick: (equation: Equation) => void;
}

export function VisualizerGrid({ onEquationClick }: VisualizerGridProps) {
  return (
    <section
      id="visualizations-grid"
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mathematical Visualizations
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch live previews of mathematical equations in action. Click any
            visualization for an interactive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equations.map((equation) => (
            <Card
              key={equation.id}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-lg">
                  {equation.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  {equation.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Mini Animation Preview */}
                <div className="relative bg-black rounded-lg overflow-hidden border border-slate-600 group-hover:border-purple-500 transition-colors">
                  <P5Wrapper sketch={equation.sketch} size="mini" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/70 text-white border-slate-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEquationClick(equation);
                    }}
                  >
                    <Maximize2 className="w-3 h-3" />
                  </Button>
                </div>

                {/* Formula Display */}
                <div className="bg-slate-900/50 min-h-16  max-h-16 flex justify-center items-center p-2 rounded-lg font-mono text-xs text-green-400 overflow-x-auto border border-slate-700">
                  {equation.formula}
                </div>

                {/* Action Button */}
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                  onClick={() => onEquationClick(equation)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Open Interactive View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
