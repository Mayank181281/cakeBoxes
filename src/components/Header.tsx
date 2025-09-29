import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/logo.png" 
                alt="RK Packagings Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">RK Packagings</h1>
              <p className="text-xs text-green-600">Complete Packaging Solutions</p>
            </div>
          </Link>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-20">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors">
                Categories
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact Us
            </Link>
            <Link to="/enquiry" className="text-gray-700 hover:text-green-600 transition-colors">
              Enquiry
            </Link>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          {/* <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div> */}

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/917042006430"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487a8.25 8.25 0 1 0-3.375 3.375l2.813.938a.75.75 0 0 0 .938-.938l-.938-2.813z" />
              </svg>
              <span>WhatsApp Now</span>
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="md:hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About Us
              </Link>
              <div>
                <p className="text-gray-700 font-medium mb-2">Categories</p>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact Us
              </Link>
              <Link to="/enquiry" className="text-gray-700 hover:text-green-600 transition-colors">
                Enquiry
              </Link>
              <a
                href="https://wa.me/917042006430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487a8.25 8.25 0 1 0-3.375 3.375l2.813.938a.75.75 0 0 0 .938-.938l-.938-2.813z" />
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;