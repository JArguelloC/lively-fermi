import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/product.types';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  title?: string;
  description?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart,
  title,
  description
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
        <h3 className="text-xl font-medium text-gray-300">No products found.</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <section className="py-4">
      {(title || description) && (
        <div className="mb-6 px-1">
          {title && <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{title}</h2>}
          {description && <p className="text-gray-400 text-sm sm:text-lg max-w-2xl">{description}</p>}
        </div>
      )}
      
      {/* CORRECCIÓN: Ahora inicia en 2 columnas en móvil por defecto, manteniendo tu escalado hacia escritorio */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;