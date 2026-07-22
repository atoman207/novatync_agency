import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  validateContactPayload,
} from "@/lib/contact-email";

function getSmtpTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  const transport = getSmtpTransport();
  if (!transport) {
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const validated = validateContactPayload(body);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const payload = validated.data;
    const to = process.env.CONTACT_EMAIL_TO ?? "info@novatync.agency";
    const from = `"NOVATYNC" <${process.env.SMTP_USER}>`;
    const subject = `【NOVATYNC】お問い合わせ: ${payload.name}`;

    await transport.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      html: buildContactEmailHtml(payload),
      text: buildContactEmailText(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `メール送信エラー: ${message}` },
      { status: 500 }
    );
  }
}
