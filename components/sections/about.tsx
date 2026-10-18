'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume - John Paul Olimpo - Software Engineer.pdf'
    link.download = 'Resume - John Paul Olimpo - Software Engineer.pdf'
    link.click()
  }

  return (
    <section id="about" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -bottom-4 -left-4 h-full w-full bg-[#ded8cc]" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e1d7]">
            <Image
              src="/jp.png"
              alt="John Paul Olimpo"
              width={700}
              height={875}
              sizes="(max-width: 1024px) 85vw, 32vw"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400/90">
            A little about me
          </p>
        </div>

        <div>
          <div className="section-heading mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Background
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              Curious by nature.
              <br />
              <span className="text-[var(--accent)]">Developer by craft.</span>
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-gray-400/90">
            <p>
              I am a Computer Engineering graduate from the Polytechnic
              University of the Philippines with professional experience in
              full-stack web development. I have worked on frontend interfaces,
              websites, and web applications using React, Next.js, TypeScript,
              Vue.js, and Tailwind CSS, along with backend technologies such as
              Python, FastAPI, REST APIs, and PostgreSQL.
            </p>

            <p>
              My experience includes building user interfaces, implementing
              application workflows, integrating frontend components with
              backend APIs, working with databases, and debugging application
              issues. I enjoy understanding how different parts of a web
              application work together to deliver functional and reliable
              solutions.
            </p>

            <p>
              I am continuously strengthening my full-stack development skills
              through professional experience, personal projects, and hands-on
              learning. My goal is to build scalable web applications, take on
              more complex development challenges, and continue growing as a
              well-rounded full-stack developer.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleDownloadResume}
              className="h-12 rounded-md bg-[var(--accent)] px-5 font-semibold text-white hover:bg-[var(--accent-dark)]"
            >
              <Download className="mr-1 h-4 w-4" />
              Download resume
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-md border-[var(--line)] bg-transparent px-5 font-semibold text-foreground hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let&apos;s connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
