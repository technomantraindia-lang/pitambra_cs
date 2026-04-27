'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return

      ticking = true
      requestAnimationFrame(() => {
        setScrolled((wasScrolled) => {
          const nextScrolled = window.scrollY > 50
          return wasScrolled === nextScrolled ? wasScrolled : nextScrolled
        })
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/director', label: 'Director' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-500 ${
      scrolled 
        ? 'border-border/70 bg-background/90 backdrop-blur-lg shadow-[0_12px_40px_rgba(31,41,55,0.12)]' 
        : 'border-transparent bg-white/45 backdrop-blur'
    }`}>
      <nav className="flex items-center justify-between pl-0 pr-2 sm:pl-0 sm:pr-4 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="-ml-14 flex items-center gap-3 group shrink-0">
          <div className="relative h-[58px] w-[380px] sm:h-[68px] sm:w-[460px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Pitambra Fab Tech"
              fill
              className="object-contain object-center scale-x-[1.45] scale-y-100 sm:scale-x-[1.55]"
              priority
              sizes="(max-width: 640px) 380px, 460px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-base font-bold transition-colors group ${
                pathname === link.href ? 'text-primary' : 'text-foreground hover:text-secondary'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 ${
                pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-secondary to-primary text-primary-foreground font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Quote
          <Zap size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-secondary" /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border md:hidden animate-slideInDown">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-bold transition-colors py-2 px-3 rounded-lg hover:bg-muted/50 ${
                    pathname === link.href ? 'text-primary bg-muted/50' : 'text-foreground hover:text-secondary'
                  }`}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-base font-bold text-primary-foreground bg-gradient-to-r from-secondary to-primary px-4 py-3 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
