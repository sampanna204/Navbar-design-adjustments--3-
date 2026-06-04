import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const allProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop',
    name: 'Chocolate Cake',
    description: 'Rich and decadent chocolate layer cake',
    price: 4599,
    originalPrice: 5599,
    badge: '-18%',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
    name: 'Croissant',
    description: 'Buttery, flaky French pastry',
    price: 499,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop',
    name: 'Artisan Bread',
    description: 'Fresh baked sourdough loaf',
    price: 899,
    badge: 'New',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&auto=format&fit=crop',
    name: 'Macarons',
    description: 'Assorted French macarons',
    price: 2499,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&auto=format&fit=crop',
    name: 'Strawberry Tart',
    description: 'Fresh strawberries on vanilla cream',
    price: 3299,
    originalPrice: 3999,
    badge: '-18%',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&auto=format&fit=crop',
    name: 'Cinnamon Rolls',
    description: 'Warm cinnamon rolls with cream cheese frosting',
    price: 1899,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e5b30a0e?w=600&auto=format&fit=crop',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet with cream cheese frosting',
    price: 4899,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&auto=format&fit=crop',
    name: 'Baguette',
    description: 'Classic French baguette',
    price: 599,
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop',
    name: 'Danish Pastry',
    description: 'Fruit-filled Danish pastry',
    price: 599,
    badge: 'New',
  },
];

export function Shop() {
  return (
    <>
      <div className="pt-32 pb-20 bg-[#FAF8F5] min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl mb-4 text-[#4A4238]">Shop All Products</h1>
            <p className="text-[#8B7E6F] max-w-2xl mx-auto">
              Browse our complete selection of freshly baked goods
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
