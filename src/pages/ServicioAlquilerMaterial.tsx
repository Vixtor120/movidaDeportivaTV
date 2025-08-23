import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCamera, FiMic, FiRadio, FiSettings, FiCheckCircle, FiTool,
  FiMonitor, FiZap, FiShield, FiClock, FiVideo, FiHeadphones
} from 'react-icons/fi';
import Footer from '../components/Footer';

interface ServicioAlquilerMaterialProps {}

const ServicioAlquilerMaterial: React.FC<ServicioAlquilerMaterialProps> = () => {
  const equiposIncluidos = [
    {
      title: "Cámaras HD/4K",
      description: "Para capturar cada detalle del evento con la máxima claridad.",
      icon: FiCamera,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sistemas de Audio",
      description: "Micrófonos y equipos de sonido de alta calidad para una transmisión clara y nítida.",
      icon: FiMic,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sistemas de Transmisión",
      description: "Equipos de enlace por satélite y microondas para una transmisión en tiempo real sin interrupciones.",
      icon: FiRadio,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Soporte Técnico",
      description: "Asistencia de técnicos especializados para la instalación, operación y mantenimiento de todos los equipos.",
      icon: FiSettings,
      color: "from-orange-500 to-red-500"
    }
  ];

  const caracteristicas = [
    {
      icon: FiVideo,
      title: "Última Generación",
      description: "Equipos de tecnología avanzada y reciente"
    },
    {
      icon: FiShield,
      title: "Alta Calidad",
      description: "Garantía de rendimiento profesional"
    },
    {
      icon: FiZap,
      title: "Sin Interrupciones",
      description: "Transmisión continua y estable"
    },
    {
      icon: FiClock,
      title: "Asistencia Técnica",
      description: "Soporte especializado durante tu evento"
    }
  ];

  const ventajas = [
    {
      title: "Equipos Profesionales",
      description: "Material de broadcasting de alta gama utilizado por profesionales del sector",
      icon: FiCamera,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Instalación Completa",
      description: "Nuestro equipo se encarga de toda la instalación y configuración técnica",
      icon: FiTool,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Soporte en Vivo",
      description: "Técnicos especializados disponibles durante todo el evento",
      icon: FiHeadphones,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Adaptabilidad Total",
      description: "Configuramos el equipo según las necesidades específicas de tu evento",
      icon: FiMonitor,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-56">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <FiCamera className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Alquiler de</span> Material
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Alquiler de Material para Retransmisiones Deportivas en Directo
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-400 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Equipos de última generación para retransmisiones deportivas de alta calidad
          </motion.p>
        </motion.div>

        {/* Descripción principal */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <motion.p 
              className="text-lg text-slate-300 leading-relaxed text-center max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              En <span className="font-bold text-white">MOVIDA DEPORTIVA TV</span>, proporcionamos 
              <span className="text-blue-400 font-semibold"> equipos de última generación</span> para asegurar retransmisiones deportivas 
              en directo de alta calidad. Nuestro servicio de alquiler incluye todo lo necesario para una 
              <span className="text-blue-400 font-semibold"> cobertura profesional y eficiente</span>, adaptándonos a las necesidades específicas de cada evento.
            </motion.p>

            {/* Características principales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {caracteristicas.map((caracteristica, index) => (
                <motion.div
                  key={caracteristica.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <caracteristica.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{caracteristica.title}</h4>
                  <p className="text-slate-400 text-sm">{caracteristica.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Equipos Incluidos */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Nuestros Equipos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Incluyen</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equiposIncluidos.map((equipo, index) => (
              <motion.div
                key={equipo.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${equipo.color} rounded-xl flex items-center justify-center mb-6`}>
                  <equipo.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">{equipo.title}</h4>
                <p className="text-slate-300 leading-relaxed">{equipo.description}</p>
                
                <div className="mt-6 flex items-center text-blue-400">
                  <FiCheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">Incluido en el servicio</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ventajas del servicio */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            ¿Por qué elegir nuestro <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Material?</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={ventaja.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${ventaja.color} rounded-xl flex items-center justify-center mb-6`}>
                  <ventaja.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">{ventaja.title}</h4>
                <p className="text-slate-300 leading-relaxed">{ventaja.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Proceso de trabajo */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <motion.h3 
              className="text-3xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              ¿Cómo <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trabajamos?</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Consulta</h4>
                <p className="text-slate-300 text-sm">Analizamos las necesidades específicas de tu evento</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Preparación</h4>
                <p className="text-slate-300 text-sm">Seleccionamos y preparamos el equipo adecuado</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Instalación</h4>
                <p className="text-slate-300 text-sm">Montamos y configuramos todo el equipo en el lugar</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.4, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Soporte</h4>
                <p className="text-slate-300 text-sm">Asistencia técnica durante todo el evento</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-12 border border-blue-700/50">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
            >
              ¿Necesitas equipos para tu evento?
            </motion.h3>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
            >
              Confía en MOVIDA DEPORTIVA TV para el alquiler de material que garantiza una retransmisión en directo de calidad profesional.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.6 }}
            >
              <Link to="/contacto">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Información
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicioAlquilerMaterial;
