import React, { forwardRef, Ref, useState } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent successfully! We will get back to you shortly.");
    setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
  };

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-gray-100 dark:bg-dark-bg"
    >
      <div ref={animationRef} className={cn("max-w-7xl mx-auto text-center", isVisible ? "animate-fade-in is-visible" : "opacity-0 translate-y-5")}>
        <h2 className="text-4xl font-playfair font-bold text-primary dark:text-secondary mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-8 text-left">
            <div className={cn("flex flex-col items-center lg:items-start animate-slide-in-left", isVisible ? "is-visible" : "opacity-0 -translate-x-10")} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                <MapPin size={24} className="mr-3 text-primary dark:text-secondary" /> Visit Our Restaurant
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                123 Food Street, Velachery,<br />
                Chennai, Tamil Nadu, India - 600042
              </p>
            </div>
            <div className={cn("flex flex-col items-center lg:items-start animate-slide-in-left", isVisible ? "is-visible" : "opacity-0 -translate-x-10")} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                <Phone size={24} className="mr-3 text-primary dark:text-secondary" /> Reach Us
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Phone: <a href="tel:+917010190110" className="text-primary dark:text-secondary hover:underline">+91 7010190110</a></p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Email: <a href="mailto:support@workfast.ai" className="text-primary dark:text-secondary hover:underline">support@workfast.ai</a></p>
            </div>
            <div className={cn("flex flex-col items-center lg:items-start animate-slide-in-left", isVisible ? "is-visible" : "opacity-0 -translate-x-10")} style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Business Hours</h3>
              <ul className="text-lg text-gray-700 dark:text-gray-300">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
              </ul>
            </div>
            <div className={cn("mt-8 animate-slide-in-left", isVisible ? "is-visible" : "opacity-0 -translate-x-10")} style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Find Us on Map</h3>
              <div className="aspect-w-16 aspect-h-9 w-full rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.75549007682!2d80.20377035!3d12.97746535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8000000001%3A0x1d11394b2a8d5c41!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                  width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn("bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl", isVisible ? "animate-slide-in-right is-visible" : "opacity-0 translate-x-10")} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="+91 12345 67890"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;