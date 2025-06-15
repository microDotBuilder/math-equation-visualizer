"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home, AlertTriangle, Bug } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon and Title */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <AlertTriangle className="w-24 h-24 text-red-400 animate-pulse" />
              <Bug className="w-8 h-8 text-red-500 absolute -bottom-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mathematical
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Error Detected
            </span>
          </h1>
        </div>

        {/* Error Details */}
        <div className="mb-8">
          <p className="text-lg text-gray-300 mb-4">
            Something went wrong while processing the mathematical
            visualization.
          </p>
          <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-4 mb-4">
            <div className="font-mono text-red-400 text-sm text-left">
              <div className="mb-2">
                <span className="text-gray-400">Error Type:</span>{" "}
                {error.name || "Runtime Error"}
              </div>
              <div className="mb-2">
                <span className="text-gray-400">Message:</span>{" "}
                {error.message || "An unexpected error occurred"}
              </div>
              {error.digest && (
                <div className="mb-2">
                  <span className="text-gray-400">Error ID:</span>{" "}
                  {error.digest}
                </div>
              )}
              <div className="text-xs text-gray-500 mt-2">
                This error has been logged for debugging purposes.
              </div>
            </div>
          </div>
        </div>

        {/* Mathematical Error Simulation */}
        <div className="mb-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700">
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400">
              {"> Initializing mathematical engine..."}
            </div>
            <div className="text-yellow-400">
              {"> Loading visualization parameters..."}
            </div>
            <div className="text-red-400">
              {"> Error: Stack overflow in recursive calculation"}
            </div>
            <div className="text-red-400">
              {"> Error: Cannot divide by zero in equation space"}
            </div>
            <div className="text-blue-400">
              {"> Attempting error recovery..."}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-400/25"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>

        {/* Technical Details (Collapsible) */}
        <details className="mt-8 text-left">
          <summary className="cursor-pointer text-gray-400 hover:text-white transition-colors mb-2">
            Technical Details (Click to expand)
          </summary>
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-xs text-gray-300">
            <div className="mb-2">
              <strong>Stack Trace:</strong>
            </div>
            <pre className="whitespace-pre-wrap text-red-300 text-xs overflow-x-auto">
              {error.stack || "Stack trace not available"}
            </pre>
          </div>
        </details>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping opacity-25" />
      </div>
    </div>
  );
}
