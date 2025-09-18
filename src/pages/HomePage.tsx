import React from 'react';
import { Link } from 'react-router-dom';
import { useFirestoreProducts } from '../hooks/useFirestoreProducts';
import { categories } from '../data/products';
import { 
  ArrowRight, 
  Package, 
  Recycle, 
  Utensils, 
  Leaf, 
  ShoppingBag, 
  ChefHat,
  DollarSign,
  Truck,
  Shield,
  CreditCard,
  Star
} from 'lucide-react';

const HomePage = () => {
  const { getFeaturedProducts, loading } = useFirestoreProducts();
  const featuredProducts = getFeaturedProducts();

  const getIconComponent = (iconName: string) => {
    const icons = {
      Package,
      Recycle,
      Utensils,
      Leaf,
      ShoppingBag,
      ChefHat
    };
    return icons[iconName as keyof typeof icons] || Package;
  };

  const features = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Competitive wholesale pricing with bulk discounts'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping to keep your business running smoothly'
    },
    {
      icon: Shield,
      title: 'Quality Products',
      description: 'Premium packaging materials that meet industry standards'
    },
    {
      icon: CreditCard,
      title: 'Easy Payments',
      description: 'Flexible payment options and credit terms available'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner, Sweet Corner Mithai Shop',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: 'One stop solution for my business! Best quality boxes for sweets and dry fruits. Very happy with their service.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Baker, Sharma Bakery',
      image: 'https://images.pexels.com/photos/8363787/pexels-photo-8363787.jpeg',
      quote: 'Perfect packaging items for my cake business. Good quality and reasonable prices. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amar Deep',
      role: 'Restaurant Owner, Punjabi Food Corner',
      image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg',
      quote: 'Very reliable for food packaging. Fast delivery and good customer support. All my packaging needs are solved here.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_banner.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Eco-Friendly Food Packaging
              <span className="text-green-600 block">Delivered Fast</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium sustainable packaging solutions for bakeries, restaurants, and food businesses. 
              Quality materials, competitive prices, and reliable delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of sustainable packaging solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = getIconComponent(category.icon);
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-green-400 to-green-600">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-green-600 bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <IconComponent className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and trending packaging solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-green-600 font-medium">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EcoPackage?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best packaging solutions for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by chefs and restaurant owners across the country
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on New Products
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on sustainable packaging solutions and exclusive offers
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex rounded-lg overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-gray-900 focus:outline-none"
              />
              <button className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;