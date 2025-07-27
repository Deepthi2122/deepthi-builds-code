import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Users, 
  MessageCircle,
  Lightbulb,
  Target
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code, color: "from-yellow-400 to-yellow-600" },
    { name: "JavaScript", level: 85, icon: Globe, color: "from-yellow-300 to-orange-400" },
    { name: "React", level: 80, icon: Globe, color: "from-blue-400 to-blue-600" },
    { name: "HTML/CSS", level: 90, icon: Globe, color: "from-orange-400 to-red-500" },
    { name: "C++", level: 75, icon: Code, color: "from-blue-500 to-blue-700" },
    { name: "SQL", level: 70, icon: Database, color: "from-green-400 to-green-600" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Team Collaboration", icon: Users },
    { name: "Communication", icon: MessageCircle },
    { name: "Leadership", icon: Target },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg skill-icon">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-2xl font-semibold mb-8 text-center text-secondary">
              Soft Skills
            </h3>
            <div className="grid gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="p-6 card-hover text-center group">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full skill-icon group-hover:shadow-[var(--shadow-glow)]">
                      <skill.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground">
                      {skill.name}
                    </h4>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Additional Skills Section */}
            <Card className="mt-8 p-6 card-hover bg-gradient-to-br from-card to-muted/50">
              <h4 className="font-semibold text-lg mb-4 text-center text-foreground">
                Additional Technologies
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Git', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Responsive Design'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;