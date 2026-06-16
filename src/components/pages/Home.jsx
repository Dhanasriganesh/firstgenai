import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { COMPANY, UNSPLASH } from '../../data/constants'
import { SERVICES, PROCESS_STEPS, HIGHLIGHTS } from '../../data/services'

const SERVICE_ICONS = {
  'web-development': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  'mobile-apps': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'digital-marketing': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  'custom-software': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'deployment-devops': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  'maintenance-support': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding !pt-8 md:!pt-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-indigo-600 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                Trusted IT Solutions Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Transform Your Business with{' '}
                <span className="gradient-text">Next-Gen Software</span>
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
                {COMPANY.fullName} delivers end-to-end digital solutions — from stunning websites and mobile apps to digital marketing, deployment, and ongoing support.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {HIGHLIGHTS.map(({ title, description }) => (
                  <div key={title} className="text-center sm:text-left">
                    <div className="text-base md:text-lg font-bold gradient-text">{title}</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10">
                <img
                  src={UNSPLASH.hero}
                  alt="Software development workspace"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-card !p-4 rounded-2xl max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Full-Stack</div>
                    <div className="text-xs text-slate-500">Web, Mobile & Cloud</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 sm:-right-8 glass-card !p-4 rounded-2xl">
                <div className="text-sm font-bold gradient-text">Fresh & Focused</div>
                <div className="text-xs text-slate-500">Built for your vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Comprehensive IT Solutions for Every Need"
            subtitle="From ideation to deployment and beyond, we provide the full spectrum of software services to help your business thrive in the digital age."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <GlassCard key={service.id} className="group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600 mb-5 group-hover:from-indigo-500 group-hover:to-violet-600 group-hover:text-white transition-all duration-400">
                  {SERVICE_ICONS[service.id]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.shortDesc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-violet-600 transition-colors group/link"
                >
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src={UNSPLASH.team}
                alt="Professional software team collaborating"
                className="rounded-3xl shadow-xl shadow-indigo-500/10 w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
            </div>
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title="Your Success Is Our Mission"
                subtitle="We combine technical excellence with a client-first approach to deliver solutions that drive real business results."
                align="left"
              />
              <div className="space-y-5">
                {[
                  { title: 'Expert Team', desc: 'Skilled developers, designers, and strategists with years of industry experience.' },
                  { title: 'Agile Methodology', desc: 'Transparent, iterative development with regular updates and flexible adjustments.' },
                  { title: 'End-to-End Service', desc: 'From concept and design to deployment, marketing, and long-term maintenance.' },
                  { title: 'Quality Assurance', desc: 'Rigorous testing and code reviews ensure reliable, scalable, and secure products.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Bring Your Vision to Life"
            subtitle="A proven, transparent workflow that keeps you informed at every stage of your project."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ step, title, description }, i) => (
              <GlassCard key={step} className="relative text-center !p-6">
                <div className="text-4xl font-bold gradient-text opacity-30 mb-3">{step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-indigo-300 to-transparent" />
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-gradient-to-b from-white to-violet-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Commitment"
            title="What You Can Expect From Us"
            subtitle="As a new company, we bring fresh energy, modern expertise, and undivided attention to every client we work with."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map(({ title, description }) => (
              <GlassCard key={title} className="text-center">
                <h3 className="text-lg font-bold gradient-text mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={UNSPLASH.workspace}
              alt="Modern workspace"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/85 to-violet-900/90" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to Build Something Amazing?
              </h2>
              <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
                Let&apos;s discuss your project and create a tailored solution that drives growth for your business.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary !bg-white !text-indigo-700 !shadow-white/20 hover:!shadow-white/30">
                  Get Free Consultation
                </Link>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
