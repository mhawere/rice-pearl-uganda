import { Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import pilauImage from '@/assets/recipe-pilau.jpg';

const RecipePilau = () => {
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
            src={pilauImage}
            alt="Beef Pilau"
            className="w-full h-96 object-cover rounded-lg shadow-xl mb-8"
          />
          
          <h1 className="text-5xl font-serif font-bold mb-4">Beef Pilau</h1>
          <p className="text-xl text-muted-foreground mb-6">
            East African comfort food with tender beef and perfectly spiced Pearl Rice
          </p>

          <div className="flex gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>~75 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={20} />
              <span>Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Servings: 4-6</span>
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
                  <h3 className="font-bold mb-3">For the Beef:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>250g beef, cubed</li>
                    <li>1 tsp ginger paste</li>
                    <li>1 tsp garlic paste</li>
                    <li>1 tsp salt</li>
                    <li>1 tsp black pepper</li>
                    <li>1 grated tomato</li>
                    <li>1 grated onion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3">For the Pilau:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>400g Pearl Rice</li>
                    <li>2 finely chopped onions</li>
                    <li>½ tsp turmeric powder</li>
                    <li>½ tsp coriander powder</li>
                    <li>½ tsp cumin powder</li>
                    <li>Vegetable oil</li>
                    <li>½ tsp garlic paste</li>
                    <li>Chopped coriander</li>
                    <li>3 tomatoes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Whole Spices:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>1 tbsp cumin seeds</li>
                    <li>½ tsp black pepper</li>
                    <li>2 cinnamon sticks</li>
                    <li>2 cloves cardamom</li>
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
                    <h3 className="font-bold mb-3">Preparing the Beef:</h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>Cut beef into medium cubes and wash thoroughly.</li>
                      <li>Add beef to pot with ginger paste, garlic paste, salt, and black pepper.</li>
                      <li>Add 1 grated tomato and 1 grated onion.</li>
                      <li>Add water to cover meat, bring to boil.</li>
                      <li>Cook until meat is tender and fully cooked.</li>
                      <li>Drain meat and reserve the flavorful soup for cooking rice.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Making the Pilau:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={7}>
                      <li>Heat cooking oil in saucepan over medium heat.</li>
                      <li>Add all whole spices: cumin seeds, cardamom, black pepper, cinnamon, and cloves.</li>
                      <li>Let spices splutter, releasing their aromatic oils.</li>
                      <li>Add finely chopped onions to the pan.</li>
                      <li>Fry onions until translucent (or dark for darker pilau).</li>
                      <li>Add turmeric and coriander powder, fry for a few minutes.</li>
                      <li>Add garlic paste and chopped fresh coriander, stir well.</li>
                      <li>Add boiled meat, stir for 2 minutes to coat with spices.</li>
                      <li>Pour in reserved soup from boiling meat. Add salt to taste.</li>
                      <li>Let soup simmer and adjust seasoning.</li>
                      <li>Once soup boils, add washed and drained Pearl Rice.</li>
                      <li>Sprinkle fresh coriander on top and stir gently.</li>
                      <li>Cook on high heat for 3 minutes.</li>
                      <li>Reduce to medium heat, cover pot.</li>
                      <li>Stir occasionally to ensure even cooking.</li>
                      <li>Once liquid is absorbed, reduce to extremely low heat.</li>
                      <li>Let steam for 5 minutes with lid on.</li>
                      <li>Switch off heat and rest for a few minutes.</li>
                      <li>Serve hot with Kachumbari (tomato and onion salad).</li>
                    </ol>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Serving Suggestion:</h3>
                    <p className="text-sm">This pilau pairs perfectly with Kachumbari, a fresh East African salad made with diced tomatoes, onions, coriander, and lime juice.</p>
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

export default RecipePilau;
