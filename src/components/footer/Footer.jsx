import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../../data/constants'
import logo from '../../assets/firstgenai-logo.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-auto">
      <div className="bg-gradient-to-b from-white to-indigo-50/50 border-t border-indigo-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block group">
                <img
                  src={logo}
                  alt={`${COMPANY.fullName} logo`}
                  className="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
                Empowering businesses with cutting-edge software solutions — from web and mobile apps to digital marketing and cloud deployment.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-indigo-500 transition-all duration-300" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                {[
                  'Website Development',
                  'Mobile Applications',
                  'Digital Marketing',
                  'Custom Software',
                  'Deployment & DevOps',
                  'Maintenance & Support',
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 text-sm text-slate-500 hover:text-indigo-600 transition-colors group"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg glass group-hover:border-indigo-200 transition-colors">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="pt-1.5">{COMPANY.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-sm text-slate-500 hover:text-indigo-600 transition-colors group"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg glass group-hover:border-indigo-200 transition-colors">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="pt-1.5 break-all">{COMPANY.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-indigo-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} {COMPANY.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/services" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
