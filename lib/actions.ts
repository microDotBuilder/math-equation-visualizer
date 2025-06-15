"use server";

import {
  equationSubmissionSchema,
  type EquationSubmissionData,
} from "./validation";

// Mock database - in production, this would be a real database
const submissions: Array<
  EquationSubmissionData & {
    id: string;
    submittedAt: Date;
    status: "pending" | "approved" | "rejected";
  }
> = [];

export async function submitEquation(data: EquationSubmissionData) {
  try {
    // Validate the data
    const validatedData = equationSubmissionSchema.parse(data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create submission record
    const submission = {
      ...validatedData,
      id: `eq_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      submittedAt: new Date(),
      status: "pending" as const,
    };

    // Store submission (in production, this would be saved to a database)
    submissions.push(submission);

    // Log submission for admin review (in production, this would trigger notifications)
    console.log("New equation submission:", {
      id: submission.id,
      title: submission.title,
      submitter: submission.submitterName,
      submittedAt: submission.submittedAt,
      status: submission.status,
      category: submission.category,
      formula: submission.formula,
      description: submission.description,
      additionalNotes: submission.additionalNotes,
      submitterEmail: submission.submitterEmail,
      submissionCode: submission.p5jsCode,
    });

    return {
      success: true,
      submissionId: submission.id,
    };
  } catch (error) {
    console.error("Error submitting equation:", error);

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Failed to submit equation. Please try again.",
    };
  }
}

// Admin function to get all submissions (would be protected in production)
export async function getSubmissions() {
  return submissions;
}

// Admin function to approve/reject submissions (would be protected in production)
export async function updateSubmissionStatus(
  submissionId: string,
  status: "approved" | "rejected",
  adminId: string
) {
  const submission = submissions.find((s) => s.id === submissionId);
  if (submission) {
    submission.status = status;
    console.log(`Submission ${submissionId} ${status} by admin ${adminId}`);
    return { success: true };
  }
  return { success: false, error: "Submission not found" };
}
