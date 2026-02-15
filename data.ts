
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'fashion',
    name: "Men's Fashion",
    description: "Tailored for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1516257984877-a03aae3acbc8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'grooming',
    name: "Grooming Essentials",
    description: "Premium care for the sophisticated look.",
    image: "https://images.unsplash.com/photo-1621605815841-aa33c5450410?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'tech',
    name: "Tech Gadgets",
    description: "Futuristic tools for high performance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Midnight Navy Overcoat',
    category: 'Fashion',
    price: 450,
    image: 'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?auto=format&fit=crop&q=80&w=600',
    isTrending: true
  },
  {
    id: 'p2',
    name: 'ELVARO Titanium Watch',
    category: 'Tech',
    price: 890,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600',
    isTrending: true
  },
  {
    id: 'p3',
    name: 'Premium Beard Oil Kit',
    category: 'Grooming',
    price: 65,
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=600',
    isTrending: true
  },
  {
    id: 'p4',
    name: 'Leather Tech Briefcase',
    category: 'Fashion',
    price: 295,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600',
    isTrending: true
  }
];
