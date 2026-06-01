import { Briefcase, Building2, Calendar, ChevronRight, MapPin } from 'lucide-react'
import portfolio from '../../portfolio.json'

const Experience = () => {
  const experiences = portfolio.experience

  return (
    <main className='relative min-h-screen overflow-hidden'>
      <section className='relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-16 md:py-20'>
        <header className='mb-12 md:my-16'>
          <h1
            className='animate-fade-in-down mb-4 text-3xl font-extrabold md:text-6xl'
            style={{ animationDelay: '100ms' }}
          >
            Where I&apos;ve been building
          </h1>
          <p
            className='text-foreground/60 animate-fade-in-up text-sm leading-relaxed md:text-lg'
            style={{ animationDelay: '200ms' }}
          >
            A timeline of the teams I&apos;ve shipped with, the problems I&apos;ve owned, and the
            stacks I&apos;ve grown into along the way.
          </p>
        </header>

        <div className='relative'>
          {/* Vertical timeline rail */}
          <div
            className='via-primary/40 absolute top-2 bottom-2 left-3 w-px bg-linear-to-b from-transparent to-transparent md:left-5'
            aria-hidden='true'
          />

          <ol className='flex flex-col gap-10 md:gap-12'>
            {experiences.map((exp, index) => (
              <li
                key={`${exp.company}-${exp.startDate}`}
                className='animate-fade-in-up relative pl-10 md:pl-16'
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {/* Timeline dot */}
                <span
                  className='border-primary bg-background absolute top-5 left-0 flex size-6 items-center justify-center rounded-full border-2 md:size-10'
                  aria-hidden='true'
                >
                  <span className='bg-primary block size-2 rounded-full md:size-3' />
                  {exp.current && (
                    <span className='bg-primary/40 absolute size-6 animate-ping rounded-full md:size-10' />
                  )}
                </span>

                <article className='group border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5 rounded-md border p-5 transition-all duration-300 hover:-translate-y-1 md:p-7'>
                  {/* Meta row: period · type · mode */}
                  <div className='text-foreground/50 mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wider uppercase'>
                    <span className='inline-flex items-center gap-1.5'>
                      <Calendar className='size-3.5' />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className='text-primary/40'>|</span>
                    <span className='inline-flex items-center gap-1.5'>
                      <Briefcase className='size-3.5' />
                      {exp.type}
                    </span>
                    <span className='text-primary/40'>|</span>
                    <span>{exp.mode}</span>
                    {exp.current && (
                      <span className='border-primary/40 bg-primary/10 text-primary ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px]'>
                        <span className='bg-primary size-1.5 animate-pulse rounded-full' />
                        CURRENT
                      </span>
                    )}
                  </div>

                  {/* Role + Company */}
                  <h2 className='group-hover:text-primary mb-1 text-xl font-extrabold transition-colors duration-300 md:text-2xl'>
                    {exp.role}
                  </h2>
                  <div className='text-foreground/70 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm'>
                    <span className='inline-flex items-center gap-1.5 font-semibold'>
                      <Building2 className='text-primary size-4' />
                      {exp.company}
                    </span>
                    <span className='text-primary/40'>·</span>
                    <span className='text-foreground/50 inline-flex items-center gap-1.5'>
                      <MapPin className='size-3.5' />
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className='mb-5 flex flex-col gap-2.5'>
                    {exp.highlights.map(highlight => (
                      <li
                        key={highlight}
                        className='text-foreground/70 flex gap-2 text-sm leading-relaxed md:text-[15px]'
                      >
                        <ChevronRight className='text-primary mt-1 size-4 shrink-0' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className='flex flex-col gap-2'>
                    <p className='text-primary text-xs font-semibold tracking-wider'>
                      :: TECH_STACK
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.techStack.map(tech => (
                        <span
                          key={tech}
                          className='border-primary/20 text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-primary rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}

export default Experience
