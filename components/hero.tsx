import { ArrowDown, FileText, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const marqueeTools = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'LangChain',
  'Docker',
  'Flutter',
  'AWS',
  'Redis',
  'React',
  'Ray',
  'Linux',
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pt-24"
    >
      {/* ambient grid + glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:linear-gradient(to_right,oklch(1_0_0/6%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/6%)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute left-[20%] top-[14%] size-[36rem] rounded-full bg-primary/[0.09] blur-3xl" />
        <div className="animate-drift absolute right-[6%] top-[56%] size-[24rem] rounded-full bg-primary/[0.06] blur-3xl [animation-delay:-9s]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal delay={0}>
            <h1 className="mx-auto max-w-5xl text-balance text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-tight">
              I&apos;m{' '}
              <span className="font-[family-name:var(--font-accent)] text-primary">
                Kanishk Prasad
              </span>
              .
              <br className="hidden sm:block" />
              Backends that scale, AI that ships.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Python Engineer &amp; AI Specialist building resilient APIs, data
              pipelines, and production-ready RAG systems.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="https://drive.google.com/file/d/1udR5rUdxdjIzi4q3TR4MP8sak-DzckWb/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: 'lg' }), 'w-full font-mono sm:w-auto')}
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
              <a
                href="#work"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'w-full font-mono sm:w-auto',
                )}
              >
                View Work
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <a
              href="#stack"
              className="mt-16 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Scroll to explore
              <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* tool marquee strip */}
      <div className="relative mt-16 w-full overflow-hidden border-y border-border/60 bg-background/40 py-4 backdrop-blur-sm">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...marqueeTools, ...marqueeTools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground/70"
            >
              {tool}
              <span className="size-1 rounded-full bg-primary/60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}