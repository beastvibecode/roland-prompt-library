import { NextRequest, NextResponse } from "next/server";
import { analyzeImages } from "../../../lib/ai";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const images = Array.isArray(body.images)
      ? body.images
          .filter((x: unknown): x is string => typeof x === "string")
          .slice(0, 6)
      : [];

    const context =
      typeof body.context === "string"
        ? body.context.slice(0, 4000)
        : "";

    if (images.length === 0) {
      return NextResponse.json(
        {
          error: "No reference frames were supplied.",
        },
        { status: 400 }
      );
    }

    const result = await analyzeImages(images, context);

    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error("Reverse prompt API error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unexpected server error.";

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}