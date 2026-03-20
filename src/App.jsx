import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero   from './sections/Hero'

// Lazy-load below-fold sections for faster initial paint
const About     = lazy(() => import('./sections/About'))
const Skills    = lazy(() => import('./sections/Skills'))
const Projects  = lazy(() => import('./sections/Projects'))
const Education = lazy(() => import('./sections/Education'))
const Contact   = lazy(() => import('./sections/Contact'))

const SectionFallback = () => (
  <div className="py-32 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#080810] transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
