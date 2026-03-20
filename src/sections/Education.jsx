import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    spec: 'Artificial Intelligence Specialization',
    institution: "Vignan's Institute of Information Technology",
    period: '2022 — Present',
    location: 'Andhra Pradesh, India',
    status: 'Ongoing',
    icon: '🎓',
    points: [
      'Specializing in Artificial Intelligence & Machine Learning',
      'Building full-stack and AI-powered applications',
      'Active in technical clubs and sports leadership',
    ],
  },
  {
    degree: 'Intermediate — MPC',
    spec: 'Mathematics, Physics, Chemistry',
    institution: 'Ramabhanam Jr College',
    period: '2020 — 2022',
    location: 'Andhra Pradesh, India',
    status: 'Completed',
    icon: '📘',
    points: [
      'Strong analytical and quantitative foundation',
      'Developed systematic problem-solving skills',
    ],
  },
  {
    degree: 'Secondary School Education',
    spec: 'SSC Board',
    institution: 'Sri Rama Krishna EM School',
    period: '— 2020',
    location: 'Andhra Pradesh, India',
    status: 'Completed',
    icon: '🏫',
    points: [
      'Strong academic fundamentals across core subjects',
      'Leadership developed through sports and activities',
    ],
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-gray-50/60 dark:bg-white/[0.01]">
      <SectionHeader
        label="04 / Journey"
        title="Education"
        subtitle="The academic milestones that shaped my technical and analytical foundation."
      />

      <div className="relative timeline-line pl-14 space-y-8 max-w-3xl">
        {EDUCATION.map(({ degree, spec, institution, period, location, status, icon, points }, i) => (
          <motion.div
            key={institution}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, delay: i * 0.09 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Icon node */}
            <div className="absolute -left-[44px] top-4 w-10 h-10 flex-shrink-0" aria-hidden="true">
              <div className="w-10 h-10 rounded-xl card-glass flex items-center justify-center text-lg shadow-sm">
                {icon}
              </div>
            </div>

            {/* Card */}
            <article className="card-glass p-5 sm:p-6 hover:border-accent/20 dark:hover:border-accent/15 transition-colors duration-300">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                    {degree}
                  </h3>
                  <p className="font-mono text-xs text-accent mt-0.5">{spec}</p>
                </div>
                <span className={`flex-shrink-0 text-xs font-mono px-2.5 py-1 rounded-full border ${
                  status === 'Ongoing'
                    ? 'border-accent/40 text-accent bg-accent/10'
                    : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/[0.03]'
                }`}>
                  {status}
                </span>
              </div>

              <p className="font-body text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {institution}
              </p>
              <p className="font-mono text-xs text-gray-400 mb-4">
                {period} · {location}
              </p>

              <ul className="space-y-1.5" aria-label="Details">
                {points.map(pt => (
                  <li key={pt} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
