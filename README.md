# 📋 Organizador de tareas
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Express](https://img.shields.io/badge/Express-5.1.0-green?style=for-the-badge&logo=express)

---

## 📁 Estructura del Proyecto

```
app-to-list/
├── 📁 frontend/                 # Aplicación de React + Vite
│   ├── 📁 src/
│   │   ├── 📁 components/       # Componentes de React
│   │   ├── 📁 config/           # Ajustes y constantes
│   │   ├── 📁 contexts/         # Contextos de React
│   │   ├── 📁 hooks/            # Customs Hooks de React
│   │   ├── 📁 logic/            # Lógica de negocio
│   │   ├── 📁 pages/            # Páginas para Enrutamiento
│   │   ├── 📁 services/         # Servicios de datos
│   │   ├── app.jsx 
│   │   └── main.jsx 
│   └── package.json
├── 📁 backend/                  # API de Express
│   ├── index.js                 # Punto de entrada
│   └── package.json
└── README.md
```

---

## 🚀 Instalación

### Requisitos previos
- Node.js 18+ 
- npm or yarn

### 1. Clonar este repositorio
```bash
git clone https://github.com/AlexRubenPumari/app-to-do-list.git
cd app-to-list
```

### 2. Instalar dependencias de Backend
```bash
cd backend
npm install
```

### 3. Instalar dependencias de Frontend
```bash
cd ../frontend
npm install
```

---

## 🚀 Ejecutando la app

### Inicializar el Backend
```bash
cd backend
node index.js
```
Se puede indicar puerto para ejecutar servidor, en la raíz de la carpeta `backend` con un archivo `.env`, que contenga algo similar a:
```bash
PORT=4000
```
En caso contrario, el servidor se aloja por defecto en: `http://localhost:3000` 

### Inicializar el Frontend
```bash
cd frontend
npm run dev
```
El servidor se aloja por defecto en: `http://localhost:5137`

## 🎨 Imagenes del proyecto

![Imagen del Proyecto](images/img_1.png)
![Imagen del Proyecto](images/img_2.png)
![Imagen del Proyecto](images/img_3.png)
![Imagen del Proyecto](images/img_4.png)