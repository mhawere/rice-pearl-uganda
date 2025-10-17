import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().min(1, 'Phone number is required').max(20, 'Phone must be less than 20 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      contactSchema.parse(formData);

      setIsSubmitting(true);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        'We received your request. We will reach out to you via your email address very soon. Thank you for your interest!'
      );

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We'd Love to Hear from You
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent mt-1" size={24} />
                        <div>
                          <h3 className="font-bold mb-2">Our Farms</h3>
                          <p className="text-sm text-muted-foreground">
                            Kalalu, Namassank, Butyobule, Nsozibini, Buboni, Bupata
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent mt-1" size={24} />
                        <div>
                          <h3 className="font-bold mb-2">Factory</h3>
                          <p className="text-sm text-muted-foreground">Busembatia, Uganda</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent mt-1" size={24} />
                        <div>
                          <h3 className="font-bold mb-2">Retail Shops</h3>
                          <p className="text-sm text-muted-foreground">
                            Bakuli, Uganda<br />
                            Kansanga, Uganda
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="text-accent" size={20} />
                          <span>+256 751 950 820</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="text-accent" size={20} />
                          <span>+256 753 202 443</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="text-accent" size={20} />
                          <a href="mailto:info@pearlrice.co.ug" className="hover:text-accent transition-colors">
                            info@pearlrice.co.ug
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={255}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={20}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={1000}
                        rows={6}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
