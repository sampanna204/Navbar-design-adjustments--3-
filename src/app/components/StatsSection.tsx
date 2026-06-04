import { Users, ChefHat, Heart, Clock } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: '50000+',
      label: 'Happy Customers',
    },
    {
      icon: ChefHat,
      number: '100%',
      label: 'Fresh Daily',
    },
    {
      icon: Heart,
      number: '200+',
      label: 'Varieties',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Order Support',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4A574]/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A574]/10 rounded-full translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white transform transition-transform hover:scale-105">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="bg-[#FFF9F2] border border-[#EBE7E1] p-3 md:p-4 rounded-full shadow-sm">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-[#D4A574]" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 text-[#4A4238]">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base lg:text-lg opacity-100 font-medium text-[#8B7E6F]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
