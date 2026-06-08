import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react'
import SEOMeta from '../../components/ui/SEOMeta'

const contactChannels = [
  {
    title: 'WhatsApp',
    description: 'Atención rápida para consultas de pedidos, stock y productos.',
    action: 'Abrir WhatsApp',
    href: 'https://wa.me/qr/R5F66LK4XA2JI1',
    icon: MessageCircle
  },
  {
    title: 'Correo electrónico',
    description: 'Escríbenos para soporte general o seguimiento de compras.',
    action: 'Escribir correo',
    href: 'mailto:soporte@groove-music.store',
    icon: Mail
  }
]

const supportDetails = [
  { label: 'Horario', value: 'Lunes a viernes, 9:00 a 18:00' },
  { label: 'Respuesta estimada', value: 'Entre 24 y 48 horas hábiles' },
  { label: 'Cobertura', value: 'Pedidos, cambios, devoluciones y seguimiento' }
]

export default function Contacto() {
  return (
    <>
      <SEOMeta
        title="Contacto"
        description="Encuentra los canales de soporte de Groove Music Store: WhatsApp, correo electrónico y respuesta rápida para consultas."
      />
      <div className="bg-groove-bg-primary text-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-groove-gold uppercase tracking-[0.35em] text-xs mb-4">Soporte</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-groove-text-secondary text-base sm:text-lg max-w-2xl">
            Esta es una página ficticia de soporte para que puedas encontrar canales de ayuda, horarios y referencias de contacto dentro de Groove.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {contactChannels.map((channel) => {
            const Icon = channel.icon

            return (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-3xl border border-white/10 bg-groove-bg-secondary/80 p-6 sm:p-8 hover:border-groove-gold/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-groove-gold/15 text-groove-gold flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold mb-2">{channel.title}</h2>
                    <p className="text-groove-text-secondary text-sm leading-6">{channel.description}</p>
                    <span className="inline-flex mt-4 text-sm font-semibold text-groove-gold">{channel.action}</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {supportDetails.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-groove-text-secondary mb-2">{item.label}</p>
              <p className="font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-6 mt-10">
          <div className="rounded-3xl border border-white/10 bg-groove-bg-secondary/80 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4">¿Qué puedes consultar aquí?</h2>
            <ul className="space-y-3 text-groove-text-secondary leading-6">
              <li>• Estado de pedidos y cambios de dirección antes del despacho.</li>
              <li>• Disponibilidad de stock, tallas y variantes de productos.</li>
              <li>• Solicitudes de devolución, garantía y soporte postventa.</li>
              <li>• Dudas sobre pago, confirmación y verificación de cuenta.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-groove-bg-secondary/80 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-groove-gold mb-3">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Atención ficticia</span>
              </div>
              <p className="text-groove-text-secondary text-sm leading-6">
                Esta sección funciona como soporte de ejemplo. Puedes usarla como base para integrar un formulario real más adelante.
              </p>
            </div>
            <div className="flex items-start gap-2 text-sm text-groove-text-secondary">
              <MapPin className="w-4 h-4 text-groove-gold mt-0.5" />
              <span>Sede de referencia: tienda online Groove Music Store.</span>
            </div>
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
