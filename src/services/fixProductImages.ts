import { db } from './firebase'
import { collection, getDocs, writeBatch } from 'firebase/firestore'

/**
 * Reparación agresiva: Actualiza TODOS los productos que no tengan imágenes
 * Se ejecuta al cargar la app
 */
export async function fixProductImages() {
  try {
    const productsRef = collection(db, 'products')
    const snapshot = await getDocs(productsRef)
    const batch = writeBatch(db)
    let updatedCount = 0

    console.log(`📊 Verificando ${snapshot.docs.length} productos...`)

    snapshot.docs.forEach((docSnapshot) => {
      const data = docSnapshot.data()
      const hasNoImages = !data.images || !Array.isArray(data.images) || data.images.length === 0
      const hasImageField = data.image && typeof data.image === 'string'
      
      if (hasNoImages && hasImageField) {
        batch.update(docSnapshot.ref, {
          images: [data.image]
        })
        updatedCount++
        console.log(`🔧 Reparando: ${data.name || data.slug || 'Sin nombre'} - agregando imagen`)
      }
    })

    if (updatedCount > 0) {
      await batch.commit()
      console.log(`✅ Actualizados ${updatedCount} productos con imágenes`)
    } else {
      console.log('✅ Todos los productos tienen imágenes')
    }
    return updatedCount
  } catch (error) {
    console.error('❌ Error reparando imágenes:', error)
    return -1
  }
}
