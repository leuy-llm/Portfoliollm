import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        tags: ["React", "Firebase", "Tailwind CSS"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
        tags: ["JavaScript", "API Integration", "Chart.js"],
        github: "#",
        demo: "#"
    }
  ];

export const ProjectSection = () =>{

    return (
        <section id="projects" className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                Here are some of my most recent projects. Each project was carefully crafted with attention to detail, performance, and user experience in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="rounded-xl group bg-card shadow-xs overflow-hidden card-hover transition-all duration-300">
                <div className="aspect-vide h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 text-foreground/80 dark:bg-primary rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" className="flex items-center text-foreground/80 hover:text-blue-400 duration-300 transition-colors">
                      <Github size={16} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.demo} target="_blank" className="flex items-center text-foreground/80 hover:text-blue-400 duration-300 transition-colors">
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}