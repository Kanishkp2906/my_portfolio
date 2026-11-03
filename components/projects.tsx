'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/brand-icons';
import { Button } from '@/components/ui/button';
import { Reveal, Stagger } from '@/components/reveal';

const projects = [
  {
    title: 'MarketPulse Dashboard',
    slug: 'marketpulse_dashboard',
    period: 'Nov 2025 – Dec 2025',
    role: 'Solo Developer',
    description:
      'Real-time financial dashboard showcasing stock trends, commodity prices, and currency rates. Live REST APIs plus scrapers, with MongoDB-level caching that cut load times and API spend.',
    architecture: [
      'MongoDB caching layer reduced API calls by 87%',
      'Streamlit frontend with real-time WebSocket updates',
      'Modular scraper pipeline with exponential backoff',
      'Deployed on Render with auto-scaling',
    ],
    tags: ['Python', 'Streamlit', 'Pandas', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Kanishkp2906/MarketPulse_Dashboard',
    live: 'https://marketpulse-dashboard-mi94.onrender.com',
    logo: '/projects/marketpulse_logo.png',
  },
  {
    title: 'Groundwork CLI',
    slug: 'groundwork_cli',
    period: 'Apr 2026 – May 2026',
    role: 'Solo Developer',
    description:
      'Published CLI for practising real-world CVE debugging in the terminal. FastAPI backend on Hugging Face, Dockerised, with IP rate limiting for reliable and secure traffic.',
    architecture: [
      'FastAPI backend deployed on Hugging Face Spaces',
      'Docker multi-stage build for minimal image size',
      'Token bucket rate limiting per IP',
      'Published to PyPI with automated CI/CD',
    ],
    tags: ['Python', 'FastAPI', 'Docker', 'PyPI', 'Hugging Face'],
    github: 'https://github.com/Kanishkp2906/groundwork-cli',
    live: 'https://pypi.org/project/groundwork-cli',
    logo: '/projects/groundwork_logo.png',
  },
  {
    title: 'Amazon Price Tracker',
    slug: 'amazon_price_tracker',
    period: 'Jan 2026 – Feb 2026',
    role: 'Solo Developer',
    description:
      'Full-stack consumer tool for tracking prices and automating drop alerts. React/TypeScript frontend, FastAPI scoping and task queueing on PostgreSQL and Redis.',
    architecture: [
      'React/TypeScript frontend with TanStack Query',
      'FastAPI task queue with Redis + Celery workers',
      'PostgreSQL for price history & user alerts',
      'Distributed scraping with proxy rotation',
      'Vercel + Railway deployment',
    ],
    tags: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Web Scraping'],
    github: 'https://github.com/Kanishkp2906/AMZ-Price-Tracker',
    live: 'https://amazonprice-tracker.vercel.app',
    logo: '/projects/amz_logo.png',
  },
  {
    title: 'RFP Auto Drafter',
    slug: 'rfp_auto_drafter',
    period: 'Aug 2026 – Oct 2026',
    role: 'Solo Developer',
    description:
      'AI platform that turns static RFPs into queryable, source-grounded knowledge. Upload a document, chat with a LangGraph agent, and get answers that cite the exact sections they were built on.',
    architecture: [
      'LangGraph agent orchestration for multi-turn RAG chat',
      'Supabase PostgreSQL checkpoints and auth',
      'Redis rate limiting with background jobs via RQ',
      'Full-text PDF parsing for document ingestion',
      'Source citations on every chat answer',
      'React + Vite + TypeScript SPA deployed on Vercel',
    ],
    tags: ['FastAPI', 'LangGraph', 'RAG', 'Supabase', 'Redis', 'React'],
    github: 'https://github.com/Kanishkp2906/RFP-Auto-Drafter',
    live: 'https://rfp.kanishkprasad.site',
    logo: '/projects/rfp_logo.png',
  },
];

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Stagger baseDelay={0} stagger={80}>
              <Reveal y={16}>
                <p className="section-heading">/ Work</p>
              </Reveal>
              <Reveal y={16} delay={40}>
                <h2 className="section-title text-balance">
                  Projects that I have built and deployed
                </h2>
              </Reveal>
            </Stagger>

            <div className="mt-12 space-y-8" role="list" aria-label="Projects">
              {projects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80} y={16}>
                  <article
                    className="group relative border border-border rounded-lg overflow-hidden hover-lift focus-within:border-strong"
                    role="listitem"
                  >
                    {/* Stretched link — the whole card opens the live project */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 z-0 focus-visible:outline-none"
                      aria-label={`Open live version of ${project.title}`}
                    />

                    <div className="p-6 pb-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="size-8 rounded object-contain bg-background"
                            loading="lazy"
                          />
                          <h3 className="text-fluid-2xl font-semibold tracking-tight text-fg-primary">
                            {project.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          className="size-4 shrink-0 mt-2 text-fg-muted transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="font-ui text-xs text-fg-muted">
                        {[project.role, project.period].filter(Boolean).join(' · ')}
                      </p>
                    </div>

                    <div className="px-6 py-6">
                      <p className="mb-6 text-pretty text-fluid-base leading-relaxed text-fg-secondary">
                        {project.description}
                      </p>

                      {/* Architecture details - expandable */}
                      <div className="mb-4">
                        <button
                          type="button"
                          onClick={() => setExpanded(expanded === project.slug ? null : project.slug)}
                          className="relative z-10 flex items-center gap-2 font-ui text-xs text-fg-muted hover:text-primary transition-colors"
                          aria-expanded={expanded === project.slug}
                          aria-controls={`arch-${project.slug}`}
                        >
                          {expanded === project.slug ? (
                            <>
                              <ChevronUp className="size-3.5" aria-hidden="true" />
                              Hide architecture
                            </>
                          ) : (
                            <>
                              <ChevronDown className="size-3.5" aria-hidden="true" />
                              Show architecture
                            </>
                          )}
                        </button>

                        <div
                          id={`arch-${project.slug}`}
                          className="mt-4 space-y-3 overflow-hidden transition-all duration-200"
                          style={{
                            maxHeight: expanded === project.slug ? '500px' : '0',
                            opacity: expanded === project.slug ? 1 : 0,
                            paddingTop: expanded === project.slug ? '0.5rem' : '0',
                          }}
                        >
                          {project.architecture.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 font-ui text-xs text-fg-secondary leading-relaxed"
                            >
                              <span className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech tags + source code link — same row */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                          {project.tags.map((tag) => (
                            <li key={tag}>
                              <span className="rounded border border-border bg-background px-3 py-1 font-ui text-xs text-fg-secondary transition-colors group-hover:border-primary/40 group-hover:text-fg-primary">
                                {tag}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="relative z-10"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <Button variant="default" size="sm" className="h-8 gap-1.5 px-3 normal-case tracking-normal">
                            <GithubIcon className="size-3.5" />
                            code
                          </Button>
                        </a>
                      </div>
                    </div>
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