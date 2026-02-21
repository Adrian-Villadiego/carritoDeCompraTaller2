#  Carrito de Compra - React App

Aplicación web desarrollada en **React + Vite** que simula un sistema de carrito de compras para productos tecnológicos.  
Permite visualizar productos, agregarlos, editarlos y eliminarlos mediante una interfaz moderna y dinámica.

---

##  Descripción

Este proyecto fue desarrollado como práctica de React, aplicando conceptos como:

- Componentes reutilizables
- Props
- React Router
- Estructura modular por features
- Formularios controlados
- Diseño con Bootstrap

La aplicación simula una tienda tecnológica donde el usuario puede gestionar productos dinámicamente.

---

##  Características Principales

- 🔎 Barra de búsqueda
- ➕ Agregar nuevos productos
- ✏ Editar productos existentes
- 🗑 Eliminar productos
- 📦 Visualización dinámica en tarjetas
- 🧭 Navegación entre páginas (Inicio, Artículos, Props)
- 🎨 Interfaz responsive con Bootstrap
- ⚛ Uso de Props en componentes reutilizables

---

##  Interfaz Gráfica

La aplicación cuenta con:

- Header con navegación
- Sección principal de productos
- Panel lateral para agregar productos
- Footer informativo
- Página demostrativa del uso de Props

Diseño moderno tipo e-commerce.

---

##  Arquitectura del Proyecto

El proyecto está organizado siguiendo una estructura modular:

src/
│
├── features/
│   └── layout/
│       └── components/
│           ├── Header.jsx
│           ├── Footer.jsx
│           ├── Content.jsx
│           ├── Articulo.jsx
│           └── Props.jsx
│
├── hooks/
├── pages/
├── products/
├── shared/
│   └── styles/
│       ├── App.css
│       └── index.css
│
├── App.jsx
├── main.jsx
└── routes.jsx

###  Explicación de arquitectura

- **features/** → Contiene los módulos principales del sistema.
- **components/** → Componentes reutilizables.
- **shared/styles/** → Estilos globales.
- **App.jsx** → Configuración de rutas con React Router.
- **main.jsx** → Punto de entrada de la aplicación.

Esta estructura permite escalabilidad y mantenimiento profesional del proyecto.

---


## 👨 Datos del Autor

**Nombre:** Adrián Villadiego  
**Programa:** Análisis y Desarrollo de Software  
**Rol:** Aprendiz de Desarrollo
**Año:** 2026  

