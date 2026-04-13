'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '../../data/products';
import { useCart } from '../../components/CartContext';
import Image from 'next/image';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === params.id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Product not found</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <div className="aspect-square relative">
              <img
                src={product.images[selectedColor]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 street-shadow">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-orange-400">R{product.price}</p>
            </div>

            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-lg font-semibold text-white mb-3">
                Color: {selectedColor}
              </label>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? 'border-orange-400 bg-orange-400 text-black font-semibold'
                        : 'border-gray-600 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-lg font-semibold text-white mb-3">
                Size: {selectedSize}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-orange-400 bg-orange-400 text-black font-semibold'
                        : 'border-gray-600 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Add to Cart - R{product.price}
              </button>
            </div>

            {/* Size Guide */}
            <div className="border-t border-gray-700 pt-6">
              <h2 className="text-xl font-bold text-white mb-4">Size Guide</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-3 font-semibold text-white">Size</th>
                      <th className="text-left py-3 px-3 font-semibold text-white">Bust (cm)</th>
                      <th className="text-left py-3 px-3 font-semibold text-white">Height (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-3 font-semibold text-orange-400">S</td>
                      <td className="py-3 px-3">90-95</td>
                      <td className="py-3 px-3">170-175</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-3 font-semibold text-orange-400">M</td>
                      <td className="py-3 px-3">100-105</td>
                      <td className="py-3 px-3">180-185</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-3 font-semibold text-orange-400">L</td>
                      <td className="py-3 px-3">110-115</td>
                      <td className="py-3 px-3">185-190</td>
                    </tr>
                    <tr className="hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-3 font-semibold text-orange-400">XL</td>
                      <td className="py-3 px-3">120-125</td>
                      <td className="py-3 px-3">190-195</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Info */}
            <div className="border-t border-gray-700 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <span className="font-semibold text-white">Gender:</span> {product.gender}
                </div>
                <div>
                  <span className="font-semibold text-white">ID:</span> {product.id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}