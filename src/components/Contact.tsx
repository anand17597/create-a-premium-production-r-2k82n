import React, { forwardRef, Ref, useState } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    console.log("Form submitted!");
    setFormSubmitted(true);
    e.currentTarget.reset(); // Clear form fields

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000); // Hide success message after 5 seconds
  };

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div
          ref={animationRef}
          className={cn(
            "transition-all duration-800 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-800 dark:text-gray-100 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for reservations, catering, or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8 text-left">
            <div
              className={cn(
                "bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition-all duration-800 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Our Details</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700 dark:text-gray-200">
                  <MapPin className="mr-3 text-primary-brand" size={20} />
                  Velachery, Chennai, India
                </p>
                <p className="flex items-center text-gray-700 dark:text-gray-200">
                  <Phone className="mr-3 text-primary-brand" size={20} />
                  +91 7010190110
                </p>
                <p className="flex items-center text-gray-700 dark:text-gray-200">
                  <Mail className="mr-3 text-primary-brand" size={20} />
                  support@workfast.ai
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-200">
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div
              className={cn(
                "bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-xl transition-all duration-800 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Find Us</h3>
              <div className="aspect-w-16 aspect-h-9 w-full"> {/* Aspect ratio container for responsiveness */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.914902120023!2d80.21045235!3d12.97746575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8041d8e137%3A0x8670417737298642!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701358045000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Google Maps location of TasteTrek in Velachery, Chennai"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition-all duration-800 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-700 dark:text-gray-100 transition-colors" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-700 dark:text-gray-100 transition-colors" placeholder="+91 12345 67890" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary-brand focus:border-primary-brand dark:bg-gray-700 dark:text-gray-100 transition-colors" placeholder="Your message or inquiry" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-brand text-white font-semibold py-3 rounded-lg shadow-md hover:bg-primary-dark transition duration-300">
                Send Message
              </button>
              {formSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-lg text-center">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;