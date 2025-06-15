import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const scrollToVisualizations = () => {
    const visualizationsSection = document.getElementById(
      "visualizations-grid"
    );
    if (visualizationsSection) {
      visualizationsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20" />
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Math Equation
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Visualizer
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Explore the beauty of mathematics through interactive visualizations.
          Watch equations come to life with stunning animations and patterns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            onClick={scrollToVisualizations}
          >
            Explore Visualizations
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
          >
            Learn More
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25"
          >
            <Link href="/submit">Submit Equation</Link>
          </Button>
        </div>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-20" />
    </section>
  );
}
