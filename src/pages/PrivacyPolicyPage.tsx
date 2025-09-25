import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, UserCheck, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
            <Shield className="h-8 w-8 text-green-200" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-green-100 text-lg">
            Your privacy is important to us. Learn how RK Packagings protects your personal information.
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

          {/* Introduction */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We, R.K. Packagings, are the owner of the brand and the website https://rkpackagings.com. We respect your privacy, and this Privacy Policy explains how your information is collected, used, and protected when you visit or use our website. By accessing the services provided through the Site, you agree to the collection and use of your information in the manner described in this Policy.
            </p>
          </section>

          {/* Information Collected */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information Collected</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              During the registration process or while using the Site, we may collect certain personally identifiable information, including but not limited to:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Name (first and last)</li>
                <li>Alternate email address</li>
                <li>Mobile number and contact details</li>
                <li>Postal code</li>
                <li>Demographic details (such as age, gender, occupation, education, and address)</li>
                <li>Browsing information (pages visited, links clicked, number of visits, etc.)</li>
              </ul>
            </div>
          </section>

          {/* Use of Information */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <UserCheck className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Use of Information</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use your personal information to:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide personalized features and services on the Site</li>
                <li>Share promotional offers with you through the Site and other channels</li>
                <li>Connect you with our business associates or partners, if needed, to provide requested services</li>
                <li>Maintain transaction history in compliance with law or policy</li>
                <li>Enhance our products and services through research and analysis</li>
                <li>Contact you for surveys, promotions, contests, or customer feedback</li>
                <li>Display promotional and advertising material via platforms such as the Google Ad network</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                <strong>Note:</strong> You may opt out of Google Analytics for Display Advertising and customize your ad preferences using the Ads Preferences Manager.
              </p>
            </div>
          </section>

          {/* Sharing of Information */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Sharing of Information</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not rent, sell, or disclose your financial or personal information to third parties, except in the following cases:
            </p>
            
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Service Provision:</strong> When necessary to provide the products or services you request
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Aggregate Basis:</strong> When shared on an aggregate basis (without identifying you individually) with partners for research, product development, or marketing purposes
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded-r-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Legal Requirements:</strong> When required by law, legal authorities, or enforcement agencies to comply with subpoenas, court orders, or investigations
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Protection:</strong> To protect against fraud, security threats, or violations of the Site's terms of use
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Secure SSL encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal information</li>
                <li>Secure storage and backup systems</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Access & Update</h4>
                  <p className="text-sm text-gray-600">
                    Request access to your personal information and update inaccurate data.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Data Portability</h4>
                  <p className="text-sm text-gray-600">
                    Request a copy of your data in a commonly used format.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Marketing Opt-out</h4>
                  <p className="text-sm text-gray-600">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Data Deletion</h4>
                  <p className="text-sm text-gray-600">
                    Request deletion of your personal information (subject to legal requirements).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
            </p>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded">
              <strong>Cookie Types:</strong> Essential cookies, Analytics cookies, Preference cookies
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> <a href="mailto:rkpackagings1@gmail.com" className="text-green-600 hover:text-green-700">rkpackagings1@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917042006430" className="text-green-600 hover:text-green-700">7042006430</a></p>
                <p><strong>Address:</strong> H.No. 59 Vijay Park, Gurugram(HR) – 122001</p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon being posted on the Site.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed">
                All information on the Site is provided on an "as is" and "as available" basis. While every effort is made to ensure accuracy and completeness, we, R.K. Packagings, make no representations, warranties, or guarantees regarding the authenticity or reliability of the information provided.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions or concerns about this Privacy Policy or our data practices, please contact us using the information provided in our Contact section. We are committed to addressing your privacy concerns promptly and effectively.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
