import { z } from "zod";

export const equationSubmissionSchema = z.object({
  // Personal Information
  submitterName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  submitterEmail: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),

  // Equation Details
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be less than 100 characters")
    .regex(
      /^[a-zA-Z0-9\s\-_()]+$/,
      "Title can only contain letters, numbers, spaces, and basic punctuation"
    ),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description must be less than 1000 characters"),

  formula: z
    .string()
    .min(5, "Formula must be at least 5 characters")
    .max(500, "Formula must be less than 500 characters")
    .refine((formula) => {
      // Basic validation for mathematical expressions
      const mathPattern =
        /[x-z]|sin|cos|tan|log|exp|sqrt|abs|pow|\+|-|\*|\/|\^|$$|$$|[0-9]/i;
      return mathPattern.test(formula);
    }, "Formula must contain mathematical expressions (variables, functions, operators, or numbers)"),

  category: z.enum(
    ["parametric", "polar", "fractal", "wave", "chaos", "other"],
    {
      required_error: "Please select a category",
    }
  ),

  p5jsCode: z
    .string()
    .max(5000, "P5.js code must be less than 5000 characters")
    .optional()
    .refine((code) => {
      if (!code || code.trim() === "") return true;
      // Basic validation for p5.js code structure
      const hasValidStructure =
        code.includes("setup") ||
        code.includes("draw") ||
        code.includes("function");
      return hasValidStructure;
    }, "P5.js code should contain valid function structures (setup, draw, or custom functions)"),

  additionalNotes: z
    .string()
    .max(1000, "Additional notes must be less than 1000 characters")
    .optional(),
});

export type EquationSubmissionData = z.infer<typeof equationSubmissionSchema>;

// Validation for approved equations that get added to the main list
export const approvedEquationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  formula: z.string(),
  category: z.string(),
  submitterName: z.string(),
  submitterEmail: z.string(),
  approvedAt: z.date(),
  approvedBy: z.string(),
});

export type ApprovedEquation = z.infer<typeof approvedEquationSchema>;
