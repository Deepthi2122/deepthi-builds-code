import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResume = () => {
    const element = document.getElementById('resume');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              Deepthi Naradasu
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up delay-200">
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full Stack Developer | Passionate about clean code and meaningful UI
          </p>
        </div>
        
        <div className="animate-fade-in-up delay-400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToResume}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToContact}
              className="group border-2 hover:border-primary"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-40 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float delay-2000" />
    </section>
  );
};

export default Hero;