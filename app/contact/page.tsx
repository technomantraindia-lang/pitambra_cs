'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CircleUserRound } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const factoryAddress = 'Plot No. SME-1/110, GIDC Estate, Halol-2 (Maswad), Taluka Halol, Panchmahals, Gujarat 389350'
  const factoryMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(factoryAddress)}`

  const contactPeople = [
    {
      name: 'Gajendra Pal',
      role: 'Director',
      phone: '+91 87588 15986',
      phoneHref: 'tel:+918758815986',
      email: 'Gajendra@Pitambrafabtech.com',
      emailHref: 'mailto:Gajendra@Pitambrafabtech.com',
    },
    {
      name: 'Yogendra Mishra',
      role: 'Director',
      phone: '+91 76007 71861',
      phoneHref: 'tel:+917600771861',
      email: 'Yogendra@Pitambrafabtech.com',
      emailHref: 'mailto:Yogendra@Pitambrafabtech.com',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('botcheck')) return

    if (!accessKey) {
      setSubmitError('Web3Forms access key is missing. Please add it in .env.local.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Project Inquiry - Pitambra Fabtech Website',
          from_name: 'Pitambra Fabtech Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          project_type: formData.projectType || 'Not selected',
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send message. Please try again.')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Page Header with Carousel */}
        <section className="relative bg-primary text-primary-foreground py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImageCarousel 
              images={[
                { src: '/team-working.jpg', alt: 'Team Working' },
                { src: '/mep-installation.jpg', alt: 'MEP Installation' },
                { src: '/fabrication.jpg', alt: 'Fabrication' },
                { src: '/industrial-facility.jpg', alt: 'Industrial Facility' },
              ]}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/75 to-primary/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slideInLeft">Get In Touch</h1>
            <p className="text-lg opacity-90 max-w-2xl animate-slideInLeft delay-100">
              Have a project in mind? We&apos;d love to hear about it. Reach out to our team for consultation and quotations.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Pitambra Fabtech Pvt Ltd</p>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                </div>

                <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-5 shadow-sm animate-fadeInUp">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20">
                      <CircleUserRound size={22} className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Contact Person</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Directors</p>
                    </div>
                  </div>

                  <div className="divide-y divide-border/70 rounded-lg border border-border/70 bg-background/60">
                    {contactPeople.map((person) => (
                      <div key={person.email} className="p-4">
                        <div className="mb-3 flex items-baseline justify-between gap-3">
                          <p className="text-sm font-bold text-foreground">{person.name}</p>
                          <p className="shrink-0 text-xs font-semibold text-secondary">{person.role}</p>
                        </div>
                        <div className="space-y-2 text-xs">
                          <a href={person.phoneHref} className="flex min-w-0 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                            <Phone size={14} className="shrink-0 text-secondary" />
                            {person.phone}
                          </a>
                          <a href={person.emailHref} className="flex min-w-0 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                            <Mail size={14} className="shrink-0 text-secondary" />
                            <span className="break-all">{person.email}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    value: 'Info@pitambrafabtech.com',
                    href: 'mailto:Info@pitambrafabtech.com'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    value: factoryAddress,
                    href: factoryMapsUrl
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
                    href: '#'
                  },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="group flex gap-3 rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-5 shadow-sm transition-all duration-300 hover:border-secondary/60 hover:shadow-lg animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 transition-transform duration-300 group-hover:scale-105">
                        <Icon size={22} className="text-secondary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-foreground">{item.title}</p>
                        <p className="text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{item.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 animate-slideInRight">
                <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-8 md:p-10 hover:border-secondary/40 hover:shadow-2xl transition-all duration-500">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                  
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 animate-scaleIn">
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full flex items-center justify-center mb-6 animate-float">
                        <MessageSquare size={40} className="text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                      <p className="text-muted-foreground text-center max-w-md">
                        We&apos;ve received your message. Our team will get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 hover:border-secondary/50"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 hover:border-secondary/50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a project type</option>
                          <option value="mep">MEP Services</option>
                          <option value="fabrication">Custom Fabrication</option>
                          <option value="both">MEP + Fabrication</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>

                      {submitError && (
                        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. We&apos;ll only use your information to contact you about your inquiry.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Find Our Factory</h2>
              <p className="text-muted-foreground text-lg">
                Visit us at our Halol facility for project discussions, fabrication coordination, and site support.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.8fr]">
                <div className="relative min-h-[420px]">
                  <iframe
                    title="Pitambra Fab Tech Factory Location"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(factoryAddress)}&z=15&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-8 md:p-10 bg-gradient-to-br from-white to-slate-50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/15 flex items-center justify-center mb-6">
                    <MapPin size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Factory Address</h3>
                  <p className="text-muted-foreground leading-8 mb-8">
                    {factoryAddress}
                  </p>
                  <a
                    href={factoryMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(245,158,11,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_22px_48px_rgba(249,115,22,0.34)]"
                  >
                    Open in Google Maps
                    <Send size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
