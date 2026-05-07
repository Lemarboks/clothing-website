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
    e.preventDefault();
    addToCart(product, selectedSize, selectedColor);
    alert('Added to cart!');
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <article className="dark-card relative grid min-h-full overflow-hidden transition duration-300 before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-1.5 before:bg-[linear-gradient(90deg,#e34c38,#f3efe5,#0b39a6,#007a3d,#ffcd00)] hover:-translate-y-1 hover:border-[#d8ff3f]/70">
        <div className="clip-frame m-3 mb-0 overflow-hidden p-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#080808]">
            <span className="issue-label absolute left-2 top-2 z-10">File {product.id.padStart(2, '0')}</span>
            <img
              src={product.images[selectedColor]}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="grid gap-4 p-5">
          <div>
            <p className="kicker mb-2">{product.gender} / {selectedColor}</p>
            <h3 className="text-3xl font-black uppercase leading-[0.9] text-[#f3efe5]">
              {product.name}
            </h3>
            <p className="mt-3 text-sm text-[#f3efe5]/68">{product.description}</p>
          </div>

          <div className="grid gap-3 border-y border-[#f3efe5]/15 py-4">
            <label className="grid gap-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#f3efe5]/70">
              Size rail
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="border border-[#f3efe5]/20 bg-[#080808] px-3 py-2 text-sm text-[#f3efe5] focus:border-[#d8ff3f] focus:outline-none"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size} className="bg-[#080808]">
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <p className="mb-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#f3efe5]/70">
                Colour edit
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedColor(color);
                    }}
                    className={`border px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.08em] transition ${
                      selectedColor === color
                        ? 'border-[#d8ff3f] bg-[#d8ff3f] text-[#080808]'
                        : 'border-[#f3efe5]/20 text-[#f3efe5]/75 hover:border-[#f3efe5]/60'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-2xl font-black text-[#ffcd00]">R{product.price}</p>
            <button onClick={handleAddToCart} className="archive-button">
              Add
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
