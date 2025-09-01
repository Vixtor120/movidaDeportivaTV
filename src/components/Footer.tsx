import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiInstagram, 
  FiYoutube,
  FiMail,
  FiPhone
} from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';
import { SiTwitch } from 'react-icons/si';
import type { PageType } from '../types';

interface FooterProps {
  // Mantenemos por compatibilidad pero no lo usamos ya que ahora usamos React Router
}

const Footer: React.FC<FooterProps> = () => {
  // Mapping de tipos de página a rutas
  const pageTypeToRoute: Record<PageType, string> = {
    'inicio': '/',
    'conocenos': '/conocenos',
    'servicios': '/servicios',
    'servicio-streaming': '/servicios/streaming',
    'servicio-mdtv': '/servicios/mdtv',
    'servicio-alquiler-material': '/servicios/alquiler-material',
    'servicio-speakers-animacion': '/servicios/speakers-animacion',
    'contacto': '/contacto',
    'politica-privacidad': '/politica-privacidad',
    'terminos-servicio': '/terminos-servicio',
    'error': '/error'
  }

  const socialLinks = [
    { name: 'Instagram', icon: FiInstagram, url: 'https://www.instagram.com/movidadeportivatv/', color: 'from-pink-500 to-purple-500' },
    { name: 'Twitter', icon: RiTwitterXFill, url: 'https://x.com/movidadeportiva', color: 'from-slate-800 to-black' },
    { name: 'YouTube', icon: FiYoutube, url: 'https://www.youtube.com/@movidadeportivatv', color: 'from-red-600 to-red-700' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@movidadeportivatv', color: 'from-slate-800 to-black' },
    { name: 'Twitch', icon: SiTwitch, url: 'https://www.twitch.tv/movidadeportivatv', color: 'from-purple-600 to-purple-700' }
  ];

  const services = [
    { name: 'Servicio Streaming', page: 'servicio-streaming' as PageType },
    { name: 'MDTV', page: 'servicio-mdtv' as PageType },
    { name: 'Alquiler de Material', page: 'servicio-alquiler-material' as PageType },
    { name: 'Speakers y Animación', page: 'servicio-speakers-animacion' as PageType }
  ];

  const quickLinks = [
    { name: 'Inicio', page: 'inicio' as PageType },
    { name: 'Conócenos', page: 'conocenos' as PageType },
    { name: 'Contacto', page: 'contacto' as PageType }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 relative">
        <motion.div
          className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent"
          animate={{ 
            left: ["-128px", "100%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Información de la empresa */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="Movida Deportiva TV" 
                className="h-12 w-12 rounded-full border-2 border-teal-400 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Movida Deportiva TV
                </h3>
                <p className="text-slate-400 text-sm">Producción Audiovisual Profesional</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Especialistas en retransmisiones en vivo, producción audiovisual y servicios integrales 
              para eventos deportivos y espectáculos. Llevamos tu contenido al siguiente nivel.
            </p>

            {/* Información de contacto */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center text-slate-300 hover:text-teal-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <FiMail className="mr-3 text-teal-400" />
                <a href="mailto:@movidadeportiva.com" className="hover:underline">
                  @movidadeportiva.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-slate-300 hover:text-teal-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <FiPhone className="mr-3 text-teal-400" />
                <a href="tel:+34640925225" className="hover:underline">
                  +34 640 92 52 25
                </a>
              </motion.div>
              
              <div className="text-sm text-slate-400 mt-2">
                Disponibles por correo y teléfono
              </div>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    to={pageTypeToRoute[link.page]}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Enlaces legales */}
            <div className="mt-6 pt-4 border-t border-slate-700">
              <h5 className="text-sm font-semibold text-slate-300 mb-2">Legal</h5>
              <ul className="space-y-1">
                <li>
                  <Link 
                    to="/politica-privacidad"
                    className="text-xs text-slate-500 hover:text-teal-400 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terminos-servicio"
                    className="text-xs text-slate-500 hover:text-teal-400 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Términos de Servicio
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    to={pageTypeToRoute[service.page]}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Horario de atención */}
            <div className="mt-6 pt-4 border-t border-slate-700">
              <h5 className="text-sm font-semibold text-slate-300 mb-2">Atención al Cliente</h5>
              <p className="text-xs text-slate-500">
                Disponible por correo y teléfono
              </p>
              <p className="text-xs text-slate-500">
                Respuesta en menos de 24 horas
              </p>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                📞 +34 666 123 456
              </p>
            </div>
          </motion.div>
        </div>

        {/* Redes sociales y separador */}
        <motion.div 
          className="mt-12 pt-8 border-t border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm font-medium">Síguenos:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-sm">
                © 2025 Movida Deportiva TV. Todos los derechos reservados.
              </p>
              <p className="text-slate-600 text-xs mt-1">
                Hecho con ❤️ para la comunidad deportiva
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Efectos de fondo */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-4 w-32 h-32 bg-gradient-to-br from-teal-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
