'use client'

import { useState } from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import cn from 'classnames'
import { Button } from '../ui/Button'

interface Experience {
  id: string
  title: string
  company: string
  duration: string
  description: string
  longDescription: string
  category: string[]
  tech: string[]
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Lion Sales Funnel · Freelance',
    duration: 'September 2025 - September 2026',
    description:
      'Built and deployed client landing pages, Kajabi sales pages, and a Next.js recruiting form as an on-call frontend developer.',
    longDescription:
      'Worked as an on-call frontend developer for Lion Sales Funnel, delivering client pages against fixed launch deadlines. I built landing pages in React and Vue, including one reusable design adapted into three client sites by swapping content only, created Kajabi sales and replay pages that matched the client\u2019s requested UI and brand guidelines, and built a Next.js recruiting form with validation and a scored quiz.',
    category: ['Frontend', 'Web Development'],
    tech: [
      'React',
      'Vue.js',
      'Next.js',
      'Kajabi',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
      'Canva',
    ],
    responsibilities: [
      'Built and deployed 5 client landing pages in React and Vue, including one reusable design adapted into 3 client sites by swapping content only',
      'Built a Kajabi sales page and a workshop replay page for a client launch, matching the client\u2019s requested UI and brand guidelines, with positive client feedback',
      'Built a recruiting application form in Next.js with input validation and a quiz with a score result, submitting responses directly to the company\u2019s database',
      'Delivered each page against fixed launch deadlines',
      'Handled manual QA and bug reporting, and edited website graphics in Canva',
    ],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Ally Public Adjusting · Contract',
    duration: 'January 2026 - August 2026',
    description:
      'Built React interfaces and database queries for an insurance claims platform, and improved its text-extraction pipeline to ~96% word-level F1.',
    longDescription:
      'Worked across the frontend and backend of an insurance claims platform. On the frontend I built React UI components, workflows, and API integrations. On the backend I wrote the database queries that fetch extracted claim data, such as the date of loss, for display in the interface, and I worked on the document-extraction pipeline, improving text-extraction accuracy from about 85% to about 96% word-level F1 across 97 test documents.',
    category: ['Full-stack'],
    tech: [
      'React',
      'TypeScript',
      'PostgreSQL',
      'FastAPI',
      'REST API',
      'Alembic',
    ],
    responsibilities: [
      'Built React UI components, workflows, and API integrations',
      'Wrote the database queries that fetch extracted claim data (such as date of loss) for display in the frontend',
      'Improved the backend extraction pipeline, raising text-extraction accuracy from ~85% to ~96% word-level F1 across 97 test documents by debugging and refining extraction logic and prompt context',
      'Removed duplicate extracted content by ranking extracted tables by size and checking whether larger tables already covered smaller snippets',
    ],
  },
  {
    id: '3',
    title: 'Software Engineer Intern – DiSH',
    company: 'Hooli Software · Microsoft Project',
    duration: 'June 2025 – September 2025',
    description:
      'Improved web accessibility with keyboard navigation and screen-reader labels on a Microsoft-related project.',
    longDescription:
      'Worked as part of a collaborative team on DiSH, a Microsoft-related project. My work focused on web accessibility, usability, and performance, and I took part in Agile development alongside engineers, QA, designers, and product managers.',
    category: ['Frontend', 'UI/UX', 'Accessibility'],
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Accessibility', 'Git'],
    responsibilities: [
      'Improved website accessibility by implementing keyboard navigation and screen-reader labels for a wider range of users',
      'Collaborated in Agile sprints with engineers, QA, designers, and product managers',
      'Enhanced usability and performance to improve the overall user experience',
      'Worked within a collaborative software development environment',
    ],
  },
  {
    id: '4',
    title: 'Software Engineer Intern – Zentive',
    company: 'Hooli Software',
    duration: 'August 2024 – October 2024',
    description:
      'Delivered pixel-accurate UI changes and bug fixes in React and Tailwind CSS from design specifications.',
    longDescription:
      'Worked on frontend improvements for Zentive, delivering pixel-accurate UI changes and bug fixes in React and Tailwind CSS from design specifications. This experience strengthened my understanding of React-based development and of translating designs into functional interfaces.',
    category: ['Frontend', 'UI Development'],
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git'],
    responsibilities: [
      'Implemented pixel-accurate UI changes based on design specifications',
      'Fixed frontend bugs and interface issues',
      'Used React to develop and update user interfaces',
      'Used Tailwind CSS for styling and responsive layouts',
      'Worked within a team development workflow',
    ],
  },
]

export function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null)

  return (
    <section id="experience" className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-bold">
            My <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-xl max-w-2xl mx-auto text-gray-400/90">
            A look at my professional experience, internships, and the
            technologies I have worked with throughout my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={cn(
                'border-gray-500/20 border-2 rounded-xl',
                'transition-all duration-300 shadow-[0_0_15px_rgba(0,0,2,0.2)]',
                'hover:shadow-[0_0_25px_rgba(16,185,129,0.8)]',
                'animate-slide-up p-9 transform hover:translate-y-[-10px]',
              )}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedExperience(experience)}
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-300/10 text-emerald-400 flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7" />
              </div>

              <div className="mb-4 flex-wrap gap-2">
                {experience.category.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="inline-block px-3 py-1 text-xs font-medium p-3 bg-emerald-300/10 text-emerald-400 rounded-full mb-2 mr-2"
                  >
                    {category}
                  </span>
                ))}

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {experience.title}
                </h3>

                <p className="text-emerald-400 font-medium mb-2">
                  {experience.company}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-400/90 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>

                <p className="text-gray-400/90 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {experience.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-green-900/20 text-inherit rounded-md border"
                  >
                    {tech}
                  </span>
                ))}

                {experience.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-400/90">
                    +{experience.tech.length - 3} more
                  </span>
                )}
              </div>

              <Button
                className="w-full gradient-bg rounded-md px-4 py-2 text-sm font-medium text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedExperience(experience)
                }}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedExperience}
          onOpenChange={() => setSelectedExperience(null)}
        >
          <DialogContent className="w-[95%] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-8">
            {selectedExperience && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedExperience.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-medium text-emerald-400">
                      {selectedExperience.company}
                    </p>

                    <div className="flex items-center gap-2 text-gray-400/90 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedExperience.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>

                    <p className="text-gray-400/90 leading-relaxed">
                      {selectedExperience.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Responsibilities
                    </h3>

                    <ul className="space-y-2">
                      {selectedExperience.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>

                            <span className="text-gray-400/90">
                              {responsibility}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Languages and Tools used
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-900/20 text-inherit rounded-lg border font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
