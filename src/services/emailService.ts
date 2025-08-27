import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

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
}

// 📧 Servicio para enviar emails usando EmailJS
export class EmailService {
  
  // 🚀 Enviar formulario de contacto
  static async sendContactForm(formData: FormData): Promise<boolean> {
    try {
      // 📝 Formatear los servicios seleccionados
      const serviciosTexto = formData.servicios.length > 0 
        ? formData.servicios.join(', ') 
        : 'No especificado';

      // 📋 Preparar los parámetros del template
      const templateParams = {
        // Datos del remitente
        from_name: formData.nombre,
        from_email: formData.email,
        reply_to: formData.email,
        
        // Datos del destinatario
        to_email: EMAIL_CONFIG.TO_EMAIL,
        
        // Información del formulario
        user_name: formData.nombre,
        user_email: formData.email,
        user_phone: formData.telefono,
        user_company: formData.empresa || 'No especificada',
        
        // Detalles del proyecto
        services: serviciosTexto,
        event_type: formData.tipoEvento || 'No especificado',
        event_date: formData.fechaEvento || 'No especificada',
        budget: formData.presupuesto || 'No especificado',
        
        // Mensaje
        message: formData.mensaje || 'Sin mensaje adicional',
        
        // Información adicional
        submission_date: new Date().toLocaleDateString('es-ES'),
        submission_time: new Date().toLocaleTimeString('es-ES'),
      };

      // 📤 Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      console.log('✅ Email enviado exitosamente:', result.text);
      return true;

    } catch (error) {
      console.error('❌ Error al enviar email:', error);
      return false;
    }
  }

  // 🔧 Verificar configuración
  static isConfigured(): boolean {
    return !!(
      EMAIL_CONFIG.SERVICE_ID && 
      EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
      EMAIL_CONFIG.TEMPLATE_ID && 
      EMAIL_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
      EMAIL_CONFIG.PUBLIC_KEY && 
      EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
    );
  }

  // 📧 Obtener email de destino actual
  static getDestinationEmail(): string {
    return EMAIL_CONFIG.TO_EMAIL;
  }

  // 🔄 Cambiar email de destino
  static setDestinationEmail(newEmail: string): void {
    EMAIL_CONFIG.TO_EMAIL = newEmail;
    EMAIL_CONFIG.TEMPLATE_PARAMS.to_email = newEmail;
  }
}

export default EmailService;
