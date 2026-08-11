'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Check, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  { icon: GithubIcon, label: 'GitHub', handle: 'Kanishkp2906', href: 'https://github.com/Kanishkp2906' },
  { icon: LinkedinIcon, label: 'LinkedIn', handle: 'in/kanishk-prasad', href: 'https://linkedin.com/in/kanishk-prasad-595b65312' },
  { icon: Mail, label: 'Email', handle: 'kanishkprasad03@gmail.com', href: 'mailto:kanishkprasad03@gmail.com' },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const sent = status === 'sent'

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-sm text-primary">// contact</span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something fast
            </h2>
            <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a backend to scale or an AI workflow to ship? I&apos;m
              currently open to freelance projects and full-time roles. Drop a
              message and I&apos;ll get back within a day.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                      <span className="text-sm">{label}</span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      {handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center gap-4 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">Message sent</h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Thanks for reaching out — I&apos;ll reply to you shortly.
                </p>
                <Button variant="outline" className="font-mono" onClick={() => setStatus('idle')}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      suppressHydrationWarning
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    />
                  </Field>
                </div>
                <Field label="Project details" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about what you're building..."
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                  />
                </Field>
                <Button type="submit" size="lg" className="font-mono" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      Sending
                      <Loader2 className="size-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
                {status === 'error' && (
                  <p className="text-sm text-destructive">
                    Something went wrong — please try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-mono text-xs tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
