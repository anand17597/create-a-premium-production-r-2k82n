import React from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import { UtensilsCrossed, Star, Sparkles } from 'lucide-react'; // Icons for tags

interface SpecialtyCardProps {
  image: string;
  alt: string;
  tag: 'bestseller' | 'spicy' | 'chef-special';
  tagName: string;
  title: string;
  description: string;
  price: string;
  tagColor: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  image,
  alt,
  tag,
  tagName,
  title,
  description,
  price,
  tagColor,
}) => {
  const TagIcon = tag === 'bestseller' ? Star : tag === 'spicy' ? UtensilsCrossed : Sparkles;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden card-hover transition-all duration-300 group">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className={cn("absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center space-x-1", tagColor)}>
          <TagIcon className="w-4 h-4" />
          <span>{tagName}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gold-600 dark:text-gold-500 text-xl font-bold">{price}</span>
          <button className="bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-800 transition-colors transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

interface SpecialtiesProps {
  id: string;
}

const specialtyItems: SpecialtyCardProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1626804576302-98448a318182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Masala Dosa',
    tag: 'bestseller',
    tagName: 'Bestseller',
    title: 'Masala Dosa',
    description: 'Crispy golden crepe filled with spiced potato masala, served with sambar and chutneys.',
    price: '₹120',
    tagColor: 'bg-gold-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1626786659610-184561e1b854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Chicken Biryani',
    tag: 'chef-special',
    tagName: 'Chef Special',
    title: 'Hyderabadi Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken pieces, aromatic spices, and fresh herbs.',
    price: '₹350',
    tagColor: 'bg-red-700',
  },
  {
    image: 'https://images.unsplash.com/photo-1606979204044-332e185e7a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Paneer Butter Masala',
    tag: 'spicy',
    tagName: 'Spicy',
    title: 'Paneer Butter Masala',
    description: 'Cubes of cottage cheese in a rich, creamy, and mildly spicy tomato-based gravy.',
    price: '₹280',
    tagColor: 'bg-orange-600',
  },
  {
    image: 'https://images.unsplash.com/photo-1589302636901-d8514107e33e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Idli Sambar',
    tag: 'bestseller',
    tagName: 'Bestseller',
    title: 'Soft Idli & Sambar',
    description: 'Steamed fluffy rice cakes, served with a flavorful lentil stew and coconut chutney.',
    price: '₹90',
    tagColor: 'bg-gold-500',
  },
];

const Specialties = forwardRef<HTMLElement, SpecialtiesProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="section-padding bg-gray-50 dark:bg-gray-950">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Our Culinary Specialties
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Discover a curated selection of our most loved and unique dishes, crafted with passion and authentic flavors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialtyItems.map((item, index) => (
            <SpecialtyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
});

Specialties.displayName = 'Specialties';
export default Specialties;