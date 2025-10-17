import { Sprout, Droplets, Package } from 'lucide-react';
import nurseryImage from '@/assets/nursery.jpg';
import fieldImage from '@/assets/field-2.jpg';
import maturityImage from '@/assets/maturity-1.jpg';

const FarmingProcess = () => {
  const stages = [
    {
      icon: Sprout,
      title: 'Nursery',
      subtitle: 'Month 1',
      description:
        'The initial stage all starts in the nursery beds where the grains are first soaked for about 12 hours, withdrawn and exposed to the sun, and later left to incubate for again about 12 hours until they start to sprout. They are then sown in the nursery. As all this is being done, the main fields are prepared. After a month, the seedlings are then transplanted to the main area.',
      image: nurseryImage,
    },
    {
      icon: Droplets,
      title: 'Weeding & Fertilization',
      subtitle: 'Months 2-3',
      description:
        'Every month, the rice needs to be weeded and fertilized depending on the type or nature of fertilizer used. Top dressing is prepared as the water is also monitored. The entire growth cycle takes a period of four months.',
      image: fieldImage,
    },
    {
      icon: Package,
      title: 'Maturity & Harvest',
      subtitle: 'Month 4',
      description:
        'As the rice reaches maturity, it changes to a pale-yellow color from green. Sickles and combined harvesters are used to harvest the rice. It is then taken to dry to a reasonable moisture content of 14 degrees, determined at the factory with the aid of a machine called a moisture meter, and later milled.',
      image: maturityImage,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 animate-fade-in">
            From Seed to Table
          </h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our Four-Month Journey of Care and Quality
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div
                  className={`animate-fade-in ${
                    index % 2 === 1 ? 'md:col-start-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <stage.icon size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-bold">{stage.title}</h2>
                      <p className="text-muted-foreground">{stage.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">{stage.description}</p>
                </div>

                <div
                  className={`animate-slide-up ${
                    index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Quality at Every Step</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Throughout the entire process, from nursery to harvest, we maintain rigorous quality control measures. Our modern processing facility uses advanced equipment, including moisture meters, to ensure every grain meets our high standards before reaching your table.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmingProcess;
