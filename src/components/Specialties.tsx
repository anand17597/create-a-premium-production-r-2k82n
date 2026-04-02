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
    image: "https://images.unsplash.com/photo-1625937920360-143640b8a4a7?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Fluffy Idli with Sambar",
    description: "Steamed rice cakes, soft and light, served with aromatic lentil stew and coconut chutney.",
    image: "https://images.unsplash.com/photo-1645063851554-181a4b1f4c7d?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Aromatic Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and a blend of exotic spices.",
    image: "https://images.unsplash.com/photo-1606491682334-97216a738676?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Spicy Chettinad Fish Curry",
    description: "A fiery and flavorful fish curry from the Chettinad region, rich with ground spices.",
    image: "https://images.unsplash.com/photo-1625227786480-1a1a1a1a1a1a?auto=format&fit=crop&w=600&h=400&q=80", // Placeholder, find better if needed
  },
  {
    name: "Creamy Paneer Butter Masala",
    description: "Soft paneer cubes simmered in a rich, creamy tomato-based gravy, a North Indian delight.",
    image: "https://images.unsplash.com/photo-1626082928816-3e4b7b7b7b7b?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Melt-in-mouth Mysore Pak",
    description: "A traditional South Indian sweet made from gram flour, ghee, and sugar, a true delicacy.",
    image: "https://images.unsplash.com/photo-1678051772633-e9d6d3d3d3d3?auto=format&fit=crop&w=600&h=400&q=80", // Placeholder
  },
];

const Specialties = forwardRef<HTMLElement, SpecialtiesProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

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
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-800 dark:text-gray-100 mb-4">Our Culinary Specialties</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover our signature dishes, crafted with authentic recipes and the freshest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden animated-card transition-all duration-800 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Specialties;