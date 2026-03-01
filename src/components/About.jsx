import { useState } from 'react'

const techStack = [
  { name: 'HTML', icon: 'devicon-html5-plain colored', category: 'Frontend' },
  { name: 'CSS', icon: 'devicon-css3-plain colored', category: 'Frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'Frontend' },
  { name: 'React', icon: 'devicon-react-original colored', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'Frontend' },
  // { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', category: 'Frontend' },
  { name: 'PHP', icon: 'devicon-php-plain colored', category: 'Backend' },
  { name: 'Laravel', icon: 'devicon-laravel-plain colored', category: 'Backend' },
  { name: 'C#', icon: 'devicon-csharp-plain colored', category: 'Backend' },
  { name: 'Python', icon: 'devicon-python-plain colored', category: 'Backend' },
  { name: 'MySQLite', icon: 'devicon-sqlite-plain colored', category: 'Database' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'Database' },
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'Tools' },
  { name: 'GitHub', icon: 'devicon-github-original colored', category: 'Tools' },
  { name: 'Vite', icon: 'devicon-vite-plain colored', category: 'Tools' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'Tools' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'Design' },
  { name: 'Canva', icon: 'devicon-canva-original colored', category: 'Design' },
]

const About = ({ isDark }) => {
  const [showModal, setShowModal] = useState(false)

  const border = isDark ? 'border-[#1e1e1e]' : 'border-[#e0ddd8]'
  const text = isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'
  const muted = isDark ? 'text-[#6b6866]' : 'text-[#888580]'
  const bg2 = isDark ? 'bg-[#111111]' : 'bg-[#ffffff]'
  const bg = isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f0]'

  return (
    <section id="about" className={`border-t ${border}`}>
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Carousel */}
          <CarouselSection isDark={isDark} />

          {/* RIGHT: About Content */}
          <div>
            <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-2">Who I Am</p>
            <h2 className={`text-4xl font-extrabold mb-6 leading-tight ${text}`}>About Me</h2>

            <p className={`text-[0.95rem] leading-relaxed mb-4 ${muted}`}>
              Hi! I'm <strong className={isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'}>Marlon I. Batugal Jr.</strong>, a fresh graduate and aspiring front-end developer from Marilao, Bulacan. I have a passion for building things on the web — from crafting clean user interfaces to developing functional back-end systems.
            </p>
            <p className={`text-[0.95rem] leading-relaxed mb-4 ${muted}`}>
              My journey in tech started during my Senior High School years under the <strong className={isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'}>TVL ICT strand</strong>, and grew deeper as I pursued my <strong className={isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'}>BS Computer Science</strong> degree. I love turning ideas into real, working products — and I'm always eager to learn new technologies along the way.
            </p>
            <p className={`text-[0.95rem] leading-relaxed mb-6 ${muted}`}>
              Outside of coding, I enjoy exploring design trends, working on personal projects, and continuously improving my skills. I'm currently looking for opportunities where I can grow, contribute, and make a meaningful impact.
            </p>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['🎓 Fresh Graduate', '💻 Full-Stack Dev', '🎨 UI/UX Design', '🚀 Open to Work'].map((tag) => (
                <span key={tag} className={`text-[0.68rem] border ${border} rounded-md px-3 py-1.5 hover:border-[#c8f04d] hover:text-[#c8f04d] transition-all cursor-default ${muted}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Tech Stack Preview */}
            {/* Tech Stack Preview */}
            <div className={`${bg2} border ${border} rounded-xl p-4`}>
              <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-3">Tech Stack</p>
              <div className="flex items-center gap-3 flex-wrap">
                {techStack.slice(0, 3).map((tech) => (
                  <span key={tech.name} className={`${isDark ? 'bg-[#1e1e1e]' : 'bg-[#f5f5f0]'} border ${border} rounded-lg px-3 py-2 text-[0.75rem] ${text} flex items-center gap-2`}>
                    <i className={`${tech.icon} text-lg`}></i> {tech.name}
                  </span>
                ))}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-[#c8f04d] text-[0.75rem] border border-[rgba(200,240,77,0.3)] rounded-lg px-3 py-2 hover:bg-[rgba(200,240,77,0.08)] transition-all"
                >
                  See more...
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div className={`${bg} border ${border} rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative scrollbar-hide`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className={`absolute top-4 right-4 w-8 h-8 rounded-full border ${border} ${bg2} ${muted} flex items-center justify-center hover:border-[#c8f04d] hover:text-[#c8f04d] transition-all`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-2">Skills</p>
            <h3 className={`text-2xl font-extrabold mb-6 ${text}`}>My Tech Stack</h3>

            {/* Group by category */}
            {['Frontend', 'Backend', 'Database', 'Tools', 'Design'].map((category) => (
              <div key={category} className="mb-6">
                <p className={`text-[0.65rem] tracking-widest uppercase mb-3 ${muted}`}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.filter((t) => t.category === category).map((tech) => (
                    <span key={tech.name} className={`${bg2} border ${border} rounded-lg px-3 py-2 text-[0.78rem] ${text} flex items-center gap-2 hover:border-[rgba(200,240,77,0.3)] transition-all`}>
                      <i className={`${tech.icon} text-lg`}></i> {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      )}
    </section>
  )
}

const CarouselSection = ({ isDark }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5
  const border = isDark ? 'border-[#1e1e1e]' : 'border-[#e0ddd8]'

  const moveCarousel = (dir) => {
    setCurrentSlide((prev) => (prev + dir + totalSlides) % totalSlides)
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border ${border} bg-[#111111]`} style={{ aspectRatio: '4/5' }}>
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="min-w-full h-full">
            <img src={`/assets/${num}.jpg`} alt={`Photo ${num}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button onClick={() => moveCarousel(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-[#1e1e1e] text-[#f0ede8] flex items-center justify-center hover:bg-[#c8f04d] hover:text-[#0a0a0a] hover:border-[#c8f04d] transition-all z-10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button onClick={() => moveCarousel(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-[#1e1e1e] text-[#f0ede8] flex items-center justify-center hover:bg-[#c8f04d] hover:text-[#0a0a0a] hover:border-[#c8f04d] transition-all z-10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className="w-1.5 h-1.5 rounded-full transition-all" style={{ background: currentSlide === i ? '#c8f04d' : 'rgba(255,255,255,0.3)', transform: currentSlide === i ? 'scale(1.3)' : 'scale(1)' }} />
        ))}
      </div>
    </div>
  )
}

export default About