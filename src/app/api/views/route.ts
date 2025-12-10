import { NextRequest, NextResponse } from "next/server";

// Simple in-memory store (in production, use a database like Vercel KV, Supabase, etc.)
let viewCount = 0;

export async function GET() {
  return NextResponse.json({ views: viewCount });
}

export async function POST() {
  viewCount += 1;
  return NextResponse.json({ views: viewCount, message: "View counted" });
}

