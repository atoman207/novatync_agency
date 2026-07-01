import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  validateContactPayload,
} from "@/lib/contact-email";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  const resend = getResendClient();
  if (!resend) {
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
    const to = process.env.CONTACT_TO_EMAIL ?? "info@novatync.agency";
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "NOVATYNC <onboarding@resend.dev>";
    const subject = `【NOVATYNC】お問い合わせ: ${payload.name}`;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject,
      html: buildContactEmailHtml(payload),
      text: buildContactEmailText(payload),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました。しばらくしてから再度お試しください。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました。しばらくしてから再度お試しください。" },
      { status: 500 }
    );
  }
}
