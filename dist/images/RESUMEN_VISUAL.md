# 🎵 GROOVE MUSIC STORE - Estructura de Imágenes

## 📋 Resumen Ejecutivo

Tu sitio web está listo para recibir **270 imágenes** distribuidas en **8 categorías principales** con **120 productos** (15 por categoría).

---

## 🗂️ Estructura de Carpetas Actual

```
public/images/
│
├── 📚 DOCUMENTACIÓN
│   ├── ESTRUCTURA_IMAGENES.md     ← Guía completa (puedes leer este)
│   ├── GUIA_INTEGRACION.md        ← Cómo actualizar el código
│   └── RESUMEN_VISUAL.md          ← Este archivo
│
├── 🎵 MUSIC
│   ├── vinyl/                     ← 15 vinilos × 2 imágenes = 30 imágenes
│   │   └── README.md
│   └── cd/                        ← 15 CDs × 2 imágenes = 30 imágenes
│       └── README.md
│
├── 👕 MERCH
│   ├── t-shirt/                   ← 15 camisetas × 2 imágenes = 30 imágenes
│   │   └── README.md
│   └── hoodie/                    ← 15 sudaderas × 2 imágenes = 30 imágenes
│       └── README.md
│
├── 🎸 INSTRUMENTS
│   ├── guitars/                   ← 15 guitarras × 3 imágenes = 45 imágenes
│   │   └── README.md
│   ├── keyboards/                 ← 15 teclados × 3 imágenes = 45 imágenes
│   │   └── README.md
│   └── accessories/               ← 15 accesorios × 2 imágenes = 30 imágenes
│       └── README.md
│
└── 🎁 OFFERS
    └── bundle/                    ← 15 paquetes × 2 imágenes = 30 imágenes
        └── README.md
```

---

## 📊 Tabla Resumen

| Categoría | Subcategoría | Ruta | Productos | Imágenes/Prod | Total Imágenes | Estado |
|-----------|--------------|------|-----------|----------------|-----------------|--------|
| Music | Vinyl | `music/vinyl/` | 15 | 2 | 30 | ✅ Carpeta lista |
| Music | CD | `music/cd/` | 15 | 2 | 30 | ✅ Carpeta lista |
| Merch | T-Shirt | `merch/t-shirt/` | 15 | 2 | 30 | ✅ Carpeta lista |
| Merch | Hoodie | `merch/hoodie/` | 15 | 2 | 30 | ✅ Carpeta lista |
| Instruments | Guitars | `instruments/guitars/` | 15 | 3 | 45 | ✅ Carpeta lista |
| Instruments | Keyboards | `instruments/keyboards/` | 15 | 3 | 45 | ✅ Carpeta lista |
| Instruments | Accessories | `instruments/accessories/` | 15 | 2 | 30 | ✅ Carpeta lista |
| Offers | Bundle | `offers/bundle/` | 15 | 2 | 30 | ✅ Carpeta lista |
| **TOTAL** | | | **120** | **2-3** | **270** | **✅ LISTO** |

---

## 🎯 Convención de Nombres (IMPORTANTE)

### Patrón
```
p{NUMERO_PRODUCTO}-{NUMERO_IMAGEN}.jpg
```

### Ejemplos Reales

#### Music - Vinyl
```
p1-01.jpg     → Abbey Road (imagen 1)
p1-02.jpg     → Abbey Road (imagen 2)
p2-01.jpg     → Kind of Blue (imagen 1)
p2-02.jpg     → Kind of Blue (imagen 2)
...
p210-01.jpg   → Careless Whisper (imagen 1)
p210-02.jpg   → Careless Whisper (imagen 2)
```

#### Instruments - Guitars (3 imágenes por producto)
```
p8-01.jpg     → Fender Stratocaster (vista frontal)
p8-02.jpg     → Fender Stratocaster (vista lateral)
p8-03.jpg     → Fender Stratocaster (detalle)
p601-01.jpg   → Gibson Les Paul (vista frontal)
p601-02.jpg   → Gibson Les Paul (vista lateral)
p601-03.jpg   → Gibson Les Paul (detalle)
```

---

## 📐 Tamaños de Imagen Recomendados

| Uso | Dimensión | Formato | Peso | Aspecto |
|-----|-----------|---------|------|---------|
| Grid / Thumbnail | 400 × 400 px | JPG | 50-150 KB | 1:1 |
| Detalle / Galería | 800 × 800 px | JPG | 200-300 KB | 1:1 |
| Optimizado móvil | 600 × 600 px | JPG | 100-200 KB | 1:1 |
| WebP (opcional) | 800 × 800 px | WebP | 80-150 KB | 1:1 |

