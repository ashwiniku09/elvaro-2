
export interface Product {
  id: string;
  name: string;
  category: 'Fashion' | 'Grooming' | 'Tech';
  price: number;
  image: string;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
