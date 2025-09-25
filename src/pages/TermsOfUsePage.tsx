import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, CheckCircle, Scale } from 'lucide-react';

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-green-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <Scale className="h-8 w-8 text-green-200" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Use</h1>
          </div>
          <p className="text-green-100 text-lg">
            Please read these terms carefully before using RK Packagings services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="text-sm text-green-700">
              <strong>Last Updated:</strong> December 25, 2024
            </p>
          </div>

          {/* General Disclaimer */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">General Disclaimer</h2>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                While we endeavour to keep the information on this website up to date and correct, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In no event shall the Company be liable for any loss or damage, including without limitation indirect or consequential loss or damage, or any loss or damage whatsoever, arising out of or in connection with the use of this website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through this website, you may link to other websites that are not under the control of R.K. Packagings. We have no control over the nature, content, and availability of such external sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every effort is made to keep the website up and running smoothly. However, R.K. Packagings takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              </p>
            </div>
          </section>

          {/* Privacy Policy & Cookies */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy & Cookies</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We, R.K. Packagings, are the owner of the website https://rkpackagings.com and primarily deal in providing our products and services through this online portal.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              As part of the registration process on our website, we may collect personal information such as:
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Full name (first and last)</li>
                <li>Email address (for correspondence)</li>
                <li>Contact details</li>
                <li>Postal code</li>
                <li>Demographic profile information</li>
                <li>Browsing data, including pages visited, links clicked, and frequency of visits</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 text-sm">
                For full details, please refer to our <Link to="/privacy-policy" className="underline font-semibold">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          {/* Access Denied for Minors */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Access Denied for Minors</h2>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                If you are under the age of 18 years but at least 13 years of age, you may use the Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. Parents or legal guardians may transact on behalf of minors if they are registered users.
              </p>
              <p className="text-red-700 font-medium">
                You are strictly prohibited from purchasing any material intended for adult consumption, and the sale of such products to minors is expressly forbidden.
              </p>
            </div>
          </section>

          {/* Website Access */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Access</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable sub-license to access and make personal use of this website. You are not permitted to download, modify, reproduce, duplicate, copy, resell, or otherwise exploit any portion of the website without our express written consent.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-800 mb-2">This license does not permit:</h3>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Resale or commercial use of this website or its content</li>
                  <li>Collection and use of product listings, descriptions, or prices</li>
                  <li>Use of data mining, robots, or similar extraction tools</li>
                  <li>Copying of account information for another merchant's benefit</li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                You may not frame or use framing techniques to enclose any trademark, logo, or other proprietary information without express written consent.
              </p>
            </div>
          </section>

          {/* Product Pricing & Promotional Offers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Pricing & Promotional Offers</h2>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                All products listed on the Site will be sold at MRP unless otherwise specified. The prices applicable at the time of placing the order will be the prices charged at the time of delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While prices of most products remain stable, some commodities may fluctuate daily. If prices are higher or lower on the date of delivery, no additional charges will be collected or refunded.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 mb-4">
                For questions about these Terms or our Services, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> <a href="mailto:rkpackagings1@gmail.com" className="text-green-600 hover:text-green-700">rkpackagings1@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917042006430" className="text-green-600 hover:text-green-700">7042006430</a></p>
                <p><strong>Office Address:</strong> H.No. 59 Vijay Park, Gurugram(HR) – 122001</p>
                <p><strong>Work Address:</strong> Plot No. 787, Daultabad Industrial Area, Gurugram(HR) 122006</p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify these Terms from time to time. We will notify you of any material changes by email or by posting a notice on our website. Your continued use of our Services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
