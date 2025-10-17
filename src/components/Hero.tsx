import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/field-3.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
          Pearl Rice Uganda
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto font-light">
          From Our Fields to Your Family - Quality Rice Grown with Care in the Heart of Uganda
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about">
            <Button size="lg" variant="default" className="min-w-[200px]">
              Discover Our Story
            </Button>
          </Link>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              View Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
