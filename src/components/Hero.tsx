import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/field-1.jpg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-start justify-start overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-green/70" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-48 text-white max-w-7xl">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-accent text-charcoal rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-10 animate-fade-in backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 rounded-full bg-charcoal animate-pulse" />
            <span className="whitespace-nowrap">Since 2009 - Supporting 1,700+ Farmers</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold mb-6 sm:mb-10 animate-fade-in tracking-tighter leading-none" style={{ animationDelay: '0.1s' }}>
            Pearl Rice<br />
            <span className="text-accent">Uganda</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-14 max-w-2xl animate-fade-in leading-relaxed font-normal" style={{ animationDelay: '0.2s' }}>
            From Our Fields to Your Family — Quality Rice Grown with Care in the Heart of East Africa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 h-auto shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 hover:-translate-y-1">
                Discover Our Story
              </Button>
            </Link>
            <Link to="/products" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 h-auto bg-white/5 backdrop-blur-md border-3 border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105 hover:-translate-y-1">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="flex flex-col items-center gap-3 text-white">
          <span className="text-xs font-bold tracking-widest uppercase opacity-80">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
