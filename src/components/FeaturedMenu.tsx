import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

interface FeaturedMenuProps {
  id: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isSpecial: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich, creamy tomato gravy with butter and aromatic spices.",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1668480356507-6f167a5b3a37?auto=format&fit=crop&w=600&h=400&q=80",
    isSpecial: true,
  },
  {
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables and exotic spices.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1626804566367-a06806f1406e?auto=format&fit=crop&w=600&h=400&q=80",
    isSpecial: false,
  },
  {
    name: "Garlic Naan",
    description: "Soft, fluffy Indian bread infused with fresh garlic and baked in a tandoor.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1627943560599-734107144e7c?auto=format&fit=crop&w=600&h=400&q=80",
    isSpecial: false,
  },
  {
    name: "Palak Paneer",
    description: "Creamy spinach curry with cubes of fresh cottage cheese, a healthy delight.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1631515243349-7e44089c6d65?auto=format&fit=crop&w=600&h=400&q=80",
    isSpecial: true,
  },
  {
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, grilled to perfection in a tandoor.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1596797176472-a169b50b59b3?auto=format&fit=crop&w=600&h=400&q=80",
    isSpecial: false,
  },
  {
    name: "Samosa (2 pcs)",
    description: "Crispy pastry filled with spiced potatoes and peas, served with chutneys.",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1626082894569-d419d2940256?auto=format&fit=crop&w=600&h=400&q=80",
    isSpecial: false,
  },
];

const FeaturedMenu = forwardRef<HTMLElement, FeaturedMenuProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-white dark:bg-zinc-900">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
      >
        <h2 className="font-playfair-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Our Featured Menu
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore a selection of our most popular and exquisite dishes, crafted to perfection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-gray-50 dark:bg-zinc-950 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative",
                isVisible ? `opacity-100 translate-y-0 delay-${index * 150}` : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover object-center"
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1563612116-3e7b17d092c4?auto=format&fit=crop&w=600&h=400&q=80'; // Fallback
                }}
              />
              {item.isSpecial && (
                <div className="absolute top-4 right-4 bg-primary-brand text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" /> Special
                </div>
              )}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-playfair-display text-3xl font-bold text-primary-brand">{item.price}</span>
                  <button className="px-5 py-2 bg-primary-brand text-white rounded-full hover:bg-red-800 transition-colors duration-300 transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturedMenu;