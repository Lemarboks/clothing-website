export interface Product {
  id: string;
  name: string;
  price: number;
  images: { [color: string]: string };
  description: string;
  sizes: string[];
  colors: string[];
  gender: 'men' | 'women' | 'unisex';
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}