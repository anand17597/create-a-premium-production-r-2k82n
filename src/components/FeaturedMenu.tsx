import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';

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
    name: "Paneer Tikka Masala",
    description: "Cubes of paneer cheese in a rich, creamy tomato gravy.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1603592882798-7570172605b0?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Tandoori Chicken",
    description: "Marinated chicken roasted in a clay oven, smoky and tender.",
    price: "$18.50",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Vegetable Korma",
    description: "Mixed vegetables in a rich, mild, and creamy cashew nut sauce.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1563729781171-ac5bc84f7e21?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with sweet mango pulp.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1546548988-fa0ae9f2379e?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in a sweet rose-flavored syrup.",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1551024601-bec78fda57f7?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Masala Chai",
    description: "Traditional Indian spiced tea, brewed with milk and aromatic spices.",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1509315809074-b8160533b664?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const FeaturedMenu = forwardRef<HTMLElement, FeaturedMenuProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLElement>();

  const handleViewFullMenu = () => {
    alert('Full menu coming soon!');
  };

  return (
    <section id={id} ref={sectionRef} className="section-padding bg-white dark:bg-black text-gray-800 dark:text-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={cn(
            "text-primary-brand text-lg font-semibold mb-2 transition-all duration-800 ease-out",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Our Culinary Delights
        </p>
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-12 transition-all duration-800 ease-out delay-100",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Explore Our <span className="text-secondary-brand">Featured Menu</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItemCard key={index} item={item} delay={index * 0.1} />
          ))}
        </div>
        <button
          onClick={handleViewFullMenu}
          className="mt-12 bg-primary-brand text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
        >
          View Full Menu
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
});

interface MenuItemCardProps {
  item: MenuItem;
  delay: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, delay }) => {
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
        <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
        <span className="text-xl font-bold text-primary-brand">{item.price}</span>
      </div>
    </div>
  );
};

export default FeaturedMenu;