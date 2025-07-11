import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex overflow-hidden flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Avatar */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-bold text-white">LL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Headings */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1"> Lom</span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Leuy</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto">
          Full-Stack Web Developer
        </p>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
          Passionate about creating beautiful, functional, and user-friendly web applications that solve real-world problems and deliver exceptional user experiences.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8 sm:mb-12">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail size={28} />
          </a>
        </div>

        {/* Button */}
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all transform hover:scale-105"
        >
          View My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 flex flex-col items-center transform -translate-x-1/2 animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll</span>
        <ChevronDown size={28} className="text-gray-400" />
      </div>
    </section>
  );
};
