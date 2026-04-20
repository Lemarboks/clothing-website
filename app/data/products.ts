import { Product } from '../types';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const asset = (path: string) => `${basePath}${path}`;

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    price: 29.99,
    images: {
      White: asset('/white-tee.jpg'),
      Black: asset('/black-tee.jpg'),
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
      Navy: asset('/shared-jacket.jpg'),
      Black: asset('/retro-black-2.jpg'),
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
      Gray: asset('/retro-navy.jpg'),
      Black: asset('/retro-black.jpg'),
      Navy: asset('/retro-track-jacket.jpg'),
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
      Pink: asset('/retro-jacket-alt.jpg'),
      White: asset('/white-tee.jpg'),
      Black: asset('/black-tee.jpg'),
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
      Gray: asset('/retro-black.jpg'),
      Black: asset('/retro-black-2.jpg'),
      Navy: asset('/retro-track-jacket.jpg'),
    },
    description: 'Comfortable hoodie for casual wear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
    gender: 'men',
  },
];