import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { HiSun, HiMoon, HiDownload } from 'react-icons/hi'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const { isDark, setIsDark } = useTheme()
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const activeSection = useScrollSpy(NAV.map(n => n.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/88 dark:bg-[#080810]/92 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/[0.05] shadow-sm'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Home" className="group flex items-center gap-1">
            <span className="font-display text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-200">
              YC
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent mb-1 group-hover:scale-150 transition-transform duration-200" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV.map(({ label, href }) => {
              const id = href.slice(1)
              const active = activeSection === id
              return (
                <a
                  key={id}
                  href={href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium font-body transition-all duration-200 ${
                    active
                      ? 'text-accent'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-accent/10 dark:bg-accent/[0.13] border border-accent/25 -z-10"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.4 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/[0.09] text-gray-500 dark:text-gray-400 hover:border-accent hover:text-accent transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -20, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1    }}
                  exit={{    opacity: 0, rotate:  20, scale: 0.85 }}
                  transition={{ duration: 0.14 }}
                >
                  {isDark ? <HiSun size={15} /> : <HiMoon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex btn-primary py-2 px-4 text-xs"
            >
              <HiDownload size={13} />
              Resume
            </a>

            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/[0.09] text-gray-600 dark:text-gray-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'x' : 'menu'}
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0   }}
                  exit={{    opacity: 0, rotate:  10 }}
                  transition={{ duration: 0.13 }}
                >
                  {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 dark:bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[62px] left-4 right-4 z-50 md:hidden bg-white/97 dark:bg-[#0e0e1a]/97 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/[0.08] shadow-2xl shadow-black/10 dark:shadow-black/50 p-5"
            >
              <nav className="flex flex-col gap-1 mb-5" aria-label="Mobile navigation">
                {NAV.map(({ label, href }) => {
                  const id = href.slice(1)
                  return (
                    <a
                      key={id}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium font-body transition-all duration-150 ${
                        activeSection === id
                          ? 'text-accent bg-accent/10'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      {label}
                    </a>
                  )
                })}
              </nav>
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full"
              >
                <HiDownload size={14} /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
