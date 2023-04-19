import { NextResponse } from "next/server";

/** @see https://beta.nextjs.org/docs/routing/route-handlers#dynamic-route-handlers */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const diff = parseInt(searchParams.get("diff") || "0", 10);

  const now = new Date();
  const timestamp = new Date(now.getTime() - diff).toISOString();

  return NextResponse.json({
    now: now.toISOString(),
    timestamp,
  });
}
