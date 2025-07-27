import { ExternalLink, Github, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/deepthi-naradasu/ecommerce-app",
      liveUrl: "https://ecommerce-demo.com",
      image: "bg-gradient-to-br from-blue-400 to-purple-600"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface for better productivity.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/deepthi-naradasu/task-manager",
      liveUrl: "https://taskmanager-demo.com",
      image: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that provides accurate forecasts, location-based weather data, and beautiful visualizations with an intuitive user interface.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/deepthi-naradasu/weather-app",
      liveUrl: "https://weather-demo.com",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations, clean design, and optimized performance across all devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/deepthi-naradasu/portfolio",
      liveUrl: "https://deepthi-portfolio.com",
      image: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      title: "Recipe Finder Application",
      description: "A recipe discovery app that helps users find recipes based on available ingredients, dietary preferences, and cooking time with beautiful recipe cards.",
      technologies: ["React", "Python", "Flask", "Recipe API"],
      githubUrl: "https://github.com/deepthi-naradasu/recipe-finder",
      liveUrl: "https://recipe-demo.com",
      image: "bg-gradient-to-br from-red-400 to-pink-500"
    },
    {
      title: "Student Grade Tracker",
      description: "An educational tool for tracking student performance with analytics, grade visualization, and progress tracking features for better academic management.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      githubUrl: "https://github.com/deepthi-naradasu/grade-tracker",
      liveUrl: null,
      image: "bg-gradient-to-br from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and creating meaningful user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden card-hover group animate-scale-in delay-${index * 100}`}
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  
                  {project.liveUrl && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => window.open('https://github.com/deepthi-naradasu', '_blank')}
            className="group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;