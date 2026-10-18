'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import cn from 'classnames'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  Form?: string
  tech: string[]
  category: string[]
  demoUrl: string
  sourceUrl: string
  features: string[]
}

const projects: Project[] = [
  {
    id: '1',
    title: 'TallyBook - Inventory Management',
    description:
      'A full-stack inventory management app with product tracking, stock alerts, and order management.',
    longDescription:
      'A full-stack inventory management application built with React, FastAPI, PostgreSQL, and Alembic. It helps users manage products, monitor stock levels, track reorder alerts, and manage customer orders.',
    image: '/tallybook.png',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Alembic', 'Supabase', 'n8n'],
    category: ['Full-stack'],
    demoUrl: 'https://tallybook-sigma.vercel.app',
    sourceUrl: 'https://github.com/jp-o-git/tallybook',
    features: [
      'Product and inventory management',
      'Low-stock alerts and reorder tracking',
      'Customer order management',
      'FastAPI backend with PostgreSQL integration',
    ],
  },
  {
    id: '2',
    title: 'BrightSmile Dental - Landing Page',
    description:
      'A dental landing page template built with Vue.js, Tailwind CSS, and Supabase.',
    longDescription:
      'A modern dental landing page template built with Vue.js and Tailwind CSS. It features a responsive design, interactive clinic locations, and Supabase integration for handling form submissions without a custom backend.',
    image: '/BrightSmile.png',
    tech: ['Vue.js', 'Vite', 'TailwindCSS', 'Supabase'],
    category: ['Frontend'],
    demoUrl: 'https://dental-landingpage-silk.vercel.app/#/',
    sourceUrl: 'https://github.com/jp-o-git/dental-landingpage',
    features: [
      'Responsive dental landing page template',
      'Interactive clinic location section',
      'Supabase integration for form submissions',
      'Mobile-friendly and responsive UI',
      'Built with reusable Vue.js components',
    ],
  },
  {
    id: '3',
    title: 'HealthSphere Medical Care',
    description:
      'Responsive healthcare landing page built with Vue.js, Tailwind CSS, and Supabase.',
    longDescription:
      'Healthcare Landing Page is a modern, responsive web application built with Vue.js and Tailwind CSS. The project provides a clean and professional healthcare interface with service sections, FAQs, responsive layouts, and an inquiry form powered by Supabase. It focuses on accessibility, mobile responsiveness, performance, and a polished user experience.',
    image: '/healthcare-logo.png',
    tech: ['Vue.js', 'Tailwind CSS', 'Supabase'],
    category: ['FrontEnd', 'API integration'],
    demoUrl: 'https://health-landingpage-one.vercel.app',
    sourceUrl: 'https://github.com/jp-o-git/health-landingpage',
    features: [
      'Designed and developed a responsive healthcare landing page with a modern and professional UI.',
      'Implemented a healthcare inquiry form with client-side validation and Supabase integration.',
      'Built responsive sections, FAQ interactions, and call-to-action elements optimized for mobile and desktop users.',
    ],
  },
  {
    id: '4',
    title: 'Emma & Daniel - Wedding Website',
    description:
      'A modern and elegant wedding website designed to give guests a beautiful digital experience.',
    longDescription:
      'A responsive wedding website created with Next.js, React, TypeScript, and Tailwind CSS. The website brings together the couple’s story, wedding details, event schedule, photo gallery, RSVP form, frequently asked questions, and countdown timer in one polished experience. It also includes a dreamy fairytale-style intro animation with floating petals, ambient music controls, and smooth page interactions. The design focuses on elegance, responsiveness, and ease of use across desktop and mobile devices.',
    image: '/wedding-website.png',
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    category: ['Frontend', 'UI/UX'],
    demoUrl: 'https://wedding-design-alpha.vercel.app',
    sourceUrl: 'https://github.com/jp-o-git/wedding-design',
    features: [
      'Modern and elegant wedding website design',
      'Dreamy fairytale intro animation with floating petals',
      'Responsive layout for desktop, tablet, and mobile',
      'Couple story presented in a chronological timeline',
      'Wedding details and event schedule sections',
      'Interactive photo gallery with lightbox support',
      'RSVP form with numeric multi-digit guest count',
      'FAQ accordion section',
      'Wedding countdown timer',
      'Ambient music controls',
      'Reusable React and Tailwind CSS components',
    ],
  },
  {
    id: '5',
    title: 'Application Form',
    description:
      'A full-stack recruitment form built with Next.js, TypeScript, and MongoDB.',
    longDescription:
      'This project is a full-stack recruitment form platform built with Next.js 15.5.4, TypeScript, Tailwind CSS, ShadCN UI, and MongoDB. It delivers a structured, step-by-step job application workflow with real-time validation, local data persistence, and a seamless user experience. Each stage of the application process is designed for clarity and reliability, enabling candidates to easily complete and track their submissions while ensuring all data is securely stored in MongoDB. The system includes multiple submission phases that represent a complete recruitment flow — from initial details collection to final specialized assessments. It showcases practical use of modern React architecture with dynamic routing, API integration, and data management through MongoDB. The project also emphasizes maintainability and scalability through modular code organization, schema-based validation using Zod, and a consistent UI built with Tailwind CSS and ShadCN UI. Overall, it demonstrates full-stack proficiency in developing robust, production-ready form applications.',
    Form: `
Application Flow:
- Initial Application: https://recruitment-form-silk.vercel.app/apply/initial
- Loom Video Submission: https://recruitment-form-silk.vercel.app/apply/loomVideo
- Final Application - Frontend: https://recruitment-form-silk.vercel.app/apply/final/frontend
- Final Application - Backend: https://recruitment-form-silk.vercel.app/apply/final/backend
- Final Application - DevOps: https://recruitment-form-silk.vercel.app/apply/final/devops
`,

    image: '/AF.png',
    tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
    category: ['Full-stack'],
    demoUrl: 'https://recruitment-form-silk.vercel.app/apply/initial',
    sourceUrl: 'https://github.com/jp-o-git/recruitment-form',
    features: [
      'Multi-step Form Workflow: User-friendly form progression with client-side validation',
      'Local Data Persistence: Automatically saves progress in localStorage',
      'MongoDB Integration: Securely stores all submissions',
      'Responsive UI: Built with Tailwind CSS and ShadCN UI for consistency',
      'Real-time Validation: Ensures data accuracy using Zod',
      'Toast Feedback System: Provides instant user feedback on submission success or error',
    ],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="section-heading">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Selected work
          </p>
          <h2 className="text-4xl mb-4 font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl max-w-2xl text-gray-400/90">
            A showcase of my recent work, demonstrating my expertise in various
            programming languages and my passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'editorial-card animate-slide-up p-6 cursor-pointer',
              )}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden rounded-md bg-[#e8e1d7] mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mb-4 flex-wrap gap-2">
                {project.category.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="inline-block px-3 py-1 text-xs font-medium p-3 accent-soft accent-text rounded-full mb-2"
                  >
                    {category}
                  </span>
                ))}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400/90 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs neutral-soft text-inherit rounded-md border"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-400/90">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex gap-3 mt-auto">
                <Button
                  size="sm"
                  className="flex-1 bg text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="ghost border font-medium border-[var(--line)] p-3 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] p-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.demoUrl, '_blank')
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="ghost border font-medium border-[var(--line)] p-3 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] p-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.sourceUrl, '_blank')
                  }}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="w-[95%] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-8">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-sm shadow-black">
                    <Image
                      width={400}
                      height={400}
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-gray-400/90 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 accent-fill rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {selectedProject?.Form && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Application Flow
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.Form.split('\n')
                          .filter((line) => line.trim().startsWith('-'))
                          .map((line, index) => {
                            const [label, url] = line
                              .replace('- ', '')
                              .split(': ')
                            return (
                              <li
                                key={index}
                                className="flex flex-col sm:flex-row sm:items-center gap-2"
                              >
                                <span className="text-gray-400/90">
                                  {label}:
                                </span>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="accent-text hover:underline break-all"
                                >
                                  {url}
                                </a>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Languages and Tools used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 neutral-soft text-inherit rounded-lg border font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="bg font-medium hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] hover:scale-105 flex-1"
                      onClick={() =>
                        window.open(selectedProject.demoUrl, '_blank')
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4 " />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border font-medium border-gray-500/20 accent-text hover:text-inherit flex-1"
                      onClick={() =>
                        window.open(selectedProject.sourceUrl, '_blank')
                      }
                    >
                      <Github className="mr-2 h-4 w-4 " />
                      Source Code
                    </Button>
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
