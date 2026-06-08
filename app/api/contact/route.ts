import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = process.env.CONTACT_TO_EMAIL || "ldemarre6@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "Lucas Demarré <noreply@lucasdemarre.dev>";

const isEmail = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "not_configured" }, { status: 500 });
  }

  let body: { name?: string; email?: string; message?: string; botcheck?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: a bot filled the hidden field -> pretend success, send nothing.
  if (body.botcheck) return NextResponse.json({ success: true });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "missing_fields" }, { status: 422 });
  }
  if (!isEmail(email) || name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ success: false, error: "invalid" }, { status: 422 });
  }

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — portfolio`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });
    if (error) {
      return NextResponse.json({ success: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "send_failed" }, { status: 502 });
  }
}
