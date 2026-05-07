import ProductDetailClient from './ProductDetailClient';
import { products } from '../../data/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
export const dynamicParams = false;

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Product not found</div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
