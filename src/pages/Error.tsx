import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiRefreshCw, 
  FiAlertTriangle,
  FiArrowLeft
} from 'react-icons/fi';
import Footer from '../components/Footer';
interface ErrorProps {
  errorCode?: '403' | '404';
  title?: string;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ 
  errorCode = '404',
  title,
  message 
}) => {
  const handleReload = () => {
    window.location.reload();
  };

  const defaultTitle = errorCode === '403' ? 'Acceso Denegado' : 'Página No Encontrada';
  const defaultMessage = errorCode === '403' 
    ? 'No tienes permisos para acceder a esta página. Por favor, vuelve al inicio y recarga la página.'
    : 'La página que buscas no existe o ha sido movida. Por favor, vuelve al inicio.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-40 sm:pt-48 md:pt-52 lg:pt-56">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Error Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <FiAlertTriangle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Error Code */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-4">
              {errorCode}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title || defaultTitle}
            </h2>
          </motion.div>
          
          {/* Message */}
          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {message || defaultMessage}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {/* Volver al Inicio */}
            <Link 
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 group"
            >
              <FiHome className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Volver al Inicio</span>
            </Link>

            {/* Recargar Página */}
            <button
              onClick={handleReload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500/25 group"
            >
              <FiRefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Recargar Página</span>
            </button>

            {/* Ir Atrás */}
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-6 py-3 text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Ir Atrás</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div 
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">¿Necesitas ayuda?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-slate-300 mb-2">Navegación Rápida</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link 
                    to="/conocenos" 
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>→</span>
                    Conócenos
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/servicios/streaming" 
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>→</span>
                    Servicios de Streaming
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contacto" 
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>→</span>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-300 mb-2">Información de Contacto</h4>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  movidadeportiva.direccion@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  +34 640 92 52 25
                </p>
                <p className="text-sm">
                  Si el problema persiste, no dudes en contactarnos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Error;
