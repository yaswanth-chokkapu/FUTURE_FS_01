import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { HiDownload } from 'react-icons/hi'

const stagger = {
  hidden: {},
  show:  { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const rise = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/yaswanth-chokkapu',                   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://in.linkedin.com/in/yaswanth-chokkapu-ba737a276', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:yaswanthchokkapu69@gmail.com',                     label: 'Email'    },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">

      {/* Background: blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/[0.055] blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04]  blur-[110px]" />
      </div>

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.45] dark:opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,170,0.07) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          maskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="section-container relative z-10 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_320px] gap-14 xl:gap-20 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Status badge */}
            <motion.div variants={rise} className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/[0.09] border border-accent/[0.2] px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" aria-hidden="true" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={rise} className="font-display font-bold leading-[1.08] tracking-tight mb-5">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white">Yaswanth</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient">Chokkapu</span>
            </motion.h1>

            {/* Role line */}
            <motion.p variants={rise} className="font-body text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-2">
              <span className="text-gray-900 dark:text-white font-semibold">AI Engineer</span>
              <span className="mx-2 text-gray-300 dark:text-gray-600">·</span>
              <span className="text-gray-900 dark:text-white font-semibold">Full Stack Developer</span>
              <span className="mx-2 text-gray-300 dark:text-gray-600">·</span>
              <span className="text-accent font-semibold">CSE Student</span>
            </motion.p>

            {/* Tagline */}
            <motion.p variants={rise} className="font-body text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-md mb-9">
              Building intelligent and scalable solutions — bridging cutting-edge AI research with real-world impact.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={rise} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/resume.pdf" download className="btn-outline">
                <HiDownload size={14} /> Resume
              </a>
              <a href="#contact" className="btn-outline">
                <FiMail size={14} /> Contact
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={rise} className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.16em] uppercase select-none">Find me on</span>
              <div className="h-px w-6 bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/[0.09] text-gray-400 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-px"
                >
                  <Icon size={14} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Info cards ── */}
          <motion.aside
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex flex-col gap-3"
            aria-label="Quick stats"
          >
            {/* Stat cards */}
            {[
              { value: '3+', label: 'Projects built',  sub: 'AI & Web'      },
              { value: 'AI', label: 'Specialization',  sub: 'CSE @ VBIT'    },
              { value: '5+', label: 'Tech stacks used', sub: 'Full spectrum' },
            ].map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: 0.95 + i * 0.1, duration: 0.45 }}
                whileHover={{ x: -3, transition: { duration: 0.18 } }}
                className="card-glass px-5 py-4 flex items-center gap-4 cursor-default"
              >
                <p className="font-display text-2xl font-bold text-accent leading-none w-10 flex-shrink-0">{value}</p>
                <div>
                  <p className="font-body text-xs font-semibold text-gray-800 dark:text-gray-200">{label}</p>
                  <p className="font-mono text-[10px] text-gray-400 mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Tech badges card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35 }}
              className="card-glass px-5 py-4"
            >
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Python', 'FastAPI', 'AI/ML', 'Tailwind'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.7 }}>
          <FiArrowDown size={14} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
