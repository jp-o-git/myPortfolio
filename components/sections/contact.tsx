'use client'

import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { useToast } from '@/hooks/use-toast'
import cn from 'classnames'
import { sendContactForm } from '@/lib/api'

interface FormData {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({
        title: 'Name is required',
        description: 'Please enter your name.',
        variant: 'destructive',
      })
      return false
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      toast({
        title: 'Valid email is required',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      })
      return false
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: 'Message is required',
        description: 'Please enter a message (at least 10 characters).',
        variant: 'destructive',
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await sendContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      toast({
        title: 'Message sent successfully!',
        description: "Thank you for your message. I'll get back to you soon.",
        variant: 'success',
      })

      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-10 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-bold mt-11">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-400/90">
            Have a project in mind or want to collaborate? {"I'd"} love to hear
            from you. {"Let's"} create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border-gray-500/20 border-2 rounded-xl shadow-[0_0_15px_rgba(0,0,2,0.2)] p-8">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name <span className="text-red-500 font-bold">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email <span className="text-red-500 font-bold">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message <span className="text-red-500 font-bold">*</span>
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  className="w-full resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                  className="gradient-bg font-medium hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] hover:scale-105 flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                  disabled={
                    isSubmitting ||
                    (formData.name === '' &&
                      formData.email === '' &&
                      formData.message === '')
                  }
                  className="border font-bold border-gray-500/20 gradient-text hover:text-inherit contact-btn"
                >
                  Reset Form
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-gray-500/20 border-2 rounded-xl shadow-[0_0_15px_rgba(0,0,2,0.2)] p-8">
              <h3 className="text-2xl font-semibold mb-6">{"Let's"} connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-300/10">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:johnpaulolimpo7@gmail.com"
                      className="text-gray-400/90 hover:text-inherit transition-colors"
                    >
                      johnpaulolimpo7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-300/10">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+639917419030"
                      className="text-gray-400/90 hover:text-inherit transition-colors"
                    >
                      (+63) 991-741-9030
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-300/10">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <a
                      href="https://maps.app.goo.gl/Zzdd3fMSZfLDfA2T8"
                      target="_blank"
                      className="text-gray-400/90 hover:text-inherit transition-colors cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Santa Maria, Bulacan
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-gray-500/20 border-2 rounded-xl shadow-[0_0_15px_rgba(0,0,2,0.2)] px-8 py-6">
              <h3 className="text-xl font-semibold mb-4">Follow me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jp-o-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-3 skills-btn border border-gray-500/20 rounded-lg shadow-[0_0_15px_rgba(0,0,2,0.2)]',
                    'hover:shadow-[0_0_10px_rgba(16,185,129,0.8)]  hover:text-inherit',
                    'transition-all duration-300 group',
                  )}
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/olimpo-john-paul-dc-13a9621b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-3 skills-btn border border-gray-500/20 rounded-lg shadow-[0_0_15px_rgba(0,0,2,0.2)]',
                    'hover:shadow-[0_0_10px_rgba(16,185,129,0.8)]  hover:text-inherit',
                    'transition-all duration-300 group',
                  )}
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="border-gray-500/20 border-2 rounded-xl shadow-[0_0_15px_rgba(0,0,2,0.2)] p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-semibold">Available for work</h3>
              </div>
              <p className="text-gray-400/90">
                I am currently available for freelance projects and full-time
                opportunities. {"Let's"} discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
