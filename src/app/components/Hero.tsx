import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-[#F5E6D3]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80')",
      }}
    >
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main Text & Button Content Area */}
      <div className="relative z-20 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl mb-6 font-bold">
          Freshly Baked Every Day
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Indulge in Becoona's artisanal pastries, cakes, and breads made with love and the finest ingredients
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/shop">
            <Button size="lg" className="bg-[#D4A574] hover:bg-[#C09460] text-white px-8 py-6 text-lg w-48 shadow-lg">
              Shop Now
            </Button>
          </Link>

          {/* Learn More anchor jumps right down to your separate about section cards */}
          <a href="#about">
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#4A4238] px-8 py-6 text-lg w-48 transition-all">
              Learn More
            </Button>
          </a>
        </div>
      </div>

      {/* VISUAL SEPARATION: 
        This adds the "Discover More" text and the animated mouse wheel line 
        directly at the bottom edge of your Hero section layout.
      */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none select-none">
        <span className="text-xs uppercase tracking-widest text-white/60 font-medium drop-shadow-sm">
          Discover More
        </span>
        
        {/* Mouse Graphic Outline */}
        <div className="w-[26px] h-[42px] rounded-full border-2 border-white/60 flex justify-center p-1.5 backdrop-blur-[1px]">
          {/* Animated Wheel Dot */}
          <div className="w-[3px] h-[8px] bg-[#D4A574] rounded-full animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}