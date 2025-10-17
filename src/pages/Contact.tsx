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
      <section className="py-32 bg-gradient-to-br from-primary via-primary to-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTZjMC0zLjMxNC0yLjY4Ni02LTYtNnMtNiAyLjY4Ni02IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYtMi42ODYtNi02LTYgNiAyLjY4NiA2IDYgMi42ODYgNiA2IDZjMy4zMTQgMCA2LTIuNjg2IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
            Contact
          </div>
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in tracking-tight">
            Get in Touch
          </h1>
          <p className="text-2xl animate-fade-in opacity-90" style={{ animationDelay: '0.1s' }}>
            We'd Love to Hear from You
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-background -mt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl font-display font-bold mb-8 tracking-tight">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Our Farms</h3>
                          <p className="text-sm text-muted-foreground">
                            Kalalu, Namassank, Butyobule, Nsozibini, Buboni, Bupata
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Factory</h3>
                          <p className="text-sm text-muted-foreground">Busembatia, Uganda</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Retail Shops</h3>
                          <p className="text-sm text-muted-foreground">
                            Bakuli, Uganda<br />
                            Kansanga, Uganda
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <Phone size={18} />
                          </div>
                          <span className="font-medium">+256 751 950 820</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <Phone size={18} />
                          </div>
                          <span className="font-medium">+256 753 202 443</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <Mail size={18} />
                          </div>
                          <a href="mailto:info@pearlrice.co.ug" className="hover:text-primary transition-colors font-medium">
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
              <Card className="border-0 shadow-large">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-display font-bold mb-8 tracking-tight">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
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
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
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
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
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
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full h-14" disabled={isSubmitting}>
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
