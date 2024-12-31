export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js",
    "MongoDB", "SQL", "Git", "GitHub", "VS Code"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <li 
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

