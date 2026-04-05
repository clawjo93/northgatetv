import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const SERVER = process.env.MAILCHIMP_SERVER;

    if (!API_KEY || !AUDIENCE_ID || !SERVER) {
      console.error("Missing Mailchimp env vars");
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    const response = await fetch(
      `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["northgatetv-website"],
        }),
      }
    );

    const data = await response.json();

    // Already subscribed is fine
    if (response.ok || data.title === "Member Exists") {
      return NextResponse.json({ success: true });
    }

    console.error("Mailchimp error:", data);
    return NextResponse.json({ error: "Subscription failed" }, { status: 400 });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
