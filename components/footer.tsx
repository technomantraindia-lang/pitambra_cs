import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowUpRight, Wrench, Zap, Droplet, Factory, CheckCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-primary-foreground">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/industrial-facility.jpg"
          alt="Industrial facility"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(15,31,74,0.92)_45%,rgba(11,21,49,0.98)_100%)]" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.07] shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-md">
          <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-sky-300" />
          <div className="px-6 py-7 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
                Pitambra Fabtech Pvt Ltd
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Engineering built for dependable project delivery.</h3>
              <p className="mt-3 text-sm md:text-base text-slate-200/85">
                Expert MEP and custom fabrication solutions with a focus on precision, timelines, and long-term performance.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(249,115,22,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_22px_48px_rgba(249,115,22,0.34)]"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.35fr_0.75fr_1fr_1.2fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-white mb-4">About Pitambra Fabtech Pvt Ltd</h4>
            <p className="text-sm leading-7 text-slate-200/80 mb-6 max-w-md">
              We support industrial and commercial projects with practical MEP engineering, fabrication expertise, and quality-focused execution from planning to delivery.
            </p>
            <div className="mb-6 space-y-2 text-sm text-slate-200/85">
              {['Safety-focused execution', 'Skilled technical manpower', 'On-time project support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                <p className="text-xl font-bold text-white">12+</p>
                <p className="text-slate-300/80">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                <p className="text-xl font-bold text-white">100+</p>
                <p className="text-slate-300/80">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/projects', label: 'Projects' },
                { href: '/director', label: 'Director' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-slate-200/85 transition-colors hover:text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70 transition-transform group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Core Services</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 transition-colors hover:bg-white/10">
                <Wrench size={16} className="text-amber-300" />
                <span className="text-slate-200/85">Mechanical Engineering</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 transition-colors hover:bg-white/10">
                <Zap size={16} className="text-amber-300" />
                <span className="text-slate-200/85">Electrical Systems</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 transition-colors hover:bg-white/10">
                <Droplet size={16} className="text-amber-300" />
                <span className="text-slate-200/85">Plumbing Solutions</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 transition-colors hover:bg-white/10">
                <Factory size={16} className="text-amber-300" />
                <span className="text-slate-200/85">Custom Fabrication</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-amber-300" />
                <a href="tel:+918758815986" className="text-slate-200/85 hover:text-white transition-colors">
                  +91 87588 15986
                </a>
              </div>
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-amber-300" />
                <a href="mailto:pitambrafabtech@gmail.com" className="text-slate-200/85 hover:text-white transition-colors break-all">
                  pitambrafabtech@gmail.com
                </a>
              </div>
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-amber-300" />
                <span className="text-slate-200/85">
                  Plot No. SME-1/110, GIDC Estate, Halol-2 (Maswad), Taluka Halol, Panchmahals, Gujarat 389350
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-300/85 md:flex-row md:items-center md:justify-between">
            <p>&copy; {currentYear} Pitambra Fabtech Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
