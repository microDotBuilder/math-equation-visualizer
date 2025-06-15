import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import type p5 from "p5";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
