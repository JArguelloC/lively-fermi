import { create } from 'zustand';
import { favoritesService } from '../services/favorites.service';

interface FavoritesState {
  favoriteIds: string[];
  isLoading: boolean;
  isTogglingFavorite: boolean;
  setFavoriteIds: (ids: string[]) => void;
  toggleFavorite: (userId: string, productId: string) => Promise<void>;
  loadFavorites: (userId: string) => Promise<void>;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favoriteIds: [],
  isLoading: false,
  isTogglingFavorite: false,

  setFavoriteIds: (ids) => set({ favoriteIds: ids }),

  loadFavorites: async (userId: string) => {
    set({ isLoading: true });
    try {
      const ids = await favoritesService.getFavoriteProducts(userId);
      set({ favoriteIds: ids, isLoading: false });
    } catch (error) {
      console.error('Error loading favorites:', error);
      set({ isLoading: false });
    }
  },

  toggleFavorite: async (userId: string, productId: string) => {
    set({ isTogglingFavorite: true });
    try {
      await favoritesService.toggleFavoriteProduct(userId, productId);
      const { favoriteIds } = get();
      const newIds = favoriteIds.includes(productId)
        ? favoriteIds.filter(id => id !== productId)
        : [...favoriteIds, productId];
      set({ favoriteIds: newIds, isTogglingFavorite: false });
    } catch (error) {
      console.error('Error toggling favorite:', error);
      set({ isTogglingFavorite: false });
      throw error;
    }
  },

  isFavorite: (productId: string) => {
    return get().favoriteIds.includes(productId);
  },

  clearFavorites: () => set({ favoriteIds: [], isLoading: false, isTogglingFavorite: false }),
}));
