import ProductCard from '@/components/ProductCard';
import productsImage from '@/assets/products.jpg';

const Products = () => {
  const products = [
    {
      name: 'Super Rice',
      description:
        'With an enticing aroma that relishes your taste buds and natural flavours along with a creamy whiteness in the grain dedicated to the feeling of Uganda.',
      image: productsImage,
      features: [
        'Locally grown and processed',
        'Aromatic and flavorful',
        'Perfect for everyday meals',
      ],
    },
    {
      name: 'Basmati Rice',
      description:
        'Our Basmati is distinctive among other aromatic long grains with the sweetest aroma, soft, delicious texture and taste, bursting with flavour farmed and milled locally in Busembatia, Uganda.',
      image: productsImage,
      features: [
        'Farmed in Busembatia, Uganda',
        'Aromatic long grain',
        'Ideal for biryani and pilau',
      ],
    },
    {
      name: 'Kaiso Rice',
      description:
        'The rice is locally grown in Uganda as the leading brand incorporating a natural and organic touch. A ravishing grain in size, shape and taste grown in our fields in Busembatia, dedicated to feeding our Nation.',
      image: productsImage,
      features: [
        'Organic farming practices',
        'Locally grown',
        'Natural and authentic',
      ],
    },
    {
      name: 'Pakistan Rice',
      description:
        'A radiant long white grain exported from the depth of Pakistan with excellent taste and texture, upholding international standards; the consumers\' grain of choice.',
      image: productsImage,
      features: [
        'International quality standards',
        'Long white grain',
        'Premium imported rice',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Quality Rice for Every Occasion
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
