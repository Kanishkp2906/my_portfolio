export function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Profile Picture - Top of About Section */}
          <div className="mb-4 md:mb-0">
            <div className="relative w-48 h-48 border-[3px] border-border bg-card shadow-xl shadow-black/20">
              <img
                src="/my_pic.jpg"
                alt="Kanishk Prasad - Python Developer and AI Engineer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1">
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
      </div>
    </section>
  )
}
