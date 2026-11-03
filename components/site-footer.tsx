import { Reveal } from '@/components/reveal';

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-fg-primary">
              Kanishk Prasad
            </span>
            <p className="font-ui text-xs text-fg-muted">
              Python Developer & AI Enthusiast
            </p>
          </div>

          <Reveal y={16}>
            <p className="w-full font-ui text-xs text-fg-muted/60 md:w-auto md:text-right">
              © {new Date().getFullYear()}
            </p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}