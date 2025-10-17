import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/field-3.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-green/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 text-center text-white animate-fade-in">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-sm font-medium">
          Since 2009
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
          Pearl Rice Uganda
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          From Our Fields to Your Family — Quality Rice Grown with Care in the Heart of Uganda
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about">
            <Button size="lg" className="min-w-[200px] h-14 text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-large">
              Discover Our Story
            </Button>
          </Link>
          <Link to="/products">
            <Button size="lg" variant="outline" className="min-w-[200px] h-14 text-base font-semibold border-2 border-white text-white hover:bg-white hover:text-primary">
              View Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
