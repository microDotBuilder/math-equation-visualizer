import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { P5Wrapper } from "@/components/general-p5-wrapper";
import type { Equation } from "@/lib/equations";

interface VisualizationModalProps {
  equation: Equation | null;
  onClose: () => void;
}

export function VisualizationModal({
  equation,
  onClose,
}: VisualizationModalProps) {
  if (!equation) return null;

  return (
    <Dialog open={!!equation} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">
            {equation.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-gray-300 mb-2">{equation.description}</p>
            <div className="font-mono text-sm text-green-400 bg-slate-900/50 p-2 rounded">
              {equation.formula}
            </div>
          </div>
          <div className="flex justify-center">
            <P5Wrapper sketch={equation.sketch} size="full" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
