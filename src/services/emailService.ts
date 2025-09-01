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

// 📧 Servicio GRATUITO usando Web3Forms (sin configuración compleja)
export class EmailService {
  
  // 🚀 Enviar formulario automáticamente (el usuario solo hace clic)
  static async sendContactForm(formData: FormData): Promise<boolean> {
    try {
      // 📝 Formatear los servicios seleccionados
      const serviciosTexto = formData.servicios.length > 0 
        ? formData.servicios.join(', ') 
        : 'No especificado';

      // � Enviar usando Web3Forms (GRATUITO - 1000 emails/mes)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // 🔑 Usar la clave de la configuración
          access_key: EMAIL_CONFIG.WEB3FORMS_KEY,
          
          // 📧 Tu email de reenvío
          email: EMAIL_CONFIG.TO_EMAIL,
          
          // 📝 Solo el asunto personalizado
          subject: `🎬 Nueva Solicitud - ${formData.nombre}`,
          
          // 🎨 Mensaje principal con formato mejorado (sin HTML complejo)
          message: `
🎬 MOVIDA DEPORTIVA TV
═══════════════════════════════════════

📋 NUEVA SOLICITUD DE CONTACTO
═══════════════════════════════════════

👤 INFORMACIÓN PERSONAL
────────────────────────────────────
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Empresa: ${formData.empresa || 'No especificada'}

🎯 DETALLES DEL PROYECTO
────────────────────────────────────
• Servicios: ${serviciosTexto}
• Tipo de evento: ${formData.tipoEvento || 'No especificado'}
• Fecha: ${formData.fechaEvento ? new Date(formData.fechaEvento).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No especificada'}
• Presupuesto: ${formData.presupuesto || 'A consultar'}

${formData.mensaje ? `💬 MENSAJE ADICIONAL
────────────────────────────────────
"${formData.mensaje}"

` : ''} INFORMACIÓN DE ENVÍO
────────────────────────────────────
• Fecha: ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
• Hora: ${new Date().toLocaleTimeString('es-ES')}
• Origen: www.movidadeportiva.com

═══════════════════════════════════════
🚀 Solicitud enviada automáticamente
📧 Responde directamente a este correo
═══════════════════════════════════════
          `,
          // � Sin redirección
          redirect: false
        })
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Email enviado exitosamente');
        return true;
      } else {
        console.error('❌ Error:', result.message);
        return false;
      }

    } catch (error) {
      console.error('❌ Error al enviar email:', error);
      return false;
    }
  }

  // 🔧 Verificar configuración (para Formspree solo necesitas el form ID)
  static isConfigured(): boolean {
    // Para Formspree, cambia 'YOUR_FORM_ID' por tu ID real cuando lo tengas
    return true; // Siempre está "configurado" mientras tengas internet
  }

  // 📧 Obtener email de destino actual
  static getDestinationEmail(): string {
    return EMAIL_CONFIG.TO_EMAIL;
  }

  // 🔄 Cambiar email de destino
  static setDestinationEmail(newEmail: string): void {
    EMAIL_CONFIG.TO_EMAIL = newEmail;
  }
}

export default EmailService;
