import { FileText, Code2, Cpu, Database, Zap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const highlights = [
  { icon: Database, label: 'BACKEND' },
  { icon: Cpu, label: 'AI / ML' },
  { icon: Zap, label: 'PERFORMANCE' },
  { icon: Code2, label: 'PYTHON DEV' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,oklch(1_0_0/6%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/6%)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      {/* drifting glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute left-[28%] top-[18%] size-[38rem] rounded-full bg-primary/[0.08] blur-3xl" />
        <div className="animate-drift absolute right-[8%] top-[55%] size-[26rem] rounded-full bg-primary/[0.05] blur-3xl [animation-delay:-9s]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          Available for freelance & full-time roles
        </p>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I am <span className="text-primary">Kanishk</span>
        </h1>

        <p className="mt-6 font-semibold text-2xl leading-snug tracking-tight text-pretty text-foreground sm:text-3xl">
          Python Developer &amp; <span className="text-primary">AI Engineer</span>
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I build high-performance backends and intelligent workflows — from
          scalable APIs and data pipelines to production-ready RAG systems.
        </p>

        <p className="mt-4 font-mono text-sm text-primary">
          {'> _ turning complex problems into fast, reliable systems'}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://drive.google.com/file/d/1udR5rUdxdjIzi4q3TR4MP8sak-DzckWb/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: 'lg' }), 'font-mono')}
          >
            <FileText className="size-4" />
            Resume
          </a>
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'font-mono')}
          >
            Hire Me
          </a>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 bg-card px-4 py-5 text-center"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
