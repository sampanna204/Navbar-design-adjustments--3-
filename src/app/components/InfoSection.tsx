  import { Clock, MapPin, Phone, Award } from 'lucide-react';

  export function InfoSection() {
    const infoItems = [
      { icon: MapPin, title: 'Location', desc: 'Kausaltar, Bhaktpur', sub: 'Nepal' },
      { icon: Clock, title: 'Opening Hours', desc: 'Mon - Sat: 6am - 8pm', sub: 'Sun: 7am - 7pm' },
      { icon: Phone, title: 'Contact', desc: '+977 (1) 123-4567', sub: 'info@becoona.com' },
      { icon: Award, title: 'Quality Promise', desc: '100% Fresh', sub: 'Baked Daily' },
    ];

    return (
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {infoItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-[#EBE7E1] shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#FFF9F2] p-4 rounded-full">
                    <item.icon className="h-8 w-8 text-[#D4A574]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4A4238] mb-3">{item.title}</h3>
                <p className="text-[#8B7E6F] text-sm leading-relaxed">
                  {item.desc}<br />{item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Our Values Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#4A4238] mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Quality First', desc: 'We never compromise on the quality of our ingredients. Every item is made with premium, carefully sourced materials.' },
                { title: 'Freshness Guaranteed', desc: 'All our products are baked fresh daily. What you see is what was made this morning with love and care.' },
                { title: 'Community Heart', desc: 'We\'re proud to serve our Bhaktpur community, creating moments of joy one baked good at a time.' },
              ].map((value, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl border border-[#EBE7E1] shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#D4A574] mb-4">{value.title}</h3>
                  <p className="text-[#8B7E6F] leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }