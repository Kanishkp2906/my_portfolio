import { Boxes, BrainCircuit, Server } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const categories = [
  {
    icon: Server,
    title: 'Backend engineering',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'MongoDB', 'Supabase'],
    detail: 'Clean data models, resilient APIs, and infrastructure that stays fast under load.',
  },
  {
    icon: BrainCircuit,
    title: 'Applied AI / ML',
    items: ['LangChain', 'RAG', 'OpenAI', 'Embeddings'],
    detail: 'Retrieval systems that turn raw data into intelligent, production-ready workflows.',
  },
  {
    icon: Boxes,
    title: 'Ship & operate',
    items: ['Docker', 'AWS', 'Linux', 'Flutter', 'CI/CD'],
    detail: 'From containerized deploys to cross-platform clients, I take systems all the way live.',
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-16 flex max-w-3xl flex-col gap-5">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              A pragmatic toolkit for shipping systems
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Backend engineering, applied AI, and the operational layer — everything it takes to
              go from an idea to something running in production.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-flow-dense grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-12">
          {categories.map(({ icon: Icon, title, items, detail }, i) => {
            const span =
              i === 2
                ? 'md:col-span-12'
                : i % 2 === 0
                  ? 'md:col-span-7'
                  : 'md:col-span-5'
            return (
              <Reveal key={title} delay={i * 90} className={span}>
                <div className="group flex h-full flex-col justify-between gap-10 bg-background p-8 transition-colors duration-500 hover:bg-muted/30 sm:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-12 items-center justify-center rounded-md border border-border/70 bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/60">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-5 text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="mb-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                      {detail}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground transition-colors group-hover:border-primary/40"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}