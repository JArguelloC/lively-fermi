/**
 * Hook: useInitializeProducts
 *
 * El catálogo ahora vive en la API REST (Express + Prisma) y se siembra con
 * `npm run db:seed` en el backend, por lo que el frontend ya no necesita
 * inicializar ninguna base de datos. Se mantiene este hook como no-op para no
 * romper su uso en App.tsx.
 */
import { useState, useEffect } from 'react'

export function useInitializeProducts() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    setIsInitialized(true)
  }, [])

  return { isInitialized, error: null as string | null }
}

export default useInitializeProducts
