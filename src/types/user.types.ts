export type UserRole = 'customer' | 'editor' | 'admin';

export interface UserAddress {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserPreferences {
  newsletterOptIn: boolean;
  theme: 'light' | 'dark' | 'system';
  currency: string;
  favoriteGenres?: string[];
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  addresses: UserAddress[];
  preferences: UserPreferences;
  createdAt: Date | string;
  lastLoginAt?: Date | string;
  stripeCustomerId?: string;
}
