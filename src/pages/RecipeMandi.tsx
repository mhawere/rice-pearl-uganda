import { Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import mandiImage from '@/assets/recipe-mandi.jpg';

const RecipeMandi = () => {
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
            src={mandiImage}
            alt="Arabian Chicken Mandi"
            className="w-full h-96 object-cover rounded-lg shadow-xl mb-8"
          />
          
          <h1 className="text-5xl font-serif font-bold mb-4">Arabian Chicken Mandi</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A fragrant Middle Eastern dish with tender chicken and aromatic Pearl Basmati Rice
          </p>

          <div className="flex gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>~90 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={20} />
              <span>Intermediate</span>
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
                  <h3 className="font-bold mb-3">For the Chicken:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>500g chicken with bones</li>
                    <li>1 onion, finely chopped</li>
                    <li>1 tomato</li>
                    <li>3 green chilies</li>
                    <li>1 tbsp ginger garlic paste</li>
                    <li>3 bay leaves</li>
                    <li>1 tsp ghee</li>
                    <li>2 cardamom pods</li>
                    <li>2 cloves</li>
                    <li>2-inch cinnamon sticks</li>
                    <li>1 tsp black peppercorns</li>
                    <li>2 tbsp olive oil</li>
                    <li>2 tbsp butter</li>
                    <li>Salt to taste</li>
                    <li>2 cups Pearl Basmati Rice</li>
                    <li>4 cups water</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Mandi Spice Powder:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>1 tbsp cardamom seeds</li>
                    <li>1 tbsp cloves</li>
                    <li>½ tbsp black peppercorns</li>
                    <li>½ tsp nutmeg powder</li>
                    <li>½ tbsp ginger powder</li>
                    <li>2 bay leaves</li>
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
                    <h3 className="font-bold mb-3">Making the Mandi Spice Powder:</h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>Dry roast cardamom pods, cloves, black pepper, nutmeg, ginger powder, and bay leaves on medium heat for 4-6 minutes.</li>
                      <li>Turn off heat and let spices cool completely.</li>
                      <li>Grind into fine powder and set aside.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Preparing the Chicken:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={4}>
                      <li>Heat oil in large saucepan, add onion and sauté until translucent.</li>
                      <li>Add ginger-garlic paste, then bay leaves, cinnamon, cardamom, cloves, and black pepper.</li>
                      <li>Blend tomato and green chilies, add to pan.</li>
                      <li>When oil separates, add chicken and mix well.</li>
                      <li>Add 4 cups water and Mandi spice powder, cook covered for 15 minutes.</li>
                      <li>Remove chicken pieces and set aside.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Baking the Chicken:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={12}>
                      <li>Mix soft butter with Mandi spice powder and salt.</li>
                      <li>Preheat oven to 200°C.</li>
                      <li>Brush chicken generously with butter mixture.</li>
                      <li>Bake for 20-25 minutes until golden brown.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Preparing the Rice:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={16}>
                      <li>Wash and soak Pearl Basmati Rice for 20 minutes.</li>
                      <li>Heat olive oil in large pan, fry drained rice for 10-15 minutes.</li>
                      <li>Add rice to reserved chicken stock.</li>
                      <li>Cover with foil, then lid. Cook on medium-low for 10 minutes.</li>
                      <li>Check for remaining water, cook 3-5 minutes more if needed.</li>
                      <li>Fluff rice with fork.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Smoking the Rice:</h3>
                    <ol className="space-y-3 list-decimal list-inside" start={23}>
                      <li>Place ghee in small bowl in the middle of rice.</li>
                      <li>Heat charcoal until red-hot, place in ghee bowl.</li>
                      <li>Cover immediately until serving.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Serving:</h3>
                    <p>Spread rice on platter, top with baked chicken. Serve hot.</p>
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

export default RecipeMandi;
