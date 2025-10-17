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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-large hover:-translate-y-1 group border-0 shadow-soft">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-8">
        <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">{name}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green/10 text-green flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button className="w-full h-12 text-base font-semibold">Contact Us</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
