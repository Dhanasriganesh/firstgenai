function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-200/50 to-violet-200/30 blur-3xl animate-float" />
      <div className="absolute top-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-blue-200/40 to-indigo-100/30 blur-3xl animate-float-reverse" />
      <div className="absolute -bottom-32 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-violet-200/35 to-purple-100/25 blur-3xl animate-pulse-glow" />
      <div className="absolute top-2/3 right-1/4 h-[350px] w-[350px] rounded-full bg-gradient-to-tl from-indigo-100/40 to-blue-200/30 blur-3xl animate-drift" />

      <div className="absolute top-20 left-[15%] h-2 w-2 rounded-full bg-indigo-400/30 animate-drift" />
      <div className="absolute top-40 right-[20%] h-3 w-3 rounded-full bg-violet-400/25 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[10%] h-2.5 w-2.5 rounded-full bg-blue-400/30 animate-float-reverse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[45%] right-[12%] h-1.5 w-1.5 rounded-full bg-indigo-500/25 animate-drift" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[20%] left-[25%] h-2 w-2 rounded-full bg-purple-400/20 animate-float" style={{ animationDelay: '4s' }} />

      <svg className="absolute top-[15%] right-[8%] h-16 w-16 text-indigo-300/20 animate-float-reverse" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-[30%] left-[5%] h-20 w-20 text-violet-300/15 animate-float" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute top-[50%] left-[45%] h-12 w-12 text-blue-300/15 animate-drift" viewBox="0 0 48 48" fill="none">
        <path d="M8 36L24 8l16 28H8z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

export default BackgroundEffects
