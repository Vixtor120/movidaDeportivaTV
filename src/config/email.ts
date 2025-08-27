// Configuración de EmailJS
export const EMAIL_CONFIG = {
  // Estos valores los obtienes de tu cuenta de EmailJS
  // 📧 INSTRUCCIONES PARA CONFIGURAR:
  // 1. Ve a https://www.emailjs.com/
  // 2. Crea una cuenta gratis
  // 3. Crea un servicio de email (Gmail, Outlook, etc.)
  // 4. Crea un template de email
  // 5. Reemplaza estos valores con los tuyos:
  
  SERVICE_ID: 'YOUR_SERVICE_ID', // ⚠️ CAMBIAR por tu Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // ⚠️ CAMBIAR por tu Template ID  
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // ⚠️ CAMBIAR por tu Public Key
  
  // 📧 Email donde recibirás los mensajes
  TO_EMAIL: 'info@movidadeportivatv.com', // ⚠️ CAMBIAR por tu email de Gmail
  
  // 📝 Configuración del template
  TEMPLATE_PARAMS: {
    to_email: 'info@movidadeportivatv.com', // ⚠️ CAMBIAR por tu email
    reply_to: '', // Se llenará automáticamente con el email del usuario
    from_name: '', // Se llenará automáticamente
    message: '', // Se llenará automáticamente
    // Puedes agregar más campos aquí según tu template
  }
};

// 🔄 Para cambiar fácilmente el email de destino
export const updateDestinationEmail = (newEmail: string) => {
  EMAIL_CONFIG.TO_EMAIL = newEmail;
  EMAIL_CONFIG.TEMPLATE_PARAMS.to_email = newEmail;
};
