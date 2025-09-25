import { useState, useEffect } from 'react';
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
  Star,
  ChevronLeft,
  ChevronRight,
  Cookie,
  Apple,
  Cake,
  Circle,
  Pizza,
  Coffee,
  Heart,
  Gift
} from 'lucide-react';

const HomePage = () => {
  const { getProductsByCategory } = useFirestoreProducts();
  const customizedBoxesProducts = getProductsByCategory('customized-boxes');
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Demo banners data
  const banners = [
    {
      id: 1,
      title: "Har packaging ka ek hi solution",
      subtitle: "RK Packagings",
      description: "Trusted Packaging Solutions Serving bakeries and food businesses with care for generations. Our promise to meet your needs fully, deliver on time, and honor the bond we build — because to us, you are family, not just a client.",
      image: "/hero_banner.jpg",
      buttonText: "Order Now"
    },
    {
      id: 2,
      title: "Har packaging ka ek hi solution",
      subtitle: "RK Packagings",
      description: "Trusted Packaging Solutions Serving bakeries and food businesses with care for generations. Our promise to meet your needs fully, deliver on time, and honor the bond we build — because to us, you are family, not just a client.",
      image: "/p1.jpg",
      buttonText: "Explore Products"
    },
    {
      id: 3,
      title: "Har packaging ka ek hi solution",
      subtitle: "RK Packagings",
      description: "Trusted Packaging Solutions Serving bakeries and food businesses with care for generations. Our promise to meet your needs fully, deliver on time, and honor the bond we build — because to us, you are family, not just a client.",
      image: "/p3.jpg",
      buttonText: "Get Quote"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === banners.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [banners.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      Package,
      Recycle,
      Utensils,
      Leaf,
      ShoppingBag,
      ChefHat,
      Cookie,    // For Sweet Boxes
      Apple,     // For Dry Fruit Boxes
      Cake,      // For Cake Boxes
      Circle,    // For Cake Base
      Coffee,    // For Pastry Boxes
      Heart,     // For Cup Cake Boxes
      Pizza,     // For Pizza Boxes
      Gift       // For Snacks and Other Boxes
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
    },
    {
      name: 'Sunita Agarwal',
      role: 'Owner, Agarwal Sweets',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: 'Amazing quality packaging boxes! My customers always appreciate the beautiful presentation. RK Packagings never disappoints.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Chef, Royal Kitchen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      quote: 'Professional service and timely delivery. The pizza boxes are perfect for our restaurant. Excellent customer care!',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      role: 'Home Baker',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      quote: 'Started my home bakery with RK Packagings boxes. Such good quality at affordable prices. They helped my business grow!',
      rating: 4
    },
    {
      name: 'Ramesh Patel',
      role: 'Owner, Patel Dry Fruits',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: 'Best packaging solutions in the city! Dry fruit boxes are so sturdy and attractive. My sales increased after using these.',
      rating: 5
    },
    {
      name: 'Kavita Reddy',
      role: 'Confectioner, Sweet Dreams',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
      quote: 'Outstanding quality control and beautiful designs. My chocolate boxes look so premium now. Highly satisfied with service!',
      rating: 5
    },
    {
      name: 'Arjun Malhotra',
      role: 'Manager, Food Express',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
      quote: 'Bulk orders handled perfectly every time. Great prices for restaurants. Fast delivery and excellent packaging quality.',
      rating: 4
    },
    {
      name: 'Deepika Gupta',
      role: 'Baker, Gupta Cake House',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      quote: 'Cake boxes are perfect! Strong, beautiful and affordable. My customers love the presentation. Thank you RK Packagings!',
      rating: 5
    }
  ];

  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const reviewsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / reviewsPerSlide);

  // Auto-slide for testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prevSlide) => 
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(testimonialInterval);
  }, [totalSlides]);

  // Navigation functions for testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial(currentTestimonial === totalSlides - 1 ? 0 : currentTestimonial + 1);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(currentTestimonial === 0 ? totalSlides - 1 : currentTestimonial - 1);
  };

  const goToTestimonialSlide = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div>
      {/* Hero Carousel Banner */}
      <section className="relative h-screen overflow-hidden">
        {/* Carousel Container */}
        <div className="relative h-full">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-4xl">
                    {/* Main Tagline in Stylish Font */}
                    <div className="mb-8">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 leading-tight tracking-wide">
                        <span className="font-serif italic text-white drop-shadow-2xl">
                          {banner.title}
                        </span>
                      </h1>
                      <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-green-400 drop-shadow-2xl tracking-wider transform hover:scale-105 transition-transform duration-300">
                        <span className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 bg-clip-text text-transparent">
                          {banner.subtitle}
                        </span>
                      </h2>
                    </div>
                    
                    {/* Professional Description */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8 border-l-4 border-green-400">
                      <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium max-w-3xl">
                        <span className="text-green-300 font-bold text-xl block mb-2">
                          Trusted Packaging Solutions
                        </span>
                        {banner.description.split('Trusted Packaging Solutions ')[1]}
                      </p>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-600/50 transform hover:-translate-y-2 hover:scale-105 border-2 border-green-400"
                    >
                      {banner.buttonText}
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronRight className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-green-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
          <span className="text-white font-medium">
            {currentSlide + 1} / {banners.length}
          </span>
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
              Discover our wide range of complete packaging solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories
              .filter(category => category.id !== 'miscellaneous-items' && category.id !== 'customized-boxes')
              .map((category) => {
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

      {/* Customized Products Ranges Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customized Products Ranges Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored packaging solutions designed specifically for your business needs
            </p>
          </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizedBoxesProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="flex-grow">
                    <div className="mb-3">
                      <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === product.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors min-h-[3.5rem] flex items-start">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-green-600 flex items-center">
                      <span className="text-green-600 mr-1">₹</span>
                      {product.price}
                    </span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium whitespace-nowrap">
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
              Why Choose RK Packagings?
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
      <section className="py-12 bg-green-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by chefs and restaurant owners across the country
            </p>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                      {testimonials
                        .slice(slideIndex * reviewsPerSlide, (slideIndex + 1) * reviewsPerSlide)
                        .map((testimonial, index) => (
                          <div
                            key={slideIndex * reviewsPerSlide + index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full min-h-[320px] max-h-[360px]"
                          >
                            {/* Star Rating */}
                            <div className="flex items-center justify-center space-x-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                              ))}
                              {[...Array(5 - testimonial.rating)].map((_, i) => (
                                <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                              ))}
                            </div>
                            
                            {/* Quote - Compact container */}
                            <div className="mb-6 flex-grow flex flex-col justify-center">
                              <div className="text-4xl text-green-200 leading-none mb-2 text-center">"</div>
                              <p className="text-gray-700 text-base leading-relaxed text-center px-2 flex-grow flex items-center justify-center min-h-[80px]">
                                {testimonial.quote}
                              </p>
                              <div className="text-4xl text-green-200 leading-none text-center mt-2">"</div>
                            </div>
                            
                            {/* Customer Info - Compact bottom section */}
                            <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100 mt-auto">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-3 border-green-100 shadow-md"
                                onError={(e) => {
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80';
                                }}
                              />
                              <div className="text-center">
                                <h4 className="font-bold text-gray-900 text-base">
                                  {testimonial.name}
                                </h4>
                                <p className="text-green-600 font-medium text-sm">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                          </div>
                      ))}
                      {/* Add placeholder if only one review in the slide */}
                      {testimonials.slice(slideIndex * reviewsPerSlide, (slideIndex + 1) * reviewsPerSlide).length === 1 && (
                        <div className="hidden md:block"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-50 shadow-lg rounded-full p-3 transition-all duration-300 group z-10"
            >
              <ChevronLeft className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-50 shadow-lg rounded-full p-3 transition-all duration-300 group z-10"
            >
              <ChevronRight className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonialSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-green-600 scale-125'
                      : 'bg-gray-300 hover:bg-green-400'
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow">
                {currentTestimonial + 1} / {totalSlides}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Achievements & Network
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Serving customers across India with excellence, quality, and commitment to packaging solutions
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PAN India Delivery */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2">PAN India</div>
              <div className="text-green-200 text-lg font-medium mb-2">Delivery Network</div>
              <p className="text-green-100 text-sm">
                Nationwide coverage with reliable logistics partners
              </p>
            </div>

            {/* Customer Base */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-green-200 text-lg font-medium mb-2">Happy Customers</div>
              <p className="text-green-100 text-sm">
                Trusted by bakeries, restaurants & food businesses
              </p>
            </div>

            {/* Years of Experience */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-green-200 text-lg font-medium mb-2">Years Experience</div>
              <p className="text-green-100 text-sm">
                Decades of expertise in packaging solutions
              </p>
            </div>

            {/* Product Range */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-200 text-lg font-medium mb-2">Product Varieties</div>
              <p className="text-green-100 text-sm">
                Complete range of customized packaging solutions
              </p>
            </div>
          </div>

          {/* Achievements Banner */}
          <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🏆 Quality Excellence</div>
                <p className="text-green-100 text-sm">ISO certified manufacturing processes</p>
              </div>
              <div className="text-center border-l border-r border-white/30 md:px-6">
                <div className="text-2xl font-bold text-white mb-2">🌟 Customer Choice</div>
                <p className="text-green-100 text-sm">Preferred packaging partner nationwide</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🚚 On-Time Delivery</div>
                <p className="text-green-100 text-sm">99% delivery success rate across India</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Join Our Success Story
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;