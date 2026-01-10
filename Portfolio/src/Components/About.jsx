
// About Component
const About = () => {
  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'ASP.Net & C#', level: 95 },
    { name: 'SQL Server , PostGreSQL & MongoDB', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-slate-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-1">
              <div className="bg-slate-900 rounded-2xl p-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Hi! I'm <span className="text-purple-400 font-semibold">Saquib</span>, a passionate developer who loves building things for the web. 
                  I specialize in creating seamless user experiences with clean, maintainable code.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  With expertise in modern web technologies, I transform ideas into elegant solutions. 
                  Whether it's a responsive website, a complex web application, or an engaging mobile app, 
                  I'm dedicated to delivering excellence.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">{skill.name}</span>
                  <span className="text-purple-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;