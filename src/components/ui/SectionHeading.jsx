function SectionHeading({ badge, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50/80 backdrop-blur-sm border border-indigo-100 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
