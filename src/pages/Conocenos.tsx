import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCamera,
  FiHeart,
  FiUsers,
  FiEdit,
  FiPlay,
  FiStar
} from 'react-icons/fi';
import Footer from '../components/Footer';

interface ConocenosProps {
  // Mantenemos por compatibilidad pero no se usa ya que usamos React Router
}

const Conocenos: React.FC<ConocenosProps> = () => {
  const distingueValues = [
    {
      title: "Calidad cinematográfica",
      description: "Utilizamos equipos y técnicas de nivel profesional",
      icon: FiCamera,
      color: "from-teal-500 to-cyan-500",
      answer: "Sí"
    },
    {
      title: "Pasión por el detalle",
      description: "Nos gusta cuidar todos los detalles de nuestras emisiones",
      icon: FiHeart,
      color: "from-red-500 to-pink-500",
      answer: "Siempre"
    },
    {
      title: "Enfoque personalizado",
      description: "Cada proyecto refleja tu visión exacta",
      icon: FiUsers,
      color: "from-purple-500 to-pink-500",
      answer: "Garantizado"
    }
  ];

  const services = [
    {
      title: "Preproducción",
      description: "Planificación detallada de cada proyecto",
      icon: FiEdit
    },
    {
      title: "Filmación",
      description: "Captura profesional con equipos de última generación",
      icon: FiCamera
    },
    {
      title: "Postproducción",
      description: "Edición y efectos que dan vida a tu visión",
      icon: FiPlay
    }
  ];

  const teamMembers = [
    { name: "Técnico audiovisual", role: "Especialista en streaming", image: "imagen1.png" },
    { name: "Editor profesional", role: "Postproducción y efectos", image: "imagen2.png" },
    { name: "Director creativo", role: "Visión artística", image: "imagen3.png" },
    { name: "Operador de cámara", role: "Captura de video", image: "imagen4.png" },
    { name: "Especialista en sonido", role: "Audio profesional", image: "imagen5.png" },
    { name: "Community Manager", role: "Gestión de redes", image: "imagen6.png" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-40 sm:pt-48 md:pt-52 lg:pt-56">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20 pt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Conoce</span> Nuestro Equipo
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Somos un equipo apasionado por crear contenido audiovisual de calidad profesional
          </motion.p>
        </motion.div>

        {/* Nuestra Historia */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <motion.h3 
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Nuestra <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Historia</span>
            </motion.h3>
            
            <motion.p 
              className="text-slate-300 leading-relaxed text-lg text-center max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <strong className="text-teal-400">Movida Deportiva TV</strong> nació de la pasión por el deporte y la tecnología audiovisual. 
              Lo que comenzó como un proyecto para documentar eventos locales, se ha convertido en una empresa especializada en 
              <strong className="text-cyan-400"> streaming profesional y producción audiovisual deportiva</strong>.
            </motion.p>

            <motion.p 
              className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Hemos crecido colaborando con equipos, federaciones y organizaciones que comparten nuestra visión: 
              <strong className="text-teal-400"> llevar el deporte a más personas a través de contenido de alta calidad</strong>.
            </motion.p>
          </div>
        </motion.section>

        {/* Nuestros Valores */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Nuestros <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Valores</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiHeart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Pasión</h4>
              <p className="text-slate-300 leading-relaxed">
                Cada proyecto lo abordamos con la misma pasión que sienten los deportistas por su disciplina.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiStar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Excelencia</h4>
              <p className="text-slate-300 leading-relaxed">
                Buscamos la perfección en cada detalle, desde la planificación hasta el resultado final.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Colaboración</h4>
              <p className="text-slate-300 leading-relaxed">
                Trabajamos de la mano contigo para materializar tu visión exactamente como la imaginas.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Sección de misión */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <motion.h3 
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Nuestra <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Misión</span>
            </motion.h3>
            
            <motion.p 
              className="text-slate-300 leading-relaxed text-lg text-center max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Nuestra misión es <strong className="text-teal-400">transformar conceptos en experiencias visuales únicas</strong>, 
              fusionando tecnología avanzada con narrativas cautivadoras. Nos especializamos en todas las etapas del proceso audiovisual: 
              desde la preproducción y planificación, hasta la filmación, edición y postproducción.
            </motion.p>

            <motion.p 
              className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Todo, con un <strong className="text-cyan-400">enfoque personalizado y detallado</strong> que asegura 
              que cada proyecto refleja la visión exacta que buscas.
            </motion.p>

            {/* Servicios en proceso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Lo que nos distingue */}
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
            ¿Qué nos <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Distingue?</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {distingueValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <div className={`text-3xl font-black mb-4 ${
                  value.answer === 'Sí' ? 'text-green-400' : 
                  value.answer === 'No' ? 'text-red-400' : 
                  'text-teal-400'
                }`}>
                  {value.answer}
                </div>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nuestro Equipo */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Nuestro <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Equipo</span>
          </motion.h3>
          
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            {/* Grid profesional tipo masonry */}
            <div className="grid grid-cols-12 gap-4 h-auto">
              {/* Imagen principal grande */}
              <motion.div
                className="col-span-12 md:col-span-8 h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={`/images/${teamMembers[0].image}`}
                    alt="Nuestro equipo en acción"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Nuestro equipo en acción</h4>
                    <p className="text-lg opacity-90">Profesionales dedicados al streaming deportivo</p>
                  </div>
                </div>
              </motion.div>

              {/* Imágenes laterales */}
              <div className="col-span-12 md:col-span-4 space-y-4">
                <motion.div
                  className="h-44 md:h-48"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={`/images/${teamMembers[1].image}`}
                      alt="Equipo técnico"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="h-44 md:h-44"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={`/images/${teamMembers[2].image}`}
                      alt="Equipo en el campo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Fila inferior */}
              <motion.div
                className="col-span-6 md:col-span-4 h-48 md:h-56"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={`/images/${teamMembers[3].image}`}
                    alt="Tecnología profesional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="col-span-6 md:col-span-4 h-48 md:h-56"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={`/images/${teamMembers[4].image}`}
                    alt="Momentos de trabajo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="col-span-12 md:col-span-4 h-48 md:h-56"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={`/images/${teamMembers[5].image}`}
                    alt="Equipo completo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Nuestros Colaboradores */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Nuestros <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Colaboradores</span>
          </motion.h3>

          <motion.p 
            className="text-lg text-slate-400 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            Hemos tenido el honor de trabajar con diversos equipos, federaciones y organizaciones deportivas
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((logoNum, index) => (
              <motion.div
                key={logoNum}
                className="flex items-center justify-center p-4 aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6 + index * 0.1, duration: 0.5 }}
              >
                <img 
                  src={`/images/logo${logoNum}.png`}
                  alt={`Colaborador ${logoNum}`}
                  className="max-w-full max-h-full object-contain"
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

export default Conocenos;