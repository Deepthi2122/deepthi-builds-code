import { Download, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Amrita Vishwa Vidyapeetham",
      period: "2021 - 2025",
      description: "Pursuing comprehensive education in computer science fundamentals, algorithms, and software engineering practices."
    }
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Startup",
      period: "Summer 2023",
      description: "Developed responsive web applications using React and implemented modern UI/UX practices."
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2022 - Present",
      description: "Contributing to open source projects, improving documentation and implementing new features."
    }
  ];

  const achievements = [
    "Dean's List - Academic Excellence",
    "Winner - College Hackathon 2023",
    "Completed 5+ Personal Projects",
    "Active Open Source Contributor"
  ];

  const downloadResume = () => {
    // In a real implementation, this would download the actual PDF
    alert("Resume download functionality would be implemented here");
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <Button 
            variant="gradient" 
            size="lg"
            onClick={downloadResume}
            className="group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-fade-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index} className="p-6 card-hover mb-6">
                <h4 className="font-semibold text-lg text-foreground mb-2">
                  {edu.degree}
                </h4>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 card-hover mb-6">
                <h4 className="font-semibold text-lg text-foreground mb-2">
                  {exp.title}
                </h4>
                <p className="text-accent font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 animate-fade-in-up delay-300">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg">
              <Award className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-4 card-hover text-center">
                <p className="text-muted-foreground">{achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;