import { Link } from 'react-router-dom'
import { Truck, RefreshCw, ShieldCheck, Package } from 'lucide-react'
import SEOMeta from '../../components/ui/SEOMeta'

const policies = [
  {
    icon: Truck,
    title: 'Envíos',
    description: 'Procesamos pedidos en días hábiles y notificamos cuando el paquete sale de tienda.'
  },
  {
    icon: RefreshCw,
    title: 'Devoluciones',
    description: 'Aceptamos devoluciones dentro de un plazo razonable, siempre que el producto esté sin uso.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantía',
    description: 'Los productos con falla de fábrica cuentan con revisión y seguimiento del equipo de soporte.'
  },
  {
    icon: Package,
    title: 'Seguimiento',
    description: 'Cada orden incluye estado de preparación, envío y entrega para que el cliente esté informado.'
  }
]

const faq = [
  {
    question: '¿Cuánto tarda en llegar mi pedido?',
    answer: 'El tiempo de entrega depende de la zona, pero la referencia general es de 2 a 5 días hábiles.'
  },
  {
    question: '¿Puedo devolver un producto?',
    answer: 'Sí, siempre que el artículo conserve su estado original y se solicite dentro del plazo de devolución.'
  },
  {
    question: '¿Qué hago si llega dañado?',
    answer: 'Contacta a soporte con fotos del empaque y del producto para iniciar la revisión correspondiente.'
  }
]

export default function EnviosDevoluciones() {
  return (
    <>
      <SEOMeta
        title="Envíos y Devoluciones"
        description="Políticas de envío y devoluciones de Groove Music Store: referencias de tiempos de entrega, cambios y soporte de seguimiento."
      />
      <div className="bg-groove-bg-primary text-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-groove-gold uppercase tracking-[0.35em] text-xs mb-4">Soporte</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Envíos y Devoluciones</h1>
          <p className="text-groove-text-secondary text-base sm:text-lg max-w-2xl">
            Página ficticia de políticas de envío y devoluciones para el footer. Sirve como referencia informativa dentro de la tienda Groove.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {policies.map((policy) => {
            const Icon = policy.icon

            return (
              <article key={policy.title} className="rounded-3xl border border-white/10 bg-groove-bg-secondary/80 p-6 sm:p-7">
                <div className="w-12 h-12 rounded-2xl bg-groove-gold/15 text-groove-gold flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{policy.title}</h2>
                <p className="text-groove-text-secondary text-sm leading-6">{policy.description}</p>
              </article>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
            <div className="space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-groove-text-secondary text-sm leading-6">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-groove-bg-secondary/80 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Resumen de política ficticia</h2>
              <ul className="space-y-3 text-groove-text-secondary text-sm leading-6">
                <li>• Los pedidos se preparan por orden de compra.</li>
                <li>• Los cambios dependen del estado del producto y del tiempo transcurrido.</li>
                <li>• El soporte confirma cada solicitud antes de avanzar con el proceso.</li>
              </ul>
            </div>
            <Link to="/contacto" className="inline-flex items-center justify-center rounded-xl bg-groove-gold px-5 py-3 text-sm font-semibold text-black hover:bg-groove-gold-light transition-colors w-fit">
              Contactar soporte
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:border-groove-gold/40 hover:text-groove-gold transition-colors">
            Volver al inicio
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
