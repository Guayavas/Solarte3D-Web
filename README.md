# 🚀 Solarte3D - Web de Impresión 3D

Este proyecto es una landing page moderna y profesional para **Solarte3D**, un emprendimiento de impresión 3D. Construida con **Next.js**, **Tailwind CSS** y **Framer Motion**, está optimizada para rendimiento y SEO, lista para ser desplegada en Vercel.

---

## 💻 Guía de Instalación Local

Sigue estos pasos para ejecutar el proyecto en tu propia computadora:

### 1. Prerrequisitos
Asegúrate de tener instalado:
- **Node.js** (Versión 18 o superior recomendada)
- **npm** (Viene con Node.js)

### 2. Clonar el repositorio
Si tienes Git instalado:
```bash
git clone <url-del-repositorio>
cd Solarte3D-Web
```

### 3. Instalar dependencias
Desde la carpeta raíz del proyecto, ejecuta:
```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo
Inicia el proyecto localmente:
```bash
npm run dev
```
Ahora abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página.

---

## 🌐 Guía de Despliegue (Poner en línea)

Para que tu web esté accesible para todo el mundo 24/7, la opción más recomendada y sencilla es **Vercel**.

### Opción A: Despliegue con Vercel (Recomendado)
1. Crea una cuenta gratuita en [Vercel.com](https://vercel.com).
2. Conecta tu cuenta de GitHub/GitLab/Bitbucket.
3. Selecciona el repositorio de este proyecto.
4. Vercel detectará automáticamente que es un proyecto de **Next.js**.
5. Haz clic en **"Deploy"**.
6. ¡Listo! Vercel te dará una URL (ej. `solarte3d.vercel.app`) y actualizará la web automáticamente cada vez que subas cambios a la rama principal.

### Opción B: Construcción Manual para otros servidores
Si prefieres usar otro servidor:
1. Genera los archivos de producción:
   ```bash
   npm run build
   ```
2. Los archivos optimizados se guardarán en la carpeta `.next`.
3. Sigue las instrucciones de tu proveedor de hosting para servir aplicaciones de Node.js o exportar como sitio estático si decides usar `output: 'export'` en `next.config.ts`.

---

## 🛠️ Cómo Actualizar el Portfolio

No necesitas tocar el código de los componentes para añadir nuevos proyectos.
1. Ve al archivo `src/data/projects.json`.
2. Añade un nuevo objeto al array siguiendo este formato:
   ```json
   {
     "id": "6",
     "title": "Nombre de tu Proyecto",
     "description": "Breve descripción de lo que hiciste.",
     "category": "Figuras / Repuestos / etc",
     "image": "URL_de_la_imagen",
     "tags": ["Tag1", "Tag2"]
   }
   ```
3. Guarda el archivo y los cambios se verán reflejados automáticamente en la web.

---

## ✨ Tecnologías utilizadas
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Temas:** Next Themes (Modo Oscuro/Claro)
