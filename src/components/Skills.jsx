import React, { useState } from "react";
import { cn } from "../lib/utils";

const Skills = () => {
  // Skills
  const skills = [
    //Front-end
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "TypeScript", level: 95, category: "frontend" },
    { name: "React", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Next.js", level: 95, category: "frontend" },

    //Backend
    { name: "Node.js", level: 95, category: "backend" },
    { name: "Express", level: 95, category: "backend" },
    { name: "MongoDB", level: 95, category: "backend" },
    { name: "PostgreSQL", level: 95, category: "backend" },
    { name: "GraphQL", level: 5, category: "backend" },

    //Tools

    { name: "Git/GitHub", level: 95, category: "tools" },
    { name: "Figma", level: 95, category: "tools" },
    { name: "Vs Code", level: 95, category: "tools" },
    { name: "Npm/yarn", level: 95, category: "tools" },
  ];

  const categories = ["all", "frontend", "backend", "tools"];

  //Hooks for the category
  const [activeCategory, setActiveCategory] = useState("all");


//   filtering the conditions for the buttons 
const filteredSkills = skills.filter(( skill)=> activeCategory ==="all" || skill.category === activeCategory)




  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        {/* Buttons for the category */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* iterating throught the skills  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                {/* for the skill level  */}
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
