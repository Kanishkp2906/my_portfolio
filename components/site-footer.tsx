const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <span className="font-[family-name:var(--font-accent)] text-2xl text-primary">
            Kanishk Prasad
          </span>
          <p className="font-mono text-xs text-muted-foreground">
            Python Engineer &amp; AI Specialist
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="w-full font-mono text-xs text-muted-foreground md:w-auto md:text-right">
          © {new Date().getFullYear()} — built by Kanishk
        </p>
      </div>
    </footer>
  )
}