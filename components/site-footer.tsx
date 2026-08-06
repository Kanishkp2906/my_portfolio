export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-sm text-muted-foreground">
          {'>'} built by Kanishk
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Python Developer &amp; AI Engineer
        </p>
      </div>
    </footer>
  )
}
