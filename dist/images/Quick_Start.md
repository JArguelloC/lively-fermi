# ⚡ QUICK START - Guía Rápida de Imágenes

## 🎯 En 5 Minutos

### 1. ¿Dónde van mis imágenes?
```
public/images/
├── music/vinyl/         ← Vinilos aquí
├── music/cd/            ← CDs aquí
├── merch/t-shirt/       ← Camisetas aquí
├── merch/hoodie/        ← Sudaderas aquí
├── instruments/guitars/ ← Guitarras aquí
├── instruments/keyboards/← Teclados aquí
├── instruments/accessories/← Accesorios aquí
└── offers/bundle/       ← Paquetes aquí
```

### 2. ¿Cómo nombro mis archivos?
```
Patrón: p{ID}-{NUMERO}.webp

Ejemplos:
p1-01.webp   → Producto 1, imagen 1 (frontal)
p1-02.webp   → Producto 1, imagen 2 (lateral)
p1-03.webp   → Producto 1, imagen 3 (detalle)
p8-03.webp   → Producto 8, imagen 3 (closeup)
p210-02.webp → Producto 210, imagen 2
```

### 3. ¿Qué tamaño?
```
Dimensión: 800x800 px (detalle galería estilo Amazon)
Formato: WebP
Calidad: 80%
Peso: 150-250 KB por imagen
```

### 4. ¿Cuántas imágenes por producto?
```
Vinilos:     3 imágenes cada uno × 10 = 30 imágenes
CDs:         3 imágenes cada uno × 10 = 30 imágenes
Camisetas:   3 imágenes cada uno × 10 = 30 imágenes
Sudaderas:   3 imágenes cada uno × 10 = 30 imágenes
Guitarras:   3 imágenes cada uno × 10 = 30 imágenes
Teclados:    3 imágenes cada uno × 10 = 30 imágenes
Accesorios:  3 imágenes cada uno × 10 = 30 imágenes
Paquetes:    3 imágenes cada uno × 10 = 30 imágenes

TOTAL: 240 imágenes (todas en WebP)
```

### 5. ¿Cuáles son los IDs?

#### Music
```
Vinyl:  p1-p10 (10 productos)
CD:     p201-p210 (10 productos)
```

#### Merch
```
T-Shirt: p301-p310 (10 productos)
Hoodie:  p401-p410 (10 productos)
```

#### Instruments
```
Guitars:      p501-p510 (10 productos)
Keyboards:    p601-p610 (10 productos)
Accessories:  p701-p710 (10 productos)
```

#### Offers
```
Bundle: p801-p810 (10 productos)
```

---

## 🚀 5 Pasos

### Paso 1: Descarga Imágenes
- Descarga o diseña 270 imágenes JPG
- Redimensiona a 800×800 px
- Comprime con TinyPNG

### Paso 2: Renombra
```
Abbey Road frente.jpg  →  p1-01.jpg
Abbey Road dorso.jpg   →  p1-02.jpg

Fender frente.jpg      →  p8-01.jpg
Fender lado.jpg        →  p8-02.jpg
Fender detalle.jpg     →  p8-03.jpg
```

### Paso 3: Copia a Carpetas
```
p1-01.webp, p1-02.webp, p1-03.webp → public/images/music/vinyl/
p201-01.webp, p201-02.webp, p201-03.webp → public/images/music/cd/
p301-01.webp, p301-02.webp, p301-03.webp → public/images/merch/t-shirt/
p401-01.webp, p401-02.webp, p401-03.webp → public/images/merch/hoodie/
p501-01.webp, p501-02.webp, p501-03.webp → public/images/instruments/guitars/
p601-01.webp, p601-02.webp, p601-03.webp → public/images/instruments/keyboards/
p701-01.webp, p701-02.webp, p701-03.webp → public/images/instruments/accessories/
p801-01.webp, p801-02.webp, p801-03.webp → public/images/offers/bundle/
```

### Paso 4: Actualiza mockData.ts
```javascript
// Cambiar esta URL:
images: ['https://images.unsplash.com/photo-...']

// Por esta:
images: [
  '/images/music/vinyl/p1-01.jpg',
  '/images/music/vinyl/p1-02.jpg'
]
```

### Paso 5: Deploy
```bash
npm run build
firebase deploy --only hosting
```

---

## 📸 Ejemplo Completo

