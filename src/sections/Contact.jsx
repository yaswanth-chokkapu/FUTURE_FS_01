import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'

const EMAILJS_SERVICE_ID  = 'service_57bph2c'
const EMAILJS_TEMPLATE_ID = 'template_i3qad5o'
const EMAILJS_PUBLIC_KEY  = 'PQpCDTgTR4Wk6cXM0'

const SOCIALS = [
  { icon: FiMail,      label: 'Email',     value: 'yaswanthchokkapu69@gmail.com', href: 'mailto:yaswanthchokkapu69@gmail.com',                    color: 'text-rose-400',  ring: 'bg-rose-400/10 border-rose-400/20'  },
  { icon: FiGithub,    label: 'GitHub',    value: 'github.com/yaswanth-chokkapu', href: 'https://github.com/yaswanth-chokkapu',                   color: 'text-gray-500',  ring: 'bg-gray-400/10 border-gray-300/50'  },
  { icon: FiLinkedin,  label: 'LinkedIn',  value: 'in/yaswanth-chokkapu',         href: 'https://in.linkedin.com/in/yaswanth-chokkapu-ba737a276', color: 'text-blue-400',  ring: 'bg-blue-400/10 border-blue-400/20'  },
  { icon: FiInstagram, label: 'Instagram', value: '@_yaswanth_44',                href: 'https://www.instagram.com/_yaswanth_44/',                 color: 'text-pink-400',  ring: 'bg-pink-400/10 border-pink-400/20'  },
]

export default function Contact() {
  const [form,     setForm]     = useState({ from_name: '', from_email: '', message: '' })
  const [status,   setStatus]   = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.from_name.trim() || !form.from_email.trim() || !form.message.trim()) {
      setStatus('error'); setErrorMsg('Please fill in all fields.'); return
    }
    setStatus('loading')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  form.from_name,
        from_email: form.from_email,
        message:    form.message,
      }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      console.error('EmailJS:', err)
      setStatus('error')
      setErrorMsg('Something went wrong. Email me directly at yaswanthchokkapu69@gmail.com')
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="05 / Connect"
        title="Get In Touch"
        subtitle="Open to internships, collaborations, and building something great together."
      />

      <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 xl:gap-16 items-start">

        {/* ── Left ── */}
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
            Whether you have an opportunity, a question, or just want to say hello — my inbox is always open.
            I will get back to you within 24 hours.
          </p>

          <ul className="space-y-3">
            {SOCIALS.map(({ icon: Icon, label, value, href, color, ring }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, transition: { duration: 0.15 } }}
                  className="flex items-center gap-4 card-glass p-4 hover:border-accent/25 dark:hover:border-accent/18 group"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${color} ${ring}`}>
                    <Icon size={14} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors duration-200 truncate">
                      {value}
                    </p>
                  </div>
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-glass p-6 sm:p-8"
        >
          <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Send a message
          </h3>

          <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="from_name" className="block font-mono text-[10px] text-gray-400 mb-1.5 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block font-mono text-[10px] text-gray-400 mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  className="field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] text-gray-400 mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="field resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                status === 'success'
                  ? 'bg-emerald-500 text-white cursor-default shadow-md shadow-emerald-500/20'
                  : 'btn-primary'
              } disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {status === 'loading' && (
                <svg className="animate-spin w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {status === 'loading'  && 'Sending...'}
              {status === 'success'  && <><FiCheck size={15} aria-hidden="true" /> Message Sent!</>}
              {(status === 'idle' || status === 'error') && <><FiSend size={14} aria-hidden="true" /> Send Message</>}
            </button>

            {/* Feedback banners */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400"
                >
                  <FiCheck size={14} className="flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs font-mono">Message delivered! I will get back to you soon.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400"
                >
                  <FiAlertCircle size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs font-mono leading-relaxed">{errorMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
