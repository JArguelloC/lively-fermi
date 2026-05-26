import { create } from 'zustand';
export const useAuthStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    isAuthenticated: false,
    setUser: (user) => set({ currentUser: user, isAuthenticated: !!user, isLoading: false }),
    setLoading: (isLoading) => set({ isLoading }),
    logout: () => set({ currentUser: null, isAuthenticated: false })
}));
