/**
 * Groove Music Store — Seed Script
 * Populates Firestore with 35 high-quality products
 * Run: import { seedDatabase } from './scripts/seedDatabase'; seedDatabase()
 */
import { db } from '../services/firebase';
import { collection, doc, writeBatch, getDocs } from 'firebase/firestore';
const products = [
    // === MÚSICA (10) ===
    { name: 'Abbey Road Vinyl', slug: 'abbey-road-vinyl', description: 'El álbum icónico de The Beatles en vinilo de 180g.', category: 'music', subcategory: 'vinyl', brand: 'Apple Records', artist: 'The Beatles', image: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29b9c?w=500&h=500&fit=crop', price: 3499, compareAtPrice: null, stock: 15, avgRating: 4.9, reviewCount: 234 },
    { name: 'Kind of Blue Vinyl', slug: 'kind-of-blue-vinyl', description: 'Miles Davis en su mejor forma. Álbum jazz más vendido.', category: 'music', subcategory: 'vinyl', brand: 'Columbia Records', artist: 'Miles Davis', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop', price: 2999, compareAtPrice: 3999, stock: 8, avgRating: 4.8, reviewCount: 189 },
    { name: 'Random Access Memories Vinyl', slug: 'random-access-memories-vinyl', description: 'El último álbum de Daft Punk en edición limitada.', category: 'music', subcategory: 'vinyl', brand: 'Columbia Records', artist: 'Daft Punk', image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop', price: 4299, compareAtPrice: null, stock: 3, avgRating: 4.7, reviewCount: 156 },
    { name: 'Rumours Vinyl', slug: 'rumours-vinyl', description: 'Fleetwood Mac remasterizado en vinilo de alta calidad.', category: 'music', subcategory: 'vinyl', brand: 'Warner Bros', artist: 'Fleetwood Mac', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&h=500&fit=crop', price: 2799, compareAtPrice: null, stock: 20, avgRating: 4.6, reviewCount: 312 },
    { name: 'OK Computer CD', slug: 'ok-computer-cd', description: 'Radiohead revolucionó el rock alternativo con este álbum.', category: 'music', subcategory: 'cd', brand: 'Parlophone', artist: 'Radiohead', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=500&fit=crop', price: 1499, compareAtPrice: null, stock: 25, avgRating: 4.5, reviewCount: 198 },
    { name: 'The Dark Side of the Moon Vinyl', slug: 'dark-side-moon-vinyl', description: 'Pink Floyd edición 50 aniversario con sonido impecable.', category: 'music', subcategory: 'vinyl', brand: 'Harvest', artist: 'Pink Floyd', image: 'https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?w=500&h=500&fit=crop', price: 3999, compareAtPrice: null, stock: 9, avgRating: 4.9, reviewCount: 421 },
    { name: 'Thriller Vinyl', slug: 'thriller-vinyl', description: 'Michael Jackson en el álbum más vendido de la historia.', category: 'music', subcategory: 'vinyl', brand: 'Epic Records', artist: 'Michael Jackson', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop', price: 3199, compareAtPrice: null, stock: 12, avgRating: 4.8, reviewCount: 267 },
    { name: 'Purple Rain Vinyl', slug: 'purple-rain-vinyl', description: 'Prince en su mejor momento. Funk y rock en perfecto balance.', category: 'music', subcategory: 'vinyl', brand: 'Warner Bros', artist: 'Prince', image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&h=500&fit=crop', price: 2899, compareAtPrice: null, stock: 18, avgRating: 4.9, reviewCount: 189 },
    { name: 'Acid Jazz Collection CD', slug: 'acid-jazz-collection-cd', description: 'Compilación de los mejores temas acid jazz de los 90s.', category: 'music', subcategory: 'cd', brand: 'Acid Jazz Records', artist: 'Various Artists', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop', price: 1799, compareAtPrice: null, stock: 11, avgRating: 4.4, reviewCount: 76 },
    { name: 'Born to Run Vinyl', slug: 'born-to-run-vinyl', description: 'Bruce Springsteen cambió el rock con este álbum legendario.', category: 'music', subcategory: 'vinyl', brand: 'Columbia Records', artist: 'Bruce Springsteen', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop', price: 2699, compareAtPrice: null, stock: 14, avgRating: 4.8, reviewCount: 203 },
    // === MERCH (10) ===
    { name: 'Camiseta Groove Vinyl Club', slug: 'camiseta-groove-vinyl', description: 'Camiseta oficial 100% algodón orgánico con impresión de alta calidad.', category: 'merch', subcategory: 't-shirt', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', price: 2499, compareAtPrice: null, stock: 50, avgRating: 4.3, reviewCount: 45 },
    { name: 'Hoodie Dark Frequencies', slug: 'hoodie-dark-frequencies', description: 'Hoodie premium con diseño exclusivo de ondas sonoras.', category: 'merch', subcategory: 'hoodie', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', price: 5999, compareAtPrice: 7499, stock: 12, avgRating: 4.4, reviewCount: 28 },
    { name: 'Gorra Groove Adjustable', slug: 'gorra-groove-adjustable', description: 'Gorra vintage con bordado del logo Groove en dorado.', category: 'merch', subcategory: 'cap', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=500&h=500&fit=crop', price: 1599, compareAtPrice: null, stock: 35, avgRating: 4.2, reviewCount: 22 },
    { name: 'Sudadera Groove Oversized', slug: 'sudadera-groove-oversized', description: 'Sudadera oversized super cómoda en negro y gris charcoal.', category: 'merch', subcategory: 'sweatshirt', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', price: 4999, compareAtPrice: 5999, stock: 20, avgRating: 4.5, reviewCount: 38 },
    { name: 'Mug Groove Heat Sensitive', slug: 'mug-groove-heat-sensitive', description: 'Taza cerámica que cambia de color con el calor. Diseño exclusivo.', category: 'merch', subcategory: 'accessories', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1564180579904-6f4ee3b178d9?w=500&h=500&fit=crop', price: 999, compareAtPrice: null, stock: 60, avgRating: 4.1, reviewCount: 19 },
    { name: 'Vinilo Display Frame', slug: 'vinilo-display-frame', description: 'Marco flotante para exhibir vinilos. Acrílico transparente con soporte.', category: 'merch', subcategory: 'display', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop', price: 1299, compareAtPrice: null, stock: 25, avgRating: 4.6, reviewCount: 31 },
    { name: 'Bolsa Groove Tote Bag', slug: 'bolsa-groove-tote', description: 'Bolsa de algodón resistente. Perfecta para llevar vinilos.', category: 'merch', subcategory: 'bag', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop', price: 1799, compareAtPrice: null, stock: 45, avgRating: 4.3, reviewCount: 26 },
    { name: 'Calcetines Groove Pack', slug: 'calcetines-groove-pack', description: 'Pack de 3 calcetines con patrones musicales. 100% algodón orgánico.', category: 'merch', subcategory: 'socks', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', price: 799, compareAtPrice: null, stock: 70, avgRating: 4.0, reviewCount: 15 },
    { name: 'Póster Música Retro', slug: 'poster-musica-retro', description: 'Póster vintage A2 con diseño retro. Papel satinado de alta calidad.', category: 'merch', subcategory: 'poster', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop', price: 599, compareAtPrice: null, stock: 80, avgRating: 4.2, reviewCount: 12 },
    { name: 'Llavero Groove Gold', slug: 'llavero-groove-gold', description: 'Llavero de metal dorado con logo de Groove grabado.', category: 'merch', subcategory: 'accessories', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=500&fit=crop', price: 499, compareAtPrice: null, stock: 100, avgRating: 4.4, reviewCount: 8 },
    // === INSTRUMENTOS (10) ===
    { name: 'Fender Stratocaster Player', slug: 'fender-stratocaster-player', description: 'La guitarra eléctrica más icónica. Serie Player con excelente relación calidad-precio.', category: 'instruments', subcategory: 'guitars', brand: 'Fender', artist: '', image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&h=500&fit=crop', price: 84999, compareAtPrice: null, stock: 5, avgRating: 4.8, reviewCount: 67 },
    { name: 'Roland FP-30X Piano Digital', slug: 'roland-fp30x-piano', description: 'Piano digital portátil con sonido de concierto SuperNATURAL.', category: 'instruments', subcategory: 'keyboards', brand: 'Roland', artist: '', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&h=500&fit=crop', price: 69999, compareAtPrice: 79999, stock: 7, avgRating: 4.6, reviewCount: 42 },
    { name: 'Audífonos Studio Pro', slug: 'audifonos-studio-pro', description: 'Audífonos profesionales de estudio con referencia plana.', category: 'instruments', subcategory: 'accessories', brand: 'Audio-Technica', artist: '', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', price: 14999, compareAtPrice: 19999, stock: 18, avgRating: 4.5, reviewCount: 93 },
    { name: 'Gibson Les Paul Standard', slug: 'gibson-les-paul-standard', description: 'La guitarra de roca por excelencia. Sonido grueso y sustain infinito.', category: 'instruments', subcategory: 'guitars', brand: 'Gibson', artist: '', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=500&fit=crop', price: 119999, compareAtPrice: null, stock: 3, avgRating: 4.9, reviewCount: 54 },
    { name: 'Yamaha YDP-145 Piano', slug: 'yamaha-ydp145-piano', description: 'Piano vertical digital compacto. Ideal para aprender con sonido Yamaha.', category: 'instruments', subcategory: 'keyboards', brand: 'Yamaha', artist: '', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&h=500&fit=crop', price: 39999, compareAtPrice: 49999, stock: 8, avgRating: 4.4, reviewCount: 35 },
    { name: 'Shure SM7B Micrófono', slug: 'shure-sm7b-microphone', description: 'Micrófono dinámico profesional. El estándar de oro para grabación.', category: 'instruments', subcategory: 'accessories', brand: 'Shure', artist: '', image: 'https://images.unsplash.com/photo-1508700115892-3005b9f4be98?w=500&h=500&fit=crop', price: 23999, compareAtPrice: null, stock: 12, avgRating: 4.8, reviewCount: 78 },
    { name: 'Technics SL-1200MK7 Turntable', slug: 'technics-sl1200mk7', description: 'Tocadiscos directo de alta calidad. El estándar para DJ profesionales.', category: 'instruments', subcategory: 'equipment', brand: 'Technics', artist: '', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=500&fit=crop', price: 109900, compareAtPrice: null, stock: 4, avgRating: 4.9, reviewCount: 89 },
    { name: 'Ibanez RG550 Guitarra', slug: 'ibanez-rg550-guitar', description: 'Guitarra eléctrica superstrato. Perfecta para metal y rock moderno.', category: 'instruments', subcategory: 'guitars', brand: 'Ibanez', artist: '', image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&h=500&fit=crop', price: 59999, compareAtPrice: null, stock: 6, avgRating: 4.7, reviewCount: 41 },
    { name: 'Boss RC-500 Loop Station', slug: 'boss-rc500-loop', description: 'Estación de loop profesional con grabación multi-track.', category: 'instruments', subcategory: 'equipment', brand: 'Boss', artist: '', image: 'https://images.unsplash.com/photo-1508700115892-3005b9f4be98?w=500&h=500&fit=crop', price: 34999, compareAtPrice: 39999, stock: 9, avgRating: 4.6, reviewCount: 52 },
    { name: 'Steinway & Sons Piano', slug: 'steinway-sons-piano', description: 'El piano de concierto más prestigioso del mundo. Para profesionales.', category: 'instruments', subcategory: 'keyboards', brand: 'Steinway', artist: '', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&h=500&fit=crop', price: 599999, compareAtPrice: null, stock: 1, avgRating: 5.0, reviewCount: 12 },
    // === OFERTAS (5) ===
    { name: 'Bundle Vinilo Starter Pack', slug: 'bundle-vinilo-starter', description: '5 vinilos clásicos esenciales a precio especial. Ahorra $5,000.', category: 'offers', subcategory: 'bundle', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&h=500&fit=crop', price: 9999, compareAtPrice: 14999, stock: 10, avgRating: 4.9, reviewCount: 87 },
    { name: 'Music Lover Gift Box', slug: 'music-lover-gift-box', description: 'Caja de regalo premium con merch Groove, auriculares y un vinilo exclusivo.', category: 'offers', subcategory: 'gift', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop', price: 12999, compareAtPrice: 17999, stock: 7, avgRating: 4.8, reviewCount: 43 },
    { name: 'Instrumentista Starter Kit', slug: 'instrumentista-starter-kit', description: 'Kit completo para principiantes: guitarra, amplificador, cables y accesorios.', category: 'offers', subcategory: 'bundle', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&h=500&fit=crop', price: 24999, compareAtPrice: 34999, stock: 5, avgRating: 4.7, reviewCount: 31 },
    { name: 'Estudio Casero Pro Pack', slug: 'estudio-casero-pro', description: 'Todo para grabar profesionalmente en casa: micrófono, interfaz, monitores.', category: 'offers', subcategory: 'bundle', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1508700115892-3005b9f4be98?w=500&h=500&fit=crop', price: 49999, compareAtPrice: 69999, stock: 3, avgRating: 4.9, reviewCount: 28 },
    { name: 'Black Friday Vinyl Collection', slug: 'black-friday-vinyl', description: 'Colección limitada de 10 vinilos raros recopilados a precio récord.', category: 'offers', subcategory: 'bundle', brand: 'Groove', artist: '', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop', price: 19999, compareAtPrice: 29999, stock: 8, avgRating: 4.8, reviewCount: 55 },
];
export async function seedDatabase() {
    try {
        console.log('🎵 Inicializando seed de Groove Music Store...');
        const batch = writeBatch(db);
        const productsRef = collection(db, 'products');
        products.forEach((product) => {
            const newDocRef = doc(productsRef);
            batch.set(newDocRef, {
                ...product,
                images: [product.image],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            });
        });
        await batch.commit();
        console.log(`✅ Se añadieron ${products.length} productos a Firestore exitosamente`);
        // Actualizar productos existentes que no tengan el campo images
        const snapshot = await getDocs(productsRef);
        const updateBatch = writeBatch(db);
        let updatedCount = 0;
        snapshot.docs.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            if (data.image && !data.images) {
                updateBatch.update(docSnapshot.ref, {
                    images: [data.image]
                });
                updatedCount++;
            }
        });
        if (updatedCount > 0) {
            await updateBatch.commit();
            console.log(`✅ Se actualizaron ${updatedCount} productos existentes con el campo images`);
        }
        alert(`✅ Base de datos populada: ${products.length} productos añadidos`);
        return true;
    }
    catch (error) {
        console.error('❌ Error al poblar la base de datos:', error);
        alert(`❌ Error: ${error}`);
        throw error;
    }
}
// Para usar en el navegador:
// 1. Abre la consola del navegador (F12)
// 2. Importa y ejecuta:
//    import { seedDatabase } from './scripts/seedDatabase'
//    seedDatabase()
