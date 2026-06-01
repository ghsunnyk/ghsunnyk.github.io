import { cn } from '@/lib/utils'
import { useTheme } from '@/providers/ThemeProvider'
import { Calendar, ChevronRight, ExternalLink, FolderGit2, Github } from 'lucide-react'
import { useState } from 'react'
import portfolio from '../../portfolio.json'

const Projects = () => {
  const { theme } = useTheme()
  const projects = portfolio.projects
  const [selected, setSelected] = useState(0)

  const project = projects[selected]
  const imageSrc =
    theme === 'dark' && project.images?.dark ? project.images.dark : project.images?.light

  return (
    <main className='relative min-h-screen overflow-hidden'>
      <section className='relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-16 md:py-20'>
        <header className='mb-8 md:my-16'>
          <h1
            className='animate-fade-in-down mb-4 text-3xl font-extrabold md:text-6xl'
            style={{ animationDelay: '100ms' }}
          >
            Things I&apos;ve built
          </h1>
          <p
            className='text-foreground/60 animate-fade-in-up text-sm leading-relaxed md:text-lg'
            style={{ animationDelay: '200ms' }}
          >
            A handful of projects that taught me the most — pick one from the list to see what it
            does, how it&apos;s built, and what I learned along the way.
          </p>
        </header>

        <div className='grid gap-6 md:grid-cols-5 md:gap-10'>
          {/* Project list — horizontal scroll cards on mobile, full sticky vertical list on desktop */}
          <aside
            className='animate-fade-in-up min-w-0 md:col-span-2'
            style={{ animationDelay: '300ms' }}
          >
            <p className='text-primary mb-3 text-xs font-semibold tracking-wider md:mb-4'>
              :: SELECT_PROJECT
            </p>

            <ul
              className='-mx-4 flex flex-nowrap gap-3 overflow-x-auto px-4 pb-3 md:sticky md:top-24 md:mx-0 md:flex-col md:gap-3 md:overflow-visible md:px-0 md:pb-0'
              role='tablist'
              aria-label='Projects'
              style={{ scrollbarWidth: 'thin' }}
            >
              {projects.map((p, i) => {
                const isActive = i === selected
                return (
                  <li key={p.slug} className='shrink-0 md:w-full md:shrink'>
                    <button
                      onClick={() => setSelected(i)}
                      role='tab'
                      aria-selected={isActive}
                      className={cn(
                        'group relative cursor-pointer rounded-md border text-left transition-all duration-300',
                        // mobile: horizontally scrollable info card
                        'w-56 px-4 py-3',
                        // desktop: full vertical card
                        'md:w-full md:overflow-hidden md:px-5 md:py-5 md:hover:-translate-y-1',
                        isActive
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5'
                      )}
                    >
                      {/* Active indicator bar — desktop only */}
                      <span
                        aria-hidden='true'
                        className={cn(
                          'bg-primary absolute top-0 left-0 hidden h-full w-1 transition-all duration-300 md:block',
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        )}
                      />

                      {/* Mobile: card content with number + name + tagline */}
                      <div className='flex items-center gap-3 md:hidden'>
                        <span
                          className={cn(
                            'text-2xl font-extrabold tracking-tight transition-colors duration-300',
                            isActive ? 'text-primary' : 'text-foreground/25'
                          )}
                        >
                          0{i + 1}
                        </span>
                        <div className='flex min-w-0 flex-col'>
                          <h3
                            className={cn(
                              'truncate text-sm font-bold transition-colors duration-300',
                              isActive ? 'text-primary' : 'text-foreground/90'
                            )}
                          >
                            {p.name}
                          </h3>
                          <p className='text-foreground/60 truncate text-[11px]'>{p.tagline}</p>
                        </div>
                      </div>

                      {/* Desktop: full card content */}
                      <div className='hidden md:block'>
                        <div className='mb-2 flex items-center justify-between gap-2'>
                          <span
                            className={cn(
                              'text-foreground/40 text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300',
                              { 'text-primary': isActive }
                            )}
                          >
                            0{i + 1}
                          </span>
                          <span className='text-foreground/50 inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase'>
                            <Calendar className='size-3' />
                            {p.year}
                          </span>
                        </div>

                        <h3
                          className={cn(
                            'mb-1 text-lg font-extrabold transition-colors duration-300',
                            isActive ? 'text-primary' : 'group-hover:text-primary'
                          )}
                        >
                          {p.name}
                        </h3>
                        <p className='text-foreground/60 line-clamp-2 text-sm'>{p.tagline}</p>

                        <ChevronRight
                          className={cn(
                            'text-primary absolute top-1/2 right-3 size-4 -translate-y-1/2 transition-all duration-300',
                            isActive
                              ? 'translate-x-0 opacity-100'
                              : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                          )}
                        />
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </aside>

          {/* Project detail — right side on desktop */}
          <article
            key={project.slug}
            className='animate-fade-in-up md:col-span-3'
            style={{ animationDelay: '350ms' }}
          >
            <div
              key={`${project.slug}-${theme}`}
              className='border-primary/20 bg-muted/30 group hover:border-primary/40 relative aspect-video w-full overflow-hidden rounded-md border transition-all duration-300 hover:shadow-lg'
            >
              <img
                src={imageSrc}
                alt={`${project.name} screenshot`}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>

            {/* Meta + title */}
            <div className='mt-5 flex items-center gap-2 md:mt-6'>
              <FolderGit2 className='text-primary size-4' />
              <p className='text-primary text-xs font-semibold tracking-wider'>
                :: PROJECT_{(selected + 1).toString().padStart(2, '0')}
              </p>
              <span className='text-foreground/40 ml-auto inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase md:hidden'>
                <Calendar className='size-3' />
                {project.year}
              </span>
            </div>

            <h2 className='mt-2 text-2xl font-extrabold md:text-4xl'>{project.name}</h2>
            <p className='text-foreground/60 mt-1 text-sm font-semibold md:text-base'>
              {project.tagline}
            </p>

            <p className='text-foreground/70 mt-4 text-sm leading-relaxed md:mt-5 md:text-base'>
              {project.description}
            </p>

            {/* Highlights */}
            <ul className='mt-5 flex flex-col gap-2.5 md:mt-6'>
              {project.highlights.map(highlight => (
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
            <div className='mt-6 flex flex-col gap-3 md:mt-7'>
              <p className='text-primary text-xs font-semibold tracking-wider'>:: TECH_STACK</p>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className='border-primary/20 text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-primary rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.links.github || project.links.live) && (
              <div className='mt-6 flex flex-wrap gap-3 md:mt-7'>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 md:flex-initial'
                  >
                    <Github className='size-4' />
                    Source Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-background bg-primary hover:shadow-primary/50 inline-flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-initial'
                  >
                    <ExternalLink className='size-4' />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  )
}

export default Projects
