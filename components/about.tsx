import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, ScaleFade } from '@/components/reveal';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Stagger baseDelay={0} stagger={80}>
              <Reveal y={16}>
                <p className="section-heading">/ About</p>
              </Reveal>
              <Reveal y={16} delay={40}>
                <h2 className="section-title text-balance">
                  Get to know me
                </h2>
              </Reveal>
              <Reveal y={16} delay={80}>
                <p className="section-subtitle mt-4">
                  I&apos;m a software developer with a Computer Science background and a focus on
                  backend system design and AI Engineering. In the past few years, I have built insightful projects
                  to gain hands-on experience required for production architecture.
                </p>
              </Reveal>
            </Stagger>

            <Reveal y={16} delay={120}>
              <div className="mt-10 space-y-14 text-fluid-base leading-relaxed text-fg-secondary">
                <p>
                  My work sits at the intersection of <span className="text-fg-primary">backend engineering</span>,
                  <span className="text-fg-primary">applied AI</span>, and <span className="text-fg-primary">operational excellence</span>.
                  Whether it&apos;s designing a caching layer that cuts API costs by 87%, building a
                  RAG pipeline that actually retrieves relevant context, or setting up CI/CD
                  that catches regressions before prod. I build for the long haul.
                </p>
                <div>
                  <p>
                    Books that I am currently reading:
                  </p>
                  <ul className="mt-3 space-y-2 border-l border-border pl-4 text-fluid-sm">
                    <li>
                      <a
                        href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063"
                        target="_blank"
                        rel="noreferrer"
                        className="text-fg-secondary underline underline-offset-4 decoration-border transition-colors hover:text-fg-primary"
                      >
                        Designing Data-Intensive Applications
                      </a>
                      <span className="text-fg-muted"> by Martin Kleppmann</span>
                    </li>
                    <li>
                      <a
                        href="https://www.oreilly.com/library/view/ai-engineering/9781098166298"
                        target="_blank"
                        rel="noreferrer"
                        className="text-fg-secondary underline underline-offset-4 decoration-border transition-colors hover:text-fg-primary"
                      >
                        AI Engineering
                      </a>
                      <span className="text-fg-muted"> by Chip Huyen</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://github.com/Kanishkp2906/GoClient"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-fg-primary"
                >
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  Currently working on a TUI interface for Groundwork in Golang.
                  <ArrowUpRight
                    className="size-4 shrink-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Open the GoClient repository on GitHub</span>
                </a>
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