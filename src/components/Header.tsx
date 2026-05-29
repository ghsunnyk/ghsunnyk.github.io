import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  useEffect(() => {
    //eslint-disable-next-line
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className='fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-end px-4 md:h-20 md:items-end md:px-24'>
      <nav className='hidden md:block'>
        <ul className='flex gap-8'>
          {links.map(link => (
            <li
              key={link.name}
              className={cn('animate-fade-in-down hover:text-primary', {
                'text-primary': pathname === link.href,
              })}
              style={{ animationDelay: '100ms' }}
            >
              <Link to={link.href} className='group relative block py-1'>
                <span
                  className={cn('relative tracking-wide transition-all duration-300', {
                    'text-primary': pathname === link.href,
                    'group-hover:text-primary': pathname !== link.href,
                  })}
                >
                  {link.name}
                </span>

                <span
                  className={cn(
                    'bg-primary absolute bottom-0 left-0 h-0.5 transition-all duration-300',
                    {
                      'w-1/2': pathname === link.href,
                      'w-0 group-hover:w-1/2': pathname !== link.href,
                    }
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-primary md:hidden'>
        <Menu className='size-6' />
      </button>

      <div
        className={cn(
          'bg-background/50 fixed inset-0 top-0 right-0 z-50 w-full shadow-2xl backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden',
          {
            'translate-x-0': isMenuOpen,
            'translate-x-full': !isMenuOpen,
          }
        )}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-primary absolute top-5 right-4'
        >
          <X className='size-6' />
        </button>
        <div className='flex h-full flex-col justify-center'>
          <nav className=''>
            <ul className='flex flex-col items-center gap-8'>
              {links.map(link => (
                <li
                  key={link.name}
                  className={cn('hover:text-primary', {
                    'text-primary': pathname === link.href,
                  })}
                >
                  <Link to={link.href} className='group relative block py-1'>
                    <span
                      className={cn(
                        'text-foreground/80 relative tracking-wide transition-all duration-300',
                        {
                          'text-primary': pathname === link.href,
                          'group-hover:text-primary': pathname !== link.href,
                        }
                      )}
                    >
                      {link.name}
                    </span>

                    <span
                      className={cn(
                        'bg-primary absolute bottom-0 left-0 h-0.5 transition-all duration-300',
                        {
                          'w-1/2': pathname === link.href,
                          'w-0 group-hover:w-1/2': pathname !== link.href,
                        }
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
