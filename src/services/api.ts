// Cliente central de la API REST de Groove (Express + Prisma).
// Reemplaza por completo el acceso a Firebase/Firestore del frontend.
import type { MockProduct, MockArticle, MockComment } from '../data/mockData'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

function authHeaders(): Record<string, string> {
  const token = localStorage.getItem('authToken')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
      ...(options.headers || {}),
    },
  })

  if (!res.ok) {
    let message = `Error ${res.status}`
    try {
      const data = await res.json()
      message = data.message || message
    } catch {
      /* respuesta sin cuerpo JSON */
    }
    throw new Error(message)
  }

  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}

// ─── Productos ──────────────────────────────────────────────
interface ApiProductsResponse {
  productos: MockProduct[]
}
interface ApiProductResponse {
  producto: MockProduct
}

export async function getProducts(
  category?: string,
  page = 1,
  limit = 8,
  prices: string[] = [],
  genres: string[] = []
): Promise<MockProduct[]> {
  const params = new URLSearchParams()

  if (category && category !== 'all' && category !== 'todos') {
    params.append('categoria', category)
  }
  
  // Agregar filtros como arrays serializados
  if (prices.length > 0) params.append('precios', prices.join(','))
  if (genres.length > 0) params.append('generos', genres.join(','))
  
  params.append('pagina', String(page))
  params.append('limite', String(limit))

  const data = await apiFetch<ApiProductsResponse>(`/productos?${params.toString()}`)
  return data.productos ?? []
}

export async function getProductBySlug(slug: string): Promise<MockProduct> {
  const data = await apiFetch<ApiProductResponse>(`/productos/${encodeURIComponent(slug)}`)
  return data.producto
}

// ─── Artículos / Noticias ──────────────────────────────────
interface ApiArticlesResponse {
  articulos: MockArticle[]
}
interface ApiArticleResponse {
  articulo: MockArticle & { comments?: MockComment[] }
}
interface ApiCommentsResponse {
  comentarios: MockComment[]
}
interface ApiCommentResponse {
  comentario: MockComment
}

export async function getArticles(category?: string): Promise<MockArticle[]> {
  const qs = category && category !== 'all' ? `?categoria=${encodeURIComponent(category)}` : ''
  const data = await apiFetch<ApiArticlesResponse>(`/articulos${qs}`)
  return data.articulos
}

export async function getArticleBySlug(
  slug: string
): Promise<{ article: MockArticle; comments: MockComment[] }> {
  const data = await apiFetch<ApiArticleResponse>(`/articulos/${encodeURIComponent(slug)}`)
  const { comments = [], ...article } = data.articulo
  return { article: article as MockArticle, comments }
}

export async function getComments(slug: string): Promise<MockComment[]> {
  const data = await apiFetch<ApiCommentsResponse>(`/articulos/${encodeURIComponent(slug)}/comentarios`)
  return data.comentarios
}

export async function postComment(slug: string, contenido: string): Promise<MockComment> {
  const data = await apiFetch<ApiCommentResponse>(
    `/articulos/${encodeURIComponent(slug)}/comentarios`,
    { method: 'POST', body: JSON.stringify({ contenido }) }
  )
  return data.comentario
}

// ─── Favoritos ─────────────────────────────────────────────
export async function getFavorites(): Promise<string[]> {
  const data = await apiFetch<{ favoritos: string[] }>(`/favoritos`)
  return data.favoritos
}

export async function toggleFavorite(productId: string): Promise<boolean> {
  const data = await apiFetch<{ favorito: boolean }>(
    `/favoritos/${encodeURIComponent(productId)}/toggle`,
    { method: 'POST' }
  )
  return data.favorito
}

// ─── Pedidos / Checkout ────────────────────────────────────
export interface OrderItemInput {
  productId?: string
  variantId?: string
  quantity: number
  name?: string
}
export interface ShippingInput {
  fullName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode?: string
  country?: string
}
export interface CreateOrderInput {
  items: OrderItemInput[]
  shipping: ShippingInput
  paymentMethod: string
  paymentIntentId?: string
}
export interface Order {
  id: string
  status: string
  subtotal: number
  tax: number
  shippingCost: number
  total: number
  items: Array<{ title: string; sku: string; price: number; quantity: number }>
}

export async function createOrder(input: CreateOrderInput): Promise<Order> {
  const data = await apiFetch<{ pedido: Order }>(`/pedidos`, {
    method: 'POST',
    body: JSON.stringify(input),
  })
  return data.pedido
}
