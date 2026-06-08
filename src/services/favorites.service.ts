import { db } from './firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from 'firebase/firestore';

const toggleFavoriteProduct = async (userId: string, productId: string): Promise<void> => {
  if (!userId) return;
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    const favorites = userData.preferences?.favoriteProducts || [];

    if (favorites.includes(productId)) {
      // Remove from favorites
      await updateDoc(userRef, {
        'preferences.favoriteProducts': arrayRemove(productId)
      });
    } else {
      // Add to favorites
      await updateDoc(userRef, {
        'preferences.favoriteProducts': arrayUnion(productId)
      });
    }
  } else {
    // Si no existe el documento de usuario, crearlo al añadir favoritos
    await setDoc(userRef, {
      preferences: {
        favoriteProducts: [productId]
      },
      createdAt: new Date()
    }, { merge: true });
  }
};

const getFavoriteProducts = async (userId: string): Promise<string[]> => {
  if (!userId) return [];
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    return userData.preferences?.favoriteProducts || [];
  } else {
    // Si no existe, retornar lista vacía en lugar de lanzar excepción
    return [];
  }
};

export const favoritesService = {
  toggleFavoriteProduct,
  getFavoriteProducts,
};
