export default function Projects() {
  const projects = [
    {
      title: "SEO Analytics",
      description: "A web-based platform to analyze and optimize website SEO performance.",
      technologies: "React.js, Next.js, Node.js, MongoDB",
      contribution: "Designed and implemented user-friendly dashboards and developed RESTful APIs for data handling."
    },
    {
      title: "Feedback Collector",
      description: "An application for collecting user feedback with analytics and insights.",
      technologies: "React.js, Express.js, SQL",
      contribution: "Developed the frontend interface and integrated backend services for efficient data processing."
    }
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-gray-600 mb-2"><strong>Technologies:</strong> {project.technologies}</p>
            <p className="text-gray-600"><strong>Contribution:</strong> {project.contribution}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

