import { useState } from 'react';
import { Button } from '@/components/ui/button';
import field1 from '@/assets/field-1.jpg';
import field2 from '@/assets/field-2.jpg';
import field3 from '@/assets/field-3.jpg';
import harvest from '@/assets/harvest.jpg';
import nursery from '@/assets/nursery.jpg';
import maturity1 from '@/assets/maturity-1.jpg';
import maturity2 from '@/assets/maturity-2.jpg';
import maturity3 from '@/assets/maturity-3.jpg';
import products from '@/assets/products.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Farm', 'Products', 'Harvest'];

  const images = [
    { src: field1, alt: 'Rice fields', category: 'Farm' },
    { src: field2, alt: 'Growing rice', category: 'Farm' },
    { src: field3, alt: 'Rice paddy fields', category: 'Farm' },
    { src: harvest, alt: 'Harvesting rice', category: 'Harvest' },
    { src: nursery, alt: 'Nursery stage', category: 'Farm' },
    { src: maturity1, alt: 'Mature rice', category: 'Harvest' },
    { src: maturity2, alt: 'Rice grains', category: 'Harvest' },
    { src: maturity3, alt: 'Golden rice', category: 'Harvest' },
    { src: products, alt: 'Pearl Rice products', category: 'Products' },
  ];

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 animate-fade-in">
            Our Story in Pictures
          </h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            From Field to Table
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
