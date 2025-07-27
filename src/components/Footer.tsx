import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="group hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Deepthi Naradasu
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer | Building the future, one line of code at a time
            </p>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> and lots of coffee
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Deepthi Naradasu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;