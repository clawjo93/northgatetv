import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, date, location, instagram } = await req.json();

  if (!name || !email || !date || !location) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY!;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID!;
  const server = process.env.MAILCHIMP_SERVER!;

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: name,
    },
    tags: ["photo-request"],
  };

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  // If they're already subscribed, update their tags instead
  if (response.status === 400) {
    const errorData = await response.json();
    if (errorData.title === "Member Exists") {
      const emailHash = Buffer.from(email.toLowerCase()).toString("hex");
      await fetch(
        `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${emailHash}/tags`,
        {
          method: "POST",
          headers: {
            Authorization: `apikey ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tags: [{ name: "photo-request", status: "active" }] }),
        }
      );
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Something went wrong." }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
