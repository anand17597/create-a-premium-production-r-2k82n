import React, { forwardRef, Ref, useState } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form or show success message
      console.log("Form submitted!");
      setTimeout(() => setIsSubmitted(false), 3000); // Hide success after 3 seconds
    }, 2000);
  };

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-950">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
      >
        <h2 className="font-playfair-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          We'd love to hear from you! Whether it's a reservation, feedback, or a catering inquiry, reach out to us.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary-brand mr-4" />
                <p className="text-lg text-gray-700 dark:text-gray-300">info@wfastrestaurant.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary-brand mr-4" />
                <p className="text-lg text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-brand mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  123 Culinary Street, Flavor Town, FL 12345
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Opening Hours</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
              </ul>
            </div>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1582218764009-c181a42b9380?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior"
                className="rounded-lg shadow-md w-full h-auto"
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'; // Fallback
                }}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-primary-brand focus:border-primary-brand bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-primary-brand focus:border-primary-brand bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-50"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-primary-brand focus:border-primary-brand bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-primary-brand focus:border-primary-brand bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-brand hover:bg-red-800 dark:bg-primary-brand dark:hover:bg-red-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-brand"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" /> Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" /> Sent!
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;