import { Target, Eye, Leaf, Users, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import harvestImage from '@/assets/harvest.jpg';
import fieldImage from '@/assets/field-1.jpg';

const About = () => {
  const commitments = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Focus on sustainable practices',
    },
    {
      icon: Users,
      title: 'Smallholder Farmers',
      description: 'Community development',
    },
    {
      icon: TrendingUp,
      title: 'Subsidized Support',
      description: 'Land, expertise, fertilizers, seeds',
    },
    {
      icon: Award,
      title: '65% Women & Youth',
      description: 'Gender equality focus',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 animate-fade-in">Our Story</h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Building Community Through Quality Rice Since 2009
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Pearl Rice Limited is a registered private sector company established in Uganda in January 2009. The Company is involved in the full rice value chain, from farming, procuring and processing of rice paddy, to warehousing, importation, distribution and marketing of rice in Uganda.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The Company provides an opportunity to improve food security in the country by providing a market for rice from smallholder farms in the Eastern Region of Uganda.
              </p>

              <div className="my-12">
                <img
                  src={harvestImage}
                  alt="Harvest"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                The Company has established good relations with local farmers and community leaders, with over 1,700 smallholder farmers or outgrowers who are directly involved in rice cultivation. Smallholder farmers benefit from the revenues generated from rice farming, given land, seeds, fertilizers, equipment and training, using simple irrigation methods to ensure productivity and good crop yield are obtained for procurement.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                As a result of direct and indirect employment and the Pearl Rice outgrowers scheme, a total of 1,700 families are currently supported, and the total population benefited is around 8,500 (based on an average of 5 persons per family).
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Pearl Rice is dedicated to becoming Uganda's leading rice business that continues to motivate community-building projects through charity donations, education, and promoting gender equality. We encourage innovative and sustainable farming practices, as well as presenting various employment opportunities for the youth in Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h2 className="text-2xl font-serif font-bold">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed">
                  To operate a modern rice irrigation farm and ensure efficient utilization of the land to increase yield per hectare while providing a market for rice for smallholder farmers, thereby improving their standards of living.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-2xl font-serif font-bold">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed">
                  To become the market leader in the rice production business in Uganda by the provision of quality brands of rice products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Commitments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={commitment.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green text-green-foreground mb-4">
                  <commitment.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Strategic Objectives</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg">
                <p className="leading-relaxed">
                  We aim to establish a nucleus farm of 3,000 hectares with a modern processing facility, while promoting aquaculture cage farming alongside rice production in the dam constructed for irrigation.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <p className="leading-relaxed">
                  Through our outgrower scheme, 3,000 hectares of land will be developed to reach at least 3,570 farmers. We form and strengthen farmer groups and associations with a focus on creating group cohesiveness, instilling business and marketing skills, and creating market linkages with buyers and service providers.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <p className="leading-relaxed">
                  We increase productivity by addressing key input bottlenecks and post-harvest handling. We purchase paddy rice from outgrowers in the areas surrounding the project to fully utilize our existing milling machine capacity of 5 tons per hour.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <p className="leading-relaxed">
                  Above all, we provide quality products and services to deliver more value to customers, earning their respect and loyalty. We increase rice production for our nucleus farm and outgrowers, thereby improving their standards of living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
