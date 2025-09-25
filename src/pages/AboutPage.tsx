import { Award, Heart, Users, Target, Clock, Handshake } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About RK Packagings</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Three decades of innovation, dedication, and unwavering commitment to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 p-4 rounded-full">
              <Clock className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Journey Since 1995</h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Since 1995, we have been dedicated to solving the unique challenges faced by sweet shops and bakeries. 
              From the beginning, our mission has been clear: to innovate and create customized packaging solutions 
              tailored to the specific needs of our customers.
            </p>
            
            <p className="text-lg mb-6">
              Over 30 years, we have poured our blood and sweat into this business, treating it like our own child. 
              Our focus on customer satisfaction and lasting relationships has guided every step we take. We don't 
              just see our clients as customers but as family, offering guidance and building trust.
            </p>
            
            <p className="text-lg mb-6">
              With a keen eye on minute details and the latest industry trends, we have grown alongside the bakery 
              and sweets industry, constantly evolving with the times. We pride ourselves on excellent customer 
              relationships and treat our employees as family, maintaining lifelong bonds with them.
            </p>
            
            <p className="text-lg">
              Our commitment is a long-term one, believing in building enduring partnerships based on quality, 
              care, and mutual respect.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Family-First Approach</h3>
            <p className="text-gray-600">
              We treat our customers and employees as family, building lifelong relationships based on trust and care.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Solutions</h3>
            <p className="text-gray-600">
              Every packaging solution is tailored to meet the unique challenges and needs of your business.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">30+ Years of Excellence</h3>
            <p className="text-gray-600">
              Three decades of experience in the packaging industry, constantly evolving with the latest trends.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-Centric</h3>
            <p className="text-gray-600">
              Customer satisfaction is our top priority, guiding every decision and action we take.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Partnerships</h3>
            <p className="text-gray-600">
              We believe in building enduring partnerships based on quality, care, and mutual respect.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Evolution</h3>
            <p className="text-gray-600">
              Constantly evolving with industry trends while maintaining attention to minute details.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers and experience the difference that 30+ years of dedication makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/enquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
