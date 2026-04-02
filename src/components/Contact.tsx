import React, { forwardRef, Ref, useState } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLElement>();
  const { ref: infoRef, isVisible: infoIsVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const { ref: formRef, isVisible: formIsVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!');
    setFormSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setFormSubmitted(false), 5000); // Hide success message after 5 seconds
  };

  return (
    <section id={id} ref={sectionRef} className="section-padding bg-white dark:bg-black text-gray-800 dark:text-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={cn(
            "text-primary-brand text-lg font-semibold mb-2 transition-all duration-800 ease-out",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Get In Touch
        </p>
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-12 transition-all duration-800 ease-out delay-100",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Visit Us or <span className="text-secondary-brand">Make a Reservation</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div
            ref={infoRef}
            className={cn(
              "text-left transition-all duration-800 ease-out delay-200",
              infoIsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold font-playfair mb-4">Contact Information</h3>
            <p className="text-lg mb-4 flex items-center text-gray-700 dark:text-gray-300">
              <MapPin className="mr-3 text-primary-brand h-6 w-6" />
              123 Culinary Street, Foodville, FV 12345
            </p>
            <p className="text-lg mb-4 flex items-center text-gray-700 dark:text-gray-300">
              <Mail className="mr-3 text-primary-brand h-6 w-6" />
              info@workfastrestaurant.com
            </p>
            <p className="text-lg mb-4 flex items-center text-gray-700 dark:text-gray-300">
              <Phone className="mr-3 text-primary-brand h-6 w-6" />
              +1 (555) 123-4567
            </p>
            <p className="text-lg mb-6 flex items-center text-gray-700 dark:text-gray-300">
              <Clock className="mr-3 text-primary-brand h-6 w-6" />
              Mon-Sat: 11 AM - 10 PM, Sun: 12 PM - 9 PM
            </p>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.251483864161!2d144.9631248153169!3d-37.81627997975191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5f7e7f7d1%3A0x5045675218d2d60!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678234567890!5m2!1sen!2sau"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div
            ref={formRef}
            className={cn(
              "bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-800 ease-out delay-300",
              formIsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold font-playfair mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-800 dark:text-text-dark transition duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-800 dark:text-text-dark transition duration-200" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-800 dark:text-text-dark transition duration-200"></textarea>
              </div>
              <button type="submit"
                className="w-full bg-primary-brand text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md">
                Send Message
              </button>
              {formSubmitted && (
                <p className="text-green-600 dark:text-green-400 text-center mt-4">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;