import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Image from 'next/image'
import { Wrench, Zap, Droplet, Factory, CheckCircle2, Flame, Building2, ShieldCheck, FileBadge2 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Mechanical Engineering',
      description: 'Execution-focused mechanical works for industrial facilities, utility systems, shutdown jobs, and fabrication-linked installations.',
      features: [
        'Mechanical ARC services',
        'Process pipelines (MS / SS)',
        'Storage tanks, vessels, silos & chimneys',
        'GI ducting, HVAC spiral & square ducting',
        'Compressed air systems & DG installation',
        'Machinery erection, relocation & shutdown jobs'
      ]
    },
    {
      icon: Zap,
      title: 'Electrical Systems',
      description: 'Complete industrial and commercial electrical installation, distribution, testing, commissioning, and maintenance support.',
      features: [
        'HT & LT power distribution systems',
        'Transformer installation & cabling',
        'Panel installation (PCC, MCC, APFC, VFD, Changeover Panels)',
        'Cable tray laying (MS / GI / FRP)',
        'Industrial & commercial lighting systems',
        'DG set installation, synchronization, testing, commissioning & maintenance'
      ]
    },
    {
      icon: Droplet,
      title: 'Plumbing & Fire Fighting',
      description: 'Water, drainage, treatment, and fire fighting systems handled with installation and commissioning support.',
      features: [
        'Industrial & domestic plumbing systems',
        'Water supply & drainage piping',
        'STP / ETP piping & equipment installation',
        'Fire hydrant & sprinkler systems',
        'Fire pump room installation & commissioning',
        'Earthing & lightning protection systems'
      ]
    },
    {
      icon: Factory,
      title: 'Fabrication, Civil & Interior Works',
      description: 'Integrated support across fabrication, civil infrastructure, aluminium partitioning, interiors, and utility-ready construction packages.',
      features: [
        'Aluminium partitions, glass & ACP-based systems',
        'False ceiling works for office, industrial & clean area',
        'Industrial civil works, RCC & PCC',
        'Machine foundation & equipment base works',
        'Flooring, road, drain & trench works',
        'Repair, retrofitting & modification works'
      ]
    }
  ]

  const specialistServices = [
    {
      icon: Flame,
      title: 'Instrumentation & Automation',
      description: 'Optional project support for controls, commissioning, and field instrumentation packages.',
      items: [
        'Field instrument installation',
        'Cable laying, termination & loop checking',
        'PLC / Control panel wiring',
        'Commissioning support'
      ]
    },
    {
      icon: Building2,
      title: 'Aluminium & Interior Works',
      description: 'Interior-ready systems for offices, industrial spaces, clean areas, and integrated services coordination.',
      items: [
        'Aluminium partition work',
        'Glass and ACP-based partitions',
        'Gypsum / mineral fiber / metal false ceilings',
        'Clean room compatible partitions & ceilings',
        'Integration with lighting, HVAC & fire systems'
      ]
    },
    {
      icon: Factory,
      title: 'Civil & Infrastructure Works',
      description: 'Execution support for industrial civil works, machine bases, and site development requirements.',
      items: [
        'Industrial civil works & maintenance',
        'Machine foundation & equipment base works',
        'Flooring works (IPS, VDF, epoxy preparation)',
        'Road, drain & trench works',
        'Brickwork, plastering & painting'
      ]
    }
  ]

  const capabilities = [
    'Turnkey MEP & Civil execution',
    'Utility & operation support services',
    'Skilled and certified technical manpower',
    'Preventive & breakdown maintenance',
    'Compliance with statutory, safety & quality standards',
  ]

  const welfare = [
    'Employees covered under ESI / PF / EPF',
    'Annual bonus & gratuity',
    'Fully compliant with labor & statutory norms',
  ]

  const statutoryDetails = [
    { label: 'PAN No.', value: 'AAOCP4707G' },
    { label: 'GST No.', value: '24AAOCP4707G1ZD' },
    { label: 'MSME (UDYAM)', value: 'GJ-17-0002706' },
    { label: 'EPF No.', value: 'VDBRD3202609000' },
    { label: 'ESIC No.', value: '38000604820000699' },
    { label: 'Turnover (Last FY)', value: 'Rs 2.3 Crore' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header with Carousel Background */}
        <section className="relative bg-primary text-primary-foreground py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImageCarousel 
              images={[
                { src: '/hvac-system.jpg', alt: 'HVAC Systems' },
                { src: '/electrical-system.jpg', alt: 'Electrical Systems' },
                { src: '/plumbing-system.jpg?v=2', alt: 'Plumbing' },
                { src: '/fabrication.jpg', alt: 'Fabrication' },
              ]}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/75 to-primary/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slideInLeft">Our Services</h1>
            <p className="text-lg opacity-90 max-w-2xl animate-slideInLeft delay-100">
              Comprehensive MEP and custom fabrication solutions designed to meet your project requirements with precision and excellence.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-orange-50/70 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 shadow-sm">
                Service Divisions
              </div>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                We execute industrial, commercial, and infrastructure work packages across MEP, civil, fabrication, interiors, and support systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                const images = ['/hvac-system.jpg', '/electrical-system.jpg', '/plumbing-system.jpg?v=2', '/fabrication.jpg']
                return (
                  <div key={index} className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/70 hover:shadow-[0_30px_70px_rgba(245,158,11,0.14)] animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={images[index]}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"></div>
                      </div>
                      <div className="absolute left-6 top-6 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/92 px-4 py-2 shadow-lg backdrop-blur-sm">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-50">
                          <Icon size={22} className="text-secondary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Core Service</span>
                      </div>
                    </div>

                    <div className="relative z-20 p-8">
                      <div className="mb-6 flex items-start justify-between gap-6">
                        <div>
                          <h3 className="text-[30px] leading-tight font-bold text-slate-900 mb-3">{service.title}</h3>
                          <p className="max-w-xl text-[15px] leading-7 text-slate-600">{service.description}</p>
                        </div>
                        <div className="hidden md:block text-right">
                          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Expertise</div>
                          <div className="mt-1 text-lg font-bold text-secondary">MEP / Fabrication</div>
                        </div>
                      </div>

                      <div className="mb-5 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-amber-300/80 to-transparent"></div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Key Offerings</h4>
                      </div>

                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="group/item flex gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50/70">
                            <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                            <span className="text-sm leading-6 text-slate-600 group-hover/item:text-slate-900 transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Specialist Services */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50 via-cyan-50/70 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Extended Execution Scope</h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Beyond core MEP work, our team supports instrumentation, interiors, and infrastructure packages for complete site readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {specialistServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-card to-sky-50/40 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_24px_55px_rgba(56,189,248,0.10)] transition-all duration-500"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-sky-50">
                      <Icon size={28} className="text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-7 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start rounded-xl px-3 py-2 hover:bg-white/80 transition-colors duration-300">
                          <CheckCircle2 size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities & Compliance */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-indigo-50/60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-24 left-6 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 shadow-sm">
                Service Delivery Strength
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Execution capability with compliance you can rely on.</h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600 leading-8">
                Our service teams support end-to-end execution, technical manpower, statutory compliance, and maintenance-backed project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
              <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.96))] p-8 md:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full my-auto">
                  {capabilities.map((item, idx) => (
                    <div key={idx} className="group rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-[0_18px_40px_rgba(245,158,11,0.10)] transition-all duration-300">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck size={22} className="text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item}</h3>
                      <p className="text-sm leading-7 text-slate-600">
                        Reliable execution support built around technical planning, site coordination, and delivery discipline.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[32px] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-primary to-slate-900 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <h3 className="text-2xl font-bold mb-6">Employee Welfare & Compliance</h3>
                  <div className="space-y-4">
                    {welfare.map((item, idx) => (
                      <div key={idx} className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4">
                        <p className="font-semibold text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-8 shadow-[0_18px_45px_rgba(245,158,11,0.10)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50">
                    <FileBadge2 size={22} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Statutory Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {statutoryDetails.map((item, idx) => (
                      <div key={idx} className="rounded-2xl border border-amber-200/70 bg-white/85 px-4 py-4 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">{item.label}</p>
                        <p className="text-slate-900 font-semibold break-words">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-primary to-slate-800 text-primary-foreground overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.18),transparent_32%)]"></div>
            <div className="absolute top-8 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 mb-5 backdrop-blur-sm">
              Tailored Project Support
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Discuss Your Project?</h2>
            <p className="text-lg text-slate-200 mb-8">
              Contact our team to discuss your specific requirements and get a detailed proposal.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
