// Icons reserved for future About section details.
// Removed unused lucide-react imports to avoid TS/lint warnings.

// About image: served from Vite `public/` folder.
const bakeryPhoto = '/DSC01516.jpeg';

import { PublicPanel } from '../components/Public-Panel';

export function About() {
  return (
    <section className="py-14 bg-[#FAF8F5]">
      <PublicPanel
        title="Our Story"

      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-2">
          {/* Visual Column (Left) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-[#FFF9F2]">
              <img
                src={bakeryPhoto}
                alt="Becoona Bakery Signboard"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Column (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-[#8B7E6F] text-lg leading-relaxed text-left">
              <p>
                Becoona was born from a simple dream: to bring authentic artisan baked goods
                to our community. What started as a small family kitchen has blossomed
                into a beloved neighborhood café.
              </p>
              <p>
                Every morning before dawn, our bakers arrive to begin the sacred ritual of
                bread-making. Using time-honored techniques passed down through generations,
                combined with innovative flavor profiles, we create magic in every loaf, pastry,
                and cake.
              </p>
              <p>
                Our commitment goes beyond just great taste. We source locally, support
                sustainable practices, and believe that good food can bring people together and
                create lasting memories.
              </p>
              <p>
                Today, we're proud to serve our community with the same passion and dedication that
                inspired our journey from the very beginning.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-[#D4A574] text-white font-semibold rounded-lg hover:bg-[#c29566] transition-colors cursor-pointer"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </PublicPanel>
    </section>
  );
}

