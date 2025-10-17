import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Leaf, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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

      {/* Stats Strip */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '1,700+', label: 'Smallholder Farmers' },
              { number: '8,500+', label: 'People Supported' },
              { number: '15+', label: 'Years of Excellence' },
              { number: '4', label: 'Premium Products' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-accent">{stat.number}</div>
                <div className="text-sm md:text-base font-semibold opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-32 md:py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 items-center max-w-7xl mx-auto">
            <div className="lg:col-span-3 animate-slide-up relative z-10">
              <img
                src={productsImage}
                alt="Pearl Rice Products"
                className="rounded-3xl shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
            <div className="lg:col-span-2 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-8">
                <Leaf className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
                Welcome to<br />
                <span className="text-primary">Pearl Rice</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                Pearl Rice Limited was incorporated in Uganda in 2009. The company is dedicated to enhancing food security through the production, processing, and distribution of rice in Uganda and East Africa.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                We work with over 1,700 smallholder farmers, supporting 8,500 people through direct and indirect employment while promoting sustainable farming practices.
              </p>
              <Link to="/about">
                <Button size="lg" className="group">
                  Learn More About Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-secondary/30 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20 animate-fade-in max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-8">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Premium Products
            </div>
            <h2 className="text-6xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Discover our range of quality rice products, each carefully cultivated and processed to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={product.name} 
                className="animate-fade-in group" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/products">
              <Button size="lg" variant="outline" className="group text-lg px-10 py-7 h-auto">
                View All Products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-green to-accent/80 text-white mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl">
                  <value.icon size={56} strokeWidth={1.5} />
                  <div className="absolute inset-0 rounded-3xl bg-white/20 blur-xl group-hover:blur-2xl transition-all" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight animate-fade-in">
              Ready to Experience<br />
              <span className="text-accent">Quality Rice?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Get in touch with us today and discover the Pearl Rice difference
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-charcoal text-xl px-16 py-9 h-auto shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
