import { useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import BackgroundEffects from '../ui/BackgroundEffects'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function Layout() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <BackgroundEffects />
        <Header />
        <main className="relative z-10 flex-1 pt-20">
          <Routers />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default Layout
