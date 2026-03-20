import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'

const CODE_ICON = (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)
const MONITOR_ICON = (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>
)
const SERVER_ICON = (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.75M4.5 15V5.25A2.25 2.25 0 016.75 3h10.5A2.25 2.25 0 0119.5 5.25V15" />
  </svg>
)

const GROUPS = [
  {
    category: 'Languages',
    icon: CODE_ICON,
    theme: { dot: 'bg-violet-400', text: 'text-violet-500 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10', border: 'border-violet-200 dark:border-violet-500/20', hover: 'hover:border-violet-400/50 dark:hover:border-violet-400/35' },
    skills: [
      { name: 'JavaScript', desc: 'ES6+, async/await, DOM' },
      { name: 'Python',     desc: 'ML, scripting, APIs'    },
      { name: 'Java',       desc: 'OOP, Data Structures'   },
      { name: 'C',          desc: 'Systems, memory mgmt'   },
    ],
  },
  {
    category: 'Frontend',
    icon: MONITOR_ICON,
    theme: { dot: 'bg-cyan-400', text: 'text-cyan-500 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-500/10', border: 'border-cyan-200 dark:border-cyan-500/20', hover: 'hover:border-cyan-400/50 dark:hover:border-cyan-400/35' },
    skills: [
      { name: 'React',          desc: 'Hooks, context, SPA'   },
      { name: 'Tailwind CSS',   desc: 'Utility-first styling'  },
      { name: 'Framer Motion',  desc: 'Animations & gestures'  },
      { name: 'HTML & CSS',     desc: 'Semantic, responsive'   },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: SERVER_ICON,
    theme: { dot: 'bg-emerald-400', text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/20', hover: 'hover:border-emerald-400/50 dark:hover:border-emerald-400/35' },
    skills: [
      { name: 'FastAPI',    desc: 'Python REST APIs'    },
      { name: 'Chart.js',   desc: 'Data visualization'  },
      { name: 'Git/GitHub', desc: 'Version control'     },
      { name: 'REST APIs',  desc: 'Design & integration' },
    ],
  },
]

const ALL_TECH = ['React','JavaScript','Python','FastAPI','HTML5','Tailwind CSS','Framer Motion','Chart.js','Java','C','Git','GitHub','Vercel','REST APIs']

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-50/60 dark:bg-white/[0.01]">
      <SectionHeader
        label="02 / Expertise"
        title="Skills & Tools"
        subtitle="Technologies I use to build robust, intelligent, and beautiful systems."
      />

      {/* Category cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {GROUPS.map(({ category, icon, theme, skills }, gi) => (
          <motion.article
            key={category}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: gi * 0.09 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.18 } }}
            className={`card-glass p-6 border transition-all duration-300 ${theme.hover}`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${theme.text} ${theme.bg} border ${theme.border}`}>
                {icon}
              </div>
              <h3 className="font-display text-sm font-semibold text-gray-900 dark:text-white">{category}</h3>
            </div>

            {/* Skill rows */}
            <ul className="space-y-3">
              {skills.map(({ name, desc }, i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, delay: gi * 0.09 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme.dot} opacity-55 group-hover:opacity-100 transition-opacity`} aria-hidden="true" />
                  <div className="flex items-baseline justify-between gap-2 flex-1 min-w-0">
                    <span className="font-mono text-xs font-medium text-gray-800 dark:text-gray-200 flex-shrink-0">{name}</span>
                    <span className="font-mono text-[10px] text-gray-400 truncate">{desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Full arsenal */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.28 }}
        viewport={{ once: true }}
        className="card-glass p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap">Full Stack Arsenal</p>
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.05]" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_TECH.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.28 + i * 0.025 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -1 }}
              className="skill-chip"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
