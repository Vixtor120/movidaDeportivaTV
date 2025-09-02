// Configuración de Web3Forms (más sencillo que EmailJS)
export const EMAIL_CONFIG = {
  // 📧 Email donde recibirás los mensajes (directo, sin reenvíos)
  TO_EMAIL: 'movidadeportiva.direccion@gmail.com', // directo a Gmail
  
  // � Clave de Web3Forms (ya configurada)
  WEB3FORMS_KEY: 'a89ad9de-b210-423e-b1f4-10e0963eb94c',
  
  // 📝 Información adicional
  FROM_NAME: 'Formulario Web - Movida Deportiva TV',
  SUBJECT: 'Nueva Solicitud de Contacto desde Movida Deportiva TV'
};

// 🔄 Para cambiar fácilmente el email de destino
export const updateDestinationEmail = (newEmail: string) => {
  EMAIL_CONFIG.TO_EMAIL = newEmail;
};
