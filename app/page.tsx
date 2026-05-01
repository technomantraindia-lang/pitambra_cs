import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Wrench, Zap, Droplet, Factory, Star, CheckCircle, Clock, Shield, BadgeCheck, Building2, BriefcaseBusiness, Medal, TrendingUp } from 'lucide-react'

export default function Home() {
  const clients = [
    { name: 'Hero MotoCorp', logo: '/hero.png' },
    { name: 'Morris Garages', logo: '/mg.png' },
    { name: 'Merino', logo: '/merino.png' },
    { name: 'Kores', logo: '/kores.png' },
    { name: 'Orbia', logo: '/orbia.png' },
    { name: 'Banco', logo: '/banco.png' },
    { name: 'Satyam Auto Components', logo: '/satyam.png' },
    { name: 'Shakun', logo: '/shakun.png' },
    { name: 'Alphagary', logo: '/alphagary.png' },
    { name: 'Varroc Excellence', logo: '/varroc.png' },
    { name: 'Autofit', logo: '/autofit.png' },
    { name: 'Sandhar', logo: '/sandhar.png' },
    { name: 'Hilti', logo: '/hilti.png' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 py-28 text-primary-foreground md:py-36">
          {/* Background Carousel */}
          <div className="absolute inset-0 z-0">
            <ImageCarousel 
              images={[
                { src: '/plumbing-system2.png', alt: 'SS Drinking Water Line Work' },
                { src: '/Fire-Sprinkler.png', alt: 'Fire Sprinkler Work' },
                { src: '/Robotic-Work.png', alt: 'Robotic Work' },
                { src: '/Fire-Hydrant-line-JSW-Mg-motor.png', alt: 'Fire Hydrant Line Work' },
              ]}
              imageClassName="object-cover"
              imageQuality={100}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.74)_0%,rgba(15,23,42,0.58)_40%,rgba(15,23,42,0.22)_72%,rgba(2,6,23,0.18)_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.04)_45%,rgba(2,6,23,0.52)_100%)]"></div>
            <div className="absolute inset-y-0 left-0 w-full max-w-5xl bg-[radial-gradient(circle_at_30%_45%,rgba(2,6,23,0.28),transparent_52%)]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[calc(92vh-14rem)] w-full max-w-7xl flex-col justify-center px-6">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-slate-950/35 px-4 py-2 text-sm font-semibold text-amber-200 shadow-[0_12px_32px_rgba(2,6,23,0.35)] backdrop-blur-md animate-slideInLeft">
                12+ Years of Industrial MEP & Fabrication Expertise
              </div>
              <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-white text-balance drop-shadow-[0_8px_24px_rgba(0,0,0,0.72)] animate-slideInLeft md:text-6xl lg:text-7xl">
                Precision MEP Solutions for Industrial Projects
              </h1>
              <p className="mb-10 max-w-2xl text-lg font-medium leading-8 text-slate-50 drop-shadow-[0_4px_16px_rgba(0,0,0,0.72)] animate-slideInLeft delay-100 md:text-xl">
                Pitambra Fab Tech delivers mechanical, electrical, plumbing, and custom fabrication work with dependable site coordination, skilled manpower, and quality-focused execution.
              </p>
              <div className="flex flex-col gap-4 animate-slideInLeft delay-200 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-bold text-white shadow-[0_22px_46px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_26px_52px_rgba(249,115,22,0.36)]"
                >
                  Get a Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/45 bg-slate-950/28 px-8 py-4 font-bold text-white shadow-[0_18px_36px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:bg-white/18 hover:shadow-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="mt-12 grid max-w-4xl grid-cols-1 gap-3 animate-fadeInUp sm:grid-cols-3">
              {[
                { value: '100+', label: 'Projects Completed' },
                { value: '50+', label: 'Skilled Team Members' },
                { value: 'Rs 2.3 Cr', label: 'Last FY Turnover' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-amber-400 bg-slate-950/30 px-5 py-4 shadow-[0_16px_34px_rgba(2,6,23,0.35)] backdrop-blur-md">
                  <p className="text-3xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.65)]">{item.value}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-100 drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-slate-950/55 backdrop-blur-md">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-4 text-sm font-semibold text-slate-100 sm:grid-cols-4">
              {['MEP Installation', 'Custom Fabrication', 'Utility Support', 'Shutdown Maintenance'].map((item) => (
                <div key={item} className="flex min-h-10 items-center justify-center border-white/10 px-3 text-center sm:border-l first:sm:border-l-0">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-orange-50/80 to-sky-50/90">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp delay-100">
                Comprehensive MEP and fabrication solutions tailored to your project requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Wrench,
                  title: 'Mechanical Engineering',
                  description: 'HVAC systems, equipment installation, and mechanical project management',
                  image: '/hvac-system.jpg'
                },
                {
                  icon: Zap,
                  title: 'Electrical Systems',
                  description: 'Power distribution, lighting design, and electrical installation expertise',
                  image: '/electrical-system.jpg'
                },
                {
                  icon: Droplet,
                  title: 'Plumbing Solutions',
                  description: 'Water supply, drainage, and sanitary system design and execution',
                  image: '/plumbing-system.jpg?v=2'
                },
                {
                  icon: Factory,
                  title: 'Custom Fabrication',
                  description: 'Precision custom fabrication for specialized industrial applications',
                  image: '/fabrication.jpg'
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    data-scroll="scale"
                    data-scroll-delay={index > 2 ? '3' : String(index)}
                    className="group relative bg-gradient-to-br from-white via-card to-amber-50/60 border-2 border-amber-300/80 shadow-[0_18px_50px_rgba(148,163,184,0.12)] rounded-xl overflow-hidden hover:border-orange-400 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/45 via-orange-100/30 to-sky-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <div className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    
                    {/* Image Background */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6 z-20">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 via-amber-100 to-primary/15 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:gap-4 hover:text-primary transition-all duration-300 group"
              >
                View All Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section data-scroll className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-primary to-slate-900 py-14 md:py-16 text-white">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/industrial-facility.jpg"
              alt="Industrial project background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[0.8fr_1.8fr] lg:items-center">
            <div data-scroll="left" className="animate-slideInLeft">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-amber-400">Featured Projects</p>
              <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
                Delivering Quality Across Industries
              </h2>
              <p className="mb-7 max-w-md text-base leading-7 text-slate-200">
                We take pride in our successful projects that reflect our commitment to quality, safety, and timely delivery.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_36px_rgba(249,115,22,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_22px_44px_rgba(249,115,22,0.35)]"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: 'Fire Hydrant Line Work',
                  place: 'JSW MG Motor India Pvt Ltd, Halol, Gujarat',
                  image: '/Fire-Hydrant-line-JSW-Mg-motor.png',
                },
                {
                  title: 'Fire Sprinkler Work',
                  place: 'Hero MotoCorp Ltd, Halol, Gujarat',
                  image: '/Fire-Sprinkler.png',
                },
                {
                  title: 'New Robotic Work Installation',
                  place: 'Hero MotoCorp Ltd, Halol, Gujarat',
                  image: '/Robotic-Work.png',
                },
                {
                  title: 'Compound Wall Work',
                  place: 'Varroc Engineering Pvt Ltd, Halol, Gujarat',
                  image: '/Compound-wall.png',
                },
              ].map((project, index) => (
                <Link
                  key={project.title}
                  href="/projects"
                  data-scroll="scale"
                  data-scroll-delay={index > 2 ? '3' : String(index)}
                  className="group overflow-hidden rounded-lg border border-white/20 bg-white/8 shadow-[0_18px_45px_rgba(2,6,23,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/80"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-base font-bold leading-snug text-white">{project.title}</h3>
                    <p className="text-sm font-semibold text-slate-300">{project.place}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-br from-slate-100 via-white to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 left-0 w-80 h-80 bg-cyan-200/45 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp delay-100">
                From concept to completion, we follow a structured approach ensuring quality at every stage
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 overflow-visible md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We understand your project requirements, challenges, and goals through detailed discussion',
                  icon: Clock,
                  image: '/team-working.jpg'
                },
                {
                  step: '02',
                  title: 'Design & Planning',
                  description: 'Our engineers create comprehensive design plans and project timelines tailored to your needs',
                  icon: CheckCircle,
                  image: '/mep-installation.jpg'
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Skilled teams execute the project with precision, quality control, and regular progress updates',
                  icon: Wrench,
                  image: '/fabrication.jpg'
                },
                {
                  step: '04',
                  title: 'Delivery & Support',
                  description: 'Project completion with handover documentation and ongoing support for any requirements',
                  icon: Shield,
                  image: '/project-completion.jpg'
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    data-scroll="scale"
                    data-scroll-delay={index > 2 ? '3' : String(index)}
                    className="group relative animate-fadeInUp cursor-pointer overflow-visible"
                    style={{ animationDelay: `${index * 100}ms`, zIndex: 40 - index }}
                  >
                    <div className="relative bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,248,255,0.96))] border-2 border-cyan-500 shadow-[0_0_0_1px_rgba(6,182,212,0.25),0_22px_55px_rgba(15,23,42,0.08)] rounded-[28px] overflow-hidden transition-all duration-500 hover:border-sky-600 hover:shadow-[0_0_0_1px_rgba(2,132,199,0.35),0_26px_65px_rgba(14,165,233,0.16)] hover:-translate-y-2 h-full flex flex-col">
                      <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/70 to-cyan-300/0"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent"></div>
                        <div className="absolute top-5 left-5 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-sm font-bold tracking-[0.2em] text-primary shadow-lg">
                          {item.step}
                        </div>
                      </div>
                      
                      <div className="relative p-6 pt-7 flex flex-col flex-grow z-20">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-[15px] leading-8 group-hover:text-slate-800 transition-colors duration-300 flex-grow">{item.description}</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="absolute right-[-2.5rem] top-1/2 z-[80] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_14px_30px_rgba(249,115,22,0.32)] ring-4 ring-white/80 lg:flex">
                        <ArrowRight size={18} strokeWidth={2.75} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-[#9a6b2f] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/building-interior.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.92),rgba(30,41,59,0.84),rgba(154,107,47,0.58))]"></div>
            <div className="absolute -top-32 -left-20 w-72 h-72 bg-secondary/35 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 right-0 w-96 h-96 bg-sky-300/15 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1.6fr] gap-10 xl:gap-12 items-start">
              <div data-scroll="left" className="animate-slideInLeft xl:-mt-10">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 mb-5 backdrop-blur-sm">
                  Trusted Engineering Partner
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Why Choose Pitambra?</h2>
                <div className="space-y-5">
                  {[
                    { title: '12+ Years Experience', desc: 'Proven track record in MEP and fabrication projects', icon: Medal },
                    { title: 'Expert Leadership', desc: 'Led by Director Gajendra Pal with professional engineering degrees', icon: BriefcaseBusiness },
                    { title: 'Quality & Precision', desc: 'Commitment to highest standards and timeline adherence', icon: Shield },
                    { title: 'Cost-Effective Solutions', desc: 'Efficient project execution delivering maximum value', icon: TrendingUp },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-5 md:p-6 rounded-[28px] border border-white/12 bg-slate-900/35 shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur-sm hover:border-amber-300/40 hover:bg-slate-900/45 transition-all duration-300 group cursor-pointer">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_18px_35px_rgba(245,158,11,0.35)]">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-amber-200 transition-colors duration-300">{item.title}</h4>
                        <p className="text-slate-200/85 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 max-w-md">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div data-scroll="right" data-scroll-delay="1" className="animate-slideInRight space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {[
                    { src: '/industrial-facility.jpg', alt: 'Industrial MEP plant room' },
                    { src: '/electrical-system.jpg', alt: 'Electrical control systems' },
                    { src: '/hvac-system.jpg', alt: 'HVAC ducting system' },
                    { src: '/fabrication.jpg', alt: 'Structural fabrication work' },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-[0_22px_55px_rgba(2,6,23,0.28)] min-h-[220px] md:min-h-[280px] group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-white/10" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 border border-white/12 bg-slate-950/30 backdrop-blur-sm rounded-[28px] px-5 md:px-6 py-5">
                  {[
                    { icon: Shield, title: 'Safety First' },
                    { icon: BadgeCheck, title: 'Quality Assurance' },
                    { icon: Clock, title: 'On-Time Delivery' },
                    { icon: BriefcaseBusiness, title: 'Client Satisfaction' },
                    { icon: Factory, title: 'Innovative Solutions' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex min-h-16 min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                    >
                      <item.icon className="h-8 w-8 flex-shrink-0 text-amber-300 sm:h-9 sm:w-9" />
                      <span className="min-w-0 text-sm font-semibold uppercase leading-snug tracking-wide break-words">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-br from-[#e8f5ff] via-[#f8fbff] to-[#dceeff] relative overflow-hidden">
          <div className="absolute inset-0 opacity-90">
            <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/45 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.08)_0%,transparent_36%,rgba(245,158,11,0.08)_100%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-primary mb-5 shadow-sm backdrop-blur-sm">
                Trusted By Leading Brands
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fadeInUp">Our Valuable Clients</h2>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 animate-fadeInUp delay-100">
                We are proud to support respected automotive, industrial, and infrastructure teams with dependable engineering execution.
              </p>
            </div>

            <div className="clients-marquee space-y-4">
              {[clients.filter((_, index) => index % 2 === 0), clients.filter((_, index) => index % 2 !== 0)].map((row, rowIndex) => (
                <div key={rowIndex} className="clients-marquee-row">
                  <div className={`clients-marquee-track ${rowIndex === 1 ? 'clients-marquee-track-slow' : ''}`}>
                    {[...row, ...row, ...row].map((client, index) => (
                      <div
                        key={`${client.name}-${rowIndex}-${index}`}
                        className="group/card relative flex h-32 w-48 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-sky-200/80 bg-white/95 p-5 shadow-[0_16px_38px_rgba(14,116,144,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_22px_48px_rgba(245,158,11,0.13)] sm:w-56"
                      >
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-sky-500 to-secondary opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          fill
                          sizes="(max-width: 640px) 192px, 224px"
                          className="object-contain p-5 transition-transform duration-300 group-hover/card:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Strength */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-90">
            <div className="absolute -top-24 left-6 h-72 w-72 rounded-full bg-amber-300/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(245,158,11,0.09),transparent_42%,rgba(14,116,144,0.06))]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 shadow-sm backdrop-blur-sm">
                Built For Confident Project Delivery
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why industrial and commercial<br />
                teams choose Pitambra.
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
                We combine turnkey execution, compliant operations, technical manpower, and reliable site coordination to keep projects moving smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
              <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.96))] p-8 md:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full my-auto">
                  {[
                    { icon: BriefcaseBusiness, title: 'Turnkey Delivery', desc: 'MEP, civil, fabrication, and utility support from one execution team.' },
                    { icon: Shield, title: 'Safety & Quality', desc: 'Execution aligned with statutory, safety, and quality requirements.' },
                    { icon: BadgeCheck, title: 'Technical Manpower', desc: 'Skilled and certified teams with maintenance and shutdown support.' },
                    { icon: Building2, title: 'Compliant Workforce', desc: 'ESI, PF, EPF coverage with labor-compliant operating practices.' },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="group rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-[0_18px_40px_rgba(245,158,11,0.10)] transition-all duration-300">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={22} className="text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-base leading-8 text-slate-600">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[32px] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-primary to-slate-900 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <h3 className="text-2xl font-bold mb-6">At a glance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '12+', label: 'Years Active' },
                      { value: '100+', label: 'Projects Completed' },
                      { value: '50+', label: 'Team Strength' },
                      { value: 'Rs 2.3 Cr', label: 'Last FY Turnover' },
                    ].map((item, index) => (
                      <div key={index} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-5">
                        <p className="text-2xl md:text-3xl font-bold text-white mb-2">{item.value}</p>
                        <p className="text-sm text-slate-200/80">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-8 shadow-[0_18px_45px_rgba(245,158,11,0.10)]">
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">Business credentials</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'PAN: AAOCP4707G',
                      'GST: 24AAOCP4707G1ZD',
                      'MSME: GJ-17-0002706',
                      'Industrial execution support',
                    ].map((item, index) => (
                      <div key={index} className="rounded-full border border-amber-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Detailed contact and factory information stays on the contact page, while home keeps the focus on trust, capability, and delivery strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-primary to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-20 right-12 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_44%,rgba(245,158,11,0.10))]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">Testimonials</h2>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto animate-fadeInUp delay-100">
                Feedback from project teams who rely on our MEP and fabrication execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Rajesh Kumar',
                  title: 'Project Manager, Construction Co.',
                  content: 'Pitambra Fab Tech delivered exceptional quality and completed our complex MEP project on schedule. Their team&apos;s expertise was invaluable.',
                  rating: 5,
                  image: '/team-working.jpg'
                },
                {
                  name: 'Priya Sharma',
                  title: 'Facility Director, Tech Park',
                  content: 'Outstanding custom fabrication work! The precision and attention to detail exceeded our expectations. Highly recommended.',
                  rating: 5,
                  image: '/industrial-facility.jpg'
                },
                {
                  name: 'Amit Patel',
                  title: 'Site Engineer, Infrastructure',
                  content: 'Professional team with deep technical knowledge. They solved our challenging MEP integration issues efficiently and cost-effectively.',
                  rating: 5,
                  image: '/project-completion.jpg'
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  data-scroll="scale"
                  data-scroll-delay={String(index)}
                  className="group relative bg-white/95 border-2 border-white/15 shadow-[0_22px_55px_rgba(2,6,23,0.24)] rounded-xl overflow-hidden hover:border-amber-300/70 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 opacity-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative p-8 z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic font-medium">&quot;{testimonial.content}&quot;</p>
                    <div className="pt-6 border-t border-border/30 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-secondary">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-secondary font-semibold">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner Section */}
        <section data-scroll className="py-20 md:py-28 bg-gradient-to-br from-slate-100 via-sky-50 to-white text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-18">
            <Image
              src="/industrial-facility.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94),rgba(240,249,255,0.9),rgba(255,255,255,0.94))]"></div>
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-sky-300/35 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { stat: '12+', label: 'Years in Business', icon: Clock },
                { stat: '100+', label: 'Successful Projects', icon: CheckCircle },
                { stat: '50+', label: 'Expert Team Members', icon: Shield },
                { stat: 'Rs 2.3 Cr', label: 'Last FY Turnover', icon: Star },
              ].map((item, index) => (
                <div
                  key={index}
                  data-scroll="scale"
                  data-scroll-delay={index > 2 ? '3' : String(index)}
                  className="rounded-2xl border border-sky-200/80 bg-white/88 px-4 py-7 shadow-[0_20px_48px_rgba(15,23,42,0.08)] backdrop-blur-sm animate-fadeInUp sm:px-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 whitespace-nowrap text-[clamp(2.25rem,3.2vw,3rem)] font-bold leading-none text-primary animate-float" style={{ animationDelay: `${index * 150}ms` }}>
                    {item.stat}
                  </div>
                  <p className="text-lg text-slate-700 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section data-scroll className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-foreground overflow-hidden border-t border-amber-100">
          <div className="absolute inset-0 opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]"></div>
            <div className="absolute top-8 left-10 w-72 h-72 bg-amber-300/25 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 backdrop-blur-sm animate-fadeInUp">
              Let&apos;s Build Something Better
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp text-slate-900">Ready to Start Your Project?</h2>
            <p className="text-lg text-slate-700 mb-12 animate-fadeInUp delay-100 leading-relaxed">
              Contact us today for a consultation and let our team of experts guide your MEP and fabrication needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-lg font-bold shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300 animate-fadeInUp delay-200"
            >
              Request a Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
