// Servicio de favoritos sobre la API REST de Groove.
// El usuario se identifica por el token JWT; el parámetro userId se mantiene por
// compatibilidad con las llamadas existentes pero el backend usa el token.
import { getFavorites, toggleFavorite } from './api'

const toggleFavoriteProduct = async (_userId: string, productId: string): Promise<void> => {
  await toggleFavorite(productId)
}

const getFavoriteProducts = async (userId: string): Promise<string[]> => {
  if (!userId) return []
  return getFavorites()
}

export const favoritesService = {
  toggleFavoriteProduct,
  getFavoriteProducts,
}
