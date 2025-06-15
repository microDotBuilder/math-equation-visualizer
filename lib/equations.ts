import type p5 from "p5";

export interface Equation {
  id: string;
  title: string;
  description: string;
  formula: string;
  sketch: (p: p5) => void;
}

export const equations: Equation[] = [
  {
    id: "alien-worm",
    title: "Alien Worm",
    description:
      "A mesmerizing parametric equation creating organic, worm-like patterns",
    formula: "x = (4 + sin(y*2-t)*3) * cos(x/29), y = y/8 - 13",
    sketch: (p: p5) => {
      let t = 0;
      p.setup = () => {
        p.createCanvas(600, 600);
        p.background(0);
        p.stroke(255, 96);
      };
      p.draw = () => {
        p.background(0);
        t += p.PI / 240;
        const isMini = p.width < 400;
        const N = isMini ? 3000 : 10000;
        function plotAlienWorm() {
          for (let i = 0; i < N; i++) {
            const x = i;
            const y = i / 235;
            const d = p.mag(
              (4 + p.sin(y * 2 - t) * 3) * p.cos(x / 29),
              y / 8 - 13
            );
            const k = (4 + p.sin(y * 2 - t) * 3) * p.cos(x / 29);
            const e = y / 8 - 13;
            const q =
              3 * p.sin(k * 2) +
              0.3 / k +
              p.sin(y / 25) * k * (9 + 4 * p.sin(e * 9 - d * 3 + t * 2));
            const c = d - t;
            const xOffset = isMini ? 150 : 300;
            const yOffset = isMini ? -110 : -220;
            const xScale = isMini ? 15 : 30;
            const yScale = isMini ? 20 : 39;
            p.point(
              q + xScale * p.cos(c) + xOffset,
              q * p.sin(c) + d * yScale + yOffset
            );
          }
        }
        plotAlienWorm();
      };
    },
  },
  {
    id: "spiral-galaxy",
    title: "Spiral Galaxy",
    description: "A beautiful spiral pattern resembling a galaxy formation",
    formula: "r = a * θ, x = r * cos(θ), y = r * sin(θ)",
    sketch: (p: p5) => {
      let t = 0;
      p.setup = () => {
        p.createCanvas(600, 600);
        p.background(0);
        p.stroke(100, 150, 255, 150);
      };
      p.draw = () => {
        const isMini = p.width < 400;
        p.background(0, isMini ? 30 : 20);
        p.translate(isMini ? 150 : 300, isMini ? 96 : 300);
        t += isMini ? 0.03 : 0.02;
        const points = isMini ? 200 : 500;
        const angleStep = isMini ? 0.15 : 0.1;
        const radiusScale = isMini ? 0.3 : 0.5;
        for (let i = 0; i < points; i++) {
          const angle = i * angleStep + t;
          const radius = i * radiusScale;
          const x = radius * p.cos(angle);
          const y = radius * p.sin(angle);
          p.stroke(100 + p.sin(i * 0.1) * 50, 150, 255, isMini ? 120 : 100);
          p.point(x, y);
          p.point(-x, -y);
        }
      };
    },
  },
  {
    id: "wave-interference",
    title: "Wave Interference",
    description:
      "Visualization of wave interference patterns creating beautiful ripples",
    formula: "z = sin(√((x-a)² + (y-b)²)) + sin(√((x-c)² + (y-d)²))",
    sketch: (p: p5) => {
      let t = 0;
      p.setup = () => {
        p.createCanvas(600, 600);
        p.colorMode(p.HSB, 360, 100, 100);
      };
      p.draw = () => {
        const isMini = p.width < 400;
        t += isMini ? 0.08 : 0.05;
        const step = isMini ? 3 : 2;
        const d1x = isMini ? 100 : 200;
        const d1y = isMini ? 96 : 200;
        const d2x = isMini ? 200 : 400;
        const d2y = isMini ? 96 : 400;
        for (let x = 0; x < p.width; x += step) {
          for (let y = 0; y < p.height; y += step) {
            const d1 = p.dist(x, y, d1x, d1y);
            const d2 = p.dist(x, y, d2x, d2y);
            const wave =
              p.sin(d1 * (isMini ? 0.08 : 0.05) - t) +
              p.sin(d2 * (isMini ? 0.08 : 0.05) - t);
            const hue = p.map(wave, -2, 2, 200, 300);
            const brightness = p.map(
              wave,
              -2,
              2,
              isMini ? 40 : 30,
              isMini ? 90 : 100
            );
            p.fill(hue, isMini ? 70 : 80, brightness);
            p.noStroke();
            p.rect(x, y, step, step);
          }
        }
      };
    },
  },
  {
    id: "lorenz-attractor",
    title: "Lorenz Attractor",
    description:
      "The famous butterfly effect visualized through chaotic dynamics",
    formula: "dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",
    sketch: (p: p5) => {
      let x = 0.01,
        y = 0,
        z = 0;
      const a = 10,
        b = 28,
        c = 8.0 / 3.0;
      const points: p5.Vector[] = [];
      p.setup = () => {
        p.createCanvas(600, 600, p.WEBGL);
        p.colorMode(p.HSB, 360, 100, 100);
      };
      p.draw = () => {
        const isMini = p.width < 400;
        p.background(0);
        p.rotateY(p.frameCount * (isMini ? 0.02 : 0.01));
        const dt = 0.01;
        const dx = a * (y - x) * dt;
        const dy = (x * (b - z) - y) * dt;
        const dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;
        points.push(p.createVector(x, y, z));
        const maxPoints = isMini ? 1000 : 3000;
        if (points.length > maxPoints) {
          points.splice(0, 1);
        }
        p.scale(isMini ? 3 : 5);
        p.noFill();
        for (let i = 0; i < points.length - 1; i++) {
          const hue = p.map(
            i,
            0,
            points.length,
            isMini ? 180 : 0,
            isMini ? 300 : 360
          );
          p.stroke(hue, 80, 100, isMini ? 150 : 200);
          p.line(
            points[i].x,
            points[i].y,
            points[i].z,
            points[i + 1].x,
            points[i + 1].y,
            points[i + 1].z
          );
        }
      };
    },
  },
  {
    id: "rose-curve",
    title: "Rose Curve",
    description: "Mathematical roses blooming through polar equations",
    formula: "r = a * cos(k * θ)",
    sketch: (p: p5) => {
      let t = 0;
      p.setup = () => {
        p.createCanvas(600, 600);
        p.background(0);
        p.stroke(255, 100, 150, 200);
        p.strokeWeight(2);
      };
      p.draw = () => {
        const isMini = p.width < 400;
        p.background(0, isMini ? 80 : 50);
        p.translate(isMini ? 150 : 300, isMini ? 96 : 300);
        t += isMini ? 0.02 : 0.01;
        p.beginShape();
        p.noFill();
        const angleStep = isMini ? 0.02 : 0.01;
        const kMod = isMini ? 1.5 : 2;
        const rScale = isMini ? 50 : 100;
        for (let angle = 0; angle < p.TWO_PI * 4; angle += angleStep) {
          const k = 3 + p.sin(t) * kMod;
          const r = rScale * p.cos(k * angle);
          const x = r * p.cos(angle);
          const y = r * p.sin(angle);
          const hue = p.map(angle, 0, p.TWO_PI * 4, isMini ? 100 : 0, 255);
          p.stroke(255, hue, 150, isMini ? 180 : 150);
          p.vertex(x, y);
        }
        p.endShape();
      };
    },
  },
  {
    id: "fractal-tree",
    title: "Fractal Tree",
    description: "Self-similar branching patterns found in nature",
    formula: "Recursive: branch(length * 0.67, angle ± π/6)",
    sketch: (p: p5) => {
      let angle = 0;
      p.setup = () => {
        p.createCanvas(600, 600);
        p.stroke(100, 255, 100);
      };
      p.draw = () => {
        const isMini = p.width < 400;
        p.background(0);
        angle = p.map(
          p.sin(p.frameCount * (isMini ? 0.03 : 0.02)),
          -1,
          1,
          0,
          p.PI / (isMini ? 4 : 3)
        );
        p.translate(isMini ? 150 : 300, isMini ? 192 : 600);
        p.stroke(139, 69, 19);
        p.strokeWeight(isMini ? 4 : 8);
        function branch(len: number) {
          p.line(0, 0, 0, -len);
          p.translate(0, -len);
          if (len > (isMini ? 8 : 4)) {
            p.push();
            p.rotate(angle);
            p.strokeWeight(len * (isMini ? 0.08 : 0.1));
            p.stroke(
              34 + len * (isMini ? 2 : 1),
              139 + len * (isMini ? 1 : 0.5),
              34
            );
            branch(len * (isMini ? 0.7 : 0.67));
            p.pop();
            p.push();
            p.rotate(-angle);
            p.strokeWeight(len * (isMini ? 0.08 : 0.1));
            p.stroke(
              34 + len * (isMini ? 2 : 1),
              139 + len * (isMini ? 1 : 0.5),
              34
            );
            branch(len * (isMini ? 0.7 : 0.67));
            p.pop();
          }
        }
        branch(isMini ? 60 : 120);
      };
    },
  },
];
