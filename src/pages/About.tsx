import {
  Calendar,
  ChevronRight,
  Download,
  GraduationCap,
  MapPin,
  Sparkles,
  User,
} from 'lucide-react'
import portfolio from '../../portfolio.json'

const About = () => {
  const { aboutPage, skills, education, profileImage, resume, location } = portfolio

  return (
    <main className='relative min-h-screen overflow-hidden'>
      <section className='relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-16 md:py-20'>
        <header className='mb-12 md:my-16'>
          <h1
            className='animate-fade-in-down mb-4 text-3xl font-extrabold md:text-6xl'
            style={{ animationDelay: '100ms' }}
          >
            {aboutPage.title}
          </h1>
          <p
            className='text-foreground/60 animate-fade-in-up text-sm leading-relaxed md:text-lg'
            style={{ animationDelay: '200ms' }}
          >
            {aboutPage.subtitle}
          </p>
        </header>

        {/* Intro: portrait + bio */}
        <div className='mb-16 grid gap-10 md:grid-cols-5 md:gap-12'>
          <div className='animate-fade-in-up md:col-span-2' style={{ animationDelay: '300ms' }}>
            <div className='border-primary/20 bg-muted/30 group hover:border-primary/40 relative aspect-square w-full overflow-hidden rounded-md border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
              <img
                src={profileImage}
                alt={portfolio.name}
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement
                    ?.querySelector('[data-fallback]')
                    ?.classList.remove('hidden')
                }}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div
                data-fallback
                className='text-primary/60 absolute inset-0 hidden flex-col items-center justify-center gap-3'
              >
                <User className='size-20' />
                <p className='text-foreground/40 px-4 text-center text-xs'>
                  // drop your picture at public{profileImage}
                </p>
              </div>
            </div>

            <div className='text-foreground/60 mt-4 flex items-center justify-center gap-2 text-sm'>
              <MapPin className='text-primary size-4' />
              <span>{location}</span>
            </div>
          </div>

          <div
            className='animate-fade-in-up flex flex-col gap-5 md:col-span-3'
            style={{ animationDelay: '400ms' }}
          >
            <p className='text-primary text-sm font-semibold'>:: WHO_AM_I</p>
            {aboutPage.intro.map((para, idx) => (
              <p key={idx} className='text-foreground/70 text-sm leading-relaxed md:text-base'>
                {para}
              </p>
            ))}

            <div className='mt-2 flex flex-wrap gap-3'>
              <a
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
                className='text-background bg-primary hover:shadow-primary/50 inline-flex cursor-pointer items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <Download className='size-4' />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='animate-fade-in-up mb-16' style={{ animationDelay: '500ms' }}>
          <div className='mb-6 flex items-center gap-3'>
            <Sparkles className='text-primary size-5' />
            <h2 className='text-2xl font-extrabold md:text-3xl'>What I work with</h2>
          </div>
          <p className='text-primary mb-6 text-xs font-semibold tracking-wider'>:: TECH_STACK</p>

          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((group, idx) => (
              <div
                key={group.category}
                className='group border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5 animate-fade-in-up rounded-md border p-5 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${550 + idx * 60}ms` }}
              >
                <h3 className='group-hover:text-primary mb-4 text-sm font-bold tracking-wider uppercase transition-colors duration-300'>
                  {group.category}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {group.items.map(item => (
                    <span
                      key={item}
                      className='border-primary/20 text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-primary rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className='animate-fade-in-up mb-16' style={{ animationDelay: '700ms' }}>
          <div className='mb-6 flex items-center gap-3'>
            <GraduationCap className='text-primary size-5' />
            <h2 className='text-2xl font-extrabold md:text-3xl'>Education</h2>
          </div>
          <p className='text-primary mb-8 text-xs font-semibold tracking-wider'>:: ACADEMICS</p>

          <div className='relative'>
            <div
              className='via-primary/40 absolute top-2 bottom-2 left-3 w-px bg-linear-to-b from-transparent to-transparent md:left-5'
              aria-hidden='true'
            />

            <ol className='flex flex-col gap-8 md:gap-10'>
              {education.map((edu, idx) => (
                <li
                  key={`${edu.degree}-${edu.endYear}`}
                  className='animate-fade-in-up relative pl-10 md:pl-16'
                  style={{ animationDelay: `${800 + idx * 100}ms` }}
                >
                  <span
                    className='border-primary bg-background absolute top-5 left-0 flex size-6 items-center justify-center rounded-full border-2 md:size-10'
                    aria-hidden='true'
                  >
                    <GraduationCap className='text-primary size-3 md:size-4' />
                  </span>

                  <article className='group border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5 rounded-md border p-5 transition-all duration-300 hover:-translate-y-1 md:p-7'>
                    <div className='text-foreground/50 mb-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase'>
                      <Calendar className='size-3.5' />
                      {edu.startYear} — {edu.endYear}
                    </div>

                    <h3 className='group-hover:text-primary mb-1 text-lg font-extrabold transition-colors duration-300 md:text-xl'>
                      {edu.degree}
                    </h3>
                    <p className='text-foreground/70 mb-3 text-sm font-semibold md:text-base'>
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className='text-foreground/60 flex gap-2 text-sm leading-relaxed'>
                        <ChevronRight className='text-primary mt-1 size-4 shrink-0' />
                        <span>{edu.description}</span>
                      </p>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Fun facts */}
        <div className='animate-fade-in-up' style={{ animationDelay: '1100ms' }}>
          <p className='text-primary mb-4 text-xs font-semibold tracking-wider'>:: FUN_FACTS</p>
          <div className='grid gap-3 md:grid-cols-2'>
            {aboutPage.funFacts.map((fact, idx) => (
              <div
                key={fact}
                className='border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5 flex items-center gap-3 rounded-md border p-4 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${1150 + idx * 60}ms` }}
              >
                <span className='text-primary text-lg font-bold'>{'>'}</span>
                <span className='text-foreground/70 text-sm'>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
