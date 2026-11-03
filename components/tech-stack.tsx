import { Reveal, Stagger } from '@/components/reveal';

const categories = [
  {
    title: 'Backend Engineering',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'MongoDB', 'Supabase'],
    detail: 'Clean data models, resilient APIs and caching strategies that keep infrastructure fast under load.',
  },
  {
    title: 'Applied AI / ML',
    items: ['LangChain', 'RAG', 'OpenAI', 'Embeddings', 'Vector DBs', 'LangGraph'],
    detail: 'LLM integrations and RAG systems that turn raw data into production-ready workflows.',
  },
  {
    title: 'Ship & Operate',
    items: ['Docker', 'AWS', 'Linux', 'CI/CD', 'Bash', 'Git', 'GitHub'],
    detail: 'From local containerized applications to cloud deployed products on platforms like AWS or GCP.',
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Stagger baseDelay={0} stagger={80}>
              <Reveal y={16}>
                <p className="section-heading">/ Stack</p>
              </Reveal>
              <Reveal y={16} delay={40}>
                <h2 className="section-title text-balance">
                  Tech Stack that I have been using
                </h2>
              </Reveal>
            </Stagger>

            <div className="mt-12 space-y-6" role="list" aria-label="Tech stack categories">
              {categories.map(({ title, items, detail }, i) => (
                <Reveal key={title} delay={i * 80} y={16}>
                  <article className="group border border-border rounded-lg p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-ui text-xs text-fg-muted shrink-0">
                        0{String(i + 1)}
                      </span>
                      <h3 className="text-fluid-xl font-semibold tracking-tight text-fg-primary">
                        {title}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <p className="max-w-md text-pretty text-fluid-sm leading-relaxed text-fg-secondary">
                        {detail}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-2" role="list" aria-label={`${title} technologies`}>
                      {items.map((item) => (
                        <li key={item}>
                          <span className="rounded border border-border bg-background px-3 py-1 font-ui text-xs text-fg-secondary transition-colors group-hover:border-primary/40 group-hover:text-fg-primary">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right side spacer for TOC */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}