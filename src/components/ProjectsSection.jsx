import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Whiskey shoe Palace",
      description:
        " A beautiful site for the desired products using the react and tailwind and fetching data from random APIs.",
      image: "/projects/E-commerce.png",
      tags: ["React ", "tailwind", "JavaScript"],
      demoUrl: "#",
      gitHub: "https://github.com/Abhay-0018",
    },

    {
      id: 2,
      title: "Filteration",
      description:
        " A responsive site to check tasks progress as admin and can mark them as Complete | In progress using React , Tailwind and JavaScript with APIs",
      image: "/projects/Filteration.png",
      tags: ["React ", "tailwind", "JavaScript"],
      demoUrl: "#",
      gitHub: "https://github.com/Abhay-0018",
    },
    {
      id: 3,
      title: "React store",
      description:
        " A beautiful site for women to find their cosmetics and accessories as they desired. Made this with Raect, Tailwind and JavaScript, Axios ( for fetching data)",
      image: "/projects/React-store.png",
      tags: ["React ", "tailwind", "JavaScript"],
      demoUrl: "#",
      gitHub: "https://github.com/Abhay-0018",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of myt recent projects. Each project was carefully
          crafted with attention tp detail, performace, and user experience.
        </p>

        {/* Display projects  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-49 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}{" "}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHub}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-21">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/abhay-0018"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
