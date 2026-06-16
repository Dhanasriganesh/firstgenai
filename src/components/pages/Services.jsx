import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { SERVICES } from '../../data/services'
import { COMPANY } from '../../data/constants'

function Services() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Full-Spectrum Software Solutions"
            subtitle="Whether you need a new website, a mobile app, or a complete digital transformation — we have the expertise to deliver."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-indigo-500/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card !p-3 rounded-xl">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <GlassCard hover={false} className="!p-0 !bg-transparent !border-none !shadow-none">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary text-sm">
                    Request This Service
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-500 mb-8">
            Every business is unique. Tell us about your requirements and we&apos;ll craft a tailored proposal for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact Us Today</Link>
            <a href={`mailto:${COMPANY.email}`} className="btn-secondary">{COMPANY.email}</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
