import { cn } from '@/lib/utils'
import {
  Check,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from 'lucide-react'
import { useState, type ComponentType } from 'react'
import portfolio from '../../portfolio.json'

type ContactMethod = {
  name: string
  value: string
  href: string
  icon: ComponentType<{ className?: string }>
}

type Social = {
  name: string
  href: string
  icon: ComponentType<{ className?: string }>
}

const contactMethods: ContactMethod[] = [
  {
    name: 'Email',
    value: portfolio.contact.email,
    href: `mailto:${portfolio.contact.email}`,
    icon: Mail,
  },
  {
    name: 'Phone',
    value: portfolio.contact.phone,
    href: `tel:${portfolio.contact.phone}`,
    icon: Phone,
  },
  {
    name: 'Location',
    value: portfolio.location,
    href: `https://www.google.com/maps/search/${encodeURIComponent(portfolio.location)}`,
    icon: MapPin,
  },
]

const socials: Social[] = [
  { name: 'GitHub', href: portfolio.socialLinks.github, icon: Github },
  { name: 'LinkedIn', href: portfolio.socialLinks.linkedin, icon: Linkedin },
  { name: 'Twitter', href: portfolio.socialLinks.twitter, icon: Twitter },
  { name: 'YouTube', href: portfolio.socialLinks.youtube, icon: Youtube },
  { name: 'Instagram', href: portfolio.socialLinks.instagram, icon: Instagram },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${portfolio.contact.email}?subject=${subject}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <main className='relative min-h-screen overflow-hidden px-4 py-8 md:py-16'>
      <section className='relative z-10 mx-auto max-w-5xl'>
        <header className='mb-12 md:mb-16'>
          <h1
            className='animate-fade-in-down mb-4 text-3xl font-extrabold md:text-6xl'
            style={{ animationDelay: '100ms' }}
          >
            Let&apos;s build something together
          </h1>
          <p
            className='text-foreground/60 animate-fade-in-up text-sm leading-relaxed md:text-lg'
            style={{ animationDelay: '200ms' }}
          >
            Have a project in mind, a question, or just want to say hi? Drop a message below and
            I&apos;ll get back to you as soon as I can.
          </p>
        </header>

        <div className='grid gap-10 md:grid-cols-5 md:gap-12'>
          {/* Direct contact + socials */}
          <div
            className='animate-fade-in-up flex flex-col gap-8 md:col-span-2'
            style={{ animationDelay: '300ms' }}
          >
            <div className='flex flex-col gap-4'>
              <p className='text-primary text-sm font-semibold'>:: REACH_ME_DIRECTLY</p>
              {contactMethods.map(({ name, value, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === 'Location' ? '_blank' : undefined}
                  rel={name === 'Location' ? 'noopener noreferrer' : undefined}
                  className='group border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-all duration-300 hover:-translate-y-1'
                >
                  <span className='border-primary/20 text-primary group-hover:border-primary/40 group-hover:bg-primary/10 flex size-11 shrink-0 items-center justify-center rounded-md border transition-all duration-300'>
                    <Icon className='size-5' />
                  </span>
                  <span className='flex min-w-0 flex-col'>
                    <span className='text-foreground/50 text-xs tracking-wider'>
                      {name.toUpperCase()}
                    </span>
                    <span className='group-hover:text-primary truncate text-sm font-semibold transition-colors duration-300'>
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              <p className='text-primary text-sm font-semibold'>:: FIND_ME_ONLINE</p>
              <div className='flex flex-wrap gap-4'>
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={name}
                    title={name}
                    className='border-primary/20 text-primary/80 hover:bg-primary/10 hover:text-primary hover:border-primary/40 flex size-10 items-center justify-center rounded-full border bg-transparent transition-all duration-300 hover:-translate-y-1 hover:rotate-[5deg]'
                  >
                    <Icon className='size-5' />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Message form */}
          <form
            onSubmit={handleSubmit}
            className='animate-fade-in-up border-border bg-muted/30 flex flex-col gap-5 rounded-md border p-6 md:col-span-3 md:p-8'
            style={{ animationDelay: '400ms' }}
          >
            <div className='flex flex-col gap-2'>
              <label htmlFor='name' className='text-primary text-xs font-semibold tracking-wider'>
                YOUR_NAME
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                value={form.name}
                onChange={handleChange}
                placeholder='Ada Lovelace'
                className='bg-background/50 border-border focus:border-primary focus:ring-primary/30 placeholder:text-foreground/30 w-full rounded-md border px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-2'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-primary text-xs font-semibold tracking-wider'>
                YOUR_EMAIL
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={form.email}
                onChange={handleChange}
                placeholder='you@example.com'
                className='bg-background/50 border-border focus:border-primary focus:ring-primary/30 placeholder:text-foreground/30 w-full rounded-md border px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-2'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor='message'
                className='text-primary text-xs font-semibold tracking-wider'
              >
                MESSAGE
              </label>
              <textarea
                id='message'
                name='message'
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your idea...'
                className='bg-background/50 border-border focus:border-primary focus:ring-primary/30 placeholder:text-foreground/30 w-full resize-y rounded-md border px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-2'
              />
            </div>

            <button
              type='submit'
              className={cn(
                'text-background bg-primary hover:shadow-primary/50 flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0',
                { 'bg-primary/80': sent }
              )}
            >
              {sent ? (
                <>
                  <Check className='size-4' />
                  Opening your mail app...
                </>
              ) : (
                <>
                  <Send className='size-4' />
                  Send Message
                </>
              )}
            </button>

            <p className='text-foreground/40 text-center text-xs'>
              // this opens your email client, pre-filled and ready to send
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
