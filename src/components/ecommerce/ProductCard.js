import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShoppingCart, Star } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
export const ProductCard = ({ product, onAddToCart }) => {
    const isNew = new Date(product.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000;
    return (_jsxs(Card, { className: "group flex flex-col h-full bg-gray-900 border-gray-800 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:-translate-y-1", children: [_jsxs("div", { className: "relative aspect-square overflow-hidden bg-gray-800", children: [_jsx("img", { src: product.images[0] || 'https://images.unsplash.com/photo-1611002214172-792c1f90b59a?w=800&auto=format&fit=crop&q=60', alt: product.title, className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" }), _jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-2", children: [product.featured && _jsx(Badge, { variant: "offer", children: "Featured" }), isNew && _jsx(Badge, { variant: "new", children: "New" })] }), _jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent", children: _jsxs(Button, { fullWidth: true, onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onAddToCart?.(product);
                            }, className: "shadow-lg shadow-yellow-500/20", children: [_jsx(ShoppingCart, { className: "w-4 h-4 mr-2" }), "Add to Cart"] }) })] }), _jsxs("div", { className: "p-5 flex flex-col flex-grow", children: [_jsx("div", { className: "flex justify-between items-start mb-2", children: _jsxs("div", { className: "w-full", children: [_jsx("p", { className: "text-xs text-yellow-500 font-medium tracking-wider uppercase mb-1", children: product.artist || product.category }), _jsx("h3", { className: "text-lg font-bold text-gray-100 leading-tight line-clamp-1", title: product.title, children: product.title })] }) }), _jsxs("div", { className: "flex items-center mt-1 mb-4", children: [_jsx("div", { className: "flex text-yellow-500 gap-0.5", children: [1, 2, 3, 4, 5].map((star) => (_jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, star))) }), _jsx("span", { className: "text-xs text-gray-400 ml-2", children: "(42)" })] }), _jsxs("div", { className: "mt-auto flex items-center justify-between", children: [_jsx("div", { className: "text-xl font-bold text-white", children: formatPrice(product.basePrice) }), _jsx("button", { className: "md:hidden w-10 h-10 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20", onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onAddToCart?.(product);
                                }, "aria-label": "Add to cart", children: _jsx(ShoppingCart, { className: "w-4 h-4" }) })] })] })] }));
};
export default ProductCard;
