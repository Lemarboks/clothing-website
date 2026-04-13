'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '../types';
import { useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addToCart(product, selectedSize, selectedColor);
    alert('Added to cart!');
  };

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="dark-card overflow-hidden hover:neon-border transition-all duration-300 cursor-pointer">
      <div className="h-48 bg-gray-800 flex items-center justify-center border-b border-gray-600 overflow-hidden">
        <img
          src={product.images[selectedColor]}
          alt={product.name}
          className="w-full h-full object-cover transform scale-[1.05] hover:scale-[1.1] transition-transform duration-300"
        />
      </div>

      {/* Color Selection Panel */}
      <div className="px-6 py-3 bg-gray-700 border-b border-gray-600">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm font-semibold text-white mr-2">Color:</span>
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedColor(color);
              }}
              className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
                selectedColor === color
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 street-shadow">{product.name}</h3>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-orange-400 mb-4">R{product.price}</p>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-2">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:border-orange-400 focus:outline-none"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size} className="bg-gray-700">
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-white mb-2">Color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:border-orange-400 focus:outline-none"
          >
            {product.colors.map((color) => (
              <option key={color} value={color} className="bg-gray-700">
                {color}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-orange-500 text-black font-bold py-3 px-4 rounded hover:bg-orange-400 transition-colors street-shadow"
        >
          Add to Cart
        </button>
      </div>
    </div>
    </Link>
  );
}