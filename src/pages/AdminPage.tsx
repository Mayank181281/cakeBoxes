import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product, categories } from "../data/products";
import { Plus, Edit, Trash2, Save, Loader, LogOut, X } from "lucide-react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { uploadImageToCloudinary } from "../utils/cloudinary";
import { ADMIN_AUTH_KEY } from "../config/adminConfig";

interface ProductForm {
  name: string;
  price: string;
  size: string;
  category: string;
  description: string;
  selectedFiles: File[];
  imageUrl: string;
  mainImageUrl: string;
  otherImageUrls: string[];
}

const AdminPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    price: "",
    size: "",
    category: "pizza-boxes",
    description: "",
    selectedFiles: [],
    imageUrl: "",
    mainImageUrl: "",
    otherImageUrls: [],
  });

  // Fetch products from Firestore
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(productsData);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      size: "",
      category: "pizza-boxes",
      description: "",
      selectedFiles: [],
      imageUrl: "",
      mainImageUrl: "",
      otherImageUrls: [],
    });
    setError("");
    setSuccess("");
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    navigate("/admin-login");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const maxImages = 5;

      if (fileArray.length > maxImages) {
        setError(
          `Maximum ${maxImages} images allowed. Only the first ${maxImages} images will be selected.`
        );
        const limitedFiles = fileArray.slice(0, maxImages);
        setFormData((prev) => ({
          ...prev,
          selectedFiles: [...prev.selectedFiles, ...limitedFiles],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          selectedFiles: [...prev.selectedFiles, ...fileArray],
        }));
      }

      // Clear the input value to allow re-selecting the same files
      e.target.value = "";
    }
  };

  const removeSelectedImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedFiles: prev.selectedFiles.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const removeMainImage = () => {
    if (window.confirm("Are you sure you want to remove the main image?")) {
      setFormData((prev) => ({
        ...prev,
        mainImageUrl: "",
        imageUrl: "",
      }));
    }
  };

  const removeOtherImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      otherImageUrls: prev.otherImageUrls.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const uploadMultipleImages = async (
    files: File[]
  ): Promise<{ mainImageUrl: string; otherImageUrls: string[] }> => {
    if (files.length === 0) {
      throw new Error("No files to upload");
    }

    const uploadPromises = files.map((file) => uploadImageToCloudinary(file));
    const uploadedUrls = await Promise.all(uploadPromises);

    return {
      mainImageUrl: uploadedUrls[0],
      otherImageUrls: uploadedUrls.slice(1),
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.price.trim() ||
      !formData.size
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // Check if there are any images (new uploads or existing images)
    const hasNewImages = formData.selectedFiles.length > 0;
    const hasExistingImages =
      formData.mainImageUrl || formData.otherImageUrls.length > 0;

    if (!hasNewImages && !hasExistingImages) {
      setError("Please select at least one image");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      let mainImageUrl = formData.mainImageUrl || formData.imageUrl;
      let otherImageUrls = formData.otherImageUrls || [];

      // Upload new images if selected
      if (formData.selectedFiles.length > 0) {
        const uploadResult = await uploadMultipleImages(formData.selectedFiles);
        // If new images are uploaded, they replace existing ones completely
        mainImageUrl = uploadResult.mainImageUrl;
        otherImageUrls = uploadResult.otherImageUrls;
      } else if (isEditing) {
        // When editing and no new images, use the current form state (which may have removed images)
        mainImageUrl = formData.mainImageUrl;
        otherImageUrls = formData.otherImageUrls;
      }

      const productData = {
        name: formData.name,
        price: formData.price,
        size: formData.size,
        category: formData.category,
        description: formData.description,
        imageUrl: mainImageUrl, // For backward compatibility
        mainImageUrl: mainImageUrl,
        otherImageUrls: otherImageUrls,
        createdAt: serverTimestamp(),
      };

      if (isEditing) {
        // Update existing product
        await updateDoc(doc(db, "products", isEditing), productData);
        setSuccess("Product updated successfully!");
        setIsEditing(null);
      } else {
        // Add new product
        await addDoc(collection(db, "products"), productData);
        setSuccess("Product added successfully!");
        setIsAdding(false);
      }

      resetForm();
    } catch (error) {
      console.error("Error saving product:", error);
      setError("Failed to save product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price,
      size: product.size,
      category: product.category,
      description: product.description,
      selectedFiles: [],
      imageUrl: product.imageUrl,
      mainImageUrl: product.mainImageUrl || product.imageUrl,
      otherImageUrls: product.otherImageUrls || [],
    });
    setIsEditing(product.id!);
    setIsAdding(false);
    setError("");
    setSuccess("");
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        setSuccess("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        setError("Failed to delete product");
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    resetForm();
  };

  const handleAdd = () => {
    setIsAdding(true);
    setIsEditing(null);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Management
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Product</span>
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Add/Edit Product Form */}
        {(isAdding || isEditing) && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g. ₹100 or $10 or Custom pricing"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size *
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="e.g., 12 inch"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Images * (Max 5 images)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required={!isEditing && formData.selectedFiles.length === 0}
                />

                {/* Selected Images Preview */}
                {formData.selectedFiles.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Selected Images:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {formData.selectedFiles.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index + 1}`}
                            className={`h-24 w-24 object-cover rounded-lg ${
                              index === 0
                                ? "border-4 border-green-500"
                                : "border-2 border-gray-200"
                            }`}
                          />
                          {index === 0 && (
                            <span className="absolute -top-2 -left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Main
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => removeSelectedImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Existing Images (when editing) */}
                {isEditing && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Current Images:
                    </p>
                    {formData.mainImageUrl ||
                    formData.otherImageUrls.length > 0 ? (
                      <>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {formData.mainImageUrl && (
                            <div className="relative">
                              <img
                                src={formData.mainImageUrl}
                                alt="Main image"
                                className="h-24 w-24 object-cover rounded-lg border-4 border-green-500"
                              />
                              <span className="absolute -top-2 -left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                Main
                              </span>
                              <button
                                type="button"
                                onClick={removeMainImage}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                                title="Remove main image"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          )}
                          {formData.otherImageUrls.map((url, index) => (
                            <div key={index} className="relative">
                              <img
                                src={url}
                                alt={`Additional image ${index + 1}`}
                                className="h-24 w-24 object-cover rounded-lg border-2 border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() => removeOtherImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                                title={`Remove image ${index + 1}`}
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Click the <X className="inline h-3 w-3 mx-1" /> button
                          to remove individual images, or select new images
                          above to add more
                        </p>
                      </>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <p className="text-gray-500 text-sm">
                          No images currently. Select images above to add some.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="md:col-span-2 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5" />
                      <span>{isEditing ? "Update" : "Save"} Product</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Products</h2>
          </div>
          <div className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <Loader className="h-8 w-8 animate-spin text-green-600" />
                <span className="ml-2 text-gray-600">Loading products...</span>
              </div>
            ) : products.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No products found. Add your first product!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      {
                        categories.find((cat) => cat.id === product.category)
                          ?.name
                      }{" "}
                      • ₹{product.price} • {product.size}
                    </p>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id!)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
