import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, ChevronRight, Truck, ShieldCheck, CheckCircle } from 'lucide-react';
import { formatPrice } from '../../data/mockData';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { db } from '../../services/firebase';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
export default function ProductDetail() {
    const { slug } = useParams();
    const addItem = useCartStore(state => state.addItem);
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [qty, setQty] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [added, setAdded] = useState(false);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const navigate = useNavigate();
    // Cargar producto desde Firestore
    useEffect(() => {
        if (!slug)
            return;
        const loadProduct = async () => {
            try {
                const productsRef = collection(db, 'products');
                const q = query(productsRef, where('slug', '==', slug));
                const snapshot = await getDocs(q);
                if (!snapshot.empty) {
                    const doc = snapshot.docs[0];
                    const productData = { id: doc.id, ...doc.data() };
                    setProduct(productData);
                    setQty(1);
                    setSelectedImage(0);
                    setAdded(false);
                    // Cargar productos relacionados
                    const relatedQuery = query(productsRef, where('category', '==', productData.category));
                    const unsubscribe = onSnapshot(relatedQuery, (relSnapshot) => {
                        const related = relSnapshot.docs
                            .map(doc => ({ id: doc.id, ...doc.data() }))
                            .filter(p => p.id !== productData.id)
                            .slice(0, 4);
                        setRelatedProducts(related);
                    });
                    // Suscribirse a cambios en tiempo real del producto actual
                    const productRef = snapshot.docs[0].ref;
                    const productUnsubscribe = onSnapshot(productRef, (doc) => {
                        if (doc.exists()) {
                            setProduct({ id: doc.id, ...doc.data() });
                        }
                    });
                    setIsLoading(false);
                    return () => {
                        unsubscribe();
                        productUnsubscribe();
                    };
                }
                else {
                    setProduct(null);
                    setIsLoading(false);
                }
            }
            catch (err) {
                console.error('Error cargando producto:', err);
                setProduct(null);
                setIsLoading(false);
            }
        };
        loadProduct();
    }, [slug]);
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-groove-bg-primary", children: _jsx("div", { className: "animate-spin text-4xl", children: "\u23F3" }) }));
    }
    if (!product) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center text-xl font-bold bg-groove-bg-primary", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "mb-4", children: "Producto no encontrado" }), _jsx(Link, { to: "/tienda", className: "text-groove-gold hover:underline", children: "\u2190 Volver a la tienda" })] }) }));
    }
    const handleQtyChange = (val) => {
        let num = parseInt(val);
        if (isNaN(num) || num < 1)
            num = 1;
        if (num > product.stock)
            num = product.stock;
        setQty(num);
    };
    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        await addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: qty,
            images: product.images,
            artist: product.artist,
            brand: product.brand,
            slug: product.slug
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 3000);
    };
    const handleFavoriteClick = () => {
        if (!isAuthenticated) {
            navigate('/login');
        }
        else {
            alert("Producto añadido a favoritos.");
        }
    };
    // Calcular precio con descuento si está en oferta
    const displayPrice = product.onSale ? product.discountPrice : product.price;
    const compareAtPrice = product.onSale ? product.price : null;
    return (_jsx("div", { className: "min-h-screen bg-groove-bg-primary py-8", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("nav", { className: "flex items-center text-sm text-groove-text-secondary mb-8", children: [_jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Inicio" }), _jsx(ChevronRight, { className: "w-4 h-4 mx-2" }), _jsx(Link, { to: `/tienda/${product.category}`, className: "hover:text-white transition-colors capitalize", children: product.category }), _jsx(ChevronRight, { className: "w-4 h-4 mx-2" }), _jsx("span", { className: "text-white truncate", children: product.name })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "aspect-square bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 relative", children: [_jsx(motion.img, { initial: { opacity: 0 }, animate: { opacity: 1 }, src: product.images[selectedImage] || '', alt: product.name, className: "w-full h-full object-cover" }, selectedImage), product.onSale && (_jsx("div", { className: "absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm", children: "OFERTA" }))] }), product.images && product.images.length > 1 && (_jsx("div", { className: "grid grid-cols-4 gap-4", children: product.images.map((img, idx) => (_jsx("button", { onClick: () => setSelectedImage(idx), className: `aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-groove-gold' : 'border-transparent opacity-60 hover:opacity-100'}`, children: _jsx("img", { src: img, alt: "", className: "w-full h-full object-cover" }) }, idx))) }))] }), _jsxs("div", { children: [_jsxs("div", { className: "mb-6", children: [_jsx("p", { className: "text-groove-gold font-bold mb-2", children: product.artist || product.brand }), _jsx("h1", { className: "text-3xl sm:text-4xl font-display font-extrabold mb-4 leading-tight", children: product.name }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-groove-text-secondary mb-6", children: [_jsxs("div", { className: "flex items-center text-amber-500", children: [_jsx(Star, { className: "w-4 h-4 fill-current" }), _jsx("span", { className: "font-bold ml-1", children: product.avgRating || 0 })] }), _jsxs("span", { children: ["(", product.reviewCount || 0, " rese\u00F1as)"] }), _jsx("span", { className: "capitalize border border-white/10 px-2 py-1 rounded", children: product.subcategory })] }), _jsxs("div", { className: "flex items-end gap-3 mb-6", children: [_jsx("span", { className: "text-4xl font-bold", children: formatPrice(displayPrice || 0) }), compareAtPrice && _jsx("span", { className: "text-xl text-groove-text-secondary line-through mb-1", children: formatPrice(compareAtPrice) })] })] }), _jsx("div", { className: "text-groove-text-secondary leading-relaxed mb-8 space-y-4", children: product.description && product.description.split('\n').map((paragraph, idx) => (_jsx("p", { children: paragraph }, idx))) }), _jsxs("div", { className: "bg-groove-bg-secondary border border-white/5 rounded-2xl p-6 mb-8", children: [product.stock <= 5 && product.stock > 0 && (_jsxs("div", { className: "text-red-400 font-bold text-sm mb-4 flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 animate-pulse" }), "\uD83D\uDCE6 \u00A1Solo quedan ", product.stock, " en stock!"] })), _jsxs("div", { className: "flex items-end gap-4 mb-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-groove-text-secondary mb-2 font-medium", children: "CANTIDAD" }), _jsxs("div", { className: "flex items-center bg-groove-bg-primary rounded-xl border border-white/10 overflow-hidden h-12 w-32", children: [_jsx("button", { onClick: () => handleQtyChange(String(qty - 1)), className: "flex-1 hover:text-groove-gold transition-colors text-lg font-medium", children: "-" }), _jsx("input", { type: "text", value: qty, onChange: (e) => handleQtyChange(e.target.value), className: "w-10 text-center bg-transparent focus:outline-none font-bold" }), _jsx("button", { onClick: () => handleQtyChange(String(qty + 1)), className: "flex-1 hover:text-groove-gold transition-colors text-lg font-medium", children: "+" })] })] }), _jsx("button", { onClick: handleAddToCart, disabled: product.stock === 0, className: `flex-1 h-12 flex items-center justify-center gap-2 font-bold rounded-xl transition-all ${added ? 'bg-green-500 text-white' :
                                                        product.stock === 0 ? 'bg-white/5 text-white/30 cursor-not-allowed' :
                                                            'bg-groove-gold hover:bg-groove-gold-light text-black hover:scale-[1.02]'}`, children: added ? _jsxs(_Fragment, { children: [_jsx(CheckCircle, { className: "w-5 h-5" }), " \u00A1A\u00F1adido!"] }) :
                                                        product.stock === 0 ? 'Agotado' : _jsxs(_Fragment, { children: [_jsx(ShoppingCart, { className: "w-5 h-5" }), " Agregar al Carrito"] }) }), _jsx("button", { onClick: handleFavoriteClick, className: "h-12 w-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-groove-text-secondary hover:text-red-500", children: _jsx(Heart, { className: "w-5 h-5" }) })] }), _jsxs("div", { className: "space-y-3 text-sm text-groove-text-secondary", children: [_jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "w-4 h-4 text-groove-gold" }), " Env\u00EDo gratis en pedidos sobre $5,000 MXN"] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(ShieldCheck, { className: "w-4 h-4 text-groove-gold" }), " Garant\u00EDa Groove de 30 d\u00EDas"] })] })] })] })] }), relatedProducts.length > 0 && (_jsxs("div", { className: "mt-20 pt-10 border-t border-white/5", children: [_jsx("h2", { className: "text-3xl font-display font-bold mb-8 text-center", children: "Productos similares que te podr\u00EDan interesar" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: relatedProducts.map(p => (_jsxs(Link, { to: `/producto/${p.slug}`, className: "group bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-groove-gold/30 transition-all hover:-translate-y-1", children: [_jsx("div", { className: "relative aspect-square overflow-hidden", children: _jsx("img", { src: p.images?.[0] || '', alt: p.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500", loading: "lazy" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h4", { className: "font-semibold text-sm leading-tight mb-2 line-clamp-2", children: p.name }), _jsx("div", { className: "flex items-center gap-2", children: _jsx("span", { className: "text-groove-gold font-bold", children: formatPrice(p.price) }) })] })] }, p.id))) })] }))] }) }));
}
