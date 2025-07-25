import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Left section of about me  */}
            {/* Description section Might change it later  */}
            <h3 className="text-2xl font-semibold">
              Passionate Web developer | Front end developer
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in the web development, I
              specialize in creating responsive, accessible and perfomant web
              applications using moder technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              probelms, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape
            </p>

            {/* Buttons  */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right section of about me  */}
          <div className="grid grid-cols-1 gap-6">
            {/* first */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive website and web applications with
                    mordern frameworks
                  </p>
                </div>
              </div>
            </div>

            {/* Second  */}
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intutive user interaction and seamless user experiences
                  </p>
                </div>
              </div>
            </div>

            {/* third */}
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodlogies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
