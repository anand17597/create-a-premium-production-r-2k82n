import React, { forwardRef, Ref } from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { Star, Flame, Award } from 'lucide-react'; // Icons for tags

interface MenuItemCardProps {
  image: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  tag?: 'bestseller' | 'spicy' | 'chef-special';
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  image,
  alt,
  name,
  description,
  price,
  rating,
  tag,
}) => {
  const TagIcon = tag === 'bestseller' ? Star : tag === 'spicy' ? Flame : Award;
  const tagColorClass = tag === 'bestseller' ? 'bg-gold-500' : tag === 'spicy' ? 'bg-red-700' : 'bg-green-600';
  const tagName = tag === 'bestseller' ? 'Bestseller' : tag === 'spicy' ? 'Spicy' : 'Chef Special';

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden card-hover transition-all duration-300 group">
      <img
        src={image}
        alt={alt}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gold-600 dark:text-gold-500 text-xl font-bold">{price}</span>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Star className="w-4 h-4 text-gold-500 mr-1 fill-gold-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        {tag && (
          <div className={cn("absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center space-x-1", tagColorClass)}>
            <TagIcon className="w-4 h-4" />
            <span>{tagName}</span>
          </div>
        )}
        <button className="w-full bg-red-700 text-white px-5 py-2 rounded-full text-base font-semibold hover:bg-red-800 transition-colors transform hover:scale-105 mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

interface FeaturedMenuProps {
  id: string;
  scrollToSection: (id: string) => void;
}

const featuredDishes: MenuItemCardProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1626079965805-d14620021c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Butter Chicken',
    name: 'Butter Chicken',
    description: 'Classic creamy tomato-based curry with tender chicken pieces, a rich and flavorful delight.',
    price: '₹380',
    rating: 4.8,
    tag: 'bestseller',
  },
  {
    image: 'https://images.unsplash.com/photo-1633575975000-e7116b4122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Mutton Rogan Josh',
    name: 'Mutton Rogan Josh',
    description: 'Aromatic Kashmiri lamb curry cooked in a rich, spicy, and flavorful gravy.',
    price: '₹450',
    rating: 4.7,
    tag: 'chef-special',
  },
  {
    image: 'https://images.unsplash.com/photo-1594007654729-407edc4ef658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Vegetable Thali',
    name: 'Grand Vegetarian Thali',
    description: 'A wholesome platter with a variety of seasonal vegetables, dal, rice, roti, and dessert.',
    price: '₹320',
    rating: 4.5,
  },
  {
    image: 'https://images.unsplash.com/photo-1622668511740-411a096c4d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Garlic Naan',
    name: 'Garlic Naan',
    description: 'Soft, fluffy leavened bread infused with fresh garlic and butter, baked in a tandoor.',
    price: '₹80',
    rating: 4.9,
    tag: 'bestseller',
  },
];

const FeaturedMenu = forwardRef<HTMLElement, FeaturedMenuProps>(({ id, scrollToSection }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          From Our Featured Menu
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Taste the dishes that define us. Our chefs meticulously craft each item to deliver an unforgettable culinary experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {featuredDishes.map((item, index) => (
            <MenuItemCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection("menu")} // Assuming there will be a full "menu" section later.
            className="bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-800 transition-colors transform hover:-translate-y-1 shadow-lg"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
});

FeaturedMenu.displayName = 'FeaturedMenu';
export default FeaturedMenu;