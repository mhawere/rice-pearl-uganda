import { Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import biryaniImage from '@/assets/recipe-biryani.jpg';

const RecipeBiryani = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/recipes">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Recipes
          </Button>
        </Link>

        {/* Recipe Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <img
            src={biryaniImage}
            alt="Chicken Biryani"
            className="w-full h-96 object-cover rounded-lg shadow-xl mb-8"
          />
          
          <h1 className="text-5xl font-serif font-bold mb-4">Chicken Biryani</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A classic layered rice dish with spiced chicken, perfect for special occasions
          </p>

          <div className="flex gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>~120 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={20} />
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Servings: 6-8</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-6">Ingredients</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Stage 1:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>6 cups cooking oil</li>
                    <li>4 finely chopped onions</li>
                    <li>3 potatoes, cubed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Stage 2:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>1 whole chicken (12 pieces)</li>
                    <li>8 oz yogurt</li>
                    <li>3 tsp crushed garlic</li>
                    <li>3 tsp crushed ginger</li>
                    <li>6 crushed green chilies</li>
                    <li>1 tsp chili powder</li>
                    <li>2 tsp salt</li>
                    <li>Saffron & food color</li>
                    <li>Spices (listed in full recipe)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Stage 3:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>2 cups reserved oil</li>
                    <li>1 tin tomatoes</li>
                    <li>Fresh coriander</li>
                    <li>Garam masala</li>
                    <li>Whole spices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Stage 4:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Pearl Rice (cooked)</li>
                    <li>Yellow food color</li>
                    <li>4 hard-boiled eggs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-6">Instructions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3">Stage 1 - Preparing Fried Ingredients:</h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>Heat oil in deep saucepan to medium temperature.</li>
                      <li>Fry onions until dark brown, remove and set aside.</li>
                      <li>Fry potatoes in batches until golden brown.</li>
                      <li>Reserve 2 cups oil for Stage 3.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Stage 2 - Marinating Chicken:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={5}>
                      <li>Wash chicken and place in glass bowl.</li>
                      <li>Mix yogurt with all Stage 2 spices.</li>
                      <li>Pour marinade over chicken, marinate 20-30 minutes.</li>
                      <li>Cook marinated chicken until almost dry.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Stage 3 - Creating Masala Base:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={9}>
                      <li>Heat reserved oil, add all whole spices and green chilies.</li>
                      <li>Add crushed tomatoes, ginger, garlic, tomato puree, and chilies.</li>
                      <li>Cook until liquids dry and oil separates.</li>
                      <li>Add partially cooked chicken, stir once.</li>
                      <li>Cover and cook on low heat for 10 minutes.</li>
                      <li>Add fried onions to thicken mixture.</li>
                      <li>Add fresh coriander, garam masala, and lemon juice.</li>
                      <li>Preheat oven to medium heat if layering.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Stage 4 - Assembling Biryani:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={19}>
                      <li>Mix diluted food coloring into cooked Pearl Rice.</li>
                      <li>Layer half the rice in ovenproof dish.</li>
                      <li>Add all chicken mixture over rice.</li>
                      <li>Top with fried potatoes.</li>
                      <li>Add second layer of rice on top.</li>
                      <li>Cover with foil, bake for 15-20 minutes.</li>
                    </ol>
                  </div>

                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Alternative Serving Method:</h3>
                    <p className="text-sm">Layer rice on platter, place chicken mixture on top, garnish with fried potatoes and sliced eggs. Serve immediately.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBiryani;