### Especificaciones Técnicas
- **Compresión JPG:** 85-90% de calidad
- **Ratio:** Máximo 1.5 MB original → 300 KB final
- **Formato preferido:** JPG (mejor compresión)
- **Alternativa moderna:** WebP (menor tamaño)

---

## 🚀 Pasos para Empezar

### 1️⃣ Preparar Imágenes
```
✓ Descarga/diseña 270 imágenes JPG
✓ Redimensiona a 400×400 o 800×800 px
✓ Comprime con TinyPNG o similar
✓ Renombra siguiendo patrón: pXXX-YY.jpg
```

### 2️⃣ Copiar a Carpetas
```
✓ Abre: public/images/
✓ Coloca imágenes en carpetas correspondientes:
  - p1-01.jpg → public/images/music/vinyl/
  - p6-01.jpg → public/images/merch/t-shirt/
  - p8-01.jpg → public/images/instruments/guitars/
  - etc...
```

### 3️⃣ Actualizar Código
```javascript
// Archivo: src/data/mockData.ts
// Cambiar de Unsplash a rutas locales

// ANTES:
images: ['https://images.unsplash.com/photo-...']

// DESPUÉS:
images: [
  '/images/music/vinyl/p1-01.jpg',
  '/images/music/vinyl/p1-02.jpg'
]
```

### 4️⃣ Compilar y Deploy
```bash
npm run build
firebase deploy --only hosting
```

---

## 📸 Dónde se Visualizan las Imágenes

### ProductDetail.tsx
El componente **ProductDetail** (página de detalle de producto) ya está configurado para:

✅ Mostrar imagen principal (`product.images[selectedImage]`)
✅ Galería de thumbnails para cambiar entre imágenes
✅ Soportar múltiples imágenes (2-3 por producto)
✅ Responsive en móvil y desktop

**Flujo:**
1. Usuario navega a `/producto/{slug}`
2. Carga la primera imagen: `product.images[0]`
3. Usuario hace clic en thumbnail
4. Se cambia a otra imagen del array
5. **Todas las imágenes del array se muestran como opciones**

---

## 📁 Ubicaciones en Disco

### Rutas Completas en tu Computadora

```
C:\Users\james\Documents\antigravity\lively-fermi\public\images\
│
├── music\
│   ├── vinyl\           ← Aquí van p1-01.jpg, p1-02.jpg, p2-01.jpg, etc.
│   └── cd\              ← Aquí van p5-01.jpg, p5-02.jpg, p301-01.jpg, etc.
│
├── merch\
│   ├── t-shirt\         ← Aquí van p6-01.jpg, p6-02.jpg, p401-01.jpg, etc.
│   └── hoodie\          ← Aquí van p7-01.jpg, p7-02.jpg, p501-01.jpg, etc.
│
├── instruments\
│   ├── guitars\         ← Aquí van p8-01.jpg, p8-02.jpg, p8-03.jpg, etc.
│   ├── keyboards\       ← Aquí van p9-01.jpg, p9-02.jpg, p9-03.jpg, etc.
│   └── accessories\     ← Aquí van p12-01.jpg, p12-02.jpg, p801-01.jpg, etc.
│
└── offers\
    └── bundle\         ← Aquí van p10-01.jpg, p10-02.jpg, p901-01.jpg, etc.
```

### URLs en el Navegador y Código

```javascript
// En navegador:
http://localhost:5173/checkout
  ↓ (se cargan imágenes de)
/images/music/vinyl/p1-01.jpg

// En mockData.ts:
images: ['/images/music/vinyl/p1-01.jpg']

// En Firebase:
https://groove-d9207.web.app/images/music/vinyl/p1-01.jpg
```

---

## 🎨 IDs de Productos (Mapeo Completo)

### Music - Vinyl
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Abbey Road | p1 | p1-01, p1-02 |
| 2 | Kind of Blue | p2 | p2-01, p2-02 |
| 3 | Random Access Memories | p3 | p3-01, p3-02 |
| 4 | Rumours | p4 | p4-01, p4-02 |
| 5 | Dark Side of the Moon | p11 | p11-01, p11-02 |
| 6-15 | Nuevos (Thriller, Nevermind, etc.) | p201-p210 | pXXX-01, pXXX-02 |

### Music - CD
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | OK Computer | p5 | p5-01, p5-02 |
| 2-15 | Nuevos (Beatles, Sgt. Pepper, etc.) | p301-p314 | pXXX-01, pXXX-02 |

### Merch - T-Shirt
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Groove Vinyl Club | p6 | p6-01, p6-02 |
| 2-15 | Nuevas (Vintage Records, Music Lover, etc.) | p401-p414 | pXXX-01, pXXX-02 |

