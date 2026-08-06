import { Boxes, BrainCircuit, Server } from 'lucide-react'

const categories = [
  {
    icon: Server,
    title: 'Backend',
    id: '01',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    icon: BrainCircuit,
    title: 'AI / ML',
    id: '02',
    items: ['LangChain', 'RAG'],
  },
  {
    icon: Boxes,
    title: 'Mobile / Tools',
    id: '03',
    items: ['Flutter', 'Linux', 'Docker', 'AWS'],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-mono text-sm text-primary">// tech stack</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I build with
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A pragmatic toolkit spanning backend engineering, applied AI, and
            everything needed to ship and operate systems in production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map(({ icon: Icon, title, id, items }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {id}
                </span>
              </div>
              <h3 className="mb-4 text-lg font-semibold">{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
