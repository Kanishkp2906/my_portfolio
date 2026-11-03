'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'stack', label: 'Stack' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('stack');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navigation Bar - Only logo + mobile menu */}
      <header className={cn(
        'sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm transition-all',
        scrolled && 'shadow-sm'
      )}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-4 px-6">
          <a
            href="#top"
            className="font-ui text-sm font-medium tracking-tight text-fg-primary hover:text-fg-secondary transition-colors"
            aria-label="Kanishk Prasad | Home"
          >
            kanishkprasad.site
          </a>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded border border-border text-foreground md:hidden interactive"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu - only contact link */}
        {open && (
          <div className="mx-6 mb-4 border border-border rounded-lg bg-background p-4 md:hidden" role="dialog" aria-label="Navigation menu">
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kanishkprasad6@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 font-ui text-sm text-fg-muted transition-colors hover:text-fg-primary hover:bg-accent-soft flex items-center gap-2"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Right-side Section Navigation (TOC) - Centered vertically */}
      <aside className="hidden lg:block lg:fixed lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:z-40 lg:w-40" aria-label="Page sections">
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'toc-link flex items-center gap-2 px-2 py-2',
                activeSection === section.id && 'active'
              )}
              style={{ fontSize: '0.9375rem' }}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}