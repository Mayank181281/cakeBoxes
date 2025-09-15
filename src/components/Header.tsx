import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data/products';
import { Search, Menu, X, ShoppingBag, User, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EcoPackage</h1>
              <p className="text-xs text-green-600">Sustainable Packaging Solutions</p>
            </div>
          </Link>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
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
            {/* <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact Us
            </Link>
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Distributor
            </Link> */}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* <button className="hidden md:block p-2 text-gray-600 hover:text-green-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
             */}
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
              <div>
                <p className="text-gray-700 font-medium mb-2">Products</p>
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
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                About Us
              </Link>
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact Us
              </Link>
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Distributor
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;