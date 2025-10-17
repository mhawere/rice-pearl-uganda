import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Farming Process', path: '/farming-process' },
    { name: 'Products', path: '/products' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Gallery', path: '/gallery' },
  ];

  // Pages that don't have dark hero backgrounds should always show opaque nav
  const shouldAlwaysBeOpaque = location.pathname !== '/';
  const navIsOpaque = isScrolled || shouldAlwaysBeOpaque;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      navIsOpaque ? 'bg-card/98 backdrop-blur-lg shadow-lg border-b border-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <img 
              src={logo} 
              alt="Pearl Rice" 
              className={`transition-all duration-500 group-hover:scale-105 ${navIsOpaque ? 'h-12' : 'h-16'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all text-base relative group ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : navIsOpaque ? 'text-foreground hover:bg-secondary/80' : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {location.pathname !== link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent group-hover:w-3/4 transition-all duration-300 rounded-full" />
                )}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="lg" className="ml-4 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              navIsOpaque ? 'bg-secondary text-foreground' : 'bg-white/10 text-white backdrop-blur-sm'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-sm">Menu</span>
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-primary animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl md:text-5xl font-display font-bold transition-all hover:scale-110 animate-fade-in ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-white hover:text-accent'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="lg" className="mt-8 text-xl px-12 py-8 h-auto bg-accent hover:bg-accent/90 text-charcoal animate-fade-in" style={{ animationDelay: '0.7s' }}>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
