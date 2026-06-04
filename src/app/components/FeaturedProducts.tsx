import { ProductCard } from './ProductCard';

const products = [
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
];

export function FeaturedProducts() {
  return (
    <section id="shop" className="py-12 md:py-20 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#4A4238] font-bold">Our Featured Products</h2>
          <p className="text-sm md:text-base text-[#8B7E6F] max-w-2xl mx-auto">
            Discover our handpicked selection of delicious baked goods, made fresh daily with the finest ingredients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
