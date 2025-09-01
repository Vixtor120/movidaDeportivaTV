// Configuración de Web3Forms (más sencillo que EmailJS)
export const EMAIL_CONFIG = {
  // 📧 Email donde recibirás los mensajes (dirección de reenvío)
  TO_EMAIL: 'contact@movidadeportiva.com', // dirección de reenvío configurada
  
  // � Clave de Web3Forms (ya configurada)
  WEB3FORMS_KEY: 'db4745b4-d1bc-460e-a604-9e6772051657',
  
  // 📝 Información adicional
  FROM_NAME: 'Formulario Web - Movida Deportiva TV',
  SUBJECT: 'Nueva Solicitud de Contacto desde Movida Deportiva TV'
};

// 🔄 Para cambiar fácilmente el email de destino
export const updateDestinationEmail = (newEmail: string) => {
  EMAIL_CONFIG.TO_EMAIL = newEmail;
};
