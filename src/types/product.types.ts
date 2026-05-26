export type ProductCategory = 'music' | 'merchandise' | 'equipment' | 'digital';
export type ProductSubcategory = 'vinyl' | 'cd' | 'cassette' | 'apparel' | 'accessories' | 'instruments' | 'audio' | 'software' | 'samples';

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number; // in cents
  stock: number;
  attributes?: Record<string, string>; // e.g., { size: 'L', color: 'Black' }
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  subcategory?: ProductSubcategory;
  artist?: string;
  label?: string;
  releaseDate?: Date | string;
  basePrice: number; // in cents
  images: string[]; // URLs
  variants: ProductVariant[];
  createdAt: Date | string;
  updatedAt: Date | string;
  isActive: boolean;
  featured?: boolean;
}
