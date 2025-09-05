# Lab 5 - React Router con Material UI

Este proyecto demuestra la implementación de un sistema de rutas con React Router, interfaz de usuario con Material UI, y autenticación básica.

## Características

- ✅ React Router para navegación entre vistas
- ✅ Material UI para diseño de interfaz
- ✅ Material Icons para iconografía
- ✅ Sistema de autenticación con contexto
- ✅ Vistas: Login, Homepage, Dashboard
- ✅ Header y Footer en todas las vistas
- ✅ Rutas protegidas

## Tecnologías Utilizadas

- React 19.1.1
- React Router DOM
- Material UI (@mui/material)
- Material Icons (@mui/icons-material)
- Emotion (para estilos de Material UI)
- Vite (como bundler)

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Credenciales de Prueba

- **Email:** admin@example.com
- **Contraseña:** password123

## Estructura del Proyecto

```
src/
├── components/
│   ├── Login.jsx          # Componente de inicio de sesión
│   ├── Homepage.jsx       # Página de inicio
│   ├── Dashboard.jsx      # Panel de control
│   └── Layout.jsx         # Layout con Header y Footer
├── contexts/
│   └── AuthContext.jsx    # Contexto de autenticación
└── App.jsx                # Componente principal con rutas
```

## Funcionalidades

1. **Sistema de Login:** Autenticación con credenciales fijas
2. **Navegación:** Rutas protegidas que redirigen al login si no está autenticado
3. **Layout Responsivo:** Header con navegación y Footer en todas las vistas
4. **Dashboard:** Panel con estadísticas y actividades recientes
5. **Material UI:** Diseño moderno y consistente
