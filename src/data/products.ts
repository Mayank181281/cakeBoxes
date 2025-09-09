export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
  rating: number;
  reviews: number;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'paper-products',
    name: 'Paper Products',
    description: 'Sustainable paper-based packaging solutions for all your food service needs',
    icon: 'Package',
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'reusable-plastics',
    name: 'Reusable Plastics',
    description: 'Durable plastic containers perfect for multiple uses',
    icon: 'Recycle',
    image: 'https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'kitchen-utilities',
    name: 'Kitchen Utilities',
    description: 'Essential kitchen tools and utensils for food service',
    icon: 'Utensils',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'eco-friendly',
    name: 'Eco-Friendly',
    description: 'Completely biodegradable and compostable packaging options',
    icon: 'Leaf',
    image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'carry-bags',
    name: 'Carry Bags',
    description: 'Strong and reliable bags for takeout and delivery',
    icon: 'ShoppingBag',
    image: 'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'bakery-supplies',
    name: 'Bakery Supplies',
    description: 'Specialized packaging for bakeries and pastry shops',
    icon: 'ChefHat',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const defaultProducts: Product[] = [
  {
    id: 'clamshell-box-large',
    name: 'Large Clamshell Box',
    price: '$24.99',
    category: 'paper-products',
    images: [
      'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium large clamshell boxes perfect for takeout meals, salads, and larger food portions. Made from sustainable materials with excellent insulation properties.',
    features: [
      'Eco-friendly kraft paper construction',
      'Grease and moisture resistant',
      'Microwave safe up to 2 minutes',
      'Dimensions: 9" x 9" x 3"',
      'Pack of 50 units',
      'Compostable and biodegradable'
    ],
    specifications: {
      'Material': 'Kraft Paper with PE Coating',
      'Color': 'Natural Brown',
      'Size': '9" x 9" x 3"',
      'Pack Size': '50 units',
      'Weight': '2.5 lbs',
      'Temperature Range': '-10°F to 220°F'
    },
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: 'bagasse-bowl-set',
    name: 'Bagasse Bowl Set',
    price: '$18.50',
    category: 'eco-friendly',
    images: [
      'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Made from 100% bagasse (sugarcane fiber), these bowls are completely compostable and perfect for hot and cold foods.',
    features: [
      '100% bagasse construction',
      'Fully compostable within 90 days',
      'Heat resistant up to 200°F',
      'Oil and water resistant',
      'Various sizes included',
      'FDA approved for food contact'
    ],
    specifications: {
      'Material': '100% Bagasse Fiber',
      'Color': 'Natural White',
      'Sizes': '12oz, 16oz, 24oz',
      'Pack Size': '25 each size',
      'Weight': '3.2 lbs',
      'Compost Time': '60-90 days'
    },
    rating: 4.9,
    reviews: 89,
    featured: true
  },
  {
    id: 'compostable-plates',
    name: 'Compostable Plates',
    price: '$15.99',
    category: 'kitchen-utilities',
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Sturdy compostable plates made from plant-based materials, perfect for any dining occasion.',
    features: [
      'Made from renewable plant fibers',
      'Cut and leak resistant',
      'Microwave and freezer safe',
      '9-inch diameter',
      'Pack of 100 plates',
      'Home compostable'
    ],
    specifications: {
      'Material': 'Plant Fiber Composite',
      'Color': 'Natural White',
      'Size': '9 inch diameter',
      'Pack Size': '100 units',
      'Weight': '4.2 lbs',
      'Thickness': '0.8mm'
    },
    rating: 4.6,
    reviews: 156,
    featured: true
  },
  {
    id: 'kraft-paper-bags',
    name: 'Kraft Paper Bags',
    price: '$12.75',
    category: 'carry-bags',
    images: [
      'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Strong kraft paper bags with handles, perfect for takeout orders and retail packaging.',
    features: [
      'Reinforced paper handles',
      'Grease resistant coating',
      'Various sizes available',
      'Recyclable and biodegradable',
      'Custom printing available',
      'Food grade materials'
    ],
    specifications: {
      'Material': '70gsm Kraft Paper',
      'Color': 'Natural Brown',
      'Sizes': 'Small, Medium, Large',
      'Pack Size': '250 units',
      'Weight': '3.8 lbs',
      'Handle Type': 'Twisted Paper'
    },
    rating: 4.7,
    reviews: 203,
    featured: true
  },
  {
    id: 'cake-boxes-10inch',
    name: '10" Cake Boxes',
    price: '$28.99',
    category: 'bakery-supplies',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional cake boxes with clear windows, perfect for displaying and transporting cakes safely.',
    features: [
      'Clear acetate window',
      'Easy assembly design',
      'Grease resistant interior',
      '10x10x5 inch dimensions',
      'Pack of 25 boxes',
      'Professional appearance'
    ],
    specifications: {
      'Material': 'Food Grade Cardboard',
      'Color': 'White with Clear Window',
      'Size': '10" x 10" x 5"',
      'Pack Size': '25 units',
      'Weight': '5.1 lbs',
      'Window Type': 'Clear Acetate'
    },
    rating: 4.8,
    reviews: 87,
    featured: false
  },
  {
    id: 'bamboo-plates',
    name: 'Bamboo Fiber Plates',
    price: '$18.25',
    category: 'eco-friendly',
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Strong, lightweight bamboo plates that are completely biodegradable and stylish.',
    features: [
      '100% bamboo fiber construction',
      'Lightweight yet durable',
      'Natural antibacterial properties',
      'Heat resistant up to 180°F',
      'Various sizes available',
      'Biodegradable within 6 months'
    ],
    specifications: {
      'Material': '100% Bamboo Fiber',
      'Color': 'Natural Beige',
      'Sizes': '7", 9", 10" diameter',
      'Pack Size': '50 mixed sizes',
      'Weight': '2.8 lbs',
      'Thickness': '1.2mm'
    },
    rating: 4.5,
    reviews: 134,
    featured: false
  }
];