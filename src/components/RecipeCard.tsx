import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: string;
  slug: string;
}

const RecipeCard = ({ title, description, image, cookTime, difficulty, slug }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4 sm:p-5 md:p-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{description}</p>
        
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={14} className="sm:w-4 sm:h-4" />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={14} className="sm:w-4 sm:h-4" />
            <span>{difficulty}</span>
          </div>
        </div>

        <Link to={`/recipes/${slug}`}>
          <Button className="w-full text-sm sm:text-base">View Recipe</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
