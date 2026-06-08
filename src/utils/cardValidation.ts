/**
 * Utilidades de validación de tarjetas de crédito/débito para el checkout.
 * Todo el formateo y la validación corre en el cliente para dar feedback en tiempo real.
 */

export type CardType = 'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'unknown'

export interface CardTypeInfo {
  type: CardType
  label: string
  /** Largo(s) válido(s) del número (sin espacios). */
  numberLengths: number[]
  /** Largo del código de seguridad (CVC/CVV). */
  cvcLength: number
}

const CARD_TYPES: { type: CardType; label: string; pattern: RegExp; numberLengths: number[]; cvcLength: number }[] = [
  { type: 'visa', label: 'Visa', pattern: /^4/, numberLengths: [16], cvcLength: 3 },
  { type: 'mastercard', label: 'Mastercard', pattern: /^(5[1-5]|2(2[2-9]|[3-6]|7[01]|720))/, numberLengths: [16], cvcLength: 3 },
  { type: 'amex', label: 'American Express', pattern: /^3[47]/, numberLengths: [15], cvcLength: 4 },
  { type: 'discover', label: 'Discover', pattern: /^(6011|65|64[4-9])/, numberLengths: [16], cvcLength: 3 },
  { type: 'diners', label: 'Diners Club', pattern: /^(36|38|30[0-5])/, numberLengths: [14], cvcLength: 3 },
]

/** Quita todo lo que no sea dígito. */
export function onlyDigits(value: string): string {
  return value.replace(/\D/g, '')
}

/** Detecta el tipo de tarjeta a partir de los primeros dígitos. */
export function detectCardType(cardNumber: string): CardTypeInfo {
  const digits = onlyDigits(cardNumber)
  const match = CARD_TYPES.find((c) => c.pattern.test(digits))
  if (!match) {
    return { type: 'unknown', label: '', numberLengths: [16, 19], cvcLength: 3 }
  }
  return { type: match.type, label: match.label, numberLengths: match.numberLengths, cvcLength: match.cvcLength }
}

/** Formatea el número agrupándolo (4-4-4-4, o 4-6-5 para Amex). */
export function formatCardNumber(value: string): string {
  const digits = onlyDigits(value)
  const { type } = detectCardType(digits)
  const maxLen = type === 'amex' ? 15 : type === 'diners' ? 14 : 19
  const trimmed = digits.slice(0, maxLen)

  if (type === 'amex') {
    // 4-6-5
    return trimmed.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/, (_m, a, b, c) =>
      [a, b, c].filter(Boolean).join(' ')
    )
  }
  // Grupos de 4
  return trimmed.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

/** Algoritmo de Luhn. */
export function luhnCheck(cardNumber: string): boolean {
  const digits = onlyDigits(cardNumber)
  if (!digits) return false
  let sum = 0
  let shouldDouble = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = parseInt(digits[i], 10)
    if (shouldDouble) {
      d *= 2
      if (d > 9) d -= 9
    }
    sum += d
    shouldDouble = !shouldDouble
  }
  return sum % 10 === 0
}

/** Valida el número: largo correcto para el tipo + Luhn. */
export function validateCardNumber(value: string): string | null {
  const digits = onlyDigits(value)
  if (!digits) return 'Ingresa el número de tarjeta'
  const info = detectCardType(digits)
  const validLength = info.numberLengths.includes(digits.length)
  if (!validLength) {
    const expected = info.numberLengths.join(' o ')
    return `El número debe tener ${expected} dígitos`
  }
  if (!luhnCheck(digits)) return 'El número de tarjeta no es válido'
  return null
}

/** Formatea la fecha de expiración como MM/AA. */
export function formatExpiry(value: string): string {
  const digits = onlyDigits(value).slice(0, 4)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

/** Valida MM/AA: mes 01-12 y que no esté vencida. */
export function validateExpiry(value: string): string | null {
  const digits = onlyDigits(value)
  if (!digits) return 'Ingresa la fecha de expiración'
  if (digits.length < 4) return 'Formato inválido (MM/AA)'
  const month = parseInt(digits.slice(0, 2), 10)
  const year = parseInt(digits.slice(2, 4), 10)
  if (month < 1 || month > 12) return 'Mes inválido (01-12)'

  const now = new Date()
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return 'La tarjeta está vencida'
  }
  return null
}

/** Valida el CVC/CVV según el tipo de tarjeta (3 o 4 dígitos). */
export function validateCVC(value: string, cardType: CardType = 'unknown'): string | null {
  const digits = onlyDigits(value)
  if (!digits) return 'Ingresa el código de seguridad'
  const expected = cardType === 'amex' ? 4 : 3
  if (cardType === 'unknown') {
    if (digits.length < 3 || digits.length > 4) return 'El código debe tener 3 o 4 dígitos'
    return null
  }
  if (digits.length !== expected) return `El código debe tener ${expected} dígitos`
  return null
}

/** Valida el nombre del titular. */
export function validateCardName(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return 'Ingresa el nombre del titular'
  if (trimmed.length < 3) return 'El nombre es demasiado corto'
  if (!/^[\p{L}\s.'-]+$/u.test(trimmed)) return 'El nombre solo puede contener letras'
  return null
}
