'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { MapPin, Tag, ArrowRight, Wrench, Zap, Droplet, Factory, CheckCircle2 } from 'lucide-react'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Fire Hydrant Line Work',
      location: 'JSW MG Motor India Pvt Ltd, Halol, Gujarat',
      category: 'Fire Safety',
      image: '/Fire-Hydrant-line-JSW-Mg-motor.png',
      description: 'Fire hydrant line work executed for JSW MG Motor India Pvt Ltd at Halol, supporting plant fire safety infrastructure with dependable piping installation.',
      highlights: ['Fire Hydrant Line', 'Plant Safety', 'Piping Installation', 'Industrial Site Work']
    },
    {
      id: 2,
      title: 'Fire Sprinkler Work',
      location: 'Hero MotoCorp Ltd, Halol, Gujarat',
      category: 'Fire Safety',
      image: '/Fire-Sprinkler.png',
      description: 'Fire sprinkler system work executed for Hero MotoCorp at Halol, focused on reliable coverage, site coordination, and safety-led installation practices.',
      highlights: ['Sprinkler System', 'Fire Protection', 'Automotive Plant', 'Safety Compliance']
    },
    {
      id: 3,
      title: 'SS Drinking Water Line Work',
      location: 'Hero MotoCorp Ltd, Tirupati, Andhra Pradesh',
      category: 'Piping',
      image: '/plumbing-system.jpg?v=2',
      description: 'Stainless steel drinking water line project delivered for Hero MotoCorp Tirupati, supporting hygienic water distribution with quality piping execution.',
      highlights: ['SS Piping', 'Drinking Water Line', 'Utility Network', 'Quality Installation']
    },
    {
      id: 4,
      title: 'Fire Hydrant Line Work',
      location: 'Satyam Auto, Halol, Gujarat',
      category: 'Fire Safety',
      image: '/Fire-Hydrant-line.png',
      description: 'Fire hydrant line work completed for Satyam Auto at Halol, with attention to industrial safety requirements and coordinated site execution.',
      highlights: ['Hydrant Piping', 'Industrial Safety', 'Site Coordination', 'Execution Support']
    },
    {
      id: 5,
      title: 'New Robotic Work ',
      location: 'Hero MotoCorp Ltd, Halol, Gujarat',
      category: 'Industrial Installation',
      image: '/Robotic-Work.png',
      description: 'Aluminium phase robotic line installation support including electrical and piping work for production-line readiness at Hero MotoCorp Halol.',
      highlights: ['Robotic Line', 'Electrical Work', 'Piping Work', 'Production Support']
    },
    {
      id: 6,
      title: 'Compound Wall Work',
      location: 'Varroc Engineering Pvt Ltd, Halol, Gujarat',
      category: 'Civil Works',
      image: '/Compound-wall.png',
      description: 'Compound wall work executed for Varroc Engineering at Halol, supporting plant boundary infrastructure with practical civil execution.',
      highlights: ['Compound Wall', 'Civil Work', 'Boundary Infrastructure', 'Industrial Facility']
    },
    {
      id: 7,
      title: 'Wire Fencing Across Plant',
      location: 'Merino Industries Ltd, Halol, Gujarat',
      category: 'Civil Works',
      image: '/Wire-fencing-work%20.png',
      description: 'Wire fencing work carried out across the plant area for Merino Industries, improving site boundary control and plant-level infrastructure readiness.',
      highlights: ['Wire Fencing', 'Plant Boundary', 'Site Infrastructure', 'Civil Support']
    },
  ]

  const categories = ['All', 'Fire Safety', 'Piping', 'Industrial Installation', 'Civil Works']
  const filteredProjects = useMemo(
    () => activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  )

  return (
    <>
      <Header />
      <main>
        {/* Page Header with Carousel */}
        <section className="relative bg-primary text-primary-foreground py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImageCarousel 
              images={[
                { src: '/Fire-Hydrant-line-JSW-Mg-motor.png', alt: 'Fire Hydrant Line Work at JSW MG Motor' },
                { src: '/Fire-Sprinkler.png', alt: 'Fire Sprinkler Work at Hero MotoCorp' },
                { src: '/Robotic-Work.png', alt: 'Robotic Line Installation at Hero MotoCorp' },
                { src: '/Compound-wall.png', alt: 'Compound Wall Work at Varroc Engineering' },
              ]}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/75 to-primary/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slideInLeft">Our Projects</h1>
            <p className="text-lg opacity-90 max-w-2xl animate-slideInLeft delay-100">
              Real project work delivered for automotive, industrial, and infrastructure clients across fire safety, piping, fabrication, and civil execution.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gradient-to-b from-background to-muted/20 border-b border-border sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-[0_12px_24px_rgba(15,23,42,0.18)]'
                      : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-amber-50/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/70 hover:shadow-[0_30px_70px_rgba(245,158,11,0.14)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
                    <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-bold tracking-[0.22em] text-primary shadow-lg">
                      0{project.id}
                    </div>
                    <div className="absolute left-5 bottom-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm">
                      <Tag size={14} className="text-secondary" />
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-700">{project.category}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin size={15} className="shrink-0 text-secondary" />
                        <span className="leading-6">{project.location}</span>
                      </div>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold leading-tight text-slate-900">{project.title}</h3>
                    <p className="mb-5 text-sm leading-7 text-slate-600">{project.description}</p>

                    <div className="mb-5 flex items-center gap-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-amber-300/80 to-transparent"></div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">Highlights</span>
                    </div>

                    <div className="mb-5 flex flex-wrap content-start gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-800">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
                      <span className="text-sm font-semibold text-slate-500">Project Showcase</span>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_14px_30px_rgba(245,158,11,0.25)] group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-primary to-slate-900 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '100+', label: 'Projects Delivered' },
                { number: '50+', label: 'Expert Team' },
                { number: '12+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="rounded-[26px] border border-white/12 bg-white/8 px-6 py-8 backdrop-blur-sm shadow-[0_18px_45px_rgba(2,6,23,0.18)]">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                  <p className="text-slate-200/85 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Across Projects */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-sky-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Services Provided</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Mechanical Engineering', icon: Wrench, items: ['HVAC Systems', 'Equipment Installation', 'Piping Networks', 'System Design', 'Performance Optimization'] },
                { title: 'Electrical Systems', icon: Zap, items: ['Power Distribution', 'Lighting Design', 'Electrical Installation', 'Building Automation', 'Safety Systems'] },
                { title: 'Plumbing Solutions', icon: Droplet, items: ['Water Supply', 'Drainage Systems', 'Sanitary Design', 'Hot Water Systems', 'Safety Compliance'] },
                { title: 'Custom Fabrication', icon: Factory, items: ['Structural Steel', 'Metal Work', 'Specialized Components', 'Industrial Equipment', 'Precision Assembly'] },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-card to-sky-50/40 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_24px_55px_rgba(56,189,248,0.12)]">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-200/30 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="relative mb-7 flex items-center gap-4 border-b border-sky-100 pb-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-amber-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon size={26} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Service</p>
                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      </div>
                    </div>
                    <ul className="relative space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 rounded-xl border border-transparent bg-white/50 px-3 py-2.5 transition-all duration-300 hover:border-sky-200/80 hover:bg-white">
                          <CheckCircle2 size={17} className="shrink-0 text-primary" />
                          <span className="text-sm font-medium leading-6 text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-foreground overflow-hidden border-t border-amber-100">
          <div className="absolute inset-0 opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]"></div>
            <div className="absolute top-8 left-10 w-72 h-72 bg-amber-300/25 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 backdrop-blur-sm">
              Proven Project Delivery
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Ready to Start Your Project?</h2>
            <p className="text-lg text-slate-700 mb-8">
              Let us bring our expertise and proven track record to your next MEP or fabrication project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
