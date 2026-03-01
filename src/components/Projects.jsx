const Projects = ({ isDark }) => {
  const bg = isDark ? 'bg-[#111111]' : 'bg-[#ffffff]'
  const border = isDark ? 'border-[#1e1e1e]' : 'border-[#e0ddd8]'
  const text = isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'
  const muted = isDark ? 'text-[#6b6866]' : 'text-[#888580]'

  return (
    <section id="projects" className={`border-t ${border}`}>
      <div className="max-w-6xl mx-auto px-8 py-20">
        <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-2">My Work</p>
        <h2 className={`text-4xl font-extrabold mb-10 leading-tight ${text}`}>Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Project 1: Guidance Mate */}
          <div className={`${bg} border ${border} rounded-2xl overflow-hidden hover:border-[rgba(200,240,77,0.3)] hover:-translate-y-1 transition-all`}>
            <div className={`w-full aspect-video flex items-center justify-center ${isDark ? 'bg-[#1e1e1e]' : 'bg-[#e0ddd8]'}`}>
              <span className={`text-[0.7rem] tracking-widest uppercase ${muted}`}>Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <p className="text-[#c8f04d] text-[0.65rem] tracking-widest uppercase mb-1">Thesis Project</p>
              <p className={`text-lg font-bold mb-1 ${text}`}>Guidance Mate</p>
              <p className={`text-[0.7rem] mb-3 ${muted}`}>Role: Full Stack Developer — built the entire system and UI independently</p>
              <p className={`text-[0.85rem] leading-relaxed mb-4 ${muted}`}>
                A web-based mental health and counseling support system for students and staff at PDM. Tracks post-session engagement and emotional status using mood check-ins and a Random Forest model.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Laravel', 'PHP', 'MySQLite', 'JavaScript', 'Bootstrap', 'Python', 'Random Forest'].map((tag) => (
                  <span key={tag} className={`text-[0.62rem] border ${border} rounded px-2 py-0.5 ${muted}`}>{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <span className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold px-4 py-2 rounded-lg border ${border} ${muted} opacity-50 cursor-default`}>
                  No Live Link
                </span>
              </div>
            </div>
          </div>

          {/* Project 2: Nike Website */}
          <div className={`${bg} border ${border} rounded-2xl overflow-hidden hover:border-[rgba(200,240,77,0.3)] hover:-translate-y-1 transition-all`}>
            <div className={`w-full aspect-video flex items-center justify-center ${isDark ? 'bg-[#1e1e1e]' : 'bg-[#e0ddd8]'}`}>
              <img
                src="/assets/nike.png"
                alt="Nike Website Clone"
                className="w-full aspect-video object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="text-[#c8f04d] text-[0.65rem] tracking-widest uppercase mb-1">Practice Project</p>
              <p className={`text-lg font-bold mb-1 ${text}`}>Nike Website Clone</p>
              <p className={`text-[0.7rem] mb-3 ${muted}`}>Role: Frontend Developer — built to learn Tailwind CSS</p>
              <p className={`text-[0.85rem] leading-relaxed mb-4 ${muted}`}>
                A Nike-inspired website clone built as a personal learning project to practice and master Tailwind CSS, modern layouts, and responsive design techniques.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['HTML', 'Tailwind CSS', 'JavaScript', 'Vite'].map((tag) => (
                  <span key={tag} className={`text-[0.62rem] border ${border} rounded px-2 py-0.5 ${muted}`}>{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/marlonibatugal-arch/nike-website" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold px-4 py-2 rounded-lg border ${border} ${text} hover:border-[#f0ede8] transition-all`}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects