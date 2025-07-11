import { Code, User, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating
              innovative web applications. My journey began with a curiosity about how
              things work on the web, which led me to dive deep into both frontend and
              backend technologies.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. I love turning
              complex problems into simple, beautiful, and intuitive solutions. When I'm not
              coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-col sm:flex-row pt-4 gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}Get In Touch
              </a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:text-white transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive and user-friendly web applications with modern frameworks.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                  Building scalable and efficient APIs and server-side applications using Node.js, Express, fastify and databases.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading projects from conception to deployment with agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
