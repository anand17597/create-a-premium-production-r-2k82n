import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface SpecialtiesProps {
  id: string;
}

interface SpecialtyItem {
  name: string;
  description: string;
  image: string;
}

const specialtyItems: SpecialtyItem[] = [
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
    description: "Fragrant basmati rice cooked with tender chicken pieces and exotic spices, a true delight.",
    image: "https://images.unsplash.com/photo-1626702651478-f7b760a92f02?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Rich Butter Chicken",
    description: "Creamy tomato-based curry with succulent chicken pieces, a mild and flavorful classic.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a647?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Garlic Naan Bread",
    description: "Soft, fluffy leavened bread baked in a tandoor, brushed with garlic and butter.",
    image: "https://images.unsplash.com/photo-1606491176527-7279140f878b?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Spicy Lamb Vindaloo",
    description: "A fiery Goan curry with tender lamb, potatoes, and a blend of aromatic spices.",
    image: "https://images.unsplash.com/photo-1631515243349-ae1091874da1?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const Specialties = forwardRef<HTMLElement, SpecialtiesProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id={id} ref={sectionRef} className="section-padding bg-white dark:bg-black text-gray-800 dark:text-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={cn(
            "text-primary-brand text-lg font-semibold mb-2 transition-all duration-800 ease-out",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Our Signature Dishes
        </p>
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-12 transition-all duration-800 ease-out delay-100",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Taste the <span className="text-secondary-brand">Workfast</span> Difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyItems.map((item, index) => (
            <SpecialtyCard key={index} item={item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
});

interface SpecialtyCardProps {
  item: SpecialtyItem;
  delay: number;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ item, delay }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold font-playfair mb-2">{item.name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
      </div>
    </div>
  );
};

export default Specialties;