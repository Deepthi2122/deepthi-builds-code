import { Code, Lightbulb, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-avatar.jpg';

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "AI & Machine Learning",
      description: "Exploring the frontiers of artificial intelligence and its applications"
    },
    {
      icon: Lightbulb,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: Heart,
      title: "Problem Solving",
      description: "Passionate about tackling complex challenges with elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <img
                  src={profileImage}
                  alt="Deepthi Naradasu"
                  className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Computer Science Engineering Student
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate Computer Science Engineering student at Amrita Vishwa Vidyapeetham, 
              dedicated to crafting exceptional digital experiences. My journey in technology is driven 
              by curiosity and a desire to create meaningful solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy the entire 
              spectrum of software development - from designing intuitive user interfaces to building 
              robust server-side applications.
            </p>
            
            {/* Interests */}
            <div className="grid gap-6">
              <h4 className="text-xl font-semibold text-foreground">What Drives Me</h4>
              {interests.map((interest, index) => (
                <Card 
                  key={index} 
                  className="p-4 card-hover border-0 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        {interest.title}
                      </h5>
                      <p className="text-muted-foreground text-sm">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;