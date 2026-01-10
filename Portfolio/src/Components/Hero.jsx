import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import resumePDF from "../assets/Mohammad Saquib Resume.pdf";

// Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptLTQgNHYyaC0ydi0yaDJ6bTAtNHYyaC0ydi0yaDJ6bS00IDR2MmgtMnYtMmgyek0yOCAzMHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="animated-name text-6xl md:text-8xl font-bold mb-6">
          <span className="animated-letter" data-letter="S">S</span>
          <span className="animated-letter" data-letter="a">a</span>
          <span className="animated-letter" data-letter="q">q</span>
          <span className="animated-letter" data-letter="u">u</span>
          <span className="animated-letter" data-letter="i">i</span>
          <span className="animated-letter" data-letter="b">b</span>
        </h1>
        <p className="text-2xl md:text-4xl mb-8 text-purple-200">Full Stack Developer & Designer</p>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Crafting beautiful, functional digital experiences with modern technologies
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Get In Touch
          </a>
          <a 
            href={resumePDF} 
            download="Mohammad_Saquib_Resume.pdf"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-purple-400" size={40} />
      </a>
    </section>
  );
};
export default Hero;