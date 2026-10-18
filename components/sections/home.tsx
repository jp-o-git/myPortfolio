'use client'

import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export const Home = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[90svh] overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:min-h-screen lg:px-12"
    >
      <div className="mx-auto grid min-h-[calc(90svh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            <span className="h-px w-10 bg-[var(--accent)]" />
            Software developer · Philippines
          </p>

          <h1 className="mb-7 text-6xl font-bold leading-[0.94] tracking-[-0.07em] text-foreground sm:text-7xl lg:text-[6.7rem]">
            John Paul
            <br />
            <span className="text-[var(--accent)]">Olimpo</span>
          </h1>

          <p className="mb-9 max-w-2xl text-lg leading-8 text-gray-400/90 sm:text-xl">
            Junior Full-Stack Developer with experience building web
            applications, integrating frontend interfaces with backend services,
            and working with databases and REST APIs.
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={scrollToProjects}
              className="h-12 rounded-md bg-[var(--accent)] px-6 font-semibold text-white hover:bg-[var(--accent-dark)]"
            >
              View my work
              <ArrowDownRight className="ml-1 h-4 w-4" />
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="h-12 rounded-md border-[var(--line)] bg-transparent px-6 font-semibold text-foreground hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
            >
              Get in touch
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-2 text-sm text-gray-400/90">Find me on</span>
            <a
              href="https://github.com/jp-o-git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[var(--line)] p-3 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/olimpo-john-paul-dc-13a9621b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[var(--line)] p-3 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:johnpaulolimpo7@gmail.com"
              aria-label="Email"
              className="rounded-full border border-[var(--line)] p-3 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[27rem] lg:mr-0 lg:block">
          <div className="absolute -right-4 -top-4 h-full w-full border border-[var(--accent)] sm:-right-6 sm:-top-6" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e1d7]">
            <Image
              src="/jp.png"
              alt="John Paul Olimpo"
              fill
              priority
              sizes="(max-width: 1024px) 85vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-4 text-right text-xs font-medium uppercase tracking-[0.17em] text-gray-400/90">
            Building useful things for the web
          </p>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs font-medium uppercase tracking-[0.18em] text-gray-400/90 hover:text-[var(--accent)] lg:block"
      >
        Scroll to explore
      </a>
    </section>
  )
}
