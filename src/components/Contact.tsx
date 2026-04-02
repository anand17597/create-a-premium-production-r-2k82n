import React, { forwardRef, Ref, useState } from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', formState);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000); // Reset submitted state after 3 seconds
    }, 1000);
  };

  return (
    <section id={id} ref={ref} className="section-padding bg-gray-50 dark:bg-gray-950">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out for reservations, catering, or any inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0" />
                  <span>Velachery, Chennai, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0" />
                  <span>+91 7010190110</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0" />
                  <span>support@workfast.ai</span>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Business Hours:</p>
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Map Embed */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.54562473484!2d80.20785640000001!3d12.980648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8866113b29%3A0x770679f2207902d!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701386221759!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Velachery, Chennai on Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg",
                  isSubmitted
                    ? "bg-green-600 text-white cursor-not-allowed"
                    : "bg-red-700 text-white hover:bg-red-800"
                )}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
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