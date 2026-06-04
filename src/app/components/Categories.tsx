import { Link } from 'react-router-dom';
import { ImageWithFallback } from './ImageWithFallback';

export function Categories() {
  const categories = [
    {
      name: 'Cakes',
      slug: 'cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop',
    },
    {
      name: 'Pastries',
      slug: 'pastries',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
    },
    {
      name: 'Bread',
      slug: 'bread',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#FFFEFB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#4A4238] font-bold">Browse by Category</h2>
          <p className="text-sm md:text-base text-[#8B7E6F]">Discover our handcrafted delights in every category</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={`/category/${category.slug}`}>
              <div className="relative group cursor-pointer overflow-hidden rounded-lg h-80 bg-[#F5E6D3]">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-8">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
