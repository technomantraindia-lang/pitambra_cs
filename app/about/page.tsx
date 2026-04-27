import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Image from 'next/image'
import { Award, Users, Target, Lightbulb, Wrench, Building2, Factory, CheckCircle2 } from 'lucide-react'

export default function About() {
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
                { src: '/project-completion.jpg', alt: 'Project Completion' },
                { src: '/building-interior.jpg', alt: 'Building Interior' },
                { src: '/industrial-facility.jpg', alt: 'Industrial Facility' },
              ]}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/75 to-primary/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slideInLeft">About Pitambra Fab Tech</h1>
            <p className="text-lg opacity-90 max-w-2xl animate-slideInLeft delay-100">
              Leading provider of MEP and custom fabrication solutions with over 12 years of industry experience.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-white to-sky-50/70 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInLeft">
                <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 shadow-sm backdrop-blur-sm">
                  Company Overview
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Who We Are</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Pitambra Fab Tech is a premier engineering and fabrication company dedicated to delivering excellence in MEP (Mechanical, Electrical, and Plumbing) projects and custom fabrication solutions.
                </p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  With over 12 years of proven expertise, we have successfully completed more than 100 projects, establishing ourselves as a trusted partner for engineering excellence and precision execution.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our multidisciplinary team combines technical expertise with practical industry knowledge to deliver cost-effective, efficient, and high-quality solutions tailored to each project&apos;s unique requirements.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 animate-slideInRight">
                {[
                  { number: '12+', label: 'Years Active', sublabel: 'Industry experience', image: '/team-working.jpg' },
                  { number: '100+', label: 'Projects', sublabel: 'Successfully completed', image: '/project-completion.jpg' },
                  { number: '50+', label: 'Team Members', sublabel: 'Expert professionals', image: '/building-interior.jpg' },
                  { number: '98%', label: 'Satisfaction', sublabel: 'Client satisfaction rate', image: '/industrial-facility.jpg' },
                ].map((stat, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white via-card to-amber-50/40 border border-amber-200/80 rounded-2xl p-6 hover:border-secondary/60 hover:shadow-[0_24px_55px_rgba(245,158,11,0.16)] hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 opacity-35 group-hover:opacity-55 transition-opacity duration-300">
                      <Image
                        src={stat.image}
                        alt={stat.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-white/45 to-white/15"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <p className="text-foreground font-bold mb-1">{stat.label}</p>
                      <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-[#7a5226] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 left-12 h-72 w-72 rounded-full bg-amber-300/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 mb-5 backdrop-blur-sm">
                What Drives Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Mission & Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Excellence',
                  desc: 'Delivering the highest quality engineering solutions with precision and attention to detail'
                },
                {
                  icon: Award,
                  title: 'Expertise',
                  desc: 'Leveraging deep technical knowledge and industry experience for optimal project outcomes'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  desc: 'Working closely with clients and stakeholders to understand and exceed expectations'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  desc: 'Continuously improving processes and adopting new technologies for better results'
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="group bg-white/8 border border-white/12 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/12 hover:border-amber-300/35 hover:-translate-y-2 transition-all duration-500">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-amber-200" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-200/80 leading-relaxed">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-amber-50/60">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Areas of Expertise</h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Our multidisciplinary team has successfully executed projects across various sectors and scales
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'MEP Systems',
                  icon: Wrench,
                  items: ['Mechanical Design', 'Electrical Systems', 'Plumbing Solutions', 'Integrated MEP Coordination', 'System Optimization']
                },
                {
                  category: 'Project Types',
                  icon: Building2,
                  items: ['Residential Buildings', 'Commercial Complexes', 'Industrial Facilities', 'Institutional Projects', 'Custom Infrastructure']
                },
                {
                  category: 'Fabrication Services',
                  icon: Factory,
                  items: ['Custom Metal Work', 'Structural Components', 'Specialized Installations', 'Industrial Equipment', 'Precision Assembly']
                },
              ].map((expertise, index) => {
                const Icon = expertise.icon
                return (
                  <div key={index} className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-gradient-to-br from-white via-card to-amber-50/40 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/70 hover:shadow-[0_24px_55px_rgba(245,158,11,0.12)]">
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-200/25 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="relative mb-7 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-100 to-sky-50 shadow-sm">
                        <Icon size={26} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Expertise</p>
                        <h3 className="text-xl font-bold text-foreground">{expertise.category}</h3>
                      </div>
                    </div>

                    <ul className="relative space-y-3">
                      {expertise.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 rounded-xl border border-transparent bg-white/45 px-3 py-2.5 transition-all duration-300 hover:border-amber-200/80 hover:bg-white">
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

        {/* Team Strength */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-cyan-50 via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-24 right-10 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white/75 px-4 py-2 text-sm font-semibold text-sky-700 mb-5 shadow-sm backdrop-blur-sm">
                Our People
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Team Strength</h2>
            </div>
            <div className="relative bg-gradient-to-br from-white via-card to-sky-50/60 border border-slate-200/80 rounded-[30px] p-8 md:p-12 shadow-[0_22px_55px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">50+ Dedicated Professionals</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our team comprises experienced engineers, project managers, technicians, and support staff, all committed to delivering excellence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Each team member brings specialized expertise and years of industry experience, ensuring comprehensive solutions for every project.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { role: 'Senior Engineers', count: '15+' },
                    { role: 'Project Managers', count: '10+' },
                    { role: 'Technical Specialists', count: '20+' },
                    { role: 'Support Staff', count: '10+' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/85 border border-slate-200/80 rounded-2xl p-4 hover:border-sky-300 hover:translate-x-1 transition-all duration-300">
                      <span className="font-medium text-foreground">{item.role}</span>
                      <span className="text-2xl font-bold text-primary">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              Build With Confidence
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Experience the Pitambra Difference</h2>
            <p className="text-lg text-slate-700 mb-8">
              Partner with us for your next project and discover excellence in MEP and fabrication solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
