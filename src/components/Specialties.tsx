import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { ChefHat, Utensils, HeartHandshake } from 'lucide-react';

interface SpecialtiesProps {
  id: string;
}

interface SpecialtyItem {
  name: string;
  description: string;
  image: string;
  icon: React.ElementType; // Use React.ElementType for Lucide icons
}

const specialtyItems: SpecialtyItem[] = [
  {
    name: "Crispy Masala Dosa",
    description: "A classic South Indian crepe, crispy and golden, filled with spiced potato masala, served with sambar and chutneys.",
    image: "https://images.unsplash.com/photo-1625937920360-143640b8a4a7?auto=format&fit=crop&w=600&h=400&q=80",
    icon: Utensils,
  },
  {
    name: "Fluffy Idli with Sambar",
    description: "Steamed rice cakes, soft and light, served with aromatic lentil stew and fresh coconut chutney.",
    image: "https://images.unsplash.com/photo-1626079934149-c1f07f45b9a8?auto=format&fit=crop&w=600&h=400&q=80",
    icon: ChefHat,
  },
  {
    name: "Authentic Biryani",
    description: "Fragrant basmati rice cooked with tender meat or vegetables, infused with exotic spices, a true culinary delight.",
    image: "https://images.unsplash.com/photo-1631515243349-ae5021871271?auto=format&fit=crop&w=600&h=400&q=80",
    icon: HeartHandshake,
  },
];

const Specialties = forwardRef<HTMLElement, SpecialtiesProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair-display text-gray-900 dark:text-white mb-4">
            Our Signature Specialties
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the rich and diverse flavors of India with our expertly crafted dishes.
          </p>
        </div>

        <div
          ref={animationRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {specialtyItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative h-60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-2 bg-primary-brand text-white rounded-full">
                  <item.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold font-playfair-display text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Specialties;