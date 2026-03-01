import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={isDark ? 'bg-[#0a0a0a] text-[#f0ede8]' : 'bg-[#f5f5f0] text-[#1a1a1a]'} style={{ minHeight: '100vh' }}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  )
}

export default App