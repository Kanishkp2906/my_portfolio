import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const FROM = 'contact@send.kanishkprasad.dpdns.org'
const TO = 'kanishkprasad6@gmail.com'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Server is not configured to send email.' },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email and message are required.' },
      { status: 400 },
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email address is invalid.' }, { status: 400 })
  }

  const text = `New message from ${name} <${email}>\n\n${message}`

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="margin: 0 0 16px; font-size: 20px;">New contact message</h2>
      <p style="margin: 0 0 4px; font-size: 14px; color: #555;">
        <strong>Name:</strong> ${escapeHtml(name)}
      </p>
      <p style="margin: 0 0 4px; font-size: 14px; color: #555;">
        <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
      </p>
      <div style="margin-top: 16px; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; white-space: pre-wrap; color: #111;">
        ${escapeHtml(message)}
      </div>
    </div>
  `

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Portfolio contact: ${name}`,
    text,
    html,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}