import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    price: 29.99,
    images: {
      'White': '/white-tee.jpg',
      'Black': '/black-tee.jpg',
    
    },
    description: 'Comfortable cotton t-shirt perfect for everyday wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Blue', 'Red'],
    gender: 'unisex',
  },
  {
    id: '2',
    name: 'Retro Track Jacket',
    price: 89.99,
    images: {
      'Navy': '/shared-jacket.jpg',
      'Black': '/retro-black-2.jpg'
    },
    description: 'Stylish retro track jacket with a timeless design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black'],
    gender: 'unisex',
  },
  {
    id: '3',
    name: 'Running Shorts',
    price: 39.99,
    images: {
      'Gray': '/placeholder-shorts.jpg',
      'Black': '/placeholder-shorts.jpg',
      'Navy': '/placeholder-shorts.jpg'
    },
    description: 'Lightweight shorts ideal for running and workouts.',
    sizes: ['S', 'M', 'L'],
    colors: ['Gray', 'Black', 'Navy'],
    gender: 'unisex',
  },
  {
    id: '4',
    name: 'Women\'s Crop Top',
    price: 24.99,
    images: {
      'Pink': '/placeholder-crop.jpg',
      'White': '/placeholder-crop.jpg',
      'Black': '/placeholder-crop.jpg'
    },
    description: 'Trendy crop top for a stylish look.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pink', 'White', 'Black'],
    gender: 'women',
  },
  {
    id: '5',
    name: 'Men\'s Hoodie',
    price: 59.99,
    images: {
      'Gray': '/placeholder-hoodie.jpg',
      'Black': '/placeholder-hoodie.jpg',
      'Navy': '/placeholder-hoodie.jpg'
    },
    description: 'Comfortable hoodie for casual wear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
    gender: 'men',
  },
  // Add more products as needed
];