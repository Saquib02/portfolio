import { Smartphone, Palette, Code, ExternalLink } from "lucide-react";
// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: <Smartphone className="text-purple-500" size={32} />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design System',
      description: 'Comprehensive component library with documentation, built for scalability and consistency across products.',
      tech: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
      icon: <Palette className="text-blue-500" size={32} />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management app with real-time updates, task tracking, and team communication features.',
      tech: ['Next.js', 'PostgreSQL', 'WebSocket', 'Redux'],
      icon: <Code className="text-green-500" size={32} />,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-8 flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;    