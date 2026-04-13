'use client';

import { useCart } from '../components/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center street-shadow">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-300 text-center text-lg">Your cart is empty. Time to shop!</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="dark-card p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white street-shadow">{item.product.name}</h3>
                    <p className="text-gray-300">Size: {item.size}, Color: {item.color}</p>
                    <p className="text-orange-400 font-bold text-lg">R{item.product.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                      className="w-16 text-center bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 focus:border-orange-400 focus:outline-none"
                    />
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-400 hover:text-red-300 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between items-center dark-card p-6">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-500 transition-colors"
              >
                Clear Cart
              </button>
              <div className="text-right">
                <p className="text-2xl font-bold text-white mb-4">Total: <span className="text-orange-400">R{total.toFixed(2)}</span></p>
                <button className="bg-orange-500 text-black font-bold px-8 py-3 rounded hover:bg-orange-400 transition-colors street-shadow">
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