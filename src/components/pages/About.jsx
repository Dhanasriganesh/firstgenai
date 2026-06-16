import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { COMPANY, UNSPLASH } from '../../data/constants'
import { HIGHLIGHTS } from '../../data/services'

const VALUES = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Client-Centric',
    description: 'Your goals drive everything we do. We listen, adapt, and deliver solutions aligned with your vision.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality & Integrity',
    description: 'We uphold the highest standards in code quality, security, and honest communication at every step.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnership',
    description: 'We don\'t just build and leave — we provide ongoing support to ensure your software evolves with your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

function About() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About Us"
            title={`Welcome to ${COMPANY.fullName}`}
            subtitle="We are a passionate team of software engineers, designers, and digital strategists dedicated to helping businesses succeed in the digital world."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src={UNSPLASH.coding}
                alt="Developers working on software project"
                className="rounded-3xl shadow-xl shadow-indigo-500/10 w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5">
                <div className="text-sm font-bold gradient-text">New & Ambitious</div>
                <div className="text-xs text-slate-500 mt-1">Ready to build with you</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                {COMPANY.fullName} was founded with a clear mission: to help businesses access world-class software solutions without the complexity. We&apos;re a fresh, dedicated team ready to turn your ideas into reality.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                Whether you&apos;re launching your first product or need a reliable partner for your digital needs, we bring modern expertise, transparent communication, and a client-first mindset to every engagement.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our team combines strong technical skills with a genuine understanding of business goals, ensuring every solution we build is practical, scalable, and aligned with your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us Every Day"
            subtitle="These core principles guide our work and define the relationships we build with our clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ title, description, icon }) => (
              <GlassCard key={title} className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white mb-5 shadow-lg shadow-indigo-500/20">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map(({ title, description }) => (
              <GlassCard key={title} className="text-center !p-6">
                <div className="text-lg font-bold gradient-text">{title}</div>
                <div className="text-sm text-slate-500 mt-2">{description}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let&apos;s Work Together</h2>
          <p className="text-slate-500 mb-8">
            Ready to take your business to the next level? We&apos;d love to hear about your project.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
