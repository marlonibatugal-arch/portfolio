import { useState, useEffect } from 'react'

const Navbar = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact']
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact']

  const getLinkClass = (item) => {
    const isActive = activeSection === item.toLowerCase()
    const base = 'text-xs tracking-widest uppercase transition-colors'
    if (isActive) return `${base} text-[#c8f04d] border-b border-[#c8f04d] pb-0.5`
    return `${base} ${isDark ? 'text-[#6b6866] hover:text-[#f0ede8]' : 'text-[#888580] hover:text-[#1a1a1a]'}`
  }

  const getMobileLinkClass = (item) => {
    const isActive = activeSection === item.toLowerCase()
    const base = 'text-sm tracking-widest uppercase transition-colors py-3 border-b block'
    const borderColor = isDark ? 'border-[#1e1e1e]' : 'border-[#e0ddd8]'
    if (isActive) return `${base} ${borderColor} text-[#c8f04d]`
    return `${base} ${borderColor} ${isDark ? 'text-[#6b6866] hover:text-[#f0ede8]' : 'text-[#888580] hover:text-[#1a1a1a]'}`
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 backdrop-blur-md border-b ${isDark ? 'bg-[#0a0a0a]/90 border-[#1e1e1e]' : 'bg-[#f5f5f0]/90 border-[#e0ddd8]'}`}>
        <span className="text-[#c8f04d] text-xs font-medium tracking-[0.18em] uppercase">MIB</span>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={getLinkClass(item)}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + burger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer transition-all hover:border-[#c8f04d] hover:text-[#c8f04d] ${isDark ? 'bg-[#111111] border-[#1e1e1e] text-[#6b6866]' : 'bg-[#ffffff] border-[#e0ddd8] text-[#888580]'}`}
          >
            {isDark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          {/* Burger button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer transition-all hover:border-[#c8f04d] hover:text-[#c8f04d] ${isDark ? 'bg-[#111111] border-[#1e1e1e] text-[#6b6866]' : 'bg-[#ffffff] border-[#e0ddd8] text-[#888580]'}`}
          >
            {menuOpen ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className={`fixed top-[69px] left-0 right-0 z-30 px-6 py-4 border-b md:hidden ${isDark ? 'bg-[#0a0a0a] border-[#1e1e1e]' : 'bg-[#f5f5f0] border-[#e0ddd8]'}`}>
          {navItems.map((item) => (
            
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={getMobileLinkClass(item)}
                onClick={() => setMenuOpen(false)}
              >
                {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar