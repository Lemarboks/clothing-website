'use client';

import { useCart } from '../components/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <div className="editorial-grid min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-y border-[#f3efe5]/20 py-6">
          <p className="kicker mb-3">Checkout file</p>
          <h1 className="section-title street-shadow">Your cart.</h1>
        </div>
        {cart.length === 0 ? (
          <p className="text-center text-lg text-[#f3efe5]/70">Your cart is empty. Time to shop!</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="dark-card flex items-center justify-between gap-5 p-6 max-sm:flex-col max-sm:items-start">
                  <div>
                    <p className="kicker mb-2">Cart line {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="text-2xl font-black uppercase leading-none text-[#f3efe5]">{item.product.name}</h3>
                    <p className="mt-2 text-[#f3efe5]/65">Size: {item.size}, Color: {item.color}</p>
                    <p className="mt-2 text-lg font-black text-[#ffcd00]">R{item.product.price}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                      className="w-16 border border-[#f3efe5]/20 bg-[#080808] px-2 py-1 text-center text-[#f3efe5] focus:border-[#d8ff3f] focus:outline-none"
                    />
                    <button
                      onClick={() => removeFromCart(index)}
                      className="font-black uppercase tracking-[0.1em] text-[#e34c38] hover:text-[#ffcd00]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="dark-card mt-12 flex items-center justify-between gap-5 p-6 max-sm:flex-col max-sm:items-stretch">
              <button
                onClick={clearCart}
                className="ghost-button justify-center border-[#e34c38]/70 text-[#e34c38] hover:bg-[#e34c38] hover:text-[#f3efe5]"
              >
                Clear Cart
              </button>
              <div className="text-right">
                <p className="mb-4 text-2xl font-black text-[#f3efe5]">Total: <span className="text-[#ffcd00]">R{total.toFixed(2)}</span></p>
                <button className="archive-button">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
