export default function SectionHeader({ label, title, subtitle }) {
  return (
    <header className="mb-14 md:mb-16">
      <p className="font-mono text-xs text-accent tracking-[0.18em] uppercase mb-3">{label}</p>
      <h2 className="section-title text-gray-900 dark:text-white">
        {title}
        <span className="accent-line" />
      </h2>
      {subtitle && (
        <p className="mt-5 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </header>
  )
}
