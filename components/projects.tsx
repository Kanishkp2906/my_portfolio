import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GithubIcon } from '@/components/brand-icons'

const projects = [
  {
    title: 'MarketPulse Dashboard',
    slug: 'marketpulse_dashboard',
    period: 'Nov 2025 - Dec 2025',
    role: 'Solo Developer',
    description:
      'Developed a real-time financial dashboard using Python and Streamlit to aggregate and visualize stock market trends, commodity prices, and currency exchange rates. Integrated multiple REST APIs and web scrapers for live data fetching, and optimized load times while reducing API costs by caching historical data in MongoDB.',
    tags: ['Python', 'Streamlit', 'Pandas', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Kanishkp2906/MarketPulse_Dashboard',
    demo: 'https://marketpulse-dashboard-mi94.onrender.com',
  },
  {
    title: 'Groundwork CLI',
    slug: 'groundwork_cli',
    period: 'Apr 2026 - May 2026',
    role: 'Solo Developer',
    description:
      'Built and published an interactive CLI tool to PyPI that lets developers practice fixing real-world cybersecurity vulnerabilities (CVEs) directly in their terminal. Powered the CLI with a decoupled FastAPI REST backend hosted on Hugging Face, utilizing Docker for deployment and implementing IP rate limiting to ensure reliable, secure API traffic.',
    tags: ['Python', 'FastAPI', 'Docker', 'PyPI', 'Hugging Face'],
    github: 'https://github.com/Kanishkp2906/groundwork-cli',
    demo: 'https://pypi.org/project/groundwork-cli',
  },
  {
    title: 'Amazon Price Tracker',
    slug: 'amazon_price_tracker',
    period: 'Jan 2026 - Feb 2026',
    role: 'Solo Developer',
    description:
      'Engineered a full-stack consumer tool to track online product prices and automate drop alerts, utilizing a React/TypeScript frontend and a FastAPI backend. Developed a robust backend for web scraping and background task queuing using PostgreSQL and Redis, alongside an intuitive React frontend with interactive data visualizations.',
    tags: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Web Scraping'],
    github: 'https://github.com/Kanishkp2906/AMZ-Price-Tracker',
    demo: 'https://amazonprice-tracker.vercel.app',
  },
]

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-mono text-sm text-primary">// featured work</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected projects
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A few systems I&apos;ve designed and shipped end to end, from
            architecture and data modeling to deployment.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => {
            return (
              <article
                key={project.title}
                className="p-6 sm:p-8 border border-border bg-card"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                {project.period && (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {project.period} — {project.role}
                  </p>
                )}
                {project.description && (
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                )}

                {project.tags.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {(project.demo || project.github) && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ size: 'sm' }), 'font-mono')}
                      >
                        Live Demo
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({ variant: 'outline', size: 'sm' }),
                          'font-mono',
                        )}
                      >
                        <GithubIcon className="size-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}