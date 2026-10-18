'use client'

import {
  Code,
  Palette,
  Server,
  Globe,
  Zap,
  FileText,
  GitBranch,
  Settings,
  Accessibility,
  Lightbulb,
  Users,
  Workflow,
  Terminal,
  Bot,
} from 'lucide-react'
import { FaVuejs, FaPython } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiReactquery,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiPostgresql,
} from 'react-icons/si'

import { FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiBootstrap,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiN8N,
} from 'react-icons/si'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code,
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    id: 'frontend',
    label: 'Front-end Development',
    icon: Globe,
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'React Query', icon: SiReactquery },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'HTML', icon: FileText },
      { name: 'CSS', icon: Palette },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: Workflow },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    id: 'tools',
    label: 'Development Tools',
    icon: Settings,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Jira', icon: Users },
    ],
  },
  {
    id: 'automation',
    label: 'AI & Automation',
    icon: Bot,
    skills: [
      { name: 'AI Coding Tools', icon: Terminal },
      { name: 'n8n', icon: Workflow },
      { name: 'Zapier', icon: Zap },
    ],
  },
  {
    id: 'design',
    label: 'Design & Practices',
    icon: Palette,
    skills: [
      { name: 'Canva', icon: Lightbulb },
      { name: 'UI/UX Design', icon: Palette },
      { name: 'Web Accessibility', icon: Accessibility },
      { name: 'Agile/Scrum', icon: Users },
    ],
  },
]

export const Skills = () => {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="section-heading">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            The toolkit
          </p>
          <h2 className="mb-4 text-4xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="max-w-2xl text-xl text-gray-400/90">
            Technologies and tools I have worked with through professional
            experience, projects, and hands-on practice.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon

            return (
              <div key={category.id} className="card p-6">
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <CategoryIcon className="h-6 w-6" />

                  <h3 className="text-lg font-semibold">{category.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-gray-500/20 px-3 py-2 text-sm font-medium text-foreground"
                      >
                        <SkillIcon className="h-4 w-4 flex-shrink-0" />

                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
