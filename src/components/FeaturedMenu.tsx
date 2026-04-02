import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';

interface FeaturedMenuProps {
  id: string;
}

const menuItems = [
  {
    name: "Ghee Roast Dosa",
    description: "Crispy, golden dosa roasted in pure ghee, served with a variety of chutneys.",
    price: 180,
    rating: 4.5,
    tags: ["Veg", "Chef Special"],
    image: "https://images.unsplash.com/photo-1628841487849-0145227747e9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Podi Idli",
    description: "Mini idlis tossed in spicy 'podi' powder and ghee, a flavorful treat.",
    price: 150,
    rating: 4.7,
    tags: ["Veg", "Spicy"],
    image: "https://images.unsplash.com/photo-1589302168068-964722026770?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Authentic Filter Coffee",
    description: "A strong, frothy South Indian coffee, perfectly brewed and served hot.",
    price: 80,
    rating: 4.8,
    tags: ["Veg", "Bestseller"],
    image: "https://images.unsplash.com/photo-1626075193649-14a0f44357c3?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chicken Kothu Parotta",
    description: "Shredded parotta mixed with spiced chicken, eggs, and vegetables on a hot griddle.",
    price: 250,
    rating: 4.6,
    tags: ["Non-Veg", "Chef Special"],
    image: "https://images.unsplash.com/photo-1631515243355-662544259b3b?auto=format&fit=crop&w=400&q=80", // Placeholder
  },
  {
    name: "Vegetable Uttapam",
    description: "Thick savory pancake made with fermented rice and lentil batter, topped with vegetables.",
    price: 160,
    rating: 4.3,
    tags: ["Veg"],
    image: "https://images.unsplash.com/photo-1628841487849-0145227747e9?auto=format&fit=crop&w=400&q=80", // Placeholder
  },
  {
    name: "Fish Curry Meals",
    description: "Traditional South Indian fish curry served with rice and assorted side dishes.",
    price: 320,
    rating: 4.7,
    tags: ["Non-Veg", "Spicy"],
    image: "https://images.unsplash.com/photo-1626804107576-0f3b0e3b0e3b?auto=format&fit=crop&w=400&q=80", // Placeholder
  },
];

const FeaturedMenu = forwardRef<HTMLElement, FeaturedMenuProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-gray-100 dark:bg-dark-bg"
    >
      <div ref={animationRef} className={cn("max-w-7xl mx-auto text-center", isVisible ? "animate-fade-in is-visible" : "opacity-0 translate-y-5")}>
        <h2 className="text-4xl font-playfair font-bold text-primary dark:text-secondary mb-12">Our Featured Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300",
                isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{item.name}</h3>
                  <span className="text-primary dark:text-secondary font-bold text-xl">₹{item.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center mr-3">
                    <Star size={16} fill="currentColor" className="text-yellow-500 mr-1" /> {item.rating}
                  </span>
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className={cn(
                        "px-2 py-0.5 rounded-full text-xs font-medium mr-2",
                        tag === "Veg" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                        tag === "Non-Veg" && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                        tag === "Spicy" && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                        tag === "Chef Special" && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                        tag === "Bestseller" && "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-secondary text-dark-bg font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className={cn(
            "mt-12 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg transform hover:-translate-y-1",
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"
          )}
          style={{ animationDelay: `${0.2 * menuItems.length}s` }}
        >
          View Full Menu
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
});

FeaturedMenu.displayName = 'FeaturedMenu';

export default FeaturedMenu;