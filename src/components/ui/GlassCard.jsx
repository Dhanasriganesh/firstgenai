function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 ${hover ? 'glass-card' : 'glass'} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default GlassCard
