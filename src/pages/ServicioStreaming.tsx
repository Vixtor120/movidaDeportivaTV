import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiPlay, FiMonitor, FiMic, FiUsers, FiSettings,
  FiVideo, FiRadio, FiTv, FiCamera, FiEdit3, FiCheckCircle
} from 'react-icons/fi';
import Footer from '../components/Footer';

interface ServicioStreamingProps {}

const ServicioStreaming: React.FC<ServicioStreamingProps> = () => {
  const serviciosIncluidos = [
    {
      title: "Retransmisión del Partido",
      description: "Capturamos cada momento con cámaras de alta definición para ofrecer una visualización impecable desde cualquier ángulo.",
      icon: FiCamera,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Realización en Vivo",
      description: "Coordinamos todas las tomas, gráficos y repeticiones en tiempo real para una producción dinámica y profesional.",
      icon: FiPlay,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Narración y Locución",
      description: "Proporcionamos comentaristas y locutores experimentados que aportan emoción y conocimiento experto al evento.",
      icon: FiMic,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zona Mixta",
      description: "Cobertura de entrevistas y reacciones post-partido con jugadores y entrenadores para brindar contenido adicional y exclusivo.",
      icon: FiUsers,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Producción Completa",
      description: "Gestionamos todos los aspectos de la producción, incluyendo gráficos, estadísticas en tiempo real y efectos visuales.",
      icon: FiEdit3,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Soporte Técnico",
      description: "Nuestro equipo técnico altamente capacitado asegura el funcionamiento perfecto de todos los equipos y sistemas durante el evento.",
      icon: FiSettings,
      color: "from-slate-500 to-slate-600"
    }
  ];

  const caracteristicas = [
    {
      icon: FiTv,
      title: "Múltiples Plataformas",
      description: "YouTube, Facebook, Instagram, Twitch y más"
    },
    {
      icon: FiVideo,
      title: "Calidad 4K",
      description: "Transmisiones en ultra alta definición"
    },
    {
      icon: FiRadio,
      title: "Audio Profesional",
      description: "Sonido cristalino y sin interferencias"
    },
    {
      icon: FiMonitor,
      title: "Chat Interactivo",
      description: "Conexión directa con tu audiencia"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-48 sm:pt-52 md:pt-56 lg:pt-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <FiPlay className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Servicio</span> Streaming
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Servicio de Streaming por tu Plataforma
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-400 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Retransmisiones Profesionales de Eventos Deportivos
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
              En <span className="font-bold text-white">MOVIDA DEPORTIVA TV</span>, ofrecemos servicios completos de retransmisión de eventos deportivos, 
              asegurando una cobertura integral y de alta calidad para cada partido. Nuestro compromiso es brindar una 
              <span className="text-teal-400 font-semibold"> experiencia única y envolvente</span> tanto para los espectadores como para los organizadores.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <caracteristica.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{caracteristica.title}</h4>
                  <p className="text-slate-400 text-sm">{caracteristica.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Servicios Incluidos */}
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
            Nuestros Servicios <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Incluyen</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosIncluidos.map((servicio, index) => (
              <motion.div
                key={servicio.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${servicio.color} rounded-xl flex items-center justify-center mb-6`}>
                  <servicio.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">{servicio.title}</h4>
                <p className="text-slate-300 leading-relaxed">{servicio.description}</p>
                
                <div className="mt-6 flex items-center text-teal-400">
                  <FiCheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">Incluido en el servicio</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Proceso de trabajo */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <motion.h3 
              className="text-3xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              ¿Cómo <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Trabajamos?</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Planificación</h4>
                <p className="text-slate-300 text-sm">Analizamos tu evento y definimos la mejor estrategia de retransmisión</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Producción</h4>
                <p className="text-slate-300 text-sm">Ejecutamos la retransmisión con nuestro equipo profesional y tecnología avanzada</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Entrega</h4>
                <p className="text-slate-300 text-sm">Proporcionamos el contenido final y análisis de audiencia del evento</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-12 border border-teal-700/50">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              ¿Listo para llevar tu evento al siguiente nivel?
            </motion.h3>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              En MOVIDA DEPORTIVA TV, nos apasiona el deporte y estamos dedicados a ofrecer retransmisiones de la más alta calidad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
            >
              <Link to="/contacto">
                <motion.button
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contáctanos Ahora
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

export default ServicioStreaming;
