'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '../../types';
import { useCart } from '../../components/CartContext';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    alert('Added to cart!');
  };

  return (
    <div className="editorial-grid min-h-screen text-[#f3efe5]">
      <div className="border-b border-[#f3efe5]/15 bg-[#080808]/75">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="kicker transition-colors hover:text-[#f3efe5]"
          >
            Back
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="clip-frame rotate-[-1.5deg] overflow-hidden">
            <div className="relative aspect-square bg-[#080808]">
              <span className="issue-label absolute left-3 top-3 z-10">Product file {product.id}</span>
              <img
                src={product.images[selectedColor]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="kicker mb-3">Mzansi x LDN / {product.gender}</p>
              <h1 className="section-title street-shadow mb-3">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-[#ffcd00]">R{product.price}</p>
            </div>

            <div>
              <p className="border-l-4 border-[#e34c38] pl-4 text-lg leading-relaxed text-[#f3efe5]/72">
                {product.description}
              </p>
            </div>

            <div>
              <label className="mb-3 block text-lg font-black uppercase text-[#f3efe5]">
                Color: {selectedColor}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border px-4 py-2 text-sm font-black uppercase tracking-[0.08em] transition-all ${
                      selectedColor === color
                        ? 'border-[#d8ff3f] bg-[#d8ff3f] text-[#080808]'
                        : 'border-[#f3efe5]/25 text-[#f3efe5]/75 hover:border-[#f3efe5]/70'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-lg font-black uppercase text-[#f3efe5]">
                Size: {selectedSize}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 text-sm font-black uppercase tracking-[0.08em] transition-all ${
                      selectedSize === size
                        ? 'border-[#d8ff3f] bg-[#d8ff3f] text-[#080808]'
                        : 'border-[#f3efe5]/25 text-[#f3efe5]/75 hover:border-[#f3efe5]/70'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleAddToCart}
                className="archive-button w-full justify-center py-4 text-lg"
              >
                Add to Cart - R{product.price}
              </button>
            </div>

            <div className="border-t border-[#f3efe5]/15 pt-6">
              <h2 className="mb-4 text-xl font-black uppercase text-[#f3efe5]">Size Guide</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-[#f3efe5]/72">
                  <thead>
                    <tr className="border-b border-[#f3efe5]/20">
                      <th className="px-3 py-3 text-left font-black text-[#f3efe5]">Size</th>
                      <th className="px-3 py-3 text-left font-black text-[#f3efe5]">Bust (cm)</th>
                      <th className="px-3 py-3 text-left font-black text-[#f3efe5]">Height (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#f3efe5]/10 transition-colors hover:bg-[#f3efe5]/5">
                      <td className="px-3 py-3 font-black text-[#ffcd00]">S</td>
                      <td className="px-3 py-3">90-95</td>
                      <td className="px-3 py-3">170-175</td>
                    </tr>
                    <tr className="border-b border-[#f3efe5]/10 transition-colors hover:bg-[#f3efe5]/5">
                      <td className="px-3 py-3 font-black text-[#ffcd00]">M</td>
                      <td className="px-3 py-3">100-105</td>
                      <td className="px-3 py-3">180-185</td>
                    </tr>
                    <tr className="border-b border-[#f3efe5]/10 transition-colors hover:bg-[#f3efe5]/5">
                      <td className="px-3 py-3 font-black text-[#ffcd00]">L</td>
                      <td className="px-3 py-3">110-115</td>
                      <td className="px-3 py-3">185-190</td>
                    </tr>
                    <tr className="transition-colors hover:bg-[#f3efe5]/5">
                      <td className="px-3 py-3 font-black text-[#ffcd00]">XL</td>
                      <td className="px-3 py-3">120-125</td>
                      <td className="px-3 py-3">190-195</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-[#f3efe5]/15 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm text-[#f3efe5]/60">
                <div>
                  <span className="font-black uppercase text-[#f3efe5]">Gender:</span> {product.gender}
                </div>
                <div>
                  <span className="font-black uppercase text-[#f3efe5]">ID:</span> {product.id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
