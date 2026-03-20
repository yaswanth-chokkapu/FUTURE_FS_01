import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const { title, type, image, emoji, gradient, description, tech, link, github } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: index * 0.09 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="card-glass group overflow-hidden flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44 flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full ${gradient} flex items-center justify-center`}>
            <span className="text-5xl" role="img" aria-label={title}>{emoji}</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />

        {/* Type badge */}
        {type && (
          <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg bg-black/45 text-white/90 backdrop-blur-sm border border-white/10">
            {type}
          </span>
        )}

        {/* Live link hover button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live`}
            className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-[#080810] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hover:bg-accent-dark"
          >
            <HiExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map(t => (
            <span key={t} className="skill-chip text-[10px] py-0.5 px-2">{t}</span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-white/[0.05]">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-1.5 px-4 text-xs flex-1"
            >
              <HiExternalLink size={12} /> Live Demo
            </a>
          ) : (
            <span className="flex-1 text-center text-xs font-mono text-gray-400 py-1.5">Hardware Project</span>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="btn-outline py-1.5 px-3 text-xs"
            >
              <FiGithub size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
