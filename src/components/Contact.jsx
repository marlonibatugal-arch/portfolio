const Contact = ({ isDark }) => {
  const border = isDark ? 'border-[#1e1e1e]' : 'border-[#e0ddd8]'
  const text = isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'
  const muted = isDark ? 'text-[#6b6866]' : 'text-[#888580]'
  const bg2 = isDark ? 'bg-[#111111]' : 'bg-[#ffffff]'

  const contacts = [
    {
      label: 'Email',
      value: 'marlon.i.batugal@gmail.com',
      href: 'marlon.i.batugal@gmail.com',
      external: false,
    },
    {
      label: 'GitHub',
      value: 'marlonibatugal-arch',
      href: 'https://github.com/marlonibatugal-arch',
      external: true,
    },
    {
      label: 'Facebook',
      value: 'Mj.Batugal',
      href: 'https://www.facebook.com/Mj.Batugal',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'marlon-batugal-jr',
      href: 'https://www.linkedin.com/in/marlon-batugal-jr-a322bb364/',
      external: true,
    },
  ]

  const icons = {
    Email: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8f04d" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    GitHub: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8f04d">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    Facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8f04d">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    LinkedIn: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8f04d">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  }

  return (
    <section id="contact" className={`border-t ${border}`}>
      <div className="max-w-6xl mx-auto px-8 py-20">
        <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-2">Get In Touch</p>
        <h2 className={`text-4xl font-extrabold mb-4 leading-tight ${text}`}>Contact Me</h2>
        <p className={`text-[0.95rem] leading-relaxed mb-12 max-w-lg ${muted}`}>
          I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi — my inbox is always open!
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {contacts.map((contact) => (
            
              <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : '_self'}
              rel="noreferrer"
              className={`${bg2} border ${border} rounded-xl px-4 py-3 inline-flex items-center gap-3 hover:border-[rgba(200,240,77,0.3)] hover:-translate-y-1 transition-all group`}
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(200,240,77,0.08)] border border-[rgba(200,240,77,0.15)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(200,240,77,0.15)] transition-all">
                {icons[contact.label]}
              </div>
              <div>
                <p className={`text-[0.6rem] tracking-widest uppercase ${muted}`}>{contact.label}</p>
                <p className={`font-semibold text-[0.78rem] ${text}`}>{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={`border-t ${border} pt-8 flex flex-col md:flex-row items-center justify-between gap-4`}>
          <span className="text-[#c8f04d] text-xs font-medium tracking-[0.18em] uppercase">MIB</span>
          <p className={`text-[0.72rem] ${muted}`}>© 2025 Marlon I. Batugal Jr. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className={`text-[0.7rem] tracking-widest uppercase transition-colors ${muted} hover:text-[#c8f04d]`}>Home</a>
            <a href="#about" className={`text-[0.7rem] tracking-widest uppercase transition-colors ${muted} hover:text-[#c8f04d]`}>About</a>
            <a href="#projects" className={`text-[0.7rem] tracking-widest uppercase transition-colors ${muted} hover:text-[#c8f04d]`}>Projects</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact