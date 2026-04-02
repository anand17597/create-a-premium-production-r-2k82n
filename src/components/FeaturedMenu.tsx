import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { ShoppingCart } from 'lucide-react';

interface FeaturedMenuProps {
  id: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d9?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with succulent pieces of tandoori chicken.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1606411833074-b514df834460?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Garlic Naan",
    description: "Soft, fluffy bread infused with garlic and baked in a clay oven.",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1612800411304-4363294c653f?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1596795493206-8d022830f789?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Thali Platter",
    description: "A complete meal with a variety of curries, rice, bread, and dessert.",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1625220261163-12a87a662758?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in a rose-flavored sugar syrup.",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1582236676579-a0352c3c9e64?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const FeaturedMenu = forwardRef<HTMLElement, FeaturedMenuProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair-display text-gray-900 dark:text-white mb-4">
            Our Featured Menu
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a selection of our most popular and beloved dishes.
          </p>
        </div>

        <div
          ref={animationRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
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
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold font-playfair-display text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-brand dark:text-primary-brand text-2xl font-bold">
                    {item.price}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary-brand text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Order Now <ShoppingCart size={18} />
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