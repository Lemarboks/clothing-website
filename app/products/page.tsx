import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="editorial-grid min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-y border-[#f3efe5]/20 py-6">
          <p className="kicker mb-3">Full shop index</p>
          <h1 className="section-title street-shadow">Product archive.</h1>
          <p className="mt-4 max-w-2xl text-[#f3efe5]/70">
            Every current item, framed like a street-style file from the Mzansi x LDN rail.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
