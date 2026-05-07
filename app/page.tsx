import ProductCard from './components/ProductCard';
import Showcase from './components/Showcase';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="editorial-grid min-h-screen">
      <Showcase />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-4 border-y border-[#f3efe5]/20 py-6 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="kicker mb-3">Featured rail</p>
              <h2 className="section-title street-shadow">Latest drops.</h2>
            </div>
            <p className="max-w-xl self-end text-[#f3efe5]/70">
              Product cards have been treated like archive files: clipped imagery,
              coded labels, bold pricing, and quick add controls for the live shop.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
