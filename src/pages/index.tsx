import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

interface IndexProps {
  // Mantenemos por compatibilidad pero no se usa ya que usamos React Router
}

const Index: React.FC<IndexProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-54">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section - Mejorado con imágenes */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido principal */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Movida Deportiva TV</span>
              </motion.h1>
              <motion.h2 
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-300 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Producción Audiovisual & Retransmisiones en Vivo
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Contamos historias que conectan, inspiran y trascienden. Somos especialistas en 
                <span className="text-teal-400 font-semibold"> producción audiovisual</span> y 
                <span className="text-cyan-400 font-semibold"> retransmisiones deportivas</span>, transformando conceptos en experiencias visuales únicas.
              </motion.p>
              
              {/* Botones de acción */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link to="/conocenos">
                  <motion.button
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Conoce Nuestro Equipo
                  </motion.button>
                </Link>
                <motion.button
                  className="bg-transparent border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const serviciosSection = document.getElementById('servicios-section');
                    serviciosSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ver Nuestros Servicios
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Galería de imágenes del equipo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Imagen grande principal */}
                <motion.div 
                  className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="/images/imagen1.png" 
                    alt="Equipo Movida Deportiva TV en acción"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <p className="text-white font-semibold p-4">Nuestro equipo en acción</p>
                  </div>
                </motion.div>
                
                {/* Imágenes pequeñas */}
                {[2, 3, 4, 5].map((num, index) => (
                  <motion.div 
                    key={num}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={`/images/imagen${num}.png`} 
                      alt={`Equipo trabajando ${num}`}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Elemento decorativo */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Sección de Servicios */}
        <motion.section
          id="servicios-section"
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {/* Título de Servicios */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Nuestros <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Servicios</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Desde streaming profesional hasta producción completa - Tenemos todo lo que necesitas
            </motion.p>
          </motion.div>

          {/* Grid de Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Servicio Streaming */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Servicio Streaming</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  <strong className="text-teal-400">Streaming profesional</strong> en múltiples plataformas. 
                  YouTube, Facebook, Instagram, Twitch y más. Calidad 4K, audio profesional y chat interactivo.
                </p>
                <Link to="/servicios/streaming">
                  <motion.button
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Alquiler de Material */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.7 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📹</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Alquiler de Material</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  <strong className="text-cyan-400">Equipos profesionales</strong> de última generación. 
                  Cámaras 4K, audio inalámbrico, iluminación LED, drones y sistemas de streaming completos.
                </p>
                <Link to="/servicios/alquiler-material">
                  <motion.button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* MDTV */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.7 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">MDTV</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Producción audiovisual completa. <strong className="text-purple-400">Desde la idea hasta la pantalla</strong>, 
                  creamos contenido que conecta con tu audiencia.
                </p>
                <Link to="/servicios/mdtv">
                  <motion.button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Speakers y Animación */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.7 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎤</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Speakers y Animación</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Servicios de <strong className="text-green-400">locución profesional </strong> 
                   y animación para dar vida a tus eventos con energía y profesionalismo.
                </p>
                <Link to="/servicios/speakers-animacion">
                  <motion.button
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

        </motion.section>

        {/* Sección del reproductor de Twitch */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Síguenos en <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Twitch</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.7 }}
          >
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <iframe
                  src="https://player.twitch.tv/?channel=movidadeportivatv&parent=localhost&parent=127.0.0.1&parent=your-domain.com&autoplay=false"
                  className="w-full h-80 lg:h-96"
                  frameBorder="0"
                  allowFullScreen={true}
                  scrolling="no"
                  title="Twitch Stream - Movida Deportiva TV"
                ></iframe>
              </div>
            </div>

            {/* Chat */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 h-80 lg:h-96">
                <iframe
                  src="https://www.twitch.tv/embed/movidadeportivatv/chat?parent=localhost&parent=127.0.0.1&parent=your-domain.com&darkpopout"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  title="Twitch Chat - Movida Deportiva TV"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Sección Conócenos - Más detallada */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          {/* Título Principal */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Conócenos</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              Contamos historias que conectan, inspiran y trascienden
            </motion.p>
          </motion.div>

          {/* Contenido principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            
            {/* Información sobre la empresa */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8, duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Historia</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                En Movida Deportiva TV, somos un equipo creativo especializado en la 
                <strong className="text-teal-400"> producción audiovisual</strong>, apasionado por dar vida 
                a ideas a través de imágenes y sonido.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Desde nuestros inicios, hemos trabajado en proyectos innovadores que abarcan desde 
                <strong className="text-cyan-400"> cine, televisión y comerciales</strong>, hasta contenido 
                digital para plataformas.
              </p>
              
              {/* Nuestra misión resumida */}
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50">
                <h4 className="text-lg font-semibold text-white mb-2">Nuestra Misión</h4>
                <p className="text-slate-400 text-sm">
                  Transformar conceptos en experiencias visuales únicas, fusionando tecnología avanzada 
                  con narrativas cautivadoras.
                </p>
              </div>
            </motion.div>

            {/* Qué nos distingue */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.0, duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Qué nos Distingue</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Calidad cinematográfica</h4>
                    <p className="text-slate-400 text-sm">Utilizamos equipos y técnicas de nivel profesional</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-lg">♥</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pasión por el detalle</h4>
                    <p className="text-slate-400 text-sm">Cuidamos todos los detalles de nuestras emisiones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Enfoque personalizado</h4>
                    <p className="text-slate-400 text-sm">Cada proyecto refleja la visión exacta que buscas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Nuestro portafolio */}
          <motion.div 
            className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-teal-700/50 max-w-4xl mx-auto text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.7 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
            >
              Nuestro Compromiso de Excelencia
            </motion.h3>
            <motion.p 
              className="text-slate-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.6, duration: 0.6 }}
            >
              Nuestro portafolio incluye proyectos para <strong className="text-teal-400">grandes marcas</strong>, 
              <strong className="text-cyan-400"> pequeñas empresas</strong> y <strong className="text-purple-400">creadores independientes</strong>, 
              siempre con el mismo compromiso de excelencia.
            </motion.p>
            <motion.p 
              className="text-xl font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.6 }}
            >
              En Movida Deportiva TV, <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">tu historia merece ser contada de la mejor manera posible</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.0, duration: 0.6 }}
            >
              <Link to="/conocenos">
                <motion.button
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conoce más sobre nosotros
                </motion.button>
              </Link>
              <motion.button
                className="bg-transparent border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const serviciosSection = document.getElementById('servicios-section');
                  serviciosSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver nuestros servicios
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Sección de Colaboradores */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-white text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 0.6 }}
          >
            Nuestros <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Colaboradores</span>
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.6, duration: 0.6 }}
          >
            Algunos de nuestros clientes y colaboradores que han confiado en nosotros
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.8, duration: 0.8 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((logoNum, index) => (
              <motion.div
                key={logoNum}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.0 + index * 0.1, duration: 0.5 }}
              >
                <img 
                  src={`/images/logo${logoNum}.png`}
                  alt={`Colaborador ${logoNum}`}
                  className="max-w-full max-h-16 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
