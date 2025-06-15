"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Calculator } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4 animate-pulse">
            404
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-purple-500 rounded animate-pulse" />
            <Calculator className="w-8 h-8 text-purple-400 animate-bounce" />
            <div className="w-16 h-1 bg-pink-500 rounded animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Equation Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-2">
            The mathematical visualization you&apos;re looking for doesn&apos;t
            exist in our universe.
          </p>
          <p className="text-gray-400 font-mono text-sm">
            Error: Page undefined in the mathematical space-time continuum
          </p>
        </div>

        {/* Mathematical Animation */}
        <div className="mb-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700">
          <div className="font-mono text-green-400 text-sm mb-2">
            {"> Searching mathematical dimensions..."}
          </div>
          <div className="font-mono text-red-400 text-sm mb-2">
            {"> Error: Division by zero in URL space"}
          </div>
          <div className="font-mono text-yellow-400 text-sm">
            {"> Redirecting to known coordinates..."}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-400/25"
            onClick={() => window.history.back()}
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-25" />
      </div>
    </div>
  );
}
