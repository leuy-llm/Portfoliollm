import { Code, Server, Smartphone, Database } from "lucide-react";
import { useState } from "react";


export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all', 'frontend', 'backend', 'tools', 'others'];

   
    const skills = [
    { name: "HTML/CSS", level: 95, category: 'frontend'},
    { name: "JavaScript", level: 90, category: 'frontend'},
    { name: "TypeScript", level: 90, category: 'frontend'},
    { name: "React", level: 90, category: 'frontend'},
    { name: "Vue", level: 80, category: 'frontend'},
    { name: "Bootstrap", level: 80, category: 'frontend'},
    { name: "Next.js", level: 70, category: 'frontend'},
    { name: "Tailwind CSS", level: 90, category: 'frontend'},

    //=== Backend ===//
    { name: "Node.js", level: 85, category: 'backend'},
    { name: "Express.js", level: 80, category: 'backend'},
    { name: "MongoDB", level: 70, category: 'backend'},
    { name: "PostgreSQL", level: 65, category: 'backend'},
    { name: "GraphSQL", level: 85, category: 'backend'},

    // === Tools === //
    { name: "Git/Github", level: 90, category: 'tools'},
    { name: "Docker", level: 70, category: 'tools'},
    { name: "VS Code", level: 95, category: 'tools'},
    { name: "NPM", level: 90, category: 'tools'},
    { name: "Yarn", level: 90, category: 'tools'},
    { name: "Postman", level: 90, category: 'tools'},
    { name: "Swagger", level: 65, category: 'tools'} ,
    { name: "Figma", level: 40, category: 'tools'},
    { name: "Photoshop", level: 40, category: 'tools'},
    
    //=== Others ===//
    { name: "Ms-Word", level: 90, category: 'others'},
    { name: "Ms-Excel", level: 90, category: 'others'},
    { name: "Ms-Powerpoint", level: 90, category: 'others'},
    { name: "Ms-Access", level: 90, category: 'others'},
   

    
]
const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') {
        return true;
    }
    return skill.category === activeCategory;
})
  return (
    <section id="skills" className="py-24 bg-secondary/30 relativ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                className={`px-5 py-2 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                } transition-colors duration-300 capitalize rounded-full`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of tools and technologies I use to build scalable and efficient applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full h-2 bg-secondary/50 overflow-hidden rounded-full">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_2s_ease-in-out]" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
