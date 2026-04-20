import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4 street-shadow">
            All Products
          </h1>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Browse every item in the store.
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
