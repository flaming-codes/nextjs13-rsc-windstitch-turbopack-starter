import { NextResponse } from "next/server";

/** @see https://beta.nextjs.org/docs/routing/route-handlers#static-route-handlers */
export async function GET() {
  const timestamp = new Date().toISOString();
  return NextResponse.json({ timestamp });
}
