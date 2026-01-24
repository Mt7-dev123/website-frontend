import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    console.log("Received data:", data);

    if (!data.name || !data.email || !data.phone || !data.type) {
      console.error("Missing fields");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const response = await fetch(process.env.GS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const text = await response.text();
    console.log("Google Script response:", text);

    if (!response.ok) {
      console.error("Google Script failed");
      return NextResponse.json({ error: "Google Script failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
