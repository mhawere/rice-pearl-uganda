import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Leaf, Users, CheckCircle } from 'lucide-react';
import productsImage from '@/assets/products.jpg';

const Home = () => {
  const products = [
    {
      name: 'Super Rice',
      description: 'With an enticing aroma that relishes your taste buds and natural flavours along with a creamy whiteness in the grain dedicated to the feeling of Uganda.',
      image: productsImage,
      features: [
        'Locally grown and processed',
        'Aromatic and flavorful',
        'Perfect for everyday meals',
      ],
    },
    {
      name: 'Basmati Rice',
      description: 'Our Basmati is distinctive among other aromatic long grains with the sweetest aroma, soft, delicious texture and taste, bursting with flavour farmed and milled locally in Busembatia, Uganda.',
      image: productsImage,
      features: [
        'Farmed in Busembatia, Uganda',
        'Aromatic long grain',
        'Ideal for biryani and pilau',
      ],
    },
    {
      name: 'Kaiso Rice',
      description: 'The rice is locally grown in Uganda as the leading brand incorporating a natural and organic touch. A ravishing grain in size, shape and taste grown in our fields in Busembatia, dedicated to feeding our Nation.',
      image: productsImage,
      features: [
        'Organic farming practices',
        'Locally grown',
        'Natural and authentic',
      ],
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Sustainable practices for better quality',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Supporting 1,700 smallholder farmers',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'From our fields to your table',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-serif font-bold mb-6">
                Welcome to Pearl Rice
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Pearl Rice Limited was incorporated in Uganda in 2009. The company is dedicated to enhancing food security through the production, processing, and distribution of rice in Uganda and East Africa.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We work with over 1,700 smallholder farmers, supporting 8,500 people through direct and indirect employment while promoting sustainable farming practices.
              </p>
            </div>
            <div className="animate-slide-up">
              <img
                src={productsImage}
                alt="Pearl Rice Products"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of quality rice products, each carefully cultivated and processed to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
