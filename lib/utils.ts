import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import type p5 from "p5";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function setScreenSizeForP5(p: p5, screenType: "full" | "mini") {
//   if (screenType === "full") {
//     p.resizeCanvas(600, 600);
//   } else {
//     p.resizeCanvas(300, 192);
//   }
// }
