import { connectDb } from "@/lib/mongodb";
import { parseJSON } from "@/lib/error-handler";
import { checkRateLimit } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

export async function POST(request) {
  let body = {};
  try { body = await parseJSON(request, 1024); } catch { body = {}; }
  const { userId } = body;
  if (!userId) { return Response.json({ success: false, message: "userId is required" }, { status: 400 }); }

  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
  const rateLimitResult = await checkRateLimit(`notifications_seed_${ip}_${userId}`);
  if (!rateLimitResult.allowed) {
    return Response.json({ error: "Too many requests. Please slow down." }, { status: 429 });
  }

  try {
    const db = await connectDb();
    await db.collection("notifications").insertMany([
      { userId, message: "Attendance marked for CS101", type: "attendance", read: false, createdAt: new Date() },
      { userId, message: "New notice posted by Admin", type: "notice", read: false, createdAt: new Date() },
      { userId, message: "System alert: Maintenance scheduled", type: "alert", read: false, createdAt: new Date() },
    ]);
    return Response.json({ success: true });
  } catch { return Response.json({ success: false }, { status: 500 }); }
}