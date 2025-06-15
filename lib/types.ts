import p5 from "p5";

export type Equation = {
  id: string;
  title: string;
  description: string;
  formula: string;
  sketch: (p: p5) => void;
};
