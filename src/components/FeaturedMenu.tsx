import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';

interface FeaturedMenuProps {
  id: string;
  scrollToSection: (id: string) => void;
}

interface MenuItem {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviewsCount: number;
  tags: string[];
}

const featuredDishes: MenuItem[] = [
  {
    name: "Ghee Roast Dosa",
    description: "Crispy thin dosa roasted in pure ghee, served with a variety of chutneys.",
    image: "https://images.unsplash.com/photo-1598514981812-780a424a1b02?auto=format&fit=crop&w=600&h=400&q=80",
    price: 180,
    rating: 4.7,
    reviewsCount: 250,
    tags: ["Bestseller", "Veg"],
  },
  {
    name: "Hyderabad Mutton Biryani",
    description: "Fragrant basmati rice cooked with tender mutton pieces and secret spices.",
    image: "https://images.unsplash.com/photo-1628191010041-94944810c79e?auto=format&fit=crop&w=600&h=400&q=80",
    price: 350,
    rating: 4.9,
    reviewsCount: 410,
    tags: ["Chef Special", "Non-Veg", "Spicy"],
  },
  {
    name: "Authentic Filter Coffee",
    description: "A strong and aromatic South Indian filter coffee, a perfect end to any meal.",
    image: "https://images.unsplash.com/photo-1668615437887-3d17c7e52033?auto=format&fit=crop&w=600&h=400&q=80",
    price: 70,
    rating: 4.8,
    reviewsCount: 300,
    tags: ["Beverage", "Veg"],
  },
  {
    name: "Vegetable Kothu Parotta",
    description: "Shredded parotta stir-fried with mixed vegetables and spicy gravy.",
    image: "https://images.unsplash.com/photo-1629828859422-7f7f7f7f7f7f?auto=format&fit=crop&w=600&h=400&q=80", // Placeholder
    price: 220,
    rating: 4.5,
    reviewsCount: 180,
    tags: ["Popular", "Veg"],
  },
  {
    name: "Prawn Masala",
    description: "Succulent prawns cooked in a rich, tangy, and spicy tomato-onion gravy.",
    image: "https://images.unsplash.com/photo-1627914041180-878787878787?auto=format&fit=crop&w=600&h=400&q=80", // Placeholder
    price: 420,
    rating: 4.6,
    reviewsCount: 120,
    tags: ["Seafood", "Non-Veg", "Spicy"],
  },
  {
    name: "Gulab Jamun",
    description: "Soft, spongy milk-solids dumplings soaked in rose-flavored sugar syrup.",
    image: "https://images.unsplash.com/photo-1623274246820-27159715201c?auto=format&fit=crop&w=600&h=400&q=80",
    price: 90,
    rating: 4.8,
    reviewsCount: 150,
    tags: ["Dessert", "Veg"],
  },
];

const FeaturedMenu = forwardRef<HTMLElement, FeaturedMenuProps>(({ id, scrollToSection }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={18} fill="currentColor" className="text-secondary-brand" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" size={18} fill="currentColor" className="text-secondary-brand half-star-icon" />);
    }
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} size={18} className="text-gray-300 dark:text-gray-600" />);
    }
    return stars;
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Bestseller": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Chef Special": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Spicy": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Veg": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Non-Veg": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Beverage": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Dessert": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

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
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-800 dark:text-gray-100 mb-4">Our Featured Menu</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A selection of our most loved dishes, handpicked by our chefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((item, index) => (
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
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-primary-brand">₹{item.price}</span>
                  <div className="flex items-center">
                    <span className="flex items-center">
                      {renderStars(item.rating)}
                    </span>
                    <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">({item.reviewsCount} reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className={cn("px-3 py-1 text-xs font-semibold rounded-full", getTagColor(tag))}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-primary-brand text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturedMenu;