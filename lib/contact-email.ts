export type ContactFormPayload = {
  company?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmailHtml(payload: ContactFormPayload) {
  const rows = [
    ["会社名", payload.company?.trim() || "（未入力）"],
    ["担当者名", payload.name.trim()],
    ["メールアドレス", payload.email.trim()],
    ["電話番号", payload.phone?.trim() || "（未入力）"],
    ["お問い合わせ内容", payload.message.trim()],
  ];

  const bodyRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;color:#334155;width:180px;vertical-align:top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px 16px;border:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;">
      <h2 style="margin:0 0 16px;font-size:20px;">NOVATYNC お問い合わせ</h2>
      <p style="margin:0 0 20px;color:#475569;">Webサイトのお問い合わせフォームから新しいメッセージが届きました。</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${bodyRows}</table>
    </div>
  `;
}

export function buildContactEmailText(payload: ContactFormPayload) {
  return [
    "NOVATYNC お問い合わせ",
    "",
    `会社名: ${payload.company?.trim() || "（未入力）"}`,
    `担当者名: ${payload.name.trim()}`,
    `メールアドレス: ${payload.email.trim()}`,
    `電話番号: ${payload.phone?.trim() || "（未入力）"}`,
    "",
    "お問い合わせ内容:",
    payload.message.trim(),
  ].join("\n");
}

export function validateContactPayload(body: unknown):
  | { ok: true; data: ContactFormPayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;
  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim();
  const message = String(input.message ?? "").trim();
  const company = input.company !== undefined ? String(input.company).trim() : "";
  const phone = input.phone !== undefined ? String(input.phone).trim() : "";

  if (!name) return { ok: false, error: "担当者名は必須です。" };
  if (!email) return { ok: false, error: "メールアドレスは必須です。" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "有効なメールアドレスを入力してください。" };
  }
  if (!message) return { ok: false, error: "お問い合わせ内容は必須です。" };
  if (message.length > 5000) {
    return { ok: false, error: "お問い合わせ内容が長すぎます。" };
  }

  return {
    ok: true,
    data: { company, name, email, phone, message },
  };
}
