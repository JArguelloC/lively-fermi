import { useEffect, useState } from 'react'

export function usePayPalLazy() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Detectar cuando el usuario scroll a checkout o abre modal de pago
    const handlePayPalTrigger = () => {
      if (!isLoaded) {
        loadPayPalScript()
      }
    }

    // Escuchar eventos de navigation
    window.addEventListener('groove:load-paypal', handlePayPalTrigger)
    
    // Cargar si estamos ya en /checkout
    if (window.location.pathname.includes('checkout')) {
      loadPayPalScript()
    }

    return () => window.removeEventListener('groove:load-paypal', handlePayPalTrigger)
  }, [isLoaded])

  const loadPayPalScript = async () => {
    try {
      const script = document.createElement('script')
      script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD&components=buttons`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      setIsLoaded(true)
    } catch (err) {
      console.error('Failed to load PayPal:', err)
    }
  }

  return { isLoaded }
}
