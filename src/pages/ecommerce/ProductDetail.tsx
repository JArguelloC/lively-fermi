import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, ChevronRight, Truck, ShieldCheck, CheckCircle } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { useFavoritesStore } from '../../store/favoritesStore';
import { useUiStore } from '../../store/uiStore';
import { getProductBySlug, getProducts } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Product, ProductVariant } from '../../types/product.types';
import { ProductCard } from '../../components/ecommerce/ProductCard';
import WebpImage from '../../components/ui/WebpImage';
import SEOMeta from '../../components/ui/SEOMeta';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const addItem = useCartStore(state => state.addItem);
  const { currentUser: user, isAuthenticated } = useAuthStore(state => ({ currentUser: state.currentUser, isAuthenticated: state.isAuthenticated }));
  
  // Extraemos solo lo necesario para evitar re-renders por funciones del store
  const isFavorite = useFavoritesStore(state => state.isFavorite);
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);
  const loadFavorites = useFavoritesStore(state => state.loadFavorites);
  const isTogglingFavorite = useFavoritesStore(state => state.isTogglingFavorite);
  
  const addNotification = useUiStore((state) => state.addNotification);
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [stockMessage, setStockMessage] = useState('');
  const stockMessageTimerRef = useRef<number | null>(null);

  const showStockMessage = (message: string) => {
    setStockMessage(message);
    if (stockMessageTimerRef.current) {
      window.clearTimeout(stockMessageTimerRef.current);
    }
    stockMessageTimerRef.current = window.setTimeout(() => {
      setStockMessage('');
      stockMessageTimerRef.current = null;
    }, 3000);
  };

  // EFECTO PRINCIPAL: Carga exclusivamente el producto base cuando cambia el SLUG
  useEffect(() => {
    if (!slug) return;
    
    let isMounted = true;
    setIsLoading(true);
    setStockMessage('');

    const loadProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        if (!isMounted) return;

        const normalizedProduct = data as unknown as Product;
        setProduct(normalizedProduct);
        setSelectedImage(0); // Reiniciar a la primera imagen al cambiar de producto
        setQty(1);           // Reiniciar cantidad

        const variants = normalizedProduct.variants ?? [];
        setSelectedVariant(
          variants.length > 0
            ? variants[0]
            : {
                id: normalizedProduct.id,
                name: normalizedProduct.title || 'Producto',
                sku: normalizedProduct.id,
                price: normalizedProduct.basePrice ?? 0,
                stock: 0,
              }
        );

        // Carga asíncrona en segundo plano de productos relacionados para no bloquear
        getProducts(normalizedProduct.category)
          .then((list) => {
            if (!isMounted) return;
            const related = (list as unknown as Product[]).filter(p => p.id !== normalizedProduct.id);
            setRelatedProducts(related.slice(0, 5));
          })
          .catch(err => console.error("Error fetching related products:", err));

      } catch (error) {
        console.error("Error fetching product:", error);
        if (isMounted) setProduct(null);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadProduct();
    window.scrollTo(0, 0);

    return () => {
      isMounted = false;
    };
  }, [slug]); // ⚡ Clave: Solo re-ejecutar si cambia el slug del producto, eliminando el bucle infinito

  // EFECTO SECUNDARIO: Carga los favoritos del usuario de manera aislada
  useEffect(() => {
    if (user?.id) {
      loadFavorites(user.id).catch(err => console.error("Error loading favorites:", err));
    }
  }, [user?.id, loadFavorites]);

  const handleAddToCart = async () => {
    if (product && selectedVariant) {
      if (qty > selectedVariant.stock) {
        showStockMessage(`Solo hay ${selectedVariant.stock} unidades disponibles.`);
        setQty(selectedVariant.stock);
        return;
      }
      
      addItem({
        id: `${product.id}-${selectedVariant.id}`,
        productId: product.id,
        variantId: selectedVariant.id,
        name: product.title,
        price: selectedVariant.price,
        quantity: qty,
        images: product.images,
        artist: product.artist,
        slug: product.slug,
      }, qty);

      setAdded(true);
      addNotification({ message: `${product.title || 'Producto'} añadido al carrito${!isAuthenticated ? ' (invitado)' : ''}`, type: 'success' })
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const handleToggleFavorite = async () => {
    if (!isAuthenticated || !user || !product) {
      navigate('/login');
      return;
    }
    const wasFavorite = isFavorite(product.id);
    try {
      await toggleFavorite(user.id, product.id);
      if (!wasFavorite) {
        addNotification({ message: `${product.title || 'Producto'} añadido a favoritos`, type: 'success' });
      } else {
        addNotification({ message: `${product.title || 'Producto'} eliminado de favoritos`, type: 'info' });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const handleQtyChange = (value: string) => {
    if (!selectedVariant) return;
    const newQty = parseInt(value, 10);
    if (isNaN(newQty) || newQty < 1) {
      setQty(1);
    } else if (newQty > selectedVariant.stock) {
      setQty(selectedVariant.stock);
      showStockMessage(`Solo hay ${selectedVariant.stock} unidades disponibles.`);
    } else {
      setQty(newQty);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-groove-bg-primary">
        <div className="w-16 h-16 border-4 border-groove-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-groove-bg-primary text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <Link to="/tienda" className="text-groove-gold hover:underline">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }
  
  const stock = selectedVariant.stock;
  const price = selectedVariant.price;

  return (
    <>
      <SEOMeta 
        title={product.title}
        description={`${product.title} - ${product.artist || product.category}. ${product.description || 'Producto de alta calidad de Groove Music Store.'}`}
        ogImage={product.images?.[0] || 'https://groove-store.com/og-image.png'}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-groove-bg-primary text-groove-text-primary pt-24 pb-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Galería de Imágenes */}
            <div className="space-y-4">
              <motion.div 
                key={selectedImage}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="aspect-square rounded-2xl overflow-hidden border-2 border-groove-gold/20 bg-black/20"
              >
                <WebpImage
                  src={product.images[selectedImage]}
                  alt={`${product.title} - imagen ${selectedImage + 1}`}
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 600px"
                  fetchPriority="high" 
                  loading="eager"       
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Miniaturas */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === i ? 'border-groove-gold' : 'border-transparent hover:border-groove-gold/50'
                    }`}
                  >
                    <WebpImage
                      src={img}
                      alt={`thumbnail ${i}`}
                      width={120}
                      height={120}
                      sizes="120px"
                      loading="lazy" // No consume recursos a menos que se necesite
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info del Producto */}
            <div className="space-y-6">
              <div>
                <Link to={`/tienda/${product.category}`} className="text-sm text-groove-gold hover:underline capitalize">{product.category}</Link>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{product.title}</h1>
                {product.artist && <p className="text-xl text-groove-text-secondary">{product.artist}</p>}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-groove-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.round(product.avgRating ?? 0) ? 'fill-current' : 'text-gray-500'}`} />
                  ))}
                </div>
                <span className="text-sm text-groove-text-secondary">({product.reviewCount ?? 0} reseñas)</span>
              </div>

              <div className="text-3xl font-bold flex items-baseline gap-3">
                <span>{formatPrice(price)}</span>
              </div>

              <p className="text-groove-text-secondary leading-relaxed">{product.description}</p>

              {stock <= 0 ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                  Ya no hay stock disponible para este producto.
                </div>
              ) : (
                <p className="text-sm text-green-400">En stock: {stock} unidades</p>
              )}

              <div className="bg-groove-bg-secondary border border-groove-gold/20 rounded-xl p-4 space-y-4">
                {stockMessage && (
                  <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                    {stockMessage}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-groove-gold/30 rounded-lg">
                    <button onClick={() => handleQtyChange(String(qty - 1))} className="px-4 py-2 text-lg">-</button>
                    <input 
                      type="number"
                      value={qty}
                      onChange={(e) => handleQtyChange(e.target.value)}
                      className="w-16 text-center bg-transparent focus:outline-none"
                      max={stock}
                    />
                    <button onClick={() => handleQtyChange(String(qty + 1))} className="px-4 py-2 text-lg">+</button>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                    className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform ${
                      stock === 0
                        ? 'bg-gray-500 cursor-not-allowed text-white'
                        : added
                        ? 'bg-groove-gold text-black shadow-[0_12px_30px_-15px_rgba(212,175,55,0.8)]'
                        : 'bg-groove-gold text-black shadow-[0_10px_30px_-18px_rgba(212,175,55,0.8)] hover:bg-groove-gold-light hover:-translate-y-0.5'
                    }`}
                  >
                    {stock === 0 ? 'Agotado' : added ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Agregado
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Añadir al Carrito
                      </>
                    )}
                  </button>
                </div>
                
                <button 
                  onClick={handleToggleFavorite}
                  disabled={isTogglingFavorite}
                  className={`w-full flex items-center justify-center gap-2 text-sm transition-colors ${
                    product && isFavorite(product.id) ? 'text-groove-gold hover:text-groove-gold/80' : 'text-groove-text-secondary hover:text-groove-gold'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Heart className={`w-4 h-4 ${product && isFavorite(product.id) ? 'fill-current text-groove-gold' : ''}`} />
                  {product && isFavorite(product.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-groove-gold" />
                  <span>Envío rápido y seguro a todo el país.</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-groove-gold" />
                  <span>Compra protegida, recibe el producto que esperabas o te devolvemos tu dinero.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Productos Relacionados */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Productos Relacionados <ChevronRight />
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {relatedProducts.map(p => (
                  <ProductCard key={p.id} product={p} showAddToCart={false} />
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}