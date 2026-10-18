'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-4 px-5 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center sm:flex-row sm:gap-6 sm:px-8 sm:pt-7 sm:pb-[max(1.75rem,env(safe-area-inset-bottom))] sm:text-left lg:px-12">
        <p className="text-sm leading-relaxed text-gray-400/90">
          © {currentYear} John Paul Olimpo
        </p>

        <Button
          onClick={scrollToTop}
          variant="outline"
          className="group h-10 shrink-0 border-[var(--line)] bg-transparent px-5 font-medium text-foreground hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
        >
          <ArrowUp className="mr-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Back to top
        </Button>
      </div>
    </footer>
  )
}
