import React, { forwardRef, Ref, useState } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair-display text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, catering, or any inquiries.
          </p>
        </div>

        <div
          ref={animationRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold font-playfair-display text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-primary-brand" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  123 Spice Route, Flavor Town, FL 12345
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-primary-brand" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-primary-brand" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  info@workfastrestaurant.com
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold font-playfair-display text-gray-900 dark:text-white mb-3">Hours of Operation</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold font-playfair-display text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="your@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full px-6 py-3 bg-primary-brand text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity transform hover:scale-105",
                  isSubmitted && "bg-green-600"
                )}
                disabled={isSubmitted}
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;