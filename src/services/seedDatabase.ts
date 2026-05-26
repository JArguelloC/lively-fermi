/**
 * SEED DATABASE - Inyección Masiva Inteligente de Datos
 * 
 * Importa productos de mockData.ts y los sube a Firestore con:
 * - Stock inicial realista (5-15)
 * - Rutas de imágenes locales respetadas
 * - Ofertas generadas dinámicamente para /tienda/ofertas
 * - Sincronización con la colección 'products'
 */

import { db } from './firebase.ts'
import { writeBatch, collection, doc, getDoc, Timestamp } from 'firebase/firestore'
import { mockProducts, type MockProduct } from '../data/mockData.ts'

interface FirestoreProduct extends MockProduct {
  stock: number
  onSale?: boolean
  discountPrice?: number
  lastUpdated: Date
}

/**
 * Generar stock inicial realista (5-15)
 */
function generateInitialStock(): number {
  return Math.floor(Math.random() * 11) + 5 // 5-15
}

/**
 * Generar precio con descuento (10-35% de descuento)
 */
function generateDiscountPrice(originalPrice: number): number {
  const discountPercentage = Math.floor(Math.random() * 26) + 10 // 10-35%
  const discountAmount = Math.floor((originalPrice * discountPercentage) / 100)
  return Math.max(originalPrice - discountAmount, Math.floor(originalPrice * 0.65)) // Mínimo 65% del precio original
}

/**
 * OPERACIÓN PRINCIPAL: Inyectar todos los productos en Firestore
 * - Itera todos los productos de mockData
 * - Asigna stock inicial
 * - Respeta rutas de imágenes
 * - Crea batch de escritura para optimización
 * 
 * Retorna reporte de éxito/actualización
 */
export async function seedProductsToFirestore(): Promise<{
  success: boolean
  productsCreated: number
  productsUpdated: number
  errors: string[]
  timestamp: Date
}> {
  const productsRef = collection(db, 'products')
  const batch = writeBatch(db)
  let productsCreated = 0
  let productsUpdated = 0
  const errors: string[] = []

  try {
    console.log('🚀 Iniciando inyección de productos en Firestore...')
    console.log(`📊 Total de productos a procesar: ${mockProducts.length}`)

    for (const product of mockProducts) {
      try {
        const productRef = doc(productsRef, product.id)
        const existingDoc = await getDoc(productRef)

        // Crear documento Firestore con stock inicial
        const firestoreProduct: FirestoreProduct = {
          ...product,
          stock: generateInitialStock(),
          lastUpdated: new Date(),
          // Preservar rutas de imágenes locales
          images: product.images || []
        }

        batch.set(productRef, firestoreProduct, { merge: true })

        if (existingDoc.exists()) {
          productsUpdated++
        } else {
          productsCreated++
        }

        console.log(`✅ Producto procesado: ${product.name} (${product.id})`)
      } catch (error) {
        const errorMsg = `Error procesando producto ${product.id}: ${error instanceof Error ? error.message : String(error)}`
        errors.push(errorMsg)
        console.error(`❌ ${errorMsg}`)
      }
    }

    // Ejecutar batch de escritura
    await batch.commit()
    console.log(`✅ Batch de escritura completado`)

    return {
      success: true,
      productsCreated,
      productsUpdated,
      errors,
      timestamp: new Date()
    }
  } catch (error) {
    const errorMsg = `Error crítico en seedProductsToFirestore: ${error instanceof Error ? error.message : String(error)}`
    console.error(`🔥 ${errorMsg}`)
    errors.push(errorMsg)

    return {
      success: false,
      productsCreated,
      productsUpdated,
      errors,
      timestamp: new Date()
    }
  }
}

/**
 * OPERACIÓN SECUNDARIA: Generar ofertas mezcladas
 * - Toma productos aleatorios de cada categoría
 * - Añade propiedades 'onSale' y 'discountPrice'
 * - Los guarda en la misma colección 'products'
 * - Permite que /tienda/ofertas renderice desde Firestore
 */
