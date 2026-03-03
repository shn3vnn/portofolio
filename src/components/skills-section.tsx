export function SkillsSection() {
  const skills = [
    {
      name: "Figma",
      icon: (
        <img 
          src="https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg" 
          alt="Figma" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    {
      name: "PHP",
      icon: (
        <img 
          src="https://i.pinimg.com/1200x/f2/b5/b9/f2b5b99f75e6f4d1337a9b7afc7fc7c0.jpg" 
          alt="PHP" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    {
      name: "Laravel",
      icon: (
        <img 
          src="https://i.pinimg.com/736x/a4/5c/ce/a45cce7f5af4dff7b80c8c0ec6bf5ed8.jpg" 
          alt="Laravel" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16">
          <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: "React",
      icon: (
        <img 
          src="https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg" 
          alt="React" 
          className="w-16 h-16 object-contain"
        />
      )
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50">
                {skill.icon}
              </div>
              <span className="text-white font-medium text-center group-hover:text-blue-400 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
