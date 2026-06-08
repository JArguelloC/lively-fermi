import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import EmailVerificationBanner from './components/auth/EmailVerificationBanner';
import { useAuthStore } from './store/authStore';
import { useCartStore } from './store/cartStore';
import { useInitializeProducts } from './hooks/useInitializeProducts';
const Home = lazy(() => import('./pages/Home'));
const CategoryPage = lazy(() => import('./pages/ecommerce/CategoryPage'));
const ProductDetail = lazy(() => import('./pages/ecommerce/ProductDetail'));
const Cart = lazy(() => import('./pages/ecommerce/Cart'));
const Checkout = lazy(() => import('./pages/ecommerce/Checkout'));
const OrderConfirmation = lazy(() => import('./pages/ecommerce/OrderConfirmation'));
const NewsHome = lazy(() => import('./pages/news/NewsHome'));
const ArticleDetail = lazy(() => import('./pages/news/ArticleDetail'));
const Login = lazy(() => import('./pages/auth/Login'));
const Account = lazy(() => import('./pages/auth/Account'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
function LoadingSpinner() {
    return (_jsx("div", { className: "h-screen flex items-center justify-center", children: _jsx("div", { className: "w-10 h-10 border-4 border-groove-gold/20 border-t-groove-gold rounded-full animate-spin" }) }));
}
function App() {
    const setUser = useAuthStore(state => state.setUser);
    const setLoading = useAuthStore(state => state.setLoading);
    const loadFromStorage = useAuthStore(state => state.loadFromStorage);
    
    // ✅ Al cargar la app, cargar usuario desde storage si existe
    useEffect(() => {
        loadFromStorage();
    }, [loadFromStorage]);
    return (_jsx(PayPalScriptProvider, { options: { "clientId": "test", currency: "USD", components: "buttons" }, children: _jsxs(BrowserRouter, { children: [_jsx(ScrollToTop, {}), _jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Navbar, {}), _jsx(EmailVerificationBanner, {}), _jsx("main", { className: "flex-grow", children: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/tienda", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/tienda/:categoria", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/producto/:slug", element: _jsx(ProductDetail, {}) }), _jsx(Route, { path: "/carrito", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) }), _jsx(Route, { path: "/order-confirmation", element: _jsx(OrderConfirmation, {}) }), _jsx(Route, { path: "/noticias", element: _jsx(NewsHome, {}) }), _jsx(Route, { path: "/noticias/:slug", element: _jsx(ArticleDetail, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/registro", element: _jsx(Login, {}) }), _jsx(Route, { path: "/cuenta", element: _jsx(Account, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}) })] }) }) }), _jsx(Footer, {})] })] }) }));
}
export default App;
