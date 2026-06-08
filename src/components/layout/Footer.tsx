import { Link } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-groove-bg-secondary border-t border-white/5 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <img src="/logo.png" srcSet="/logo.png 48w, /logo.png 72w" sizes="(max-width: 640px) 32px, 48px" alt="Groove Logo" width={48} height={48} loading="lazy" className="h-12 w-auto mb-4" />
            <p className="text-groove-text-secondary max-w-sm mb-6">
              Tu tienda especializada en música, vinilos, instrumentos y la mejor cultura musical.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/groov_eec?igsh=ZTc3eHBqaHlqa3o1" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-groove-gold hover:text-black transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/qr/R5F66LK4XA2JI1" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-groove-gold hover:text-black transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-groove-text-secondary">
              <li><Link to="/tienda" className="hover:text-groove-gold transition-colors">Tienda</Link></li>
              <li><Link to="/noticias" className="hover:text-groove-gold transition-colors">Noticias</Link></li>
              <li><Link to="/login" className="hover:text-groove-gold transition-colors">Mi Cuenta</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-groove-text-secondary">
              <li><Link to="/contacto" className="hover:text-groove-gold transition-colors">Contacto</Link></li>
              <li><Link to="/envios" className="hover:text-groove-gold transition-colors">Envíos y Devoluciones</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-sm text-groove-text-secondary">
          <p>© {new Date().getFullYear()} Groove Music Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
