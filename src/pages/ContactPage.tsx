import { useState } from 'react';
import { Phone, Mail, MapPin, Package, User, Hash, Plus, Trash2 } from 'lucide-react';

interface OrderItem {
  itemName: string;
  quantity: string;
}

interface FormData {
  name: string;
  phone: string;
  items: OrderItem[];
}

interface FormErrors {
  name?: string;
  phone?: string;
  items?: { itemName?: string; quantity?: string }[];
}

const ContactPage = () => {
  // Form state management
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    items: [{ itemName: '', quantity: '' }] // Start with one item
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes for name and phone
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle item changes
  const handleItemChange = (index: number, field: 'itemName' | 'quantity', value: string) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));

    // Clear error when user starts typing
    if (errors.items && errors.items[index] && errors.items[index][field]) {
      setErrors(prev => ({
        ...prev,
        items: prev.items?.map((error, i) => 
          i === index ? { ...error, [field]: '' } : error
        )
      }));
    }
  };

  // Add new item
  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { itemName: '', quantity: '' }]
    }));
  };

  // Remove item
  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Validate items
    const itemErrors: { itemName?: string; quantity?: string }[] = [];
    let hasItemErrors = false;

    formData.items.forEach((item) => {
      const itemError: { itemName?: string; quantity?: string } = {};
      
      if (!item.itemName.trim()) {
        itemError.itemName = 'Item name is required';
        hasItemErrors = true;
      }
      
      if (!item.quantity.trim()) {
        itemError.quantity = 'Quantity is required';
        hasItemErrors = true;
      } else if (isNaN(Number(item.quantity)) || parseInt(item.quantity) <= 0) {
        itemError.quantity = 'Please enter a valid quantity';
        hasItemErrors = true;
      }
      
      itemErrors.push(itemError);
    });

    if (hasItemErrors) {
      newErrors.items = itemErrors;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Google Form configuration
      const formId = '1FAIpQLSfN_SEVZAQsjEF-Cy7gPxkAKdHJ7QHcOUfjw9C5ZPbf9GV3hg';
      const submitUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
      
      // Prepare items data
      const itemsText = formData.items
        .map((item, index) => `${index + 1}. ${item.itemName} - Quantity: ${item.quantity}`)
        .join('\n');
      
      // Entry keys for the Google Form fields
      const googleFormData = new FormData();
      googleFormData.append('entry.2005620554', formData.name);
      googleFormData.append('entry.1166974658', formData.phone);
      googleFormData.append('entry.839337160', itemsText); // Send all items as formatted text
      googleFormData.append('entry.764339826', formData.items.reduce((total, item) => total + parseInt(item.quantity), 0).toString()); // Total quantity
      
      // Submit to Google Forms
      await fetch(submitUrl, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors' // Required for Google Forms
      });
      
      // Show success message
      setIsSubmitted(true);
      setSubmitMessage('Thank you! Your order has been submitted successfully. We will contact you soon.');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        items: [{ itemName: '', quantity: '' }]
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error submitting your order. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us & Place Your Order
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to order? Fill out the form below and we'll redirect you to complete your order through our secure Google Form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                  <a href="tel:+917042006430" className="text-green-600 font-medium hover:text-green-700 transition-colors">7042006430</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:rkpackagings1@gmail.com" className="text-green-600 font-medium hover:text-green-700 transition-colors">rkpackagings1@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    H.No. 59 Vijay Park<br />
                    Gurugram (HR) – 122001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Work Address</h3>
                  <p className="text-gray-600">
                    Plot No. 787, Daultabad Industrial Area<br />
                    Gurugram (HR) 122006
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Place Your Order</h2>
            
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {submitMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitMessage && !isSubmitted && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {submitMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Items Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Items & Quantities *
                  </label>
                  <button
                    type="button"
                    onClick={addItem}
                    className="inline-flex items-center px-3 py-2 border border-green-300 text-sm leading-4 font-medium rounded-md text-green-700 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Item
                  </button>
                </div>

                <div className="space-y-4">
                  {formData.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium text-gray-700">Item {index + 1}</h4>
                        {formData.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Item Name */}
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Item Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Package className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              value={item.itemName}
                              onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                              className={`w-full pl-9 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm ${
                                errors.items?.[index]?.itemName ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="e.g., Cake Boxes, Sweet Boxes"
                            />
                          </div>
                          {errors.items?.[index]?.itemName && (
                            <p className="mt-1 text-xs text-red-600">{errors.items[index].itemName}</p>
                          )}
                        </div>

                        {/* Quantity */}
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Quantity *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Hash className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                              className={`w-full pl-9 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm ${
                                errors.items?.[index]?.quantity ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Enter quantity"
                            />
                          </div>
                          {errors.items?.[index]?.quantity && (
                            <p className="mt-1 text-xs text-red-600">{errors.items[index].quantity}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Order...
                  </span>
                ) : isSubmitted ? (
                  'Order Submitted ✓'
                ) : (
                  'Submit Order'
                )}
              </button>
            </form>

            {/* Submit Another Order Button */}
            {isSubmitted && (
              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitMessage('');
                    setFormData({
                      name: '',
                      phone: '',
                      items: [{ itemName: '', quantity: '' }]
                    });
                  }}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Submit Another Order
                </button>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> Your order details will be submitted directly to our team. We will contact you within 24 hours to confirm your order and provide pricing details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
