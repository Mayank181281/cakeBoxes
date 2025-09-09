import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product, categories } from '../data/products';
import { Plus, Edit, Trash2, Save, X, Upload, Star } from 'lucide-react';

const AdminPage = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  const initializeForm = (product?: Product) => {
    if (product) {
      setEditForm({
        ...product,
        features: [...product.features],
        specifications: { ...product.specifications },
        images: [...product.images]
      });
    } else {
      setEditForm({
        name: '',
        price: '',
        category: 'paper-products',
        description: '',
        images: [''],
        features: [''],
        specifications: {},
        rating: 4.5,
        reviews: 0,
        featured: false
      });
    }
  };

  const handleEdit = (product: Product) => {
    setIsEditing(product.id);
    setIsAdding(false);
    initializeForm(product);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setIsEditing(null);
    initializeForm();
  };

  const handleSave = () => {
    if (!editForm.name || !editForm.price || !editForm.description) {
      alert('Please fill in all required fields');
      return;
    }

    const productData = {
      ...editForm,
      features: editForm.features?.filter(f => f.trim()) || [],
      images: editForm.images?.filter(img => img.trim()) || [],
      specifications: editForm.specifications || {}
    } as Omit<Product, 'id'>;

    if (isAdding) {
      addProduct(productData);
      setIsAdding(false);
    } else if (isEditing) {
      updateProduct(isEditing, productData);
      setIsEditing(null);
    }

    setEditForm({});
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    setEditForm({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const updateFormField = (field: keyof Product, value: any) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (field: 'features' | 'images', index: number, value: string) => {
    const array = [...(editForm[field] || [])];
    array[index] = value;
    updateFormField(field, array);
  };

  const addArrayItem = (field: 'features' | 'images') => {
    const array = [...(editForm[field] || []), ''];
    updateFormField(field, array);
  };

  const removeArrayItem = (field: 'features' | 'images', index: number) => {
    const array = (editForm[field] || []).filter((_, i) => i !== index);
    updateFormField(field, array);
  };

  const updateSpecification = (key: string, value: string) => {
    const specs = { ...editForm.specifications };
    if (value.trim()) {
      specs[key] = value;
    } else {
      delete specs[key];
    }
    updateFormField('specifications', specs);
  };

  const addSpecification = () => {
    const key = prompt('Enter specification name:');
    if (key && key.trim()) {
      updateSpecification(key.trim(), '');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </button>
          </div>

          {/* Add/Edit Form */}
          {(isAdding || isEditing) && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {isAdding ? 'Add New Product' : 'Edit Product'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={editForm.name || ''}
                    onChange={(e) => updateFormField('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter product name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="text"
                    value={editForm.price || ''}
                    onChange={(e) => updateFormField('price', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="$0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={editForm.category || ''}
                    onChange={(e) => updateFormField('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={editForm.rating || 4.5}
                    onChange={(e) => updateFormField('rating', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reviews Count
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={editForm.reviews || 0}
                    onChange={(e) => updateFormField('reviews', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={editForm.featured || false}
                    onChange={(e) => updateFormField('featured', e.target.checked)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                    Featured Product
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={editForm.description || ''}
                  onChange={(e) => updateFormField('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter product description"
                />
              </div>

              {/* Images */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Images
                </label>
                {(editForm.images || ['']).map((image, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => updateArrayField('images', index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter image URL"
                    />
                    <button
                      onClick={() => removeArrayItem('images', index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem('images')}
                  className="text-green-600 hover:text-green-700 text-sm flex items-center"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Image
                </button>
              </div>

              {/* Features */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features
                </label>
                {(editForm.features || ['']).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateArrayField('features', index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter feature"
                    />
                    <button
                      onClick={() => removeArrayItem('features', index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem('features')}
                  className="text-green-600 hover:text-green-700 text-sm flex items-center"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Feature
                </button>
              </div>

              {/* Specifications */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specifications
                </label>
                {Object.entries(editForm.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={key}
                      readOnly
                      className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => updateSpecification(key, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter specification value"
                    />
                    <button
                      onClick={() => updateSpecification(key, '')}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addSpecification}
                  className="text-green-600 hover:text-green-700 text-sm flex items-center"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Specification
                </button>
              </div>

              <div className="flex justify-end space-x-4 mt-8">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Product
                </button>
              </div>
            </div>
          )}

          {/* Products List */}
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        {product.name}
                        {product.featured && (
                          <Star className="h-4 w-4 text-yellow-400 fill-current ml-2" />
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {categories.find(cat => cat.id === product.category)?.name} • {product.price}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Rating: {product.rating} ({product.reviews} reviews)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found. Add your first product to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;