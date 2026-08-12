'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/brand-icons'

const socials = [
  { icon: GithubIcon, label: 'GitHub', handle: 'Kanishkp2906', href: 'https://github.com/Kanishkp2906' },
  { icon: XIcon, label: 'X (Twitter)', handle: '@KanishkPra65580', href: 'https://x.com/KanishkPra65580' },
  { icon: LinkedinIcon, label: 'LinkedIn', handle: 'in/kanishk-prasad', href: 'https://linkedin.com/in/kanishk-prasad-595b65312' },
  { icon: Mail, label: 'Email', handle: 'kanishkprasad6@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kanishkprasad6@gmail.com' },
]

export function Contact() {
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
          </div>

          <ul className="flex flex-col gap-3 md:justify-center">
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
      </div>
    </section>
  )
}
