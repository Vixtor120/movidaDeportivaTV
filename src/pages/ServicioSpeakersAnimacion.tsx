import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiMic, FiUsers, FiMusic, FiZap, FiCheckCircle, FiSpeaker,
  FiHeart, FiStar, FiActivity, FiSmile, FiAward
} from 'react-icons/fi';
import Footer from '../components/Footer';

interface ServicioSpeakersAnimacionProps {}

const ServicioSpeakersAnimacion: React.FC<ServicioSpeakersAnimacionProps> = () => {
  const serviciosIncluidos = [
    {
      title: "Presentación de Equipos",
      description: "Introducción profesional y emocionante de los equipos participantes, creando expectativa y emoción desde el inicio.",
      icon: FiUsers,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Narración de Momentos Clave",
      description: "Comentarios dinámicos y emocionantes de las jugadas más importantes, manteniendo a la audiencia conectada.",
      icon: FiMic,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interacción con el Público",
      description: "Actividades y dinámicas para involucrar a los espectadores, manteniendo alta la energía durante todo el evento.",
      icon: FiHeart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Entretenimiento Musical",
      description: "Selección musical profesional y efectos sonoros que complementan la experiencia deportiva.",
      icon: FiMusic,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const caracteristicas = [
    {
      icon: FiZap,
      title: "Ambiente Dinámico",
      description: "Creamos energía contagiosa en cada evento"
    },
    {
      icon: FiStar,
      title: "Experiencia Profesional",
      description: "Animadores especializados en deportes"
    },
    {
      icon: FiActivity,
      title: "Interacción Constante",
      description: "Mantenemos al público siempre involucrado"
    },
    {
      icon: FiSmile,
      title: "Diversión Garantizada",
      description: "Experiencia memorable para todos"
    }
  ];

  const ventajas = [
    {
      title: "Speakers Profesionales",
      description: "Animadores con experiencia en eventos deportivos que saben cómo conectar con la audiencia",
      icon: FiSpeaker,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Ambiente Emocionante",
      description: "Creamos la atmósfera perfecta para que cada momento del evento sea memorable",
      icon: FiZap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Participación Activa",
      description: "Juegos, concursos y actividades que hacen que el público se sienta parte del espectáculo",
      icon: FiUsers,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Adaptación Total",
      description: "Nos adaptamos al tipo de evento, audiencia y ambiente para ofrecer la mejor experiencia",
      icon: FiAward,
      color: "from-purple-500 to-pink-500"
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <FiMic className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Animación y</span> Speakers
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Creamos Ambientes Dinámicos y Emocionantes
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-400 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Speakers y animación deportiva profesional para eventos inolvidables
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
              Nuestro servicio de <span className="font-bold text-white">speaker y animación deportiva</span> se encarga de crear un 
              <span className="text-green-400 font-semibold"> ambiente dinámico y emocionante</span> durante eventos deportivos. 
              Esto incluye la presentación de los equipos, la narración de los momentos clave del juego y la 
              <span className="text-green-400 font-semibold"> interacción con el público</span> para mantener alta la energía.
            </motion.p>

            <motion.p 
              className="text-lg text-slate-300 leading-relaxed text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Los animadores utilizan <span className="text-green-400 font-semibold">música, juegos y actividades</span> para involucrar a los espectadores, 
              asegurando que todos disfruten de la experiencia.
            </motion.p>

            {/* Características principales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {caracteristicas.map((caracteristica, index) => (
                <motion.div
                  key={caracteristica.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
            Nuestros Servicios <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Incluyen</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviciosIncluidos.map((servicio, index) => (
              <motion.div
                key={servicio.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300"
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
                
                <div className="mt-6 flex items-center text-green-400">
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
            ¿Por qué elegir nuestro <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Servicio?</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={ventaja.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300"
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
              ¿Cómo <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Trabajamos?</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Planificación</h4>
                <p className="text-slate-300 text-sm">Coordinamos el guión y las actividades según tu evento</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Preparación</h4>
                <p className="text-slate-300 text-sm">Configuramos equipos de sonido y seleccionamos música</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Animación</h4>
                <p className="text-slate-300 text-sm">Creamos ambiente y mantenemos la energía alta</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.4, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Interacción</h4>
                <p className="text-slate-300 text-sm">Involucramos al público durante todo el evento</p>
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
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-3xl p-12 border border-green-700/50">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
            >
              ¿Quieres darle vida a tu evento?
            </motion.h3>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
            >
              Nuestros speakers profesionales crearán la atmósfera perfecta para que tu evento deportivo sea inolvidable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.6 }}
            >
              <Link to="/contacto">
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
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

export default ServicioSpeakersAnimacion;
