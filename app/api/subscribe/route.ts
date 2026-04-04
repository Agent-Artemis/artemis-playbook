import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, source } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Subscribe to Beehiiv
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/pub_976d2854-7a80-4f0a-b978-d2d6ee6b0910/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY || ""}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source || "playbook-capture",
          custom_fields: name ? [{ name: "Full Name", value: name }] : [],
        }),
      }
    );

    if (!beehiivRes.ok) {
      const err = await beehiivRes.text();
      console.error("Beehiiv error:", err);
      // Don't fail the checkout flow
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ ok: true }); // Don't block checkout
  }
}
