# 📧 Configuración del Sistema de Email

Este proyecto usa **EmailJS** para enviar emails desde el formulario de contacto directamente a tu Gmail sin necesidad de un backend.

## 🚀 Configuración Rápida (5 minutos)

### 1. **Crear cuenta en EmailJS**
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita con tu Gmail

### 2. **Configurar Servicio de Email**
- En el dashboard, ve a **"Email Services"**
- Haz clic en **"Add New Service"**
- Selecciona **"Gmail"**
- Conecta tu cuenta de Gmail
- **Copia el Service ID** que aparece

### 3. **Crear Template de Email**
- Ve a **"Email Templates"**
- Haz clic en **"Create New Template"**
- Usa esta configuración:

```
Subject: 🏆 Nueva Solicitud - Movida Deportiva TV

Content:
Hola!

Has recibido una nueva solicitud desde MovidaDeportivaTV.com:

👤 DATOS DEL CLIENTE:
- Nombre: {{user_name}}
- Email: {{user_email}}
- Teléfono: {{user_phone}}
- Empresa: {{user_company}}

🎯 DETALLES DEL PROYECTO:
- Servicios solicitados: {{services}}
- Tipo de evento: {{event_type}}
- Fecha del evento: {{event_date}}
- Presupuesto: {{budget}}

💬 MENSAJE:
{{message}}

📅 INFORMACIÓN DE ENVÍO:
- Fecha: {{submission_date}}
- Hora: {{submission_time}}

---
Responde directamente a este email para contactar con el cliente.
```

### 4. **Obtener las Claves**
- **Service ID**: En "Email Services" 
- **Template ID**: En "Email Templates"
- **Public Key**: En "Account" > "General"

### 5. **Configurar el Proyecto**

Edita el archivo: `src/config/email.ts`

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_xxxxxxxx', // 📝 Tu Service ID
  TEMPLATE_ID: 'template_xxxxxxxx', // 📝 Tu Template ID  
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxx', // 📝 Tu Public Key
  TO_EMAIL: 'tu@gmail.com', // 📧 Tu email donde recibirás los mensajes
  // ...resto de configuración
};
```

## 🔄 Cambiar Email de Destino

### Opción 1: Editar archivo de configuración
```typescript
// En src/config/email.ts
TO_EMAIL: 'nuevo@gmail.com',
```

### Opción 2: Cambiar dinámicamente (desde código)
```typescript
import EmailService from './services/emailService';

// Cambiar email de destino
EmailService.setDestinationEmail('nuevo@gmail.com');
```

## ✅ Verificar Funcionamiento

1. **Verificar configuración**:
```typescript
import EmailService from './services/emailService';

if (EmailService.isConfigured()) {
  console.log('✅ EmailJS configurado correctamente');
} else {
  console.log('❌ EmailJS no configurado');
}
```

2. **Probar el formulario**:
- Llena el formulario de contacto
- Envía una prueba
- Revisa tu bandeja de entrada

## 📊 Límites del Plan Gratuito

- **200 emails/mes** gratis
- Para más emails: planes desde $5/mes
- Perfecto para empezar

## 🛠️ Solución de Problemas

### Error: "EmailJS no configurado"
- Verifica que hayas reemplazado los valores en `src/config/email.ts`
- Los valores no deben ser `'YOUR_SERVICE_ID'`, etc.

### No llegan los emails
- Verifica tu bandeja de SPAM
- Asegúrate de que el template esté publicado en EmailJS
- Revisa la consola del navegador para errores

### Template no funciona
- Asegúrate de usar exactamente los nombres de variables del template
- Variables disponibles: `user_name`, `user_email`, `services`, etc.

## 🔐 Seguridad

- ✅ **Seguro**: EmailJS maneja la autenticación
- ✅ **Sin backend**: Todo funciona desde el frontend
- ✅ **Rate limiting**: EmailJS incluye protección anti-spam
- ✅ **GDPR compliant**: EmailJS cumple con GDPR

## 📱 Notificaciones Móviles

Para recibir notificaciones instantáneas:
- Instala la app Gmail en tu móvil
- Activa notificaciones para tu email
- ¡Recibirás cada formulario al instante!

---

¿Necesitas ayuda? Revisa la [documentación de EmailJS](https://www.emailjs.com/docs/) o contacta al desarrollador.
