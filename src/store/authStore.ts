import { create } from 'zustand';

export interface Usuario {
  id: string;
  email: string;
  nombre: string;
  rol: 'cliente' | 'editor' | 'admin';
  emailVerificado: boolean;
  foto?: string;
  telefono?: string;
}

interface AuthState {
  currentUser: Usuario | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  setUser: (user: Usuario | null, token?: string) => void;
  setLoading: (isLoading: boolean) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
  loadFromStorage: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  isLoading: true,
  isAuthenticated: false,
  token: null,
  
  setUser: (user, token) => {
    if (user && token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    set({ 
      currentUser: user, 
      isAuthenticated: !!user, 
      isLoading: false,
      token: token || null
    });
  },
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setToken: (token) => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    set({ token });
  },
  
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    set({ currentUser: null, isAuthenticated: false, token: null });
  },
  
  loadFromStorage: () => {
    const token = localStorage.getItem('authToken');
    const userStr = localStorage.getItem('currentUser');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        set({ 
          currentUser: user, 
          isAuthenticated: true, 
          token,
          isLoading: false 
        });
      } catch {
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        set({ isLoading: false });
      }
    } else {
      set({ isLoading: false });
    }
  }
}));
