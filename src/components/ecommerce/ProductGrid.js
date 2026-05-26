import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProductCard } from './ProductCard';
export const ProductGrid = ({ products, onAddToCart, title, description }) => {
    if (products.length === 0) {
        return (_jsxs("div", { className: "py-20 text-center bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm", children: [_jsx("h3", { className: "text-xl font-medium text-gray-300", children: "No products found." }), _jsx("p", { className: "text-gray-500 mt-2", children: "Try adjusting your filters or search criteria." })] }));
    }
    return (_jsxs("section", { className: "py-4", children: [(title || description) && (_jsxs("div", { className: "mb-8", children: [title && _jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: title }), description && _jsx("p", { className: "text-gray-400 text-lg max-w-2xl", children: description })] })), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: products.map((product) => (_jsx(ProductCard, { product: product, onAddToCart: onAddToCart }, product.id))) })] }));
};
export default ProductGrid;
