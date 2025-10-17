import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Leaf, Users, CheckCircle } from 'lucide-react';
import productsImage from '@/assets/products.jpg';
import superRiceImage from '@/assets/super-rice.png';
import basmatiRiceImage from '@/assets/basmati-rice.png';
import kaisoRiceImage from '@/assets/kaiso-rice.png';

const Home = () => {
  const products = [
    {
      name: 'Super Rice',
      description: 'With an enticing aroma that relishes your taste buds and natural flavours along with a creamy whiteness in the grain dedicated to the feeling of Uganda.',
      image: superRiceImage,
      features: [
        'Locally grown and processed',
        'Aromatic and flavorful',
        'Perfect for everyday meals',
      ],
    },
    {
      name: 'Basmati Rice',
      description: 'Our Basmati is distinctive among other aromatic long grains with the sweetest aroma, soft, delicious texture and taste, bursting with flavour farmed and milled locally in Busembatia, Uganda.',
      image: basmatiRiceImage,
      features: [
        'Farmed in Busembatia, Uganda',
        'Aromatic long grain',
        'Ideal for biryani and pilau',
      ],
    },
    {
      name: 'Kaiso Rice',
      description: 'The rice is locally grown in Uganda as the leading brand incorporating a natural and organic touch. A ravishing grain in size, shape and taste grown in our fields in Busembatia, dedicated to feeding our Nation.',
      image: kaisoRiceImage,
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
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight">
                Welcome to Pearl Rice
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
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
                className="rounded-2xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Products
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">Our Products</h2>
            <p className="text-xl text-muted-foreground">
              Discover our range of quality rice products, each carefully cultivated and processed to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div key={product.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-green text-white mb-6 transition-transform group-hover:scale-110">
                  <value.icon size={36} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
