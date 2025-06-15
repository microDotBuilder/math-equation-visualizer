import type p5 from "p5";

export interface Equation {
  id: string;
  title: string;
  description: string;
  formula: string;
  sketch: (p: p5) => void;
  miniSketch: (p: p5) => void;
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
        plotAlienWorm();
      };

      function plotAlienWorm() {
        for (let i = 0; i < 10000; i++) {
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
          p.point(q + 30 * p.cos(c) + 300, q * p.sin(c) + d * 39 - 220);
        }
      }
    },
    miniSketch: (p: p5) => {
      let t = 0;

      p.setup = () => {
        p.createCanvas(300, 192);
        p.background(0);
        p.stroke(255, 120);
      };

      p.draw = () => {
        p.background(0);
        t += p.PI / 120;
        plotMiniAlienWorm();
      };

      function plotMiniAlienWorm() {
        for (let i = 0; i < 3000; i++) {
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
          p.point(q + 15 * p.cos(c) + 150, q * p.sin(c) + d * 20 - 110);
        }
      }
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
        p.background(0, 20);
        p.translate(300, 300);
        t += 0.02;

        for (let i = 0; i < 500; i++) {
          const angle = i * 0.1 + t;
          const radius = i * 0.5;
          const x = radius * p.cos(angle);
          const y = radius * p.sin(angle);

          p.stroke(100 + p.sin(i * 0.1) * 50, 150, 255, 100);
          p.point(x, y);
          p.point(-x, -y);
        }
      };
    },
    miniSketch: (p: p5) => {
      let t = 0;

      p.setup = () => {
        p.createCanvas(300, 192);
        p.background(0);
        p.stroke(100, 150, 255, 180);
      };

      p.draw = () => {
        p.background(0, 30);
        p.translate(150, 96);
        t += 0.03;

        for (let i = 0; i < 200; i++) {
          const angle = i * 0.15 + t;
          const radius = i * 0.3;
          const x = radius * p.cos(angle);
          const y = radius * p.sin(angle);

          p.stroke(100 + p.sin(i * 0.1) * 50, 150, 255, 120);
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
        p.loadPixels();
        t += 0.05;

        for (let x = 0; x < p.width; x += 2) {
          for (let y = 0; y < p.height; y += 2) {
            const d1 = p.dist(x, y, 200, 200);
            const d2 = p.dist(x, y, 400, 400);
            const wave = p.sin(d1 * 0.05 - t) + p.sin(d2 * 0.05 - t);

            const hue = p.map(wave, -2, 2, 200, 300);
            const brightness = p.map(wave, -2, 2, 30, 100);

            p.fill(hue, 80, brightness);
            p.noStroke();
            p.rect(x, y, 2, 2);
          }
        }
      };
    },
    miniSketch: (p: p5) => {
      let t = 0;

      p.setup = () => {
        p.createCanvas(300, 192);
        p.colorMode(p.HSB, 360, 100, 100);
      };

      p.draw = () => {
        t += 0.08;

        for (let x = 0; x < p.width; x += 3) {
          for (let y = 0; y < p.height; y += 3) {
            const d1 = p.dist(x, y, 100, 96);
            const d2 = p.dist(x, y, 200, 96);
            const wave = p.sin(d1 * 0.08 - t) + p.sin(d2 * 0.08 - t);

            const hue = p.map(wave, -2, 2, 200, 300);
            const brightness = p.map(wave, -2, 2, 40, 90);

            p.fill(hue, 70, brightness);
            p.noStroke();
            p.rect(x, y, 3, 3);
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
        p.background(0);
        p.rotateY(p.frameCount * 0.01);

        const dt = 0.01;
        const dx = a * (y - x) * dt;
        const dy = (x * (b - z) - y) * dt;
        const dz = (x * y - c * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        points.push(p.createVector(x, y, z));

        if (points.length > 3000) {
          points.splice(0, 1);
        }

        p.scale(5);
        p.noFill();

        for (let i = 0; i < points.length - 1; i++) {
          const hue = p.map(i, 0, points.length, 0, 360);
          p.stroke(hue, 80, 100, 200);
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
    miniSketch: (p: p5) => {
      let x = 0.01,
        y = 0,
        z = 0;
      const a = 10,
        b = 28,
        c = 8.0 / 3.0;
      const points: p5.Vector[] = [];

      p.setup = () => {
        p.createCanvas(300, 192, p.WEBGL);
        p.colorMode(p.HSB, 360, 100, 100);
      };

      p.draw = () => {
        p.background(0);
        p.rotateY(p.frameCount * 0.02);

        const dt = 0.01;
        const dx = a * (y - x) * dt;
        const dy = (x * (b - z) - y) * dt;
        const dz = (x * y - c * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        points.push(p.createVector(x, y, z));

        if (points.length > 1000) {
          points.splice(0, 1);
        }

        p.scale(3);
        p.noFill();

        for (let i = 0; i < points.length - 1; i++) {
          const hue = p.map(i, 0, points.length, 180, 300);
          p.stroke(hue, 80, 100, 150);
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
        p.background(0, 50);
        p.translate(300, 300);
        t += 0.01;

        p.beginShape();
        p.noFill();

        for (let angle = 0; angle < p.TWO_PI * 4; angle += 0.01) {
          const k = 3 + p.sin(t) * 2;
          const r = 100 * p.cos(k * angle);
          const x = r * p.cos(angle);
          const y = r * p.sin(angle);

          const hue = p.map(angle, 0, p.TWO_PI * 4, 0, 255);
          p.stroke(255, hue, 150, 150);
          p.vertex(x, y);
        }
        p.endShape();
      };
    },
    miniSketch: (p: p5) => {
      let t = 0;

      p.setup = () => {
        p.createCanvas(300, 192);
        p.background(0);
        p.stroke(255, 100, 150, 200);
        p.strokeWeight(1);
      };

      p.draw = () => {
        p.background(0, 80);
        p.translate(150, 96);
        t += 0.02;

        p.beginShape();
        p.noFill();

        for (let angle = 0; angle < p.TWO_PI * 4; angle += 0.02) {
          const k = 3 + p.sin(t) * 1.5;
          const r = 50 * p.cos(k * angle);
          const x = r * p.cos(angle);
          const y = r * p.sin(angle);

          const hue = p.map(angle, 0, p.TWO_PI * 4, 100, 255);
          p.stroke(255, hue, 150, 180);
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
        p.background(0);
        angle = p.map(p.sin(p.frameCount * 0.02), -1, 1, 0, p.PI / 3);

        p.translate(300, 600);
        p.stroke(139, 69, 19);
        p.strokeWeight(8);
        branch(120);
      };

      function branch(len: number) {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        if (len > 4) {
          p.push();
          p.rotate(angle);
          p.strokeWeight(len * 0.1);
          p.stroke(34 + len, 139 + len * 0.5, 34);
          branch(len * 0.67);
          p.pop();

          p.push();
          p.rotate(-angle);
          p.strokeWeight(len * 0.1);
          p.stroke(34 + len, 139 + len * 0.5, 34);
          branch(len * 0.67);
          p.pop();
        }
      }
    },
    miniSketch: (p: p5) => {
      let angle = 0;

      p.setup = () => {
        p.createCanvas(300, 192);
        p.stroke(100, 255, 100);
      };

      p.draw = () => {
        p.background(0);
        angle = p.map(p.sin(p.frameCount * 0.03), -1, 1, 0, p.PI / 4);

        p.translate(150, 192);
        p.stroke(139, 69, 19);
        p.strokeWeight(4);
        miniBranch(60);
      };

      function miniBranch(len: number) {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        if (len > 8) {
          p.push();
          p.rotate(angle);
          p.strokeWeight(len * 0.08);
          p.stroke(34 + len * 2, 139 + len, 34);
          miniBranch(len * 0.7);
          p.pop();

          p.push();
          p.rotate(-angle);
          p.strokeWeight(len * 0.08);
          p.stroke(34 + len * 2, 139 + len, 34);
          miniBranch(len * 0.7);
          p.pop();
        }
      }
    },
  },
];
