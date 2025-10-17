import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard = ({ name, description, image, features }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border-0 shadow-lg bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-secondary to-accent/5">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      
      <CardContent className="p-10">
        <h3 className="text-3xl font-display font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed text-base">{description}</p>
        
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green to-accent flex items-center justify-center text-white text-xs font-bold mt-1 shadow-md">✓</span>
              <span className="leading-relaxed text-base">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/contact">
          <Button className="w-full h-14 text-base font-semibold group/btn">
            Contact Us
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
