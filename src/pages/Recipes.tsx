import RecipeCard from '@/components/RecipeCard';
import mandiImage from '@/assets/recipe-mandi.jpg';
import biryaniImage from '@/assets/recipe-biryani.jpg';
import pilauImage from '@/assets/recipe-pilau.jpg';

const Recipes = () => {
  const recipes = [
    {
      title: 'Arabian Chicken Mandi',
      description: 'A fragrant Middle Eastern dish with tender chicken and aromatic Pearl Basmati Rice',
      image: mandiImage,
      cookTime: '~90 minutes',
      difficulty: 'Intermediate',
      slug: 'arabian-chicken-mandi',
    },
    {
      title: 'Chicken Biryani',
      description: 'A classic layered rice dish with spiced chicken, perfect for special occasions',
      image: biryaniImage,
      cookTime: '~120 minutes',
      difficulty: 'Advanced',
      slug: 'chicken-biryani',
    },
    {
      title: 'Beef Pilau',
      description: 'East African comfort food with tender beef and perfectly spiced Pearl Rice',
      image: pilauImage,
      cookTime: '~75 minutes',
      difficulty: 'Easy',
      slug: 'beef-pilau',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 animate-fade-in">
            Cook with Pearl Rice
          </h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Delicious Recipes Using Our Quality Rice
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div
                key={recipe.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RecipeCard {...recipe} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
