import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTv, FiUsers, FiCalendar, FiStar, FiExternalLink,
  FiVideo, FiRadio
} from 'react-icons/fi';
import { SiTwitch } from 'react-icons/si';
import Footer from '../components/Footer';

interface ServicioMDTVProps {}

const ServicioMDTV: React.FC<ServicioMDTVProps> = () => {
  const caracteristicas = [
    {
      icon: FiRadio,
      title: "Retransmisiones en Directo",
      description: "Partidos en vivo de las ligas RFEF con calidad profesional"
    },
    {
      icon: FiUsers,
      title: "Acuerdos con Clubes",
      description: "Colaboraciones oficiales para cobertura exclusiva"
    },
    {
      icon: FiCalendar,
      title: "Programas Semanales",
      description: "Repaso de la actualidad deportiva cada semana"
    },
    {
      icon: FiStar,
      title: "Invitados Especiales",
      description: "Entrevistas con personalidades del deporte"
    }
  ];

  const ventajas = [
    {
      title: "Contenido Exclusivo",
      description: "Acceso directo a partidos y eventos que no verás en otros lugares",
      icon: FiStar,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Calidad Profesional",
      description: "Transmisiones con la mejor calidad de imagen y sonido",
      icon: FiVideo,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interacción en Tiempo Real",
      description: "Chat en vivo para conectar con otros aficionados durante los partidos",
      icon: FiUsers,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programas Temáticos",
      description: "Contenido especializado en diferentes modalidades deportivas",
      icon: FiTv,
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <SiTwitch className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MDTV</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Nuestro Canal de Twitch
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-400 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            La plataforma central para nuestras retransmisiones en directo y contenido deportivo de calidad
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
              Nuestro canal de Twitch es la <span className="font-bold text-white">plataforma central para nuestras retransmisiones en directo</span>, 
              donde ofrecemos contenido deportivo de calidad. Contamos con <span className="text-purple-400 font-semibold">acuerdos con clubes</span> y 
              transmitimos en vivo los partidos de las <span className="text-purple-400 font-semibold">ligas RFEF</span>, brindando a los aficionados 
              acceso directo a la acción.
            </motion.p>

            <motion.p 
              className="text-lg text-slate-300 leading-relaxed text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Además, realizamos <span className="text-purple-400 font-semibold">programas semanales</span> en los que repasamos la actualidad deportiva, 
              manteniendo a nuestra audiencia al día con lo más relevante.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <caracteristica.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{caracteristica.title}</h4>
                  <p className="text-slate-400 text-sm">{caracteristica.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Ventajas de MDTV */}
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
            ¿Por qué elegir <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MDTV?</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={ventaja.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.7 }}
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

        {/* Reproductor de Twitch */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
          >
            Conoce Nuestro <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portal de Twitch</span>
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 0.7 }}
          >
            {/* Reproductor de Twitch */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <SiTwitch className="w-8 h-8 text-purple-500" />
                <h4 className="text-xl font-bold text-white">En Vivo Ahora</h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-red-500 font-semibold">LIVE</span>
                </div>
              </div>
              
              <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <iframe
                  src="https://player.twitch.tv/?channel=movidadeportivatv&parent=localhost&parent=127.0.0.1"
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                  title="MDTV Twitch Stream"
                ></iframe>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">@movidadeportivatv</p>
                  <p className="text-slate-400 text-sm">Síguenos para no perderte ningún partido</p>
                </div>
                <motion.a
                  href="https://www.twitch.tv/movidadeportivatv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiTwitch className="w-4 h-4" />
                  Seguir
                  <FiExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Chat de Twitch */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FiUsers className="w-8 h-8 text-purple-500" />
                <h4 className="text-xl font-bold text-white">Chat de la Comunidad</h4>
              </div>
              
              <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
                <iframe
                  src="https://www.twitch.tv/embed/movidadeportivatv/chat?parent=localhost&parent=127.0.0.1"
                  className="w-full h-full rounded-xl"
                  title="MDTV Twitch Chat"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-700/50">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
            >
              ¡Únete a la Comunidad MDTV!
            </motion.h3>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
            >
              No te pierdas ningún partido ni programa. Síguenos en Twitch y forma parte de la mejor comunidad deportiva.
            </motion.p>
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.6 }}
            >
              <motion.a
                href="https://www.twitch.tv/movidadeportivatv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiTwitch className="w-6 h-6" />
                Visitar Canal de Twitch
                <FiExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicioMDTV;
