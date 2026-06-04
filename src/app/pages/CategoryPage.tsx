import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { Filter } from 'lucide-react';

const categoryFilters: Record<string, string[]> = {
  cakes: ['All', 'Birthday', 'Wedding', 'Anniversary', 'Custom'],
  pastries: ['All', 'French', 'Danish', 'Puff Pastry', 'Sweet', 'Savory'],
  bread: ['All', 'Sourdough', 'Whole Grain', 'White', 'Specialty'],
};

const categoryProducts = {
  cakes: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop',
      name: 'Chocolate Cake',
      description: 'Rich and decadent chocolate layer cake',
      price: 4599,
      originalPrice: 5599,
      badge: '-18%',
      type: 'Birthday',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e5b30a0e?w=600&auto=format&fit=crop',
      name: 'Red Velvet Cake',
      description: 'Classic red velvet with cream cheese frosting',
      price: 4899,
      type: 'Wedding',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop',
      name: 'Vanilla Cake',
      description: 'Light and fluffy vanilla sponge cake',
      price: 4299,
      badge: 'New',
      type: 'Birthday',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop',
      name: 'Carrot Cake',
      description: 'Moist carrot cake with walnuts',
      price: 4699,
      type: 'Anniversary',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&auto=format&fit=crop',
      name: 'Lemon Cake',
      description: 'Zesty lemon cake with buttercream',
      price: 4499,
      type: 'Custom',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1606890657151-f2d3ff6ebf9f?w=600&auto=format&fit=crop',
      name: 'Cheesecake',
      description: 'Creamy New York style cheesecake',
      price: 5299,
      type: 'Anniversary',
    },
  ],
  pastries: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
      name: 'Croissant',
      description: 'Buttery, flaky French pastry',
      price: 499,
      type: 'French',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&auto=format&fit=crop',
      name: 'Macarons',
      description: 'Assorted French macarons',
      price: 2499,
      type: 'French',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&auto=format&fit=crop',
      name: 'Strawberry Tart',
      description: 'Fresh strawberries on vanilla cream',
      price: 3299,
      originalPrice: 3999,
      badge: '-18%',
      type: 'Sweet',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&auto=format&fit=crop',
      name: 'Cinnamon Rolls',
      description: 'Warm cinnamon rolls with cream cheese frosting',
      price: 1899,
      type: 'Sweet',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop',
      name: 'Danish Pastry',
      description: 'Fruit-filled Danish pastry',
      price: 599,
      badge: 'New',
      type: 'Danish',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1612182062631-83e486852f61?w=600&auto=format&fit=crop',
      name: 'Éclair',
      description: 'Chocolate éclair with vanilla cream',
      price: 699,
      type: 'Puff Pastry',
    },
  ],
  bread: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop',
      name: 'Artisan Bread',
      description: 'Fresh baked sourdough loaf',
      price: 899,
      badge: 'New',
      type: 'Sourdough',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&auto=format&fit=crop',
      name: 'Baguette',
      description: 'Classic French baguette',
      price: 599,
      type: 'White',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600&auto=format&fit=crop',
      name: 'Whole Wheat Bread',
      description: 'Healthy whole wheat loaf',
      price: 799,
      type: 'Whole Grain',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1621947081720-86970823b77a?w=600&auto=format&fit=crop',
      name: 'Rye Bread',
      description: 'Traditional rye sourdough',
      price: 999,
      type: 'Sourdough',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
      name: 'Ciabatta',
      description: 'Italian ciabatta bread',
      price: 699,
      type: 'Specialty',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1608198399988-841b7c7e3bae?w=600&auto=format&fit=crop',
      name: 'Focaccia',
      description: 'Rosemary and olive oil focaccia',
      price: 1099,
      badge: '-10%',
      originalPrice: 1299,
      type: 'Specialty',
    },
  ],
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allProducts = categoryProducts[category as keyof typeof categoryProducts] || [];
  const filters = categoryFilters[category as string] || ['All'];

  const filteredProducts = selectedFilter === 'All'
    ? allProducts
    : allProducts.filter((product: any) => product.type === selectedFilter);

  const categoryTitles: Record<string, string> = {
    cakes: 'Cakes',
    pastries: 'Pastries',
    bread: 'Bread',
  };

  return (
    <>
      <div className="pt-32 pb-20 bg-[#FAF8F5] min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-5xl mb-4 text-[#4A4238] font-bold">
              {categoryTitles[category as string] || 'Products'}
            </h1>
            <p className="text-[#8B7E6F] max-w-2xl mx-auto">
              Explore our delicious selection of freshly baked {categoryTitles[category as string]?.toLowerCase()}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mb-8 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-[#4A4238]">
              <Filter className="h-5 w-5" />
              <span className="font-semibold">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#D4A574] text-white shadow-md'
                    : 'bg-[#FFFEFB] text-[#4A4238] hover:bg-[#F5E6D3]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: any) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
