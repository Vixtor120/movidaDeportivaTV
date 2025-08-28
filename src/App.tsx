import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Index from './pages'
import Conocenos from './pages/Conocenos'
import ServicioStreaming from './pages/ServicioStreaming'
import ServicioMDTV from './pages/ServicioMDTV'
import ServicioAlquilerMaterial from './pages/ServicioAlquilerMaterial'
import ServicioSpeakersAnimacion from './pages/ServicioSpeakersAnimacion'
import Contacto from './pages/Contacto'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import TerminosServicio from './pages/TerminosServicio'
import Error from './pages/Error'
import type { PageType } from './types'

// Mapping de rutas a tipos de página
const routeToPageType: Record<string, PageType> = {
	'/': 'inicio',
	'/conocenos': 'conocenos',
	'/servicios': 'servicios',
	'/servicios/streaming': 'servicio-streaming',
	'/servicios/mdtv': 'servicio-mdtv',
	'/servicios/alquiler-material': 'servicio-alquiler-material',
	'/servicios/speakers-animacion': 'servicio-speakers-animacion',
	'/contacto': 'contacto',
	'/politica-privacidad': 'politica-privacidad',
	'/terminos-servicio': 'terminos-servicio',
	'/error': 'error'
}



// Componente para manejar la navegación
const AppContent = () => {
	const location = useLocation()

	const currentPage: PageType = routeToPageType[location.pathname] || 'inicio'



	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
			<ScrollToTop />
			<Navbar currentPage={currentPage} />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/conocenos" element={<Conocenos />} />
				<Route path="/servicios/streaming" element={<ServicioStreaming />} />
				<Route path="/servicios/mdtv" element={<ServicioMDTV />} />
				<Route path="/servicios/alquiler-material" element={<ServicioAlquilerMaterial />} />
				<Route path="/servicios/speakers-animacion" element={<ServicioSpeakersAnimacion />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
				<Route path="/terminos-servicio" element={<TerminosServicio />} />
				{/* Ruta para servicios generales - redirige a inicio por ahora */}
				<Route path="/servicios" element={<Index />} />
				{/* Rutas de error */}
				<Route path="/error" element={<Error />} />
				<Route path="/403" element={<Error errorCode="403" />} />
				<Route path="/404" element={<Error errorCode="404" />} />
				{/* Ruta fallback para páginas no encontradas */}
				<Route path="*" element={<Error errorCode="404" />} />
			</Routes>
		</div>
	)
}

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	)
}

export default App
