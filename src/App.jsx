import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HealthInsights from './components/HealthInsights'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-lift transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <HealthInsights />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}