export async function generateOffersInFirestore(): Promise<{
  success: boolean
  offersCreated: number
  errors: string[]
  timestamp: Date
}> {
  const productsRef = collection(db, 'products')
  const batch = writeBatch(db)
  let offersCreated = 0
  const errors: string[] = []

  try {
    console.log('🏷️  Generando ofertas mezcladas...')

    // Agrupar productos por categoría
    const categories = [...new Set(mockProducts.map(p => p.category))]
    console.log(`📂 Categorías encontradas: ${categories.join(', ')}`)

    for (const category of categories) {
      const categoryProducts = mockProducts.filter(p => p.category === category)
      
      // Seleccionar 2-4 productos aleatorios por categoría para ofrecer
      const offersCount = Math.floor(Math.random() * 3) + 2 // 2-4
      const shuffled = [...categoryProducts].sort(() => 0.5 - Math.random())
      const selectedForOffers = shuffled.slice(0, Math.min(offersCount, categoryProducts.length))

      for (const product of selectedForOffers) {
        try {
          const productRef = doc(productsRef, product.id)
          const discountPrice = generateDiscountPrice(product.price)
          const originalStock = generateInitialStock()

          // Crear/actualizar con propiedades de oferta
          const offerProduct: FirestoreProduct = {
            ...product,
            stock: originalStock,
            onSale: true,
            discountPrice,
            lastUpdated: new Date()
          }

          batch.set(productRef, offerProduct, { merge: true })
          offersCreated++

          console.log(
            `✨ Oferta creada: ${product.name} | ` +
            `Precio: $${(product.price / 100).toFixed(2)} → $${(discountPrice / 100).toFixed(2)}`
          )
        } catch (error) {
          const errorMsg = `Error creando oferta para ${product.id}: ${error instanceof Error ? error.message : String(error)}`
          errors.push(errorMsg)
          console.error(`❌ ${errorMsg}`)
        }
      }
    }

    await batch.commit()
    console.log(`✅ Ofertas generadas exitosamente: ${offersCreated}`)

    return {
      success: true,
      offersCreated,
      errors,
      timestamp: new Date()
    }
  } catch (error) {
    const errorMsg = `Error crítico en generateOffersInFirestore: ${error instanceof Error ? error.message : String(error)}`
    console.error(`🔥 ${errorMsg}`)
    errors.push(errorMsg)

    return {
      success: false,
      offersCreated,
      errors,
      timestamp: new Date()
    }
  }
}

/**
 * OPERACIÓN TERCIARIA: Inyectar noticias de ejemplo
 * - Crea 5 noticias de ejemplo en la colección 'news'
 * - Con categorías variadas y comentarios
 */
export async function seedNewsToFirestore(): Promise<{
  success: boolean
  newsCreated: number
  errors: string[]
  timestamp: Date
}> {
  const newsRef = collection(db, 'news')
  const batch = writeBatch(db)
  let newsCreated = 0
  const errors: string[] = []

  const exampleNews = [
    {
      title: 'Nuevo álbum de The Beatles en vinilo remasterizado',
      slug: 'nuevo-album-beatles-vinilo',
      excerpt: 'Una edición limitada del álbum icónico ahora disponible con sonido de estudio mejorado',
      content: 'Después de años de espera, finalmente tenemos acceso a una nueva remasterización del legendario álbum de The Beatles. Esta edición especial en vinilo presenta el sonido original del estudio con tecnología de audio moderna, ofreciendo a los coleccionistas y amantes de la música una experiencia sin precedentes.',
      author: 'Groove Editor',
      authorId: 'admin',
      category: 'review',
      tags: ['beatles', 'vinilo', 'remastered', 'música'],
      coverImage: 'https://images.unsplash.com/photo-1470225620780-dba2d36d1b46?w=600',
      viewCount: 234,
      comments: []
    },
    {
      title: 'Guía completa: Cómo elegir tu primera guitarra acústica',
      slug: 'guia-primera-guitarra-acustica',
      excerpt: 'Consejos esenciales para músicos principiantes que buscan invertir en su primer instrumento',
      content: 'Elegir tu primera guitarra acústica es una decisión importante. En esta guía completa, exploraremos los diferentes tipos de maderas, tamaños de cuerpo, y marcas recomendadas para principiantes. Descubrirás qué características buscar y cómo evitar errores comunes.',
      author: 'Groove Editor',
      authorId: 'admin',
      category: 'feature',
      tags: ['guitarra', 'principiantes', 'guía', 'instrumentos'],
      coverImage: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600',
      viewCount: 567,
      comments: []
    },
    {
      title: 'Festival de Música 2024: Todo lo que necesitas saber',
      slug: 'festival-musica-2024',
      excerpt: 'Información completa sobre el próximo gran festival de verano con artistas internacionales',
      content: 'El festival de música más esperado del año está a la vuelta de la esquina. Con más de 50 artistas confirmados, múltiples escenarios y experiencias inmersivas, este evento promete ser memorable. Te contamos todos los detalles: horarios, artistas, camping, y más.',
      author: 'Groove Editor',
      authorId: 'admin',
      category: 'news',
      tags: ['festival', 'conciertos', 'verano', 'eventos'],
      coverImage: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600',
      viewCount: 1203,
      comments: []
    },
    {
      title: 'Entrevista exclusiva: Conoce al productor de jazz emergente del año',
      slug: 'entrevista-productor-jazz',
      excerpt: 'Conversamos con el talento detrás de los beats que están revolucionando el jazz contemporáneo',
      content: 'En esta entrevista exclusiva, el productor ganador del premio Grammy nos habla sobre su proceso creativo, influencias musicales, y los proyectos que tiene en mente para este año. Descubre cómo está fusionando el jazz clásico con elementos electrónicos modernos.',
      author: 'Groove Editor',
      authorId: 'admin',
      category: 'interview',
      tags: ['jazz', 'productor', 'entrevista', 'música electrónica'],
      coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
      viewCount: 892,
      comments: []
    },
    {
      title: 'Lanzamiento mundial: Nuevo sintetizador revolucionario',
      slug: 'lanzamiento-sintetizador-nuevo',
      excerpt: 'La industria de síntesis de sonido se transforma con esta innovación tecnológica sin precedentes',
      content: 'Un fabricante de instrumentos musicales ha desvelado un sintetizador completamente revolucionario que cambiará el panorama de la música electrónica. Con 500 osciladores simultáneos y una interfaz AI-powered, este instrumento marca el comienzo de una nueva era.',
      author: 'Groove Editor',
      authorId: 'admin',
      category: 'premiere',
      tags: ['sintetizador', 'tecnología', 'electrónico', 'innovación'],
      coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600',
      viewCount: 1456,
      comments: []
    }
  ]

  try {
    console.log('📰 Inyectando noticias de ejemplo...')

    for (const news of exampleNews) {
      try {
        const newsDoc = doc(newsRef)
        batch.set(newsDoc, {
          ...news,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        })
        newsCreated++
        console.log(`✅ Noticia inyectada: ${news.title}`)
      } catch (error) {
        const errorMsg = `Error creando noticia ${news.title}: ${error instanceof Error ? error.message : String(error)}`
        errors.push(errorMsg)
        console.error(`❌ ${errorMsg}`)
      }
    }

    await batch.commit()
    console.log(`✅ ${newsCreated} noticias inyectadas exitosamente`)

    return {
      success: true,
      newsCreated,
      errors,
      timestamp: new Date()
    }
  } catch (error) {
    const errorMsg = `Error crítico en seedNewsToFirestore: ${error instanceof Error ? error.message : String(error)}`
    console.error(`🔥 ${errorMsg}`)
    errors.push(errorMsg)

    return {
      success: false,
      newsCreated,
      errors,
      timestamp: new Date()
    }
  }
}

