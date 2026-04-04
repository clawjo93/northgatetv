import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, email, phone, package: pkg, message } = body;

    if (!name || !business || !email || !pkg) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Placeholder: log to console for now (replace with email service later)
    console.log("--- New Advertising Inquiry ---");
    console.log("Name:", name);
    console.log("Business:", business);
    console.log("Email:", email);
    console.log("Phone:", phone || "N/A");
    console.log("Package:", pkg);
    console.log("Message:", message || "N/A");
    console.log("-------------------------------");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
