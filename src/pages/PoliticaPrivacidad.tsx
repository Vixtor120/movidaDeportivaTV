import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiEye, FiMail, FiPhone } from 'react-icons/fi';
import Footer from '../components/Footer';

interface PoliticaPrivacidadProps {}

const PoliticaPrivacidad: React.FC<PoliticaPrivacidadProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-40 sm:pt-48 md:pt-52 lg:pt-56">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
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
            <FiShield className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Privacidad</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            En Movida Deportiva TV respetamos tu privacidad y nos comprometemos a proteger tus datos personales
          </motion.p>

          <motion.p 
            className="text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </motion.p>
        </motion.div>

        {/* Contenido de la Política */}
        <motion.div 
          className="space-y-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* 1. Responsable del tratamiento */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <FiLock className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">1. Responsable del Tratamiento</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p><strong>Razón Social:</strong> Movida Deportiva TV</p>
              <p><strong>Área de Servicio:</strong> Barcelona y alrededores</p>
              <p><strong>Email:</strong> info@movidadeportivatv.com</p>
              <p><strong>Teléfono:</strong> +34 XXX XXX XXX</p>
            </div>
          </section>

          {/* 2. Datos que recopilamos */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <FiEye className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">2. Datos que Recopilamos</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>Únicamente recopilamos los datos que nos proporcionas voluntariamente a través del formulario de contacto:</p>
              
              <h3 className="text-lg font-semibold text-white">Datos obligatorios:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Servicios de interés</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Datos opcionales:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Empresa u organización</li>
                <li>Tipo de evento</li>
                <li>Fecha del evento</li>
                <li>Presupuesto estimado</li>
                <li>Mensaje con detalles específicos del proyecto</li>
              </ul>

              <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-700/50">
                <p className="text-green-300">
                  <strong>Importante:</strong> No utilizamos cookies de seguimiento, analytics o publicitarias. 
                  Solo recopilamos la información que nos envías directamente.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Finalidad del tratamiento */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">3. Finalidad del Tratamiento</h2>
            <div className="text-slate-300 space-y-4">
              <p>Utilizamos tus datos personales para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gestión de consultas:</strong> Responder a tus solicitudes de información y presupuestos</li>
                <li><strong>Prestación de servicios:</strong> Planificar y ejecutar los servicios audiovisuales contratados</li>
                <li><strong>Comunicación comercial:</strong> Enviarte información sobre nuestros servicios (solo con tu consentimiento)</li>
                <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y fiscales</li>
                <li><strong>Mejora del servicio:</strong> Analizar el uso del sitio web para mejorar la experiencia del usuario</li>
              </ul>
            </div>
          </section>

          {/* 4. Base legal */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">4. Base Legal del Tratamiento</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ejecución de contrato:</strong> Para la prestación de servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Para responder a consultas y mejorar nuestros servicios</li>
                <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables cuando aplique</li>
              </ul>
            </div>
          </section>

          {/* 5. Conservación de datos */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">5. Conservación de Datos</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consultas:</strong> Se conservan mientras sea necesario para responder y gestionar el servicio</li>
                <li><strong>Datos de clientes:</strong> Durante la relación comercial y el tiempo legalmente requerido</li>
              </ul>
            </div>
          </section>

          {/* 6. Destinatarios */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">6. Destinatarios de los Datos</h2>
            <div className="text-slate-300 space-y-4">
              <p>Tus datos pueden ser compartidos con:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan en la prestación de servicios (hosting, email, etc.)</li>
                <li><strong>Administraciones públicas:</strong> Cuando sea requerido por ley</li>
                <li><strong>Asesores profesionales:</strong> Abogados, gestores o auditores</li>
              </ul>
              <p className="mt-4"><strong>No vendemos ni cedemos tus datos a terceros para fines comerciales.</strong></p>
            </div>
          </section>

          {/* 7. Derechos */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">7. Tus Derechos</h2>
            <div className="text-slate-300 space-y-4">
              <p>Tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Retirar consentimiento:</strong> En cualquier momento</li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
                <p className="text-blue-300">
                  <strong>Para ejercer tus derechos:</strong> Contacta con nosotros en info@movidadeportivatv.com
                </p>
              </div>
            </div>
          </section>

          {/* 8. Seguridad */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">8. Medidas de Seguridad</h2>
            <div className="text-slate-300 space-y-4">
              <p>Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cifrado de datos en el envío del formulario</li>
                <li>Acceso restringido a personal autorizado</li>
                <li>Almacenamiento seguro de la información</li>
                <li>Eliminación segura de datos cuando proceda</li>
                <li>Formación del personal en protección de datos</li>
              </ul>
            </div>
          </section>

          {/* 9. Contacto */}
          <section className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">9. Contacto</h2>
            <div className="text-slate-300 space-y-4">
              <p>Para cualquier consulta sobre esta política de privacidad o el tratamiento de tus datos:</p>
              <div className="flex items-center gap-3 mt-4">
                <FiMail className="w-5 h-5 text-teal-400" />
                <span>info@movidadeportivatv.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-teal-400" />
                <span>+34 XXX XXX XXX</span>
              </div>
              
              <div className="mt-6 p-4 bg-teal-900/20 rounded-lg border border-teal-700/50">
                <p className="text-teal-300">
                  <strong>Autoridad de Control:</strong> Agencia Española de Protección de Datos (AEPD) - www.aepd.es
                </p>
              </div>

              <div className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-700/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-300 font-semibold">
                    <strong>Atención 24/7</strong>
                  </p>
                </div>
                <p className="text-green-300 text-sm">
                  Soporte técnico y consultas urgentes disponibles las 24 horas
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
