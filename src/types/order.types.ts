export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
export type PaymentMethod = 'credit_card' | 'paypal' | 'apple_pay' | 'google_pay';

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export interface OrderItem {
  productId: string;
  variantId?: string;
  title: string;
  sku: string;
  price: number; // in cents at time of purchase
  quantity: number;
  imageUrl?: string;
}

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number; // in cents
  tax: number; // in cents
  shippingCost: number; // in cents
  total: number; // in cents
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentIntentId?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
