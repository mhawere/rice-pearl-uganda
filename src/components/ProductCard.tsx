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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button className="w-full">Contact Us</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
