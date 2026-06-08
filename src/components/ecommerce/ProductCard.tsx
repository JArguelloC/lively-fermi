import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types/product.types';
import { formatPrice } from '../../utils/formatPrice';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import WebpImage from '../ui/WebpImage';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  showAddToCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, showAddToCart = true }) => {
  const isNew = product.createdAt && new Date(product.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000;
  const productName = product.title || (product as any).name || 'Producto';
  const rawPrice = (product as any).price;
  const productStock = typeof (product as any).stock === 'number'
    ? (product as any).stock
    : Array.isArray(product.variants)
      ? product.variants.reduce((total, variant) => total + (variant.stock || 0), 0)
      : 0;
  const productPrice = typeof product.basePrice === 'number'
    ? product.basePrice
    : typeof rawPrice === 'number'
      ? rawPrice < 1000 ? Math.round(rawPrice * 100) : rawPrice
      : 0;
  const rating = Math.round(product.avgRating ?? 0);
  const reviews = product.reviewCount ?? 0;
  
  return (
    <Link to={`/producto/${product.slug}`}>
      <Card product={product} className="group flex flex-col h-full bg-gray-900 border-gray-800 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-gray-800">
          <WebpImage 
            src={product.images?.[0] || '/images/placeholder.svg'} 
            alt={productName}
            width={400}
            height={400}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && <Badge variant="offer">Featured</Badge>}
            {isNew && <Badge variant="new">New</Badge>}
          </div>

          {productStock <= 0 ? (
            <Badge
              variant="offer"
              className="absolute top-3 right-3 bg-red-600 text-white border-0"
            >
              Sin stock
            </Badge>
          ) : productStock <= 5 ? (
            <span className="absolute top-3 right-3 rounded-full bg-amber-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg">
              Poco stock
            </span>
          ) : null}

          {/* Hover Add to Cart Button (Desktop) */}
          {showAddToCart && (
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent">
              <Button 
                fullWidth 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAddToCart?.(product);
                }}
                className="shadow-lg shadow-yellow-500/20"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Añadir al carrito
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="w-full">
              <p className="text-[10px] sm:text-xs text-yellow-500 font-medium tracking-wider uppercase mb-1">{product.artist || product.category}</p>
              <h3 className="text-base sm:text-lg font-bold text-gray-100 leading-tight line-clamp-1" title={productName}>{productName}</h3>
            </div>
          </div>

          {/* Rating - Display only */}
          <div className="flex items-center mt-1 mb-4">
            <div className="flex text-yellow-500 gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`w-3.5 h-3.5 ${star <= rating ? 'fill-current' : 'text-gray-600'}`} />
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-2">({reviews})</span>
          </div>

          {/* Price & Mobile Add to Cart */}
          <div className="mt-auto flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold text-white">
              {formatPrice(productPrice)}
            </div>
            {showAddToCart && (
              <button 
                className="md:hidden w-10 h-10 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAddToCart?.(product);
                }}
                aria-label="Añadir al carrito"
                disabled={productStock <= 0}
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
