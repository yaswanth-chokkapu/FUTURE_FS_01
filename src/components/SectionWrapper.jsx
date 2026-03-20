import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ id, className = '', children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })

  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  )
}
