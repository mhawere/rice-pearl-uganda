import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/recipes" className="hover:text-accent transition-colors">Recipes</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-sm">
                <strong>Factory:</strong><br />
                Busembatia, Uganda
              </p>
              <p className="text-sm">
                <strong>Shops:</strong><br />
                Bakuli and Kansanga, Uganda
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>+256 751 950 820</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>+256 753 202 443</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <a href="mailto:info@pearlrice.co.ug" className="hover:text-accent transition-colors">
                  info@pearlrice.co.ug
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get our latest news and updates</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-foreground"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2020 PearlRice, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
