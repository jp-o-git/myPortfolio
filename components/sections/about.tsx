'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume - John Paul Olimpo - Software Engineer.pdf'
    link.download = 'Resume - John Paul Olimpo - Software Engineer.pdf'
    link.click()
  }

  return (
    <section
      id="about"
      className="bg-background py-32 lg:py-32 md:justify-center md:items-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up px-3">
            <h2 className="text-4xl mb-6 font-bold">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 flex-grow text-muted-foreground leading-relaxed text-justify text-gray-400/90">
              <p>
                I am a Computer Engineering graduate from the Polytechnic
                University of the Philippines with professional experience in
                full-stack web development. I have worked on frontend
                interfaces, websites, and web applications using React, Next.js,
                TypeScript, Vue.js, and Tailwind CSS, along with backend
                technologies such as Python, FastAPI, REST APIs, and PostgreSQL.
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

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={handleDownloadResume}
                className="gradient-bg group font-medium hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="ghost border font-medium border-gray-500/20 gradient-text hover:text-inherit contact-btn"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {"Let's"} Connect
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative border-b-4 border-emerald-400">
            <Image
              src="/jp.png"
              alt="JohnPaul-Photo"
              width={700}
              height={700}
              className="ml-5 block"
              style={{
                filter: 'drop-shadow(0 0 25px rgba(16,185,129,0.8))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
