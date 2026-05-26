# 🔧 Guía de Integración - Imágenes Locales

## Cómo Cambiar URLs de Unsplash a Imágenes Locales

### Actualización en mockData.ts

Actualmente, las imágenes usan URLs de Unsplash:
```javascript
images: ['https://images.unsplash.com/photo-1629276301820-0f3eedc29b9c?w=400&h=400&fit=crop']
```

Después de agregar tus imágenes, actualiza a rutas locales:
```javascript
images: [
  '/images/music/vinyl/p1-01.jpg',
  '/images/music/vinyl/p1-02.jpg'
]
```

---

## Archivo: src/data/mockData.ts

### Productos de Música (Vinilos)

**Antes:**
```javascript
{
  id: 'p1', name: 'Abbey Road', slug: 'abbey-road-vinyl',
  category: 'music', subcategory: 'vinyl',
  images: ['https://images.unsplash.com/photo-1629276301820-0f3eedc29b9c?w=400&h=400&fit=crop'],
  // ... resto de campos
}
```

**Después:**
```javascript
{
  id: 'p1', name: 'Abbey Road', slug: 'abbey-road-vinyl',
  category: 'music', subcategory: 'vinyl',
  images: [
    '/images/music/vinyl/p1-01.jpg',
    '/images/music/vinyl/p1-02.jpg'
  ],
  // ... resto de campos
}
```

---

## Estructura Completa de Actualización

### Paso 1: Copiar Imágenes
1. Ve a cada carpeta en `public/images/{categoria}/{subcategoria}/`
2. Copia tus imágenes JPG
3. Renómbralas siguiendo la convención: `p{ID}-{NUM}.jpg`

### Paso 2: Actualizar mockData.ts

**Para MUSIC - VINYL (5 productos existentes + 10 nuevos):**

```javascript
// Productos existentes (actualizar referencias)
{
  id: 'p1', name: 'Abbey Road',
  images: ['/images/music/vinyl/p1-01.jpg', '/images/music/vinyl/p1-02.jpg']
},
{
  id: 'p2', name: 'Kind of Blue',
  images: ['/images/music/vinyl/p2-01.jpg', '/images/music/vinyl/p2-02.jpg']
},
// ... p3, p4, p11

// Productos nuevos (agregar)
{
  id: 'p201', name: 'Thriller', slug: 'thriller-vinyl',
  category: 'music', subcategory: 'vinyl',
  brand: 'Epic Records', artist: 'Michael Jackson', album: 'Thriller',
  genre: ['Pop', 'R&B'], releaseYear: 1982,
  images: ['/images/music/vinyl/p201-01.jpg', '/images/music/vinyl/p201-02.jpg'],
  price: 3299, compareAtPrice: null, currency: 'USD',
  stock: 12, isAvailable: true, isFeatured: false, isOnOffer: false,
  avgRating: 4.9, reviewCount: 287, tags: ['vinilo', 'pop', '180g']
},
// ... agregar p202 a p210
```

---

## Mapeo de IDs para Nuevos Productos

### Music - Vinyl
- Existentes: p1, p2, p3, p4, p11 (5)
- Nuevos: p201-p210 (10)
- Total: 15 ✓

### Music - CD
- Existentes: p5 (1)
- Nuevos: p301-p314 (14)
- Total: 15 ✓

### Merch - T-Shirt
- Existentes: p6 (1)
- Nuevos: p401-p414 (14)
- Total: 15 ✓

### Merch - Hoodie
- Existentes: p7 (1)
- Nuevos: p501-p514 (14)
- Total: 15 ✓

### Instruments - Guitars
- Existentes: p8 (1)
- Nuevos: p601-p614 (14)
- Total: 15 ✓

### Instruments - Keyboards
- Existentes: p9 (1)
- Nuevos: p701-p714 (14)
- Total: 15 ✓

### Instruments - Accessories
- Existentes: p12 (1)
- Nuevos: p801-p814 (14)
- Total: 15 ✓

### Offers - Bundle
- Existentes: p10 (1)
- Nuevos: p901-p914 (14)
- Total: 15 ✓

---

## Visualización en ProductDetail.tsx

El componente **ProductDetail.tsx** ya soporta múltiples imágenes:

```typescript
export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Renderiza la imagen seleccionada
  <img src={product.images[selectedImage]} alt={product.name} />
  
  // Galería para cambiar entre imágenes
  {product.images.map((img, idx) => (
    <button key={idx} onClick={() => setSelectedImage(idx)}>
      <img src={img} alt="" />
    </button>
  ))}
}
```

### Cómo Funciona:
1. Se muestra `product.images[selectedImage]` (imagen seleccionada)
2. Usuario hace clic en thumbnail
3. `setSelectedImage(idx)` cambia el índice
4. Componente re-renderiza con la imagen nueva
5. **Todas las imágenes** en el array `images` se muestran como opciones

---

## Optimización de Imágenes

### Herramientas Recomendadas

1. **TinyPNG** (https://tinypng.com)
   - Comprime sin perder calidad
   - Soporta JPG y PNG

2. **ImageMagick** (CLI)
   ```bash
   convert input.jpg -quality 85 -resize 800x800 output.jpg
   ```

3. **Squoosh** (https://squoosh.app)
   - Editor en línea
   - Comparativa antes/después

### Parámetros Recomendados
```
Formato: JPG
Calidad: 85-90%
Dimensión: 800x800 px
Peso: 200-300 KB máximo
```

---

## Validación de Imágenes

### Checklist Pre-Deploy

```
☐ Todas las carpetas tienen al menos 2 imágenes (30 total por categoría)
☐ Nombres siguen patrón: pXXX-YY.jpg
☐ Tamaño de archivo: 150-300 KB cada una
☐ Dimensiones: 400x400 o 800x800 px
☐ Formato: JPG (preferido) o PNG
☐ No hay caracteres especiales en nombres
☐ Rutas en mockData coinciden con estructura de carpetas
☐ URLs locales: `/images/categoria/subcategoria/nombre.jpg`
```

---

## Troubleshooting

### "Las imágenes no cargan"
1. Verifica que los archivos están en la carpeta correcta
2. Comprueba que los nombres coinciden exactamente (sensible a mayúsculas)
3. Abre DevTools (F12) y revisa Network/Console
4. Asegúrate que las rutas en mockData.ts son correctas

### "Las imágenes se ven pixeladas"
1. Aumenta la dimensión a 800x800 px
2. Reduce la compresión (aumenta calidad JPG)
3. Usa formato WebP para mejor compresión

### "El sitio carga lento"
1. Comprime las imágenes con TinyPNG
2. Usa lazy loading (ya implementado en ProductDetail)
3. Considera servir imágenes desde CDN

---

## Próximos Pasos

1. **Añade tus imágenes** en cada carpeta siguiendo la nomenclatura
2. **Actualiza mockData.ts** con las rutas locales
3. **Compila el proyecto:**
   ```bash
   npm run build
   ```
4. **Prueba localmente:**
   ```bash
   npm run dev
   ```
5. **Deploy a Firebase:**
   ```bash
   firebase deploy --only hosting
   ```

¡Las imágenes se cargarán automáticamente en ProductDetail.tsx! 🎵
