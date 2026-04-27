import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Award, Briefcase, GraduationCap, CheckCircle2, Wrench, ClipboardCheck, UsersRound } from 'lucide-react'
import Image from 'next/image'

export default function Director() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="relative bg-gradient-to-br from-slate-950 via-primary to-slate-900 text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/70 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_30%)]"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 mb-5 backdrop-blur-sm animate-fadeInUp">
              Leadership Profile
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Leadership Excellence</h1>
            <p className="text-lg opacity-90 max-w-2xl animate-fadeInUp delay-100">
              Meet the visionary leader guiding Pitambra Fab Tech&apos;s commitment to engineering excellence and innovation.
            </p>
          </div>
        </section>

        {/* Director Profile */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-white to-sky-50/70 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-white via-card to-amber-50/40 border border-amber-200/70 rounded-[32px] overflow-hidden shadow-[0_26px_70px_rgba(15,23,42,0.10)] hover:shadow-[0_32px_80px_rgba(245,158,11,0.14)] transition-shadow duration-500 animate-scaleIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Profile Image */}
                <div className="bg-gradient-to-br from-slate-900 via-primary/95 to-slate-800 flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-52 h-52 bg-sky-300/30 rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative w-full aspect-square max-w-sm">
                    <Image
                      src="/gajendra-pal.jpg"
                      alt="Gajendra Pal - Director"
                      fill
                      className="object-cover rounded-[28px] shadow-[0_22px_55px_rgba(2,6,23,0.4)]"
                      priority
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="animate-slideInRight">
                    <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 mb-5">
                      Director, Pitambra Fab Tech
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 leading-tight">Gajendra Pal</h2>
                    <p className="text-xl text-secondary font-semibold mb-8 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      Engineering & Strategic Leadership
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                      A highly experienced engineering professional with over 12 years of expertise in MEP (Mechanical, Electrical, and Plumbing) projects. Gajendra Pal is the visionary director leading Pitambra Fab Tech&apos;s mission to deliver engineering excellence and innovation.
                    </p>

                    <div className="space-y-4 mb-10">
                      <div className="flex gap-4 items-start p-4 bg-white/85 border border-amber-100 rounded-2xl hover:bg-amber-50/80 hover:border-amber-200 transition-all duration-300">
                        <GraduationCap size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground text-base">Diploma in Electrical Engineering</p>
                          <p className="text-sm text-muted-foreground">Specialized technical training & expertise</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start p-4 bg-white/85 border border-amber-100 rounded-2xl hover:bg-amber-50/80 hover:border-amber-200 transition-all duration-300">
                        <GraduationCap size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground text-base">B.Tech in Mechanical Engineering</p>
                          <p className="text-sm text-muted-foreground">Advanced engineering education & credentials</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-gradient-to-r from-amber-100 to-orange-50 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200/80 hover:border-amber-300 transition-colors duration-300">MEP Expertise</span>
                      <span className="bg-gradient-to-r from-sky-100 to-cyan-50 text-sky-800 px-4 py-2 rounded-full text-sm font-semibold border border-sky-200/80 hover:border-sky-300 transition-colors duration-300">12+ Years</span>
                      <span className="bg-gradient-to-r from-secondary/15 to-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:border-primary/40 transition-colors duration-300">Strategic Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Highlights */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-[#6e4a23] relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 mb-5 backdrop-blur-sm">
                Leadership Highlights
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Professional Excellence</h2>
              <p className="text-center text-slate-200/80 text-lg max-w-2xl mx-auto">Strategic achievements and leadership defining our industry approach</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: 'Project Management',
                  desc: 'Successfully managed and executed over 100 MEP and fabrication projects of varying complexity and scale, from residential to industrial applications.'
                },
                {
                  icon: Award,
                  title: 'Technical Expertise',
                  desc: 'Deep knowledge in mechanical systems, electrical design, plumbing solutions, and custom fabrication with focus on innovation and efficiency.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Quality Assurance',
                  desc: 'Committed to maintaining the highest standards in project execution, ensuring precision, safety, and adherence to all timelines and regulations.'
                },
                {
                  icon: Award,
                  title: 'Team Leadership',
                  desc: 'Leads a team of 50+ dedicated professionals including engineers, managers, and technicians, fostering a culture of excellence and continuous improvement.'
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div 
                    key={index} 
                    className="bg-white/8 border border-white/12 rounded-[28px] p-8 hover:border-amber-300/35 hover:bg-white/12 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-1 animate-fadeInUp backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-amber-200" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-200/80 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Competencies */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-amber-50/60">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Core Competencies</h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Comprehensive expertise across all MEP domains and project management</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'MEP Systems',
                  icon: Wrench,
                  skills: ['Mechanical Design', 'Electrical Systems', 'Plumbing Solutions', 'HVAC Integration', 'System Coordination', 'Performance Analysis']
                },
                {
                  title: 'Project Execution',
                  icon: ClipboardCheck,
                  skills: ['Planning & Design', 'Vendor Management', 'Quality Control', 'Timeline Management', 'Cost Optimization', 'Documentation']
                },
                {
                  title: 'Leadership',
                  icon: UsersRound,
                  skills: ['Team Management', 'Strategic Planning', 'Problem Solving', 'Client Relations', 'Process Improvement', 'Risk Management']
                },
              ].map((section, index) => {
                const Icon = section.icon
                return (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-card to-amber-50/40 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/70 hover:shadow-[0_24px_55px_rgba(245,158,11,0.12)] animate-fadeInUp"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/25 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="relative mb-7 flex items-center gap-4 border-b border-amber-200/80 pb-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-100 to-sky-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon size={26} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Competency</p>
                        <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                      </div>
                    </div>
                    <div className="relative space-y-3">
                      {section.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-xl border border-transparent bg-white/45 px-3 py-2.5 transition-all duration-300 hover:border-amber-200/80 hover:bg-white">
                          <CheckCircle2 size={17} className="shrink-0 text-primary" />
                          <span className="text-sm font-semibold leading-6 text-slate-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-cyan-50 via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-white via-card to-sky-50/60 border border-slate-200/80 rounded-[30px] p-8 md:p-12 shadow-[0_22px_55px_rgba(15,23,42,0.08)]">
              <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 mb-5 shadow-sm">
                Leadership Philosophy
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Leading Through Precision, Quality, and Trust</h3>
              <div className="space-y-6 text-muted-foreground leading-8">
                <p>
                  Gajendra Pal believes that true engineering excellence is built on three pillars: technical expertise, unwavering commitment to quality, and collaborative teamwork. Under his leadership, Pitambra Fab Tech has become synonymous with reliability and innovation in the MEP and fabrication sectors.
                </p>
                <p>
                  His approach to project management emphasizes detailed planning, proactive problem-solving, and transparent communication with all stakeholders. He ensures that every project is delivered with precision, adheres to safety standards, and meets or exceeds client expectations.
                </p>
                <p>
                  Gajendra is passionate about fostering a culture of continuous learning and improvement within the organization. He believes in investing in his team&apos;s development, encouraging innovation, and maintaining the highest professional standards across all operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Stats */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-white to-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">By the Numbers</h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Quantifiable achievements demonstrating our industry impact</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '12+', label: 'Years of Experience' },
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Team Members Led' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white via-card to-amber-50/40 border border-amber-200/80 rounded-[26px] p-8 text-center hover:border-secondary/50 hover:shadow-[0_24px_55px_rgba(245,158,11,0.14)] hover:-translate-y-2 transition-all duration-500 animate-fadeInUp group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.number}</div>
                  <p className="font-semibold text-foreground text-lg">{stat.label}</p>
                </div>
              ))}
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
              Leadership That Delivers
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Work With Our Expert Leadership</h2>
            <p className="text-lg text-slate-700 mb-8">
              Benefit from Gajendra Pal&apos;s expertise and leadership. Contact us to discuss your next project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
