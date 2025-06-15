"use client";

import { EquationSubmissionForm } from "@/components/equation-submission-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SubmitEquationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            asChild
            variant="ghost"
            className="text-purple-400 hover:text-white hover:bg-purple-600/20"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-white">
            Submit Custom Equation
          </h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Share Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mathematical Vision
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Submit your custom mathematical equations for review. Once
              approved, they&apos;ll be added to our visualization gallery for
              everyone to explore.
            </p>
          </div>

          <EquationSubmissionForm />
        </div>
      </main>
    </div>
  );
}