### Vinil #1 (Abbey Road)
```
Carpeta: public/images/music/vinyl/
Archivos:
  - p1-01.jpg  (portada frontal)
  - p1-02.jpg  (portada trasera)
```

En `mockData.ts`:
```javascript
{
  id: 'p1',
  name: 'Abbey Road',
  slug: 'abbey-road-vinyl',
  category: 'music',
  subcategory: 'vinyl',
  // ... más campos ...
  images: [
    '/images/music/vinyl/p1-01.jpg',
    '/images/music/vinyl/p1-02.jpg'
  ],
  // ... más campos ...
}
```

En el navegador en ProductDetail.tsx:
- Muestra: `/images/music/vinyl/p1-01.jpg` (imagen 1)
- Usuario hace clic en thumbnail
- Muestra: `/images/music/vinyl/p1-02.jpg` (imagen 2)

---

## 🔍 Validación Rápida

```bash
# Verifica que la estructura existe
ls public/images/

# Debería mostrar:
# ESTRUCTURA_IMAGENES.md
# GUIA_INTEGRACION.md
# RESUMEN_VISUAL.md
# Quick_Start.md
# instruments/ merch/ music/ offers/
```

---

## 📋 Hoja de Cálculo

Si prefieres usar Excel para rastrear (80 productos × 3 imágenes = 240 WebP):

| Producto | ID | Carpeta | Imagen 1 | Imagen 2 | Imagen 3 | ✓ |
|----------|----|---------|-----------|-----------|-----------|----|
| Abbey Road | p1 | music/vinyl | p1-01.webp | p1-02.webp | p1-03.webp | ☐ |
| Kind of Blue | p2 | music/vinyl | p2-01.webp | p2-02.webp | p2-03.webp | ☐ |
| ... | ... | ... | ... | ... | ... | ... |
| OK Computer | p201 | music/cd | p201-01.webp | p201-02.webp | p201-03.webp | ☐ |
| ... | ... | ... | ... | ... | ... | ... |

---

## ❌ Errores Comunes

### ❌ "Las imágenes no cargan"
```
Verificar:
1. ¿Archivos en carpeta correcta?
2. ¿Nombres exactos (sensible mayúsculas)?
3. ¿Rutas en mockData.ts correctas?
```

### ❌ "Ruta: `/images/music/vinyl/p1-01.jpg`"
✅ Correcto: comienza con `/images/`
❌ Incorrecto: `./images/`, `public/images/`, C:\...

### ❌ "Archivo: `P1-01.JPG`"
✅ Correcto: `p1-01.jpg` (minúsculas)
❌ Incorrecto: `P1-01.JPG`, `p1_01.jpg`

### ❌ "Ubicación en mockData.ts"
```
❌ MALO:
images: ['images/music/vinyl/p1-01.jpg']

✅ BUENO:
images: ['/images/music/vinyl/p1-01.jpg']
```

---

## 📚 Lee Después

1. **ESTRUCTURA_IMAGENES.md** - Guía completa
2. **GUIA_INTEGRACION.md** - Actualizar código
3. **RESUMEN_VISUAL.md** - Detalles finales

---

## 🆘 Necesitas Ayuda?

### Pregunta: "¿Puedo usar PNG o JPG en lugar de WebP?"
**Respuesta:** WebP es mejor (más pequeño), pero puedes usar fallbacks con `<picture>`

### Pregunta: "¿Puedo usar diferentes tamaños?"
**Respuesta:** Sí, pero 800×800 px es lo ideal

### Pregunta: "¿Las imágenes se cargan automáticamente?"
**Respuesta:** Sí, ProductDetail.tsx las detecta automáticamente del array `images`

### Pregunta: "¿Necesito cambiar código HTML?"
**Respuesta:** No, solo actualiza los arrays en mockData.ts

---

## ✅ Resumen Ultra-Rápido

```
1. Descarga 240 imágenes WebP (800×800 px, 80% calidad)
2. Renombra: pXXX-YY.webp (3 imágenes por producto)
3. Copia a: public/images/{categoria}/{subcategoria}/
4. Actualiza: mockData.ts (URLs locales en .webp)
5. Deploy: firebase deploy --only hosting

¡Listo! ProductDetail.tsx mostrará galería estilo Amazon 🎵
```

---

**¡Eso es todo! Ahora a trabajar.** 🚀
