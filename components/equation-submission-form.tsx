/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Loader2,
  Send,
  CheckCircle,
  AlertCircle,
  Code,
  User,
  FileText,
} from "lucide-react";
import {
  equationSubmissionSchema,
  type EquationSubmissionData,
} from "@/lib/validation";
import { submitEquation } from "@/lib/actions";

export function EquationSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EquationSubmissionData>({
    resolver: zodResolver(equationSubmissionSchema),
    defaultValues: {
      category: "parametric",
    },
  });

  const onSubmit = async (data: EquationSubmissionData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitEquation(data);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Your equation has been submitted successfully! We'll review it and get back to you soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error || "Failed to submit equation. Please try again.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-purple-400" />
          Equation Submission Form
        </CardTitle>
        <CardDescription className="text-gray-400">
          Fill out the form below to submit your mathematical equation for
          review and potential inclusion in our visualization gallery.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">
                Personal Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submitterName" className="text-gray-300">
                  Your Name *
                </Label>
                <Input
                  id="submitterName"
                  {...register("submitterName")}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                  placeholder="Enter your full name"
                />
                {errors.submitterName && (
                  <p className="text-red-400 text-sm">
                    {errors.submitterName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="submitterEmail" className="text-gray-300">
                  Email Address *
                </Label>
                <Input
                  id="submitterEmail"
                  type="email"
                  {...register("submitterEmail")}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                  placeholder="your.email@example.com"
                />
                {errors.submitterEmail && (
                  <p className="text-red-400 text-sm">
                    {errors.submitterEmail.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Equation Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">
                Equation Details
              </h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-300">
                Equation Title *
              </Label>
              <Input
                id="title"
                {...register("title")}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                placeholder="e.g., Butterfly Curve, Dragon Spiral, etc."
              />
              {errors.title && (
                <p className="text-red-400 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-300">
                Description *
              </Label>
              <Textarea
                id="description"
                {...register("description")}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 min-h-[100px]"
                placeholder="Describe what your equation visualizes and any interesting properties..."
              />
              {errors.description && (
                <p className="text-red-400 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="formula" className="text-gray-300">
                Mathematical Formula *
              </Label>
              <Textarea
                id="formula"
                {...register("formula")}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 font-mono min-h-[80px]"
                placeholder="e.g., x = 16sin³(t), y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)"
              />
              {errors.formula && (
                <p className="text-red-400 text-sm">{errors.formula.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-300">
                Category *
              </Label>
              <Select
                value={watch("category")}
                onValueChange={(value) => setValue("category", value as any)}
              >
                <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                  <SelectValue placeholder="Select equation category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem
                    value="parametric"
                    className="text-white hover:bg-slate-700"
                  >
                    Parametric Equations
                  </SelectItem>
                  <SelectItem
                    value="polar"
                    className="text-white hover:bg-slate-700"
                  >
                    Polar Equations
                  </SelectItem>
                  <SelectItem
                    value="fractal"
                    className="text-white hover:bg-slate-700"
                  >
                    Fractals
                  </SelectItem>
                  <SelectItem
                    value="wave"
                    className="text-white hover:bg-slate-700"
                  >
                    Wave Functions
                  </SelectItem>
                  <SelectItem
                    value="chaos"
                    className="text-white hover:bg-slate-700"
                  >
                    Chaotic Systems
                  </SelectItem>
                  <SelectItem
                    value="other"
                    className="text-white hover:bg-slate-700"
                  >
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-400 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="p5jsCode" className="text-gray-300">
                P5.js Implementation Code
              </Label>
              <Textarea
                id="p5jsCode"
                {...register("p5jsCode")}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 font-mono min-h-[150px]"
                placeholder="Optional: Provide your p5.js code implementation..."
              />
              {errors.p5jsCode && (
                <p className="text-red-400 text-sm">
                  {errors.p5jsCode.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes" className="text-gray-300">
                Additional Notes
              </Label>
              <Textarea
                id="additionalNotes"
                {...register("additionalNotes")}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 min-h-[80px]"
                placeholder="Any additional information, references, or special requirements..."
              />
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <Alert
              className={`${
                submitStatus.type === "success"
                  ? "border-green-500/50 bg-green-500/10"
                  : "border-red-500/50 bg-red-500/10"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-400" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-400" />
              )}
              <AlertDescription
                className={
                  submitStatus.type === "success"
                    ? "text-green-300"
                    : "text-red-300"
                }
              >
                {submitStatus.message}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Equation
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
