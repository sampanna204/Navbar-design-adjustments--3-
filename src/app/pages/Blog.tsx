import { Footer } from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&auto=format&fit=crop',
    title: 'The Art of Perfect Croissants: Tips from Our Master Bakers',
    excerpt: 'Discover the secrets behind creating the perfect flaky, buttery croissants that melt in your mouth.',
    author: 'Chef Ramesh',
    date: 'June 1, 2026',
    category: 'Baking Tips',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop',
    title: 'Choosing the Perfect Wedding Cake for Your Special Day',
    excerpt: 'A comprehensive guide to selecting a wedding cake that matches your style and delights your guests.',
    author: 'Maya Shrestha',
    date: 'May 28, 2026',
    category: 'Wedding Cakes',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop',
    title: 'Sourdough 101: Understanding the Ancient Art of Bread Making',
    excerpt: 'Learn about the traditional process of creating authentic sourdough bread from scratch.',
    author: 'Chef Ramesh',
    date: 'May 25, 2026',
    category: 'Bread',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop',
    title: 'Birthday Cake Trends in 2026: What\'s Hot in Bhaktpur',
    excerpt: 'Explore the latest birthday cake designs and flavors that are making waves in our community.',
    author: 'Sita Rai',
    date: 'May 20, 2026',
    category: 'Birthday Cakes',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&auto=format&fit=crop',
    title: 'Macarons: The Delicate French Treat Everyone Loves',
    excerpt: 'Everything you need to know about macarons, from flavor combinations to proper storage.',
    author: 'Maya Shrestha',
    date: 'May 15, 2026',
    category: 'Pastries',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&auto=format&fit=crop',
    title: 'Seasonal Fruits in Baking: Making the Most of Fresh Ingredients',
    excerpt: 'How we incorporate fresh, seasonal fruits into our pastries and cakes for maximum flavor.',
    author: 'Chef Ramesh',
    date: 'May 10, 2026',
    category: 'Baking Tips',
  },
];

export function Blog() {
  return (
    <>
      <div className="pt-32 pb-20 bg-[#FAF8F5] min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl mb-4 text-[#4A4238] font-bold">Our Blog</h1>
            <p className="text-[#8B7E6F] max-w-2xl mx-auto">
              Tips, stories, and inspiration from the Becoona Bakery kitchen
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#FFFEFB] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-56 bg-[#F5E6D3]">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4A574] text-[#FFFEFB] px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#8B7E6F] mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-[#4A4238] mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-[#8B7E6F] mb-4 line-clamp-3">{post.excerpt}</p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#D4A574] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
