import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCheck, FiAlertTriangle, FiSettings, FiMail, FiPhone } from 'react-icons/fi';
import Footer from '../components/Footer';

interface TerminosServicioProps {}

const TerminosServicio: React.FC<TerminosServicioProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-56">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
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
            <FiFileText className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Términos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Servicio</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Condiciones generales para la prestación de servicios audiovisuales de Movida Deportiva TV
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

        {/* Contenido de los Términos */}
        <motion.div 
          className="space-y-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* 1. Información general */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <FiCheck className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">1. Información General</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p><strong>Razón Social:</strong> Movida Deportiva TV</p>
              <p><strong>Área de Servicio:</strong> Barcelona y alrededores</p>
              <p><strong>Email:</strong> info@movidadeportivatv.com</p>
              <p><strong>Teléfono:</strong> +34 XXX XXX XXX</p>
              <p className="mt-4">
                Estos términos y condiciones regulan la prestación de servicios audiovisuales ofrecidos por Movida Deportiva TV.
                Al contratar nuestros servicios, aceptas estos términos en su totalidad.
              </p>
            </div>
          </section>

          {/* 2. Servicios ofrecidos */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">2. Servicios Ofrecidos</h2>
            <div className="text-slate-300 space-y-4">
              <p>Movida Deportiva TV ofrece los siguientes servicios:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Servicios de Streaming:</strong> Retransmisión en vivo de eventos deportivos y corporativos</li>
                <li><strong>Canal MDTV:</strong> Contenido audiovisual deportivo en nuestras plataformas</li>
                <li><strong>Alquiler de Material Audiovisual:</strong> Equipos profesionales de grabación y transmisión</li>
                <li><strong>Speakers y Animación:</strong> Presentadores y animadores para eventos</li>
                <li><strong>Producción Audiovisual:</strong> Servicios integrales de producción</li>
              </ul>
            </div>
          </section>

          {/* 3. Presupuestos y contratación */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">3. Presupuestos y Contratación</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Presupuestos personalizados:</strong> Cada servicio se presupuesta según las necesidades específicas</li>
                <li><strong>Validez:</strong> Los presupuestos tienen una validez de 30 días desde su emisión</li>
                <li><strong>Contratación:</strong> Se formaliza mediante la aceptación del presupuesto</li>
                <li><strong>Información necesaria:</strong> El cliente debe proporcionar todos los detalles del evento</li>
                <li><strong>Modificaciones:</strong> Los cambios pueden implicar ajustes en el presupuesto</li>
              </ul>
            </div>
          </section>

          {/* 4. Obligaciones del cliente */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">4. Obligaciones del Cliente</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Información veraz:</strong> Proporcionar información completa y veraz sobre el evento</li>
                <li><strong>Permisos:</strong> Obtener todos los permisos necesarios para la realización del evento</li>
                <li><strong>Acceso y condiciones:</strong> Facilitar el acceso al lugar del evento y asegurar las condiciones técnicas necesarias</li>
                <li><strong>Colaboración:</strong> Colaborar en todo lo necesario para la correcta prestación del servicio</li>
              </ul>
            </div>
          </section>

          {/* 5. Obligaciones de Movida Deportiva TV */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">5. Nuestras Obligaciones</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Calidad profesional:</strong> Prestar los servicios con la máxima calidad profesional</li>
                <li><strong>Equipos certificados:</strong> Utilizar equipos en perfecto estado y certificados</li>
                <li><strong>Personal cualificado:</strong> Asignar personal técnico especializado</li>
                <li><strong>Puntualidad:</strong> Cumplir con los horarios acordados</li>
                <li><strong>Confidencialidad:</strong> Mantener la confidencialidad de la información del cliente</li>
                <li><strong>Seguro:</strong> Contar con seguros de responsabilidad civil y equipos</li>
              </ul>
            </div>
          </section>

          {/* 6. Pagos y facturación */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">6. Pagos y Facturación</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Pago:</strong> Se acordará la forma de pago específica para cada servicio</li>
                <li><strong>Facturación:</strong> Todos los precios incluyen IVA</li>
                <li><strong>Gastos adicionales:</strong> Desplazamientos, equipos especiales o servicios extra se facturarán por separado</li>
              </ul>
            </div>
          </section>

          {/* 7. Cancelaciones y modificaciones */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">7. Cancelaciones y Modificaciones</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cancelaciones:</strong> Las condiciones de cancelación se acordarán para cada servicio específico</li>
                <li><strong>Antelación recomendada:</strong> Se recomienda comunicar cancelaciones con la mayor antelación posible</li>
                <li><strong>Fuerza mayor:</strong> En casos de fuerza mayor, se reprogramará el evento o se llegará a un acuerdo</li>
                <li><strong>Modificaciones:</strong> Los cambios deben comunicarse con antelación y pueden conllevar ajustes</li>
              </ul>
            </div>
          </section>

          {/* 8. Responsabilidades y limitaciones */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <FiAlertTriangle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">8. Responsabilidades y Limitaciones</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Responsabilidad profesional:</strong> Prestamos nuestros servicios con la máxima calidad</li>
                <li><strong>Limitaciones:</strong> No garantizamos la calidad de conexiones de internet o servicios proporcionados por terceros</li>
                <li><strong>Derechos de imagen:</strong> El cliente es responsable de obtener permisos de imagen necesarios</li>
              </ul>
            </div>
          </section>

          {/* 9. Propiedad intelectual */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">9. Propiedad Intelectual</h2>
            <div className="text-slate-300 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Material grabado:</strong> El cliente tendrá los derechos sobre el contenido final</li>
                <li><strong>Uso promocional:</strong> Nos reservamos el derecho a usar fragmentos para promoción propia</li>
                <li><strong>Derechos de terceros:</strong> El cliente garantiza tener los derechos necesarios</li>
                <li><strong>Marca Movida Deportiva TV:</strong> Nos reservamos el derecho a aparecer acreditados</li>
              </ul>
            </div>
          </section>

          {/* 10. Protección de datos */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">10. Protección de Datos</h2>
            <div className="text-slate-300 space-y-4">
              <p>El tratamiento de datos personales se rige por nuestra Política de Privacidad, que cumple con el RGPD y la LOPDGDD.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los datos se utilizan exclusivamente para la prestación del servicio</li>
                <li>Garantizamos la confidencialidad de toda la información</li>
                <li>El cliente puede ejercer sus derechos de acceso, rectificación y supresión</li>
              </ul>
            </div>
          </section>

          {/* 11. Legislación aplicable */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <FiSettings className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">11. Legislación Aplicable y Jurisdicción</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>Estos términos se rigen por la legislación española.</p>
              <p>Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Barcelona, 
              renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>
            </div>
          </section>

          {/* 12. Contacto */}
          <section className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">12. Contacto</h2>
            <div className="text-slate-300 space-y-4">
              <p>Para cualquier consulta sobre estos términos y condiciones:</p>
              <div className="flex items-center gap-3 mt-4">
                <FiMail className="w-5 h-5 text-purple-400" />
                <span>info@movidadeportivatv.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-purple-400" />
                <span>+34 XXX XXX XXX</span>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-purple-300 font-semibold">
                    <strong>Atención al cliente 24/7</strong>
                  </p>
                </div>
                <p className="text-purple-300 text-sm">
                  Soporte técnico y consultas urgentes disponibles las 24 horas para eventos en vivo
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

export default TerminosServicio;
