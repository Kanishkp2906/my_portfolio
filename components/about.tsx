export function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-sm text-primary">// about me</span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Backend systems, thoughtfully designed
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m a software engineer with a background in Computer Science
              and a focus on backend system design. I care about the parts users
              never see — clean data models, resilient APIs, and infrastructure
              that stays fast under load.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Lately I&apos;ve been combining that foundation with applied AI,
              building retrieval systems that turn raw data into intelligent,
              production-ready workflows. I enjoy the
              full arc of a problem: modeling it, shipping it, and tuning it
              until it&apos;s genuinely reliable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
