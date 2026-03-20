import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

const SOCIALS = [
  { icon: FiGithub,    href: 'https://github.com/yaswanth-chokkapu',                   label: 'GitHub'    },
  { icon: FiLinkedin,  href: 'https://in.linkedin.com/in/yaswanth-chokkapu-ba737a276', label: 'LinkedIn'  },
  { icon: FiInstagram, href: 'https://www.instagram.com/_yaswanth_44/',                 label: 'Instagram' },
  { icon: FiMail,      href: 'mailto:yaswanthchokkapu69@gmail.com',                     label: 'Email'     },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/70 dark:border-white/[0.06] py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-gray-900 dark:text-white">
            Yaswanth Chokkapu<span className="text-accent">.</span>
          </p>
          <p className="font-mono text-xs text-gray-400 mt-0.5">
            © {new Date().getFullYear()} — Designed & built with ♥
          </p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-2">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/[0.09] text-gray-500 dark:text-gray-400 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-px"
            >
              <Icon size={14} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
