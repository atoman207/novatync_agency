import { NextResponse } from "next/server";
import { getPortfolioFromDb } from "@/lib/portfolio/db";

export async function GET() {
  try {
    const data = await getPortfolioFromDb();
    return NextResponse.json(data);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "object" && error && "message" in error
          ? String((error as { message: unknown }).message)
          : "Failed to load portfolio";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
