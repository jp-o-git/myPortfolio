'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import cn from 'classnames'
import Image from 'next/image'
import jpLogo from '../public/jp-logo.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Automation', href: '#automation' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b border-transparent px-4 py-2 transition-all duration-300 sm:px-8',
        isScrolled
          ? 'border-[var(--line)] bg-background/95 shadow-sm backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between">
          <a
            href="#home"
            aria-label="John Paul Olimpo, home"
            className="flex items-center gap-3"
          >
            <Image
              src={jpLogo}
              alt="JP Logo"
              width={36}
              height={36}
              className="h-16 w-16 object-contain"
            />
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
              John Paul Olimpo
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="nav-button cursor-pointer text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer p-2 text-foreground hover:bg-black/5"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute left-4 right-4 top-[4.25rem] rounded-md border border-[var(--line)] bg-background/95 py-2 shadow-lg backdrop-blur lg:hidden sm:left-8 sm:right-8"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full px-5 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-black/5 hover:text-[var(--accent)]"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
