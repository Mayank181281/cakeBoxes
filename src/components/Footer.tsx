import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Leaf,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RK Packagings</h3>
                <p className="text-sm text-green-400">Complete Packaging Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of innovative packaging solutions tailored for bakeries, sweet shops, and restaurants.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rkpackagings/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category/customized-boxes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Customized Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              {/* Get in Touch - Email Card */}
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <a 
                  href="mailto:rkpackagings1@gmail.com"
                  className="flex items-center justify-between text-white hover:text-green-400 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-700 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Get in Touch</h5>
                      <p className="text-gray-300 text-sm">rkpackagings1@gmail.com</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Call us - Phone Card */}
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <a 
                  href="tel:+917042006430"
                  className="flex items-center justify-between text-white hover:text-green-400 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-700 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Call us</h5>
                      <p className="text-gray-300 text-sm">+91 7042006430</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="flex items-start space-x-3 mt-4">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-gray-400">
                  Office : H.No. 59 Vijay Park, Gurugram(HR) – 122001
                  <br />
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-gray-400">
                  Work : Plot No. 787, Daultabad Industrial Area ,
Gurugram(HR) 122006 
                  <br />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 RK Packagings. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with 💚 by DevTa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
