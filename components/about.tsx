import { Reveal, ScaleFade } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <ScaleFade>
                <div className="relative overflow-hidden rounded-xl border border-border bg-card">
                  <img
                    src="/my_pic.jpg"
                    alt="Kanishk Prasad — Python Developer and AI Engineer"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
              </ScaleFade>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <div className="mb-8 flex flex-col gap-5">
                <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Backend systems, thoughtfully designed
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={80}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  I&apos;m a software engineer with a Computer Science background and a focus on
                  backend system design. I care about the parts users never see — clean data
                  models, resilient APIs, and infrastructure that stays fast under load.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Lately I&apos;ve been combining that foundation with applied AI, building
                  retrieval systems that turn raw data into intelligent, production-ready
                  workflows. I enjoy the full arc of a problem: modeling it, shipping it, and
                  tuning it until it&apos;s genuinely reliable.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-4 border-l-2 border-primary pl-4 font-mono text-sm text-foreground/80">
                  Currently focused on RAG systems &amp; high-performance Python backends
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}