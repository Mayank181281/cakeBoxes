import { useParams, Link } from 'react-router-dom';
import { useFirestoreProducts } from '../hooks/useFirestoreProducts';
import { categories } from '../data/products';
import { ArrowLeft } from 'lucide-react';
import { sortProductsByDimensions } from '../utils/productSorting';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { getProductsByCategory } = useFirestoreProducts();

  const category = categories.find(cat => cat.id === categoryId);
  const rawProducts = getProductsByCategory(categoryId || '');

  // Sort products by dimensions (smaller to larger)
  const products = sortProductsByDimensions(rawProducts);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-4">
            <Link
              to="/"
              className="flex items-center text-green-600 hover:text-green-700 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors min-h-[3.5rem] flex items-start">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[4rem] flex items-start">
                    {product.description}
                  </p>
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
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;