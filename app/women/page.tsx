import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Women() {
  const womenProducts = products.filter(product => product.gender === 'women' || product.gender === 'unisex');

  return (
    <div className="editorial-grid min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-y border-[#f3efe5]/20 py-6">
          <p className="kicker mb-3">Womenswear edit</p>
          <h1 className="section-title street-shadow">Women&apos;s rail.</h1>
          <p className="mt-4 max-w-2xl text-[#f3efe5]/70">
            Crop cuts, bright-file styling, and pieces built for the street archive.
          </p>
        </div>
        {womenProducts.length === 0 ? (
          <p className="text-center text-[#f3efe5]/70">No women&apos;s products available yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
