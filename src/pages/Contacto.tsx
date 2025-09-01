import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiSend, 
  FiUser, 
  FiMessageSquare,
  FiCalendar,
  FiDollarSign,
  FiCheckCircle,
  FiInstagram,
  FiYoutube,
  FiInfo,
  FiAlertCircle
} from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';
import { SiTwitch } from 'react-icons/si';
import Footer from '../components/Footer';
import EmailService from '../services/emailService';

interface ContactoProps {
  // Mantenemos por compatibilidad pero no se usa ya que usamos React Router
}

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicios: string[];
  tipoEvento: string;
  fechaEvento: string;
  presupuesto: string;
  mensaje: string;
  aceptaTerminos: boolean;
}

const Contacto: React.FC<ContactoProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicios: [],
    tipoEvento: '',
    fechaEvento: '',
    presupuesto: '',
    mensaje: '',
    aceptaTerminos: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviciosDisponibles = [
    {
      id: 'streaming',
      nombre: 'Servicio Streaming',
      descripcion: 'Retransmisiones en vivo profesionales'
    },
    {
      id: 'mdtv',
      nombre: 'Canal MDTV',
      descripcion: 'Nuestro canal de Twitch especializado'
    },
    {
      id: 'alquiler',
      nombre: 'Alquiler de Material',
      descripcion: 'Equipos audiovisuales profesionales'
    },
    {
      id: 'speakers',
      nombre: 'Speakers y Animación',
      descripción: 'Presentadores y animadores profesionales'
    }
  ];

  const tiposEvento = [
    'Partido de Fútbol',
    'Evento Deportivo',
    'Conferencia',
    'Espectáculo',
    'Evento Corporativo',
    'Celebración',
    'Otro'
  ];

  const rangosPresupuesto = [
    'Menos de 500€',
    '500€ - 1.000€',
    '1.000€ - 2.500€',
    '2.500€ - 5.000€',
    'Más de 5.000€',
    'A consultar'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleServicioChange = (servicioId: string) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(servicioId)
        ? prev.servicios.filter(id => id !== servicioId)
        : [...prev.servicios, servicioId]
    }));
  };

  const isFormValid = () => {
    return formData.nombre && 
           formData.email && 
           formData.telefono && 
           formData.servicios.length > 0 && 
           formData.aceptaTerminos;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // 🔧 Verificar si EmailJS está configurado
    if (!EmailService.isConfigured()) {
      setErrorMessage('El servicio de email no está configurado. Por favor, contacta al administrador.');
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage('');
    
    try {
      // 📧 Enviar email usando EmailService
      const emailSent = await EmailService.sendContactForm(formData);
      
      if (emailSent) {
        // ✅ Éxito - limpiar formulario y mostrar mensaje
        setShowSuccess(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          servicios: [],
          tipoEvento: '',
          fechaEvento: '',
          presupuesto: '',
          mensaje: '',
          aceptaTerminos: false
        });
        
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        // ❌ Error al enviar
        throw new Error('No se pudo enviar el email');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setErrorMessage(
        'Error al enviar el formulario. Por favor, intenta de nuevo o contacta directamente por email.'
      );
      setShowError(true);
      setTimeout(() => setShowError(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-48 sm:pt-52 md:pt-56 lg:pt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          
          {/* Formulario de Contacto */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-center mb-8 lg:mb-12">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 lg:mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Contacta
                </span>{' '}
                con Nosotros
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Solicita información sobre nuestros servicios audiovisuales profesionales
              </motion.p>
            </div>

            {/* Formulario */}
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700/30 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Información Personal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Empresa/Organización
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>
              </div>

              {/* Servicios */}
              <div className="mb-6 sm:mb-8">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    ¿Qué servicios te interesan? *
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base">
                    Selecciona uno o varios servicios para recibir información personalizada
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                  {serviciosDisponibles.map((servicio, index) => (
                    <motion.div 
                      key={servicio.id} 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <label 
                        className={`flex items-start gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                          formData.servicios.includes(servicio.id)
                            ? 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-teal-400/60 shadow-lg shadow-teal-500/20'
                            : 'bg-slate-700/30 border-slate-600/30 hover:border-teal-400/50 hover:bg-slate-700/50'
                        }`}
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.servicios.includes(servicio.id)}
                            onChange={() => handleServicioChange(servicio.id)}
                            className="sr-only"
                          />
                          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                            formData.servicios.includes(servicio.id)
                              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 border-teal-400'
                              : 'border-slate-500 group-hover:border-teal-400'
                          }`}>
                            {formData.servicios.includes(servicio.id) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FiCheckCircle className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className={`font-bold text-lg transition-colors duration-300 ${
                            formData.servicios.includes(servicio.id)
                              ? 'text-teal-300'
                              : 'text-white group-hover:text-teal-400'
                          }`}>
                            {servicio.nombre}
                          </div>
                          <div className="text-slate-400 mt-2 leading-relaxed">
                            {servicio.descripcion}
                          </div>
                          {formData.servicios.includes(servicio.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-3 text-sm text-teal-300 font-medium"
                            >
                              ✓ Servicio seleccionado
                            </motion.div>
                          )}
                        </div>
                      </label>
                      
                      <Link
                        to={
                          servicio.id === 'streaming' ? '/servicios/streaming' :
                          servicio.id === 'mdtv' ? '/servicios/mdtv' :
                          servicio.id === 'alquiler' ? '/servicios/alquiler-material' :
                          servicio.id === 'speakers' ? '/servicios/speakers-animacion' :
                          '/'
                        }
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-600/50 rounded-lg transition-all duration-300"
                        title="Ver más información sobre este servicio"
                      >
                        <FiInfo className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {formData.servicios.length === 0 && (
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <FiInfo className="w-5 h-5" />
                      <span className="font-medium">Selecciona al menos un servicio para continuar</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Detalles del Evento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Tipo de Evento
                  </label>
                  <select
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                  >
                    <option value="">Selecciona tipo</option>
                    {tiposEvento.map((tipo) => (
                      <option key={tipo} value={tipo}>{tipo}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Fecha del Evento
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="date"
                      name="fechaEvento"
                      value={formData.fechaEvento}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Presupuesto Estimado
                  </label>
                  <div className="relative">
                    <FiDollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <select
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    >
                      <option value="">Selecciona rango</option>
                      {rangosPresupuesto.map((rango) => (
                        <option key={rango} value={rango}>{rango}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-white font-semibold mb-2">
                  Mensaje Adicional
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos más detalles sobre tu proyecto..."
                  />
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div className="mb-6 sm:mb-8">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-teal-500 bg-slate-600 border-slate-500 rounded focus:ring-teal-400 focus:ring-2"
                  />
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Acepto la{' '}
                    <Link
                      to="/politica-privacidad"
                      className="text-teal-400 hover:text-teal-300 underline transition-colors duration-300"
                    >
                      Política de Privacidad
                    </Link>
                    {' '}y los{' '}
                    <Link
                      to="/terminos-servicio"
                      className="text-teal-400 hover:text-teal-300 underline transition-colors duration-300"
                    >
                      Términos de Servicio
                    </Link>
                  </div>
                </label>
              </div>

              {/* Botón de Envío */}
              <motion.button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                  isFormValid() && !isSubmitting
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 hover:shadow-xl transform hover:scale-[1.02]'
                    : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                }`}
                whileHover={isFormValid() && !isSubmitting ? { scale: 1.02 } : undefined}
                whileTap={isFormValid() && !isSubmitting ? { scale: 0.98 } : undefined}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <FiSend className="w-5 h-5" />
                    Enviar Solicitud
                  </div>
                )}
              </motion.button>

              {/* Mensaje de Éxito */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <FiCheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-green-400 font-semibold">
                        ¡Solicitud enviada con éxito!
                      </div>
                      <div className="text-green-300 text-sm">
                        Nos pondremos en contacto contigo muy pronto.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mensaje de Error */}
              <AnimatePresence>
                {showError && (
                  <motion.div
                    className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <FiAlertCircle className="w-6 h-6 text-red-400" />
                    <div>
                      <div className="text-red-400 font-semibold">
                        Error al enviar la solicitud
                      </div>
                      <div className="text-red-300 text-sm">
                        {errorMessage}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:sticky lg:top-32">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700/30 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <FiMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-slate-400">movidadeportiva.direccion@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <FiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Teléfono</div>
                      <div className="text-slate-400">+34 640 92 52 25</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <FiCheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Atención</div>
                      <div className="text-slate-400">Disponible por correo y teléfono</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a href="https://instagram.com/movidadeportivatv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <FiInstagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://twitter.com/movidadeportivatv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <RiTwitterXFill className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://youtube.com/@movidadeportivatv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <FiYoutube className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://tiktok.com/@movidadeportivatv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <FaTiktok className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://twitch.tv/movidadeportivatv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <SiTwitch className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contacto;