### Merch - Hoodie
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Dark Frequencies | p7 | p7-01, p7-02 |
| 2-15 | Nuevas (Midnight Sound, Electric Pulse, etc.) | p501-p514 | pXXX-01, pXXX-02 |

### Instruments - Guitars
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Fender Stratocaster | p8 | p8-01, p8-02, p8-03 |
| 2-15 | Nuevas (Gibson, Ibanez, etc.) | p601-p614 | pXXX-01, pXXX-02, pXXX-03 |

### Instruments - Keyboards
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Roland FP-30X | p9 | p9-01, p9-02, p9-03 |
| 2-15 | Nuevas (Yamaha, Korg, etc.) | p701-p714 | pXXX-01, pXXX-02, pXXX-03 |

### Instruments - Accessories
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Audífonos Studio Pro | p12 | p12-01, p12-02 |
| 2-15 | Nuevos (Cables, Micrófono, etc.) | p801-p814 | pXXX-01, pXXX-02 |

### Offers - Bundle
| # | Producto | ID | Imágenes |
|---|----------|-----|----------|
| 1 | Vinilo Starter Pack | p10 | p10-01, p10-02 |
| 2-15 | Nuevos (Guitarist, Recording Kit, etc.) | p901-p914 | pXXX-01, pXXX-02 |

---

## 📚 Archivos de Referencia

Dentro de cada carpeta encontrarás un **README.md** con:
- ✅ Ubicación exacta
- ✅ Convención de nombres para ese nivel
- ✅ Tamaños recomendados
- ✅ Lista de productos esperados
- ✅ Total de imágenes requeridas

**Ejemplos:**
- `public/images/music/vinyl/README.md`
- `public/images/merch/t-shirt/README.md`
- `public/images/instruments/guitars/README.md`

---

## ✅ Checklist Final

```
ESTRUCTURA
☐ Carpetas creadas: ✅ LISTO

ANTES DE AGREGAR IMÁGENES
☐ Descargar/diseñar 270 imágenes JPG
☐ Redimensionar a 400×400 o 800×800 px
☐ Comprimir con TinyPNG
☐ Renombrar archivos (patrón: pXXX-YY.jpg)

AGREGAR IMÁGENES
☐ p1-01 a p210-02 en music/vinyl/ (30 imágenes)
☐ p5-01 a p314-02 en music/cd/ (30 imágenes)
☐ p6-01 a p414-02 en merch/t-shirt/ (30 imágenes)
☐ p7-01 a p514-02 en merch/hoodie/ (30 imágenes)
☐ p8-01 a p614-03 en instruments/guitars/ (45 imágenes)
☐ p9-01 a p714-03 en instruments/keyboards/ (45 imágenes)
☐ p12-01 a p814-02 en instruments/accessories/ (30 imágenes)
☐ p10-01 a p914-02 en offers/bundle/ (30 imágenes)

CÓDIGO
☐ Actualizar mockData.ts con rutas locales
☐ Verificar que URLs coinciden con archivos

DEPLOY
☐ Compilar: npm run build
☐ Probar: npm run dev
☐ Deploy: firebase deploy --only hosting
```

---

## 🔗 Documentación Adicional

1. **ESTRUCTURA_IMAGENES.md**
   - Guía completa de carpetas y nombres
   - Todos los 120 productos listados
   - Tamaños detallados

2. **GUIA_INTEGRACION.md**
   - Cómo actualizar mockData.ts
   - Ejemplos de código
   - Troubleshooting

3. Archivos **README.md** en cada carpeta
   - Instrucciones específicas por categoría
   - Lista de productos para esa carpeta
   - Cantidad de imágenes esperadas

---

## 📞 Soporte Rápido

### "¿Por dónde empiezo?"
→ Lee **ESTRUCTURA_IMAGENES.md**

### "¿Cómo renombro mis imágenes?"
→ Usa patrón: `pXXX-YY.jpg`
→ Ejemplo: `p1-01.jpg`, `p1-02.jpg`

### "¿Dónde copio mis imágenes?"
→ `public/images/{categoria}/{subcategoria}/`
→ Ejemplo: `public/images/music/vinyl/`

### "¿Cómo actualizo el código?"
→ Ve a **GUIA_INTEGRACION.md**
→ Busca la sección: "Actualización en mockData.ts"

### "¿Qué tamaño deben tener mis imágenes?"
→ 400×400 px (grid) o 800×800 px (detalle)
→ Formato: JPG con calidad 85-90%

---

**¡Todo está listo! Ahora solo necesitas agregar tus imágenes.** 🎵

Buena suerte con Groove Music Store 🚀
