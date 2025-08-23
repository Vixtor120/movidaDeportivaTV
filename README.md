# 🏆 Movida Deportiva TV

Una plataforma web moderna para servicios de streaming deportivo, retransmisiones en vivo y producción audiovisual profesional.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.4-38B2AC.svg)

## 📋 Descripción

Movida Deportiva TV es una aplicación web profesional construida con React y TypeScript que ofrece servicios especializados en:

- 📡 **Streaming en vivo** - Retransmisiones profesionales de eventos deportivos
- 📺 **Canal MDTV** - Canal exclusivo en Twitch para deportes
- 📹 **Alquiler de material** - Equipos audiovisuales profesionales
- 🎤 **Speakers y animación** - Presentadores y animadores especializados

## ✨ Características

- ⚡ **Aplicación de página única (SPA)** con React Router
- 🎨 **Diseño moderno y responsivo** con Tailwind CSS
- 🌟 **Animaciones fluidas** con Framer Motion
- 📱 **Totalmente responsivo** para móviles, tablets y escritorio
- 🔄 **Navegación intuitiva** con menús interactivos
- 🚀 **Rendimiento optimizado** con Vite
- 🛡️ **Páginas de error personalizadas** (403/404)
- 🎯 **TypeScript** para mayor robustez del código

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.5.3** - Tipado estático para JavaScript
- **React Router DOM 6.29.0** - Enrutamiento del lado del cliente
- **Framer Motion 11.17.0** - Animaciones y transiciones
- **Tailwind CSS 3.4.4** - Framework de CSS utilitario

### Herramientas de Desarrollo
- **Vite 7.1.2** - Bundler y servidor de desarrollo rápido
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesador de CSS
- **TypeScript ESLint** - Reglas de linting para TypeScript

### Iconos y UI
- **React Icons** - Biblioteca de iconos (Feather, React Icons, etc.)
- **Lucide React** - Iconos modernos y minimalistas

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/Vixtor120/movidaDeportivaTV.git
cd movida-deportiva-tv
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre tu navegador en:**
```
http://localhost:5173
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para revisar el código
```

## 🗂️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Barra de navegación principal
│   └── Footer.tsx      # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── index.tsx       # Página de inicio
│   ├── Conocenos.tsx   # Página "Conócenos"
│   ├── Contacto.tsx    # Página de contacto
│   ├── Error.tsx       # Página de errores 403/404
│   ├── ServicioStreaming.tsx
│   ├── ServicioMDTV.tsx
│   ├── ServicioAlquilerMaterial.tsx
│   ├── ServicioSpeakersAnimacion.tsx
│   ├── PoliticaPrivacidad.tsx
│   └── TerminosServicio.tsx
├── types/              # Definiciones de tipos TypeScript
│   └── index.ts
├── App.tsx             # Componente principal con rutas
├── main.tsx            # Punto de entrada de la aplicación
└── index.css          # Estilos globales con Tailwind
```

## 🔗 Rutas de la Aplicación

- `/` - Página de inicio
- `/conocenos` - Información sobre el equipo
- `/contacto` - Formulario de contacto
- `/servicios/streaming` - Servicio de streaming
- `/servicios/mdtv` - Canal MDTV
- `/servicios/alquiler-material` - Alquiler de equipos
- `/servicios/speakers-animacion` - Speakers y animación
- `/politica-privacidad` - Política de privacidad
- `/terminos-servicio` - Términos de servicio
- `/404` - Página no encontrada
- `/403` - Acceso denegado

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario:** Teal/Cyan (Deportivo y moderno)
- **Secundario:** Slate (Elegante y profesional)
- **Acentos:** Varios gradientes para diferentes servicios

### Responsive Design
- **Mobile First:** Diseñado primero para móviles
- **Breakpoints:** sm, md, lg, xl, 2xl
- **Navegación adaptativa:** Menú hamburguesa en móviles

### Animaciones
- **Transiciones suaves** entre páginas
- **Hover effects** en botones e interacciones
- **Loading animations** con Framer Motion
- **Scroll animations** para mejor UX

## 📄 Licencia

Este proyecto es propiedad de Movida Deportiva TV. Todos los derechos reservados.

## 📞 Contacto

**Movida Deportiva TV**
- 🌐 Website: [En desarrollo]
- 📧 Email: info@movidadeportivatv.com
- 📱 Teléfono: +34 666 123 456
- 📺 Twitch: [@movidadeportivatv](https://www.twitch.tv/movidadeportivatv)
- 📸 Instagram: [@movidadeportivatv](https://www.instagram.com/movidadeportivatv/)
- 🐦 Twitter: [@movidadeportiv](https://x.com/movidadeportiv)
- 📺 YouTube: [@movidadeportivatv](https://www.youtube.com/@movidadeportivatv)
- 🎵 TikTok: [@movidadeportivatv](https://www.tiktok.com/@movidadeportivatv)

---

⚡ **Construido con amor y café por el equipo de Movida Deportiva TV** ⚡
