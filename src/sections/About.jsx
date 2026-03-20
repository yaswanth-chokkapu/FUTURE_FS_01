import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'

const STRENGTHS = [
  { icon: '🧠', title: 'Critical Thinker',   desc: 'Sharp observational skills and logical, structured problem-solving.' },
  { icon: '⚡', title: 'Self-Driven',        desc: 'Proactive learner who thrives in both solo and collaborative environments.' },
  { icon: '🤖', title: 'AI Enthusiast',      desc: 'Deeply passionate about AI, ML, and the future of intelligent systems.' },
  { icon: '🔧', title: 'Versatile Builder',  desc: 'Bridges software and hardware — from web apps to embedded systems.' },
  { icon: '🏆', title: 'Leader',             desc: 'Proven team leadership through sports, clubs, and project collaboration.' },
  { icon: '🚀', title: 'Impact-Focused',     desc: 'Driven to create scalable technology that solves real problems.' },
]

const TAGS = ['Python', 'React', 'FastAPI', 'AI/ML', 'Hardware']

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="01 / Introduction"
        title="About Me"
        subtitle="A glimpse into who I am and what drives me forward."
      />

      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

        {/* Text column */}
        <div className="space-y-5">
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            I'm{' '}
            <span className="font-semibold text-gray-900 dark:text-white">Yaswanth Chokkapu</span>,
            a Computer Science Engineering student at{' '}
            <span className="text-accent font-semibold">Vignan's Institute of Information Technology</span>,
            specializing in Artificial Intelligence.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            My journey started with curiosity about how machines think — which led me straight to the
            intersection of AI and full-stack engineering. I believe the most impactful technology
            feels invisible yet transforms everything around it.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Beyond code, sport has shaped my competitive mindset and team-first attitude. I bring that
            same clarity, commitment, and drive to every project I build.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {TAGS.map(tag => (
              <span key={tag} className="skill-chip">{tag}</span>
            ))}
          </div>

          <div className="pt-1">
            <a href="mailto:yaswanthchokkapu69@gmail.com" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Strength cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {STRENGTHS.map(({ icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="card-glass p-5 group hover:border-accent/25 dark:hover:border-accent/18"
            >
              <span className="text-2xl mb-3 block" role="img" aria-label={title}>{icon}</span>
              <h3 className="font-body font-semibold text-sm text-gray-900 dark:text-white mb-1 group-hover:text-accent transition-colors duration-200">
                {title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