/**
 * OPERACIÓN COMPLETA: Ejecutar inyección + ofertas + noticias en secuencia
 * Ideal para inicialización de base de datos desde CLI o hook de app
 */
export async function seedDatabaseComplete(): Promise<{
  productsResult: Awaited<ReturnType<typeof seedProductsToFirestore>>
  offersResult: Awaited<ReturnType<typeof generateOffersInFirestore>>
  newsResult: Awaited<ReturnType<typeof seedNewsToFirestore>>
  totalSuccess: boolean
}> {
  console.log('═══════════════════════════════════════════════════')
  console.log('🎵 GROOVE MUSIC STORE - DATABASE SEEDING')
  console.log('═══════════════════════════════════════════════════')

  const productsResult = await seedProductsToFirestore()
  console.log('\n')
  const offersResult = await generateOffersInFirestore()
  console.log('\n')
  const newsResult = await seedNewsToFirestore()

  console.log('\n═══════════════════════════════════════════════════')
  console.log('📊 REPORTE FINAL')
  console.log('═══════════════════════════════════════════════════')
  console.log(`✅ Productos Creados: ${productsResult.productsCreated}`)
  console.log(`🔄 Productos Actualizados: ${productsResult.productsUpdated}`)
  console.log(`✨ Ofertas Generadas: ${offersResult.offersCreated}`)
  console.log(`📰 Noticias Inyectadas: ${newsResult.newsCreated}`)
  console.log(`⚠️  Errores Totales: ${productsResult.errors.length + offersResult.errors.length + newsResult.errors.length}`)
  console.log('═══════════════════════════════════════════════════\n')

  return {
    productsResult,
    offersResult,
    newsResult,
    totalSuccess: productsResult.success && offersResult.success && newsResult.success
  }
}

/**
 * CLI: Ejecutar seed desde terminal
 * Uso: npx ts-node src/services/seedDatabase.ts
 */
async function runSeed() {
  const result = await seedDatabaseComplete()
  process.exit(result.totalSuccess ? 0 : 1)
}

// Detectar si se ejecuta directamente (compatible con ts-node y node)
const args = process.argv.slice(1)
const isDirectExecution = args.some(arg => arg.includes('seedDatabase'))

if (isDirectExecution) {
  runSeed().catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
}
