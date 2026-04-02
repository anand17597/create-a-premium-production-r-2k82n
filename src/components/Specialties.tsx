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
    description: "Steamed rice cakes, soft and light, served with a flavorful lentil stew and coconut chutney.",
    image: "https://images.unsplash.com/photo-1625938096537-c75c5b4e8c14?auto=format&fit=crop&w=600&h=400&q=80",
    icon: Utensils,
  },
  {
    name: "Spicy Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices, a true Hyderabadi delight.",
    image: "https://images.unsplash.com/photo-1631452180539-c1672322a36b?auto=format&fit=crop&w=600&h=400&q=80",
    icon: ChefHat,
  },
  {
    name: "Paneer Butter Masala",
    description: "Creamy and rich cottage cheese curry in a tomato-based gravy, best enjoyed with naan or rice.",
    image: "https://images.unsplash.com/photo-1668480356507-6f167a5b3a37?auto=format&fit=crop&w=600&h=400&q=80",
    icon: HeartHandshake, // Representing comfort food
  },
];

const Specialties = forwardRef<HTMLElement, SpecialtiesProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

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
          Our Culinary Specialties
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover the unique dishes that make Wfast a beloved destination for authentic Indian cuisine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialtyItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl",
                isVisible ? `opacity-100 translate-y-0 delay-${index * 150}` : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=600&h=400&q=80'; // Fallback image
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-4 text-primary-brand">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Specialties;