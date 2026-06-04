import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#4A4238] text-[#F5E6D3] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-[#FFFEFB] font-bold">Becoona Bakery</h3>
            <p className="text-[#E8D4B8]">
              Your destination for fresh, handcrafted baked goods made with love and the finest ingredients in Kausaltar, Bhaktpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#FFFEFB]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-[#FFFEFB]">Contact Us</h4>
            <ul className="space-y-2 text-[#E8D4B8]">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +977 (1) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@becoona.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Kausaltar, Bhaktpur, Nepal
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg mb-4 text-[#FFFEFB]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#E8D4B8] hover:text-[#FFFEFB] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8B7E6F] pt-8 text-center text-[#E8D4B8]">
          <p>&copy; 2026 Becoona Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
