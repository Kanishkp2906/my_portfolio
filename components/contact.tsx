'use client';

import { ArrowRight } from 'lucide-react';
import { GmailIcon } from '@/components/brand-icons';
import { Reveal, Stagger } from '@/components/reveal';

const socials = [
  { icon: 'github', label: 'GitHub', handle: 'Kanishkp2906', href: 'https://github.com/Kanishkp2906' },
  { icon: 'x', label: 'X (Twitter)', handle: '@KanishkPra65580', href: 'https://x.com/KanishkPra65580' },
  { icon: 'linkedin', label: 'LinkedIn', handle: 'in/kanishk-prasad', href: 'https://linkedin.com/in/kanishk-prasad-595b65312' },
  { icon: 'mail', label: 'Email', handle: 'kanishkprasad6@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kanishkprasad6@gmail.com' },
];

const icons = {
  github: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  ),
  x: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  mail: (
    <GmailIcon className="size-5" />
  ),
};

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Stagger baseDelay={0} stagger={80}>
              <Reveal y={16}>
                <p className="section-heading">/ Contact</p>
              </Reveal>
              <Reveal y={16} delay={40}>
                <h2 className="section-title text-balance">
                  Let&apos;s build something <span className="text-primary">together</span>
                </h2>
              </Reveal>
              <Reveal y={16} delay={80}>
                <p className="section-subtitle mt-4">
                  Have a backend to scale or an AI workflow to ship? I&apos;m open to freelance
                  projects and full-time roles. Drop a message. I read everything.
                </p>
              </Reveal>

              <Reveal y={16} delay={120}>
                <p className="mt-8 inline-flex items-center gap-2.5 font-ui text-sm">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span className="font-medium text-fg-primary">Ping me</span>
                </p>
              </Reveal>
            </Stagger>

            {/* Social links */}
            <Reveal delay={160} y={16}>
              <div className="mt-12">
                <ul className="space-y-3" role="list" aria-label="Social links">
                  {socials.map(({ icon, label, handle, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-lg p-4 border border-border hover:border-primary/40 hover:bg-accent-soft transition-all"
                        aria-label={label}
                      >
                        <div className="flex size-10 items-center justify-center rounded border border-border text-fg-muted group-hover:text-primary group-hover:border-primary/40 transition-colors shrink-0">
                          {icons[icon as keyof typeof icons]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-ui text-sm text-fg-secondary group-hover:text-fg-primary transition-colors truncate">
                            {handle}
                          </p>
                        </div>
                        <ArrowRight className="size-4 text-fg-muted group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right side spacer for TOC */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}