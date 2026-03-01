const Experience = ({ isDark}) => {
  return (
    <section id="experience" className="border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT: Work Experience */}
          <div>
            <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-2">Career</p>
            <h2 className={`text-4xl font-extrabold ${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'} mb-10 leading-tight`}>Work Experience</h2>

            <div className="relative pl-7">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-[#1e1e1e]"></div>

              {/* Racitelcom */}
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-[#c8f04d] shadow-[0_0_0_3px_#0a0a0a]"></div>

                <p className="text-[#6b6866] text-[0.67rem] tracking-widest uppercase mb-1">May – Aug 2024</p>
                <p className={`${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'} text-lg font-bold mb-0.5`}>Practicum Intern</p>
                <p className="text-[#c8f04d] text-[0.72rem] mb-1">Racitelcom Inc.</p>
                <p className="text-[#6b6866] text-[0.67rem] mb-4">Abangan Norte, Marilao, Bulacan</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['C#', 'PHP', 'JavaScript', 'Data Management', 'IT Support'].map((tag) => (
                    <span key={tag} className="text-[#6b6866] border border-[#1e1e1e] rounded px-2 py-0.5 text-[0.62rem]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tasks */}
                <div className="mb-3">
                  <p className={`${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'} text-[0.82rem] font-bold mb-1.5`}>Data Management & Office Support</p>
                  <ul className="list-disc pl-4 text-[#6b6866] text-[0.85rem] leading-relaxed space-y-1">
                    <li>Maintained organized digital records</li>
                    <li>Data encoding for client and employee records</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <p className={`${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'} text-[0.82rem] font-bold mb-1.5`}>
                    Windows Application Development <span className="text-[#6b6866] font-normal">(Team Project)</span>
                  </p>
                  <ul className="list-disc pl-4 text-[#6b6866] text-[0.85rem] leading-relaxed space-y-1">
                    <li>Participated in building a custom internal application</li>
                    <li>Used programming skills (C#, PHP, JavaScript, etc.)</li>
                    <li>Collaborated with a team of 8 interns and contributed 20–25% to the project</li>
                  </ul>
                </div>

                <div>
                  <p className={`${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'} text-[0.82rem] font-bold mb-1.5`}>IT Support & Troubleshooting</p>
                  <ul className="list-disc pl-4 text-[#6b6866] text-[0.85rem] leading-relaxed space-y-1">
                    <li>Handled basic tech support for clients</li>
                    <li>Responded to connectivity issues</li>
                    <li>Troubleshot router problems</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT: Education */}
          <div>
            <p className="text-[#c8f04d] text-[0.7rem] tracking-[0.18em] uppercase mb-2">Background</p>
            <h2 className={`text-4xl font-extrabold ${isDark ? 'text-[#f0ede8]' : 'text-[#1a1a1a]'} mb-10 leading-tight`}>Education</h2>

            <div className="flex flex-col gap-4">

              <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl px-5 py-4 flex justify-between items-start gap-4 hover:border-[rgba(200,240,77,0.2)] transition-all">
                <div>
                  <p className="text-[#f0ede8] font-bold text-[0.95rem] mb-1">Bachelor of Science in Computer Science</p>
                  <p className="text-[#c8f04d] text-[0.7rem] mb-0.5">Pambayang Dalubhasaan ng Marilao</p>
                  <p className="text-[#6b6866] text-[0.67rem]">Abangan Norte, Marilao, Bulacan</p>
                </div>
                <p className="text-[#6b6866] text-[0.67rem] whitespace-nowrap">2021 – 2025</p>
              </div>

              <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl px-5 py-4 flex justify-between items-start gap-4 hover:border-[rgba(200,240,77,0.2)] transition-all">
                <div>
                  <p className="text-[#f0ede8] font-bold text-[0.95rem] mb-1">Senior High School — TVL ICT Strand</p>
                  <p className="text-[#c8f04d] text-[0.7rem] mb-0.5">Prenza National High School</p>
                  <p className="text-[#6b6866] text-[0.67rem]">Prenza 1, Marilao, Bulacan</p>
                </div>
                <p className="text-[#6b6866] text-[0.67rem] whitespace-nowrap">2017 – 2021</p>
              </div>

              <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl px-5 py-4 flex justify-between items-start gap-4 hover:border-[rgba(200,240,77,0.2)] transition-all">
                <div>
                  <p className="text-[#f0ede8] font-bold text-[0.95rem] mb-1">High School</p>
                  <p className="text-[#c8f04d] text-[0.7rem] mb-0.5">St. Michael School of Marilao</p>
                  <p className="text-[#c8f04d] text-[0.7rem] mb-0.5">Prenza National High School</p>
                  <p className="text-[#6b6866] text-[0.67rem]">Abangan Sur, Marilao, Bulacan</p>
                  <p className="text-[#6b6866] text-[0.67rem]">Prenza 1, Marilao, Bulacan</p>
                </div>
                <p className="text-[#6b6866] text-[0.67rem] whitespace-nowrap">2016 – 2017</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience