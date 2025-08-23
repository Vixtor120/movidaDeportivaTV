import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiInstagram, 
  FiYoutube
} from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';
import { SiTwitch } from 'react-icons/si';
import type { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    servicios: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar dropdowns móviles
  const toggleMobileDropdown = (menu: 'servicios') => {
    setMobileDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const socialLinks = [
    { name: 'Instagram', icon: FiInstagram, url: 'https://www.instagram.com/movidadeportivatv/' },
    { name: 'Twitter', icon: RiTwitterXFill, url: 'https://x.com/movidadeportiv' },
    { name: 'YouTube', icon: FiYoutube, url: 'https://www.youtube.com/@movidadeportivatv' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@movidadeportivatv' },
    { name: 'Twitch', icon: SiTwitch, url: 'https://www.twitch.tv/movidadeportivatv' }
  ];

  return (
    <motion.header 
      className="fixed w-full top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar con redes sociales - Solo visible cuando no se hace scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: -30,
              height: 0,
              paddingTop: 0,
              paddingBottom: 0
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.8, 0.25, 1],
              opacity: { duration: 0.3 },
              y: { duration: 0.4 },
              height: { delay: 0.2, duration: 0.3 }
            }}
            className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-300 text-sm py-2 border-b border-slate-700/50 relative z-30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent"></div>
            <motion.div 
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <span className="hidden lg:block text-slate-400 text-xs">Síguenos en:</span>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      title={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar central con logo - Aquí aparecerán los elementos de navegación al hacer scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="bg-gradient-to-r from-white via-slate-50 to-white border-b border-teal-200/30 relative overflow-visible shadow-xl shadow-teal-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50/20 to-transparent"></div>
        <nav className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}>
          {/* Brand con logo animado - Se oculta cuando el menú móvil está abierto */}
          <motion.div 
            className={`relative z-50 flex items-center gap-4 group transition-opacity duration-300 ${
              open ? 'md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto' : 'opacity-100'
            }`}
          >
            <Link to="/" className="flex items-center gap-4 group">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className={`relative shrink-0 transition-all duration-300 ${
                  isScrolled 
                    ? '-mt-6 -mb-6 h-20 md:h-24' 
                    : '-mt-12 -mb-12 h-32 md:h-36 lg:h-40'
                }`}
              >
              <AnimatePresence>
              </AnimatePresence>
              <motion.img
                src="/images/logo.png"
                alt="Movida Deportiva TV"
                className={`h-full w-auto object-contain select-none transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} drop-shadow-[0_20px_40px_rgba(13,148,136,0.4)] ring-3 ring-white rounded-full bg-gradient-to-br from-white to-slate-50 p-1`}
                onLoad={() => setImageLoaded(true)}
                whileHover={{
                  filter: "brightness(1.1)",
                  transition: { duration: 0.2 }
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-xl -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  scale: 1.2,
                  transition: { duration: 0.4 }
                }}
              />
            </motion.div>
            
            <motion.div 
              className={`hidden sm:block transition-all duration-300 ${
                isScrolled ? 'scale-75' : 'scale-100'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div className="relative">
              </motion.div>
              
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-slate-800 via-teal-500 to-cyan-500 mt-2 relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div
                  className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/90 to-transparent"
                  style={{ left: 0 }}
                  animate={{ 
                    left: ["-64px", "100%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
            </Link>
          </motion.div>

          {/* Navigation Links - Con emojis añadidos y tamaño reducido */}
          <motion.ul 
            className="hidden md:flex items-center justify-center gap-6 xl:gap-8 flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { key: 'inicio', name: 'Inicio', emoji: '🏠' },
              { key: 'conocenos', name: 'Conócenos', emoji: '👥' },
              { key: 'servicios', name: 'Servicios', emoji: '📡' },
              { key: 'contacto', name: 'Contacto', emoji: '📞' }
            ].map((item, index) => (
              <motion.li key={item.key} className="relative">
                {item.key === 'servicios' ? (
                  <div className="relative group">
                    <motion.div 
                      className={`flex items-center gap-2 text-base md:text-lg font-semibold transition-all duration-300 cursor-default ${currentPage === item.key ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-800'}`}
                    >
                      <span className="text-sm">{item.emoji}</span>
                      <span className="relative z-10">
                        {item.name}
                      </span>
                      <motion.div
                        animate={{ rotate: 0 }}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      >
                        <FiChevronDown className="w-3 h-3" />
                      </motion.div>
                      {currentPage === item.key && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg -z-10 blur-sm"
                          layoutId="activeBackground"
                        />
                      )}
                    </motion.div>
                    
                    <motion.span 
                      className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-500 ${currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                    />
                    
                    {/* Dropdown Servicios - Con emojis añadidos */}
                    <motion.div 
                      className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 top-full mt-2 min-w-[22rem] rounded-xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl ring-1 ring-slate-200 p-3 transition-all duration-300 z-50"
                    >
                      <div className="absolute -top-1 left-4 w-2 h-2 bg-white border-l border-t border-slate-200 rotate-45"></div>
                      
                      {/* Servicio Streaming */}
                      <motion.div
                        className="block rounded-lg px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 mb-1"
                        whileHover={{ x: 4 }}
                      >
                        <Link 
                          to="/servicios/streaming"
                          className="block"
                        >
                          <div className="font-medium flex items-center gap-2">
                            <span className="text-sm">📡</span>
                            <span className="text-sm">Servicio Streaming</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 ml-6">
                            Retransmisión en vivo personalizada
                          </div>
                        </Link>
                      </motion.div>

                      {/* MDTV */}
                      <motion.div
                        className="block rounded-lg px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 mb-1"
                        whileHover={{ x: 4 }}
                      >
                        <Link 
                          to="/servicios/mdtv"
                          className="block"
                        >
                          <div className="font-medium flex items-center gap-2">
                            <span className="text-sm">📺</span>
                            <span className="text-sm">MDTV</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 ml-6">
                            Canal exclusivo de deportes
                          </div>
                        </Link>
                      </motion.div>

                      {/* Alquiler de Material */}
                      <motion.div
                        className="block rounded-lg px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 mb-1"
                        whileHover={{ x: 4 }}
                      >
                        <Link 
                          to="/servicios/alquiler-material"
                          className="block"
                        >
                          <div className="font-medium flex items-center gap-2">
                            <span className="text-sm">📹</span>
                            <span className="text-sm">Alquiler de Material</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 ml-6">
                            Equipos profesionales audiovisuales
                          </div>
                        </Link>
                      </motion.div>

                      {/* Speakers y Animación */}
                      <motion.div
                        className="block rounded-lg px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        <Link 
                          to="/servicios/speakers-animacion"
                          className="block"
                        >
                          <div className="font-medium flex items-center gap-2">
                            <span className="text-sm">🎤</span>
                            <span className="text-sm">Speakers y Animación</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 ml-6">
                            Presentadores y animadores profesionales
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                ) : (
                  <motion.div
                    className={`flex items-center gap-2 text-base md:text-lg font-semibold transition-all duration-300 relative ${currentPage === item.key ? 'text-slate-800' : 'text-slate-600 hover:text-slate-800'}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link 
                      to={item.key === 'inicio' ? '/' : `/${item.key}`}
                      className="flex items-center gap-2 transition-all duration-300 relative"
                    >
                      <span className="text-sm">{item.emoji}</span>
                      <span className="relative z-10">
                        {item.name}
                      </span>
                      {currentPage === item.key && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg -z-10 blur-sm"
                          layoutId="activeBackground"
                        />
                      )}
                      
                      <motion.span 
                        className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-500 ${currentPage === item.key ? 'w-full' : 'w-0 hover:w-full'}`} 
                      />
                    </Link>
                  </motion.div>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile toggle animado */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-3 text-slate-600 hover:text-slate-800 hover:bg-gradient-to-br hover:from-slate-100 hover:to-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500/50 transition-all duration-300"
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Abrir menú"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiMenu className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </nav>
      </motion.div>

      {/* Navbar inferior decorativo - Sin elementos de navegación */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: 40,
              height: 0,
              paddingTop: 0,
              paddingBottom: 0,
              marginBottom: 0
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
              opacity: { duration: 0.3 },
              y: { duration: 0.4 },
              height: { delay: 0.15, duration: 0.35 }
            }}
            className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-teal-700/20 relative overflow-visible z-10 shadow-2xl shadow-teal-500/10 overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-900/10 to-transparent"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 0.95
              }}
              transition={{ 
                duration: 0.4
              }}
            ></motion.div>
            <motion.nav 
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                y: 20
              }}
              transition={{ 
                duration: 0.4,
                delay: 0.1
              }}
            >
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Línea de acento con animación */}
      <motion.div 
        className="h-1 w-full bg-gradient-to-r from-slate-800 via-teal-400 to-cyan-500 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        {/* Efecto de brillo que se mueve por toda la línea */}
        <motion.div
          className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent"
          animate={{ 
            left: ["-128px", "100%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
            
            {/* Panel del menú */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-2xl border-b border-slate-200 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con logo pequeño */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center border border-slate-200">
                    <img
                      src="/images/logo.png"
                      alt="MDTV"
                      className="w-6 h-6 object-contain rounded-full"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-slate-800">Menú</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <FiX className="h-5 w-5 text-slate-600" />
                </button>
              </div>

              {/* Enlaces de navegación con dropdowns */}
              <div className="p-4 space-y-1">
                {/* Inicio */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 * 0.05 }}
                >
                  <Link
                    to="/"
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                      currentPage === 'inicio' 
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">🏠</span>
                    <span className="font-medium">Inicio</span>
                  </Link>
                </motion.div>

                {/* Conócenos */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 * 0.05 }}
                >
                  <Link
                    to="/conocenos"
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                      currentPage === 'conocenos' 
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">👥</span>
                    <span className="font-medium">Conócenos</span>
                  </Link>
                </motion.div>

                {/* Servicios con dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 * 0.05 }}
                >
                  <button
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${
                      currentPage === 'servicios' 
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => toggleMobileDropdown('servicios')}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📡</span>
                      <span className="font-medium">Servicios</span>
                    </div>
                    <motion.div
                      animate={{ rotate: mobileDropdowns.servicios ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {mobileDropdowns.servicios && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-1 space-y-1 overflow-hidden"
                      >
                        <Link 
                          to="/servicios/streaming"
                          className="block py-2 px-4 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                          onClick={() => setOpen(false)}
                        >
                          <span>📡</span>
                          Servicio Streaming
                        </Link>
                        <Link 
                          to="/servicios/mdtv"
                          className="block py-2 px-4 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                          onClick={() => setOpen(false)}
                        >
                          <span>📺</span>
                          MDTV
                        </Link>
                        <Link 
                          to="/servicios/alquiler-material"
                          className="block py-2 px-4 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                          onClick={() => setOpen(false)}
                        >
                          <span>📹</span>
                          Alquiler de Material
                        </Link>
                        <Link 
                          to="/servicios/speakers-animacion"
                          className="block py-2 px-4 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                          onClick={() => setOpen(false)}
                        >
                          <span>🎤</span>
                          Speakers y Animación
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contacto */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 * 0.05 }}
                >
                  <Link
                    to="/contacto"
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                      currentPage === 'contacto' 
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">📞</span>
                    <span className="font-medium">Contacto</span>
                  </Link>
                </motion.div>
              </div>

              {/* Redes sociales en la parte inferior */}
              <div className="px-4 pb-4 pt-2 border-t border-slate-100">
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 hover:text-slate-800 transition-all duration-200"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
