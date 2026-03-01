const Hero = ({ isDark }) => {
  return (
    <section id="home" className="min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-[1fr_400px]">

      {/* LEFT */}
      <div className="flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-[#1e1e1e] py-20">
        <div style={{ maxWidth: '540px', width: '100%' }}>

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full inline-block animate-pulse bg-[#c8f04d]"></span>
            <span className="text-[#c8f04d] text-[0.7rem] tracking-[0.14em] uppercase">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight mb-4">
            Marlon I.<br /><span className="text-[#c8f04d]">Batugal</span> Jr.
          </h1>

          {/* Role pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Web Developer', 'UI/UX Designer', 'Front-End Developer'].map((role) => (
              <span key={role} className="text-[#6b6866] border border-[#1e1e1e] rounded-full px-4 py-1.5 text-[0.7rem] hover:border-[#c8f04d] hover:text-[#c8f04d] transition-all cursor-default">
                {role}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className={`text-base md:text-lg leading-relaxed max-w-lg mb-10 ${isDark ? 'text-[#6b6866]' : 'text-[#888580]'}`}>
            An aspiring  <strong className={`font-semibold ${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'}`}>front-end web developer</strong> — passionate about creating responsive and user-focused web experiences. Committed to learning, improving, and building  <strong className={`font-semibold ${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'}`}>solutions that make a real impact.</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="mailto:your@email.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#c8f04d] text-[#0a0a0a] border border-[#c8f04d] hover:bg-transparent hover:text-[#c8f04d] transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Send Email
            </a>
            <a href="https://github.com/marlonibatugal-arch" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-transparent border transition-all ${isDark ? 'text-[#f0ede8] border-[#1e1e1e] hover:border-[#f0ede8]' : 'text-[#1a1a1a] border-[#e0ddd8] hover:border-[#1a1a1a]'}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b6866" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span className="text-[#6b6866] text-[0.7rem] tracking-[0.1em]">Marilao, Bulacan, Philippines</span>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center gap-4 px-8 py-16">

        {/* Profile Card */}
        <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
          <img
          src="/assets/profile.jpg"
          alt="Marlon I. Batugal Jr."
          className="w-52 h-52 rounded-full object-cover object-top"
          onError={(e) => { e.target.style.display = 'none' }}
        />
          <div>
            <p className="font-bold text-base text-[#f0ede8]">Marlon I. Batugal Jr.</p>
            <p className="text-[#c8f04d] text-[0.68rem] tracking-wider mt-1">Front-End, Web Developer & UI/UX</p>
          </div>
          <div className="w-full h-px bg-[#1e1e1e]"></div>
          <div className="flex flex-col gap-2 w-full">
            <a href="marlon.i.batugal@email.com" className="text-[#6b6866] text-[0.7rem] flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[rgba(200,240,77,0.07)] hover:text-[#c8f04d] transition-all">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              marlon.i.batugal@email.com
            </a>
            <a href="https://github.com/marlonibatugal-arch" target="_blank" rel="noreferrer" className="text-[#6b6866] text-[0.7rem] flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[rgba(200,240,77,0.07)] hover:text-[#c8f04d] transition-all">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              github.com/marlonibatugal-arch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 text-center hover:border-[rgba(200,240,77,0.25)] transition-all">
            <p className="text-[#c8f04d] text-3xl font-extrabold leading-none">1+</p>
            <p className="text-[#6b6866] text-[0.62rem] tracking-widest uppercase mt-1.5">Year Coding</p>
          </div>
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 text-center hover:border-[rgba(200,240,77,0.25)] transition-all">
            <p className="text-[#c8f04d] text-3xl font-extrabold leading-none">2</p>
            <p className="text-[#6b6866] text-[0.62rem] tracking-widest uppercase mt-1.5">Projects</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero