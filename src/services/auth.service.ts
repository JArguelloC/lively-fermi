// Servicio de autenticación con JWT + backend Neon

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

interface LoginResponse {
  token: string;
  usuario: {
    id: string;
    email: string;
    nombre: string;
    rol: 'cliente' | 'editor' | 'admin';
    emailVerificado: boolean;
  };
}

interface RegisterData {
  nombre: string;
  email: string;
  password: string;
}

export const signIn = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error al iniciar sesión');
  }

  return response.json();
};

export const signUp = async (data: RegisterData): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error al registrar');
  }

  return response.json();
};

export const getCurrentUser = async (token: string) => {
  const response = await fetch(`${API_URL}/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error('No autenticado');
  }

  return response.json();
};

export const signOut = async () => {
  // Simplemente eliminar el token del cliente
  localStorage.removeItem('authToken');
  localStorage.removeItem('currentUser');
};

export const resetPassword = async (email: string) => {
  const response = await fetch(`${API_URL}/auth/request-reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error al solicitar reset de contraseña');
  }

  return response.json();
};

export const verifyEmail = async (token: string) => {
  const response = await fetch(`${API_URL}/auth/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error al verificar email');
  }

  return response.json();
};
