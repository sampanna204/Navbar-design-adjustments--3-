import { useState, useEffect } from 'react';
import { ShoppingCart, User, UserPlus, Search, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeAndTop = location.pathname === '/' && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeAndTop
          ? 'bg-transparent'
          : 'bg-[#FAF8F5] shadow-md border-b border-[rgba(74,66,56,0.1)]'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Navbar Height set to h-20 */}
        <div className="grid grid-cols-3 items-center h-20">
          {/* Left side - Actions */}
          <div className="flex items-center gap-2 justify-start">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle search"
              onClick={() => setShowSearch(!showSearch)}
              className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Cart"
              className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="ghost"
                className={`text-sm md:text-base ${isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}`}
              >
                <User className="h-4 w-4 mr-2" /> Login
              </Button>
              <Button
                variant="ghost"
                className={`text-sm md:text-base ${isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}`}
              >
                <UserPlus className="h-4 w-4 mr-2" /> Sign Up
              </Button>
            </div>
          </div>

          {/* Center - Text Logo */}
          <div className="flex justify-center items-center">
            <Link to="/" className="flex items-center justify-center">
              <span
                className={`text-xl sm:text-2xl md:text-3xl font-black tracking-widest uppercase transition-colors duration-300 ${
                  isHomeAndTop ? 'text-white' : 'text-[#6D4C41]'
                }`}
              >
                BECOONA
              </span>
            </Link>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center justify-end gap-6 font-medium text-sm md:text-base">
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
              >
                Blog
              </Link>
              <a
                href="#contact"
                className={isHomeAndTop ? 'text-white' : 'text-[#4A4238]'}
              >
                Contact
              </a>
            </div>

            {/* Mobile - 3 dot / hamburger menu button (right side) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border transition-colors ${
                isHomeAndTop
                  ? 'bg-transparent border-[rgba(255,255,255,0.25)] text-white'
                  : 'bg-[#FAF8F5] border-[rgba(74,66,56,0.2)] text-[#4A4238]'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute left-6 right-6 top-20">
              <div
                className={`rounded-xl border shadow-lg p-4 ${
                  isHomeAndTop
                    ? 'bg-[#FAF8F5] border-[rgba(74,66,56,0.15)]'
                    : 'bg-[#FAF8F5] border-[rgba(74,66,56,0.15)]'
                }`}
              >
                <div className="flex flex-col gap-3 font-medium text-[#4A4238]">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    Blog
                  </Link>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="py-4 border-t border-[#E8D4B8]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#8B7E6F]" />
              <input
                type="text"
                placeholder="Search for cakes, pastries, bread..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FFFEFB] border border-[#E8D4B8] text-[#4A4238] placeholder-[#8B7E6F] focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

