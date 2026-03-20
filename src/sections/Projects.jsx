import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { FiGithub } from 'react-icons/fi'

const PROJECTS = [
  {
    title: 'AthleteX',
    type: 'AI Platform',
    image: '/athletex-preview.png',
    description: 'A sports performance analytics platform tracking athlete metrics with AI-powered insights, real-time dashboards, injury risk scoring, and an AI voice coach.',
    tech: ['React', 'Chart.js', 'Framer Motion', 'Python', 'FastAPI'],
    link: 'https://ai-sports-platform.vercel.app/',
  },
  {
    title: 'Pixel Perfect',
    type: 'Fashion E-Commerce',
    image: '/pixelperfect-preview.png',
    description: 'A modern fashion e-commerce UI with clean design, smooth navigation, responsive layout, and a premium user experience across all devices.',
    tech: ['React', 'CSS', 'Responsive Design', 'UI/UX'],
    link: 'https://pixelperfectchalleng.onrender.com/',
  },
  {
    title: 'Auto Fire Extinguisher',
    type: 'Hardware Project',
    emoji: '🔥',
    gradient: 'bg-gradient-to-br from-orange-400/20 via-red-500/20 to-amber-400/20 dark:from-orange-900/40 dark:via-red-800/40 dark:to-amber-900/30',
    description: 'A real-world embedded system that detects fire hazards and auto-triggers extinguishing, with a live UI dashboard for sensor data, alerts, and notifications.',
    tech: ['Embedded C', 'Hardware', 'Sensors', 'UI Dashboard'],
    link: null,
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="03 / Work"
        title="Featured Projects"
        subtitle="A selection of projects showcasing AI, full-stack development, and hardware engineering."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/yaswanth-chokkapu"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <FiGithub size={15} /> View All on GitHub
        </a>
      </div>
    </SectionWrapper>
  )
}
