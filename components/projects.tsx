import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import marketpulseImg from '@/pictures/marketpulse_dashboard.png'
import groundworkImg from '@/pictures/groundwork_cli.png'
import amazonImg from '@/pictures/amazon_price_tracker.png'

const projects = [
  {
    title: 'MarketPulse Dashboard',
    slug: 'marketpulse_dashboard',
    period: 'Nov 2025 - Dec 2025',
    role: 'Solo Developer',
    description:
      'Real-time financial dashboard aggregating stock trends, commodity prices, and currency rates. Live REST APIs plus scrapers, with MongoDB-level caching that cut load times and API spend.',
    tags: ['Python', 'Streamlit', 'Pandas', 'MongoDB', 'REST APIs'],
    img: marketpulseImg,
    github: 'https://github.com/Kanishkp2906/MarketPulse_Dashboard',
    demo: 'https://marketpulse-dashboard-mi94.onrender.com',
  },
  {
    title: 'Groundwork CLI',
    slug: 'groundwork_cli',
    period: 'Apr 2026 - May 2026',
    role: 'Solo Developer',
    description:
      'Published CLI for practising real-world CVE remediation in the terminal. Decoupled FastAPI backend on Hugging Face, Dockerised, with IP rate limiting for reliable and secure traffic.',
    tags: ['Python', 'FastAPI', 'Docker', 'PyPI', 'Hugging Face'],
    img: groundworkImg,
    github: 'https://github.com/Kanishkp2906/groundwork-cli',
    demo: 'https://pypi.org/project/groundwork-cli',
  },
  {
    title: 'Amazon Price Tracker',
    slug: 'amazon_price_tracker',
    period: 'Jan 2026 - Feb 2026',
    role: 'Solo Developer',
    description:
      'Full-stack consumer tool for tracking prices and automating drop alerts — React/TypeScript frontend, FastAPI scoping and task queueing on PostgreSQL and Redis.',
    tags: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Web Scraping'],
    img: amazonImg,
    github: 'https://github.com/Kanishkp2906/AMZ-Price-Tracker',
    demo: 'https://amazonprice-tracker.vercel.app',
  },
]

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-16 flex max-w-3xl flex-col gap-5">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Selected systems, shipped end to end
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              A few products I&apos;ve architected, built, and deployed — from data modeling and
              APIs through to live infrastructure.
            </p>
          </div>
        </Reveal>

        <ul className="flex flex-col">
          {projects.map((project, i) => {
            const index = String(i + 1).padStart(2, '0')
            return (
              <Reveal key={project.slug} delay={i * 80}>
                <li className="group grid gap-8 border-b border-border py-10 last:border-none md:grid-cols-12 md:items-center md:py-12">
                  <div className="order-2 flex flex-col gap-5 md:order-1 md:col-span-7">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-primary">{index}</span>
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {project.period} — {project.role}
                    </p>

                    <p className="max-w-prose text-pretty leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(buttonVariants({ size: 'sm' }), 'font-mono')}
                        >
                          Live Demo
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'font-mono')}
                        >
                          <GithubIcon className="size-4" aria-hidden="true" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>

<a
            href={project.demo ?? project.github}
            target="_blank"
            rel="noreferrer"
            className="order-1 block overflow-hidden rounded-xl border border-border bg-secondary md:order-2 md:col-span-5"
          >
            <div className="overflow-hidden">
              <img
                src={typeof project.img === 'string' ? project.img : project.img.src}
                alt={project.title}
                loading="lazy"
                className="w-full bg-secondary opacity-85 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          </a>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}