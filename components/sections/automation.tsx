'use client'

import { useState } from 'react'
import { ExternalLink, Workflow, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import cn from 'classnames'
import Image from 'next/image'

interface Automation {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  outputImages?: string[]
  sheetUrl?: string
  tech: string[]
  category: string[]
  demoUrl: string
  features: string[]
  trigger: string
  actions: string[]
}

const automations: Automation[] = [
  {
    id: '1',
    title: 'Gmail to Google Sheets and Slack for Logistics Leads',
    description:
      'Zapier pipeline that qualifies email leads with AI, logs to Sheets, and alerts Slack.',
    longDescription:
      'This Zapier workflow automates the handling and qualification of incoming logistics leads. It triggers whenever a new email matching a specific search arrives in Gmail, uses AI by Zapier to qualify and assess the lead, and splits the execution into conditional paths. Depending on the lead assessment, it automatically creates a spreadsheet row in Google Sheets and sends a corresponding channel message in Slack to notify the team instantly.',
    image: '/zapier.png',
    outputImages: ['/zapier-output.png'],
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/15r07GJdABrSOc70P46QUgYbwaVT6_B1ShL0JeJrg0Yg/edit?usp=sharing',
    tech: ['Zapier', 'Gmail', 'AI by Zapier', 'Google Sheets', 'Slack'],
    category: ['Workflow Automation', 'Lead Management'],
    demoUrl: '',
    trigger: 'Gmail: New Email Matching Search (runs every 15 minutes)',
    actions: [
      'Qualify logistics lead and assess incoming details using AI by Zapier.',
      'Split the workflow into conditional paths based on lead assessment results.',
      'Evaluate path conditions for routing high-priority or categorized leads.',
      'Create a new spreadsheet row in Google Sheets to log lead data.',
      'Send a channel message in Slack to notify the team of the new logistics lead.',
    ],
    features: [
      'Automated email monitoring and lead detection via Gmail.',
      'Intelligent lead qualification powered by AI by Zapier.',
      'Conditional branching (Paths) to handle different lead tiers or categories.',
      'Centralized tracking by automatically logging new leads into Google Sheets.',
      'Real-time team notifications via Slack channel messages.',
    ],
  },
  {
    id: '2',
    title: 'TallyBook Daily Sales & Stock Report',
    description:
      'An n8n workflow that automatically emails daily sales summaries and inventory alerts at 8:00 PM.',
    longDescription:
      'Built an n8n workflow for TallyBook, an inventory management system, to deliver a formatted daily sales and inventory report through email at 8:00 PM. The report summarizes total revenue, order counts by status, best-selling products, units sold, and inventory requiring attention. It also identifies stock levels, reorder thresholds, and out-of-stock products to help users monitor sales and inventory without manually preparing a report.',
    image: '/n8n.png',
    outputImages: ['/n8n-output.png'],
    tech: ['n8n', 'TallyBook', 'Email Automation', 'Inventory Reporting'],
    category: ['Workflow Automation', 'Business Reporting'],
    demoUrl: '',
    trigger: 'Scheduled Trigger — Every day at 8:00 PM',
    actions: [
      'Run the workflow automatically every day at 8:00 PM.',
      'Retrieve and summarize daily sales data, including revenue and order statuses.',
      'Identify the most purchased products and calculate units sold.',
      'Check inventory levels against reorder thresholds and identify out-of-stock products.',
      'Format the results into a readable daily sales and inventory report.',
      'Send the completed report to the configured email address.',
    ],
    features: [
      'Automated daily email delivery at 8:00 PM.',
      'Sales overview with total revenue and order status counts.',
      'Most-purchased product summaries and units sold.',
      'Inventory monitoring with reorder thresholds and stock alerts.',
      'Highlights products that are out of stock.',
      'Reduces manual sales reporting and inventory monitoring.',
    ],
  },
]

export default function AutomationsPage() {
  const [selectedAutomation, setSelectedAutomation] =
    useState<Automation | null>(null)
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <section id="automation" className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Less busywork, better flow
          </p>
          <h1 className="mb-4 text-4xl font-bold">
            Automation <span className="gradient-text">Workflows</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400/90">
            A showcase of my Zapier and n8n workflows, demonstrating application
            integrations and process automation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {automations.map((automation, index) => (
            <article
              key={automation.id}
              role="button"
              tabIndex={0}
              className={cn('card cursor-pointer p-6 editorial-card')}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedAutomation(automation)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedAutomation(automation)
                }
              }}
            >
              <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-[#e8e1d7]">
                {automation.image ? (
                  <Image
                    src={automation.image}
                    alt={`${automation.title} preview`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Workflow
                    size={56}
                    className="accent-text"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="mb-4">
                {automation.category.map((category) => (
                  <span
                    key={category}
                    className="mb-2 mr-2 inline-block rounded-full accent-soft px-3 py-1 text-xs font-medium accent-text"
                  >
                    {category}
                  </span>
                ))}

                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  {automation.title}
                </h2>

                <p className="leading-relaxed text-gray-400/90">
                  {automation.description}
                </p>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {automation.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border neutral-soft px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                size="sm"
                className="w-full bg text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedAutomation(automation)
                }}
              >
                <Zap className="mr-2 h-4 w-4" />
                View Workflow
              </Button>
            </article>
          ))}
        </div>

        {/* Main Details Dialog */}
        <Dialog
          open={!!selectedAutomation}
          onOpenChange={(open) => {
            if (!open) setSelectedAutomation(null)
          }}
        >
          <DialogContent className="max-h-[90vh] w-[95%] overflow-y-auto p-4 sm:max-w-4xl sm:p-8">
            {selectedAutomation && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedAutomation.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    {selectedAutomation.image ? (
                      <Image
                        src={selectedAutomation.image}
                        alt={selectedAutomation.title}
                        fill
                        sizes="(max-width: 768px) 95vw, 768px"
                        className="object-contain"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Workflow size={56} className="accent-text" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Overview</h3>
                    <p className="leading-relaxed text-gray-400/90">
                      {selectedAutomation.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Trigger</h3>
                    <p className="rounded-lg border border-gray-500/20 p-3 text-gray-400/90">
                      {selectedAutomation.trigger}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      Workflow Steps
                    </h3>
                    <ol className="space-y-3">
                      {selectedAutomation.actions.map((action, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-400/90"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full accent-soft text-sm accent-text">
                            {index + 1}
                          </span>
                          {action}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {((selectedAutomation.outputImages &&
                    selectedAutomation.outputImages.length > 0) ||
                    selectedAutomation.sheetUrl) && (
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          Output Results
                        </h3>
                        {selectedAutomation.sheetUrl && (
                          <a
                            href={selectedAutomation.sheetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium accent-text hover:underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Output Spreadsheet
                          </a>
                        )}
                      </div>

                      {selectedAutomation.outputImages &&
                        selectedAutomation.outputImages.length > 0 && (
                          <div className="grid gap-6 sm:grid-cols-2">
                            {selectedAutomation.outputImages.map(
                              (imgPath, index) => (
                                <div
                                  key={index}
                                  onClick={() => setExpandedImage(imgPath)}
                                  className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl border-2 border-gray-500/30 bg-muted transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                >
                                  <Image
                                    src={imgPath}
                                    alt={`${selectedAutomation.title} output ${
                                      index + 1
                                    }`}
                                    fill
                                    sizes="(max-width: 768px) 95vw, 400px"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="rounded-md bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm">
                                      Click to Expand
                                    </span>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                    </div>
                  )}

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedAutomation.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-gray-400/90"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full accent-fill" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      Tools and Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedAutomation.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border neutral-soft px-3 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedAutomation.demoUrl && (
                    <Button
                      className="w-full gradient-bg"
                      onClick={() =>
                        window.open(
                          selectedAutomation.demoUrl,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Workflow
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Expanded Image Modal */}
        <Dialog
          open={!!expandedImage}
          onOpenChange={(open) => {
            if (!open) setExpandedImage(null)
          }}
        >
          <DialogContent className="max-h-[95vh] w-[95vw] max-w-6xl bg-background/95 p-2 backdrop-blur-md sm:p-4">
            <DialogHeader className="sr-only">
              <DialogTitle>Expanded Output Preview</DialogTitle>
            </DialogHeader>
            {expandedImage && (
              <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={expandedImage}
                  alt="Expanded workflow output"
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
