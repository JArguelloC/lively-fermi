import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, ShoppingBag, Users, FileText, Settings, Search, Bell, Menu } from 'lucide-react'
import { mockProducts, mockArticles, formatPrice } from '../../data/mockData'

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-groove-bg-secondary border-r border-white/5 flex flex-col transition-all duration-300`}>
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          {sidebarOpen && <Link to="/" className="text-xl font-display font-bold text-groove-gold tracking-widest">GROOVE</Link>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg text-groove-text-secondary" aria-label={sidebarOpen ? 'Cerrar barra lateral' : 'Abrir barra lateral'}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', label: 'Resumen', icon: LayoutDashboard },
            { id: 'products', label: 'Productos', icon: ShoppingBag },
            { id: 'news', label: 'Noticias', icon: FileText },
            { id: 'users', label: 'Usuarios', icon: Users },
            { id: 'settings', label: 'Ajustes', icon: Settings },
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              aria-label={item.label}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${activeTab === item.id ? 'bg-groove-gold/10 text-groove-gold' : 'text-groove-text-secondary hover:text-white hover:bg-white/5'}`}>
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/5 bg-groove-bg-secondary/50 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-groove-text-secondary" />
              <input type="text" placeholder="Buscar pedidos, productos..." aria-label="Buscar pedidos o productos"
                className="w-full bg-groove-bg-primary border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-groove-gold" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-groove-text-secondary hover:text-white" aria-label="Notificaciones">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop" alt="Admin" width={32} height={32} loading="lazy" className="w-8 h-8 rounded-full border border-groove-gold" />
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Resumen General</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Ventas de hoy', value: '$4,230.00', trend: '+12%' },
                  { label: 'Pedidos activos', value: '24', trend: '+5%' },
                  { label: 'Visitas', value: '1,204', trend: '-2%' },
                  { label: 'Artículos leídos', value: '8,401', trend: '+18%' },
                ].map(stat => (
                  <div key={stat.label} className="bg-groove-bg-secondary p-6 rounded-2xl border border-white/5">
                    <p className="text-sm text-groove-text-secondary mb-2">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-groove-bg-secondary rounded-2xl border border-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                  <h3 className="font-bold">Pedidos Recientes</h3>
                  <button className="text-sm text-groove-gold hover:underline">Ver todos</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-groove-text-secondary">
                      <tr><th className="p-4 font-medium">Pedido ID</th><th className="p-4 font-medium">Cliente</th><th className="p-4 font-medium">Estado</th><th className="p-4 font-medium">Total</th></tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { id: '#ORD-001', name: 'Laura Gómez', status: 'Pagado', total: 4599 },
                        { id: '#ORD-002', name: 'Carlos Díaz', status: 'Enviado', total: 12900 },
                        { id: '#ORD-003', name: 'Ana Silva', status: 'Pendiente', total: 8499 },
                      ].map(order => (
                        <tr key={order.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-medium">{order.id}</td>
                          <td className="p-4">{order.name}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Pagado' ? 'bg-green-500/20 text-green-400' : order.status === 'Enviado' ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'
                            }`}>{order.status}</span>
                          </td>
                          <td className="p-4 font-bold">{formatPrice(order.total)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-display font-bold">Inventario de Productos</h2>
                <button className="bg-groove-gold text-black font-bold px-4 py-2 rounded-xl text-sm">Añadir Producto</button>
              </div>
              <div className="bg-groove-bg-secondary rounded-2xl border border-white/5 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-groove-text-secondary">
                    <tr><th className="p-4 font-medium">Producto</th><th className="p-4 font-medium">Categoría</th><th className="p-4 font-medium">Stock</th><th className="p-4 font-medium">Precio</th><th className="p-4 font-medium"></th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {mockProducts.slice(0, 8).map(p => (
                      <tr key={p.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 flex items-center gap-3">
                          <img src={p.images[0]} alt="" width={40} height={40} loading="lazy" className="w-10 h-10 rounded bg-black object-cover" />
                          <div><p className="font-medium">{p.name}</p><p className="text-xs text-groove-text-secondary">{p.artist || p.brand}</p></div>
                        </td>
                        <td className="p-4 capitalize text-groove-text-secondary">{p.category}</td>
                        <td className="p-4">
                          <span className={p.stock < 10 ? 'text-red-400 font-medium' : ''}>{p.stock}</span>
                        </td>
                        <td className="p-4">{formatPrice(p.price)}</td>
                        <td className="p-4 text-right"><button className="text-groove-gold text-xs hover:underline">Editar</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-display font-bold">Portal de Noticias</h2>
                <button className="bg-groove-gold text-black font-bold px-4 py-2 rounded-xl text-sm">Nueva Noticia</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockArticles.map(a => (
                  <div key={a.id} className="bg-groove-bg-secondary p-4 rounded-xl border border-white/5 flex gap-4">
                    <img src={a.coverImageUrl} alt="" width={96} height={96} loading="lazy" className="w-24 h-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <span className="text-xs text-groove-purple font-medium">{a.category}</span>
                      <h4 className="font-bold text-sm line-clamp-2 mt-1 mb-2">{a.title}</h4>
                      <div className="flex justify-between items-center text-xs text-groove-text-secondary">
                        <span>{a.views.toLocaleString()} views</span>
                        <button className="text-groove-gold hover:underline">Editar</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
