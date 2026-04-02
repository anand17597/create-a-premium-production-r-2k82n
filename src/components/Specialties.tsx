import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface SpecialtiesProps {
  id: string;
}

const specialtyItems = [
  {
    name: "Crispy Masala Dosa",
    description: "A classic South Indian crepe, crispy and golden, filled with spiced potato masala.",
    image: "https://images.unsplash.com/photo-1625937920360-143640b8a4a7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Fluffy Idli with Sambar",
    description: "Steamed rice cakes, soft and light, served with aromatic lentil stew and coconut chutney.",
    image: "https://images.unsplash.com/photo-1645063851554-181a4b1f4c7d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aromatic Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and a blend of exotic spices.",
    image: "https://images.unsplash.com/photo-1606491682334-97216a738676?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Spicy Paneer Dosa",
    description: "Crispy dosa filled with crumbled paneer (Indian cottage cheese) and a fiery spice mix.",
    image: "https://images.unsplash.com/photo-1629079933391-9e79e13d9472?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Traditional Thali Meals",
    description: "A wholesome platter featuring a variety of curries, rice, bread, and dessert.",
    image: "https://images.unsplash.com/photo-1668276707835-2d4e84b80e8e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Gobi Manchurian",
    description: "Crispy fried cauliflower florets tossed in a spicy, tangy Indo-Chinese sauce.",
    image: "https://images.unsplash.com/photo-1668276707835-2d4e84b80e8e?auto=format&fit=crop&w=400&q=80", // Placeholder, find better image
  },
];

const Specialties = forwardRef<HTMLElement, SpecialtiesProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-gray-100 dark:bg-dark-bg"
    >
      <div ref={animationRef} className={cn("max-w-7xl mx-auto text-center", isVisible ? "animate-fade-in is-visible" : "opacity-0 translate-y-5")}>
        <h2 className="text-4xl font-playfair font-bold text-primary dark:text-secondary mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
                isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{item.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Specialties.displayName = 'Specialties';

export default Specialties;