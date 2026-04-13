import ProductCard from './components/ProductCard';
import Showcase from './components/Showcase';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Showcase />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4 street-shadow">
            Featured Products
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Check out our latest drops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
