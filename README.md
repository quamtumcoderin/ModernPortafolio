# 🚀 Portafolio Informático Modular

Un portafolio web diseñado para ir más allá del código. Pensado para perfiles de Ingeniería Informática y Arquitectura de Software, este proyecto destaca no solo las habilidades técnicas, sino también el pensamiento crítico (Análisis DAFO), las competencias transversales (Soft Skills) y la filosofía de trabajo.

Construido con un enfoque obsesivo en la **modularidad**, la **optimización extrema** y la separación real entre la lógica, los datos y la vista.

---

## ✨ Características Principales

* **Arquitectura Modular:** Toda la información del portafolio (textos, arrays, métricas) vive en `/data`. Los componentes de React son puramente presentacionales.
* **Animaciones Smooth & Bounce:** Interfaz fluida con transiciones suaves, scroll nativo optimizado y efectos *bounce* implementados mediante Tailwind CSS.
* **Secciones Analíticas:**
    * 📊 **Análisis DAFO:** Cuadrícula interactiva de Fortalezas, Oportunidades, Debilidades y Amenazas.
    * 🕸️ **Soft Skills:** Gráfico de radar (Spider Chart) interactivo usando Recharts.
    * 🖼️ **Actividades:** Galería interactiva con sistema de filtrado modular y modales personalizados.
    * ⏱️ **Trayectoria:** Línea de tiempo unificada para Experiencia y Formación.
* **Filosofía de Código Limpio:** Estricto uso de comillas simples y omisión de puntos y comas donde la sintaxis de JavaScript lo permite, resultando en un código más limpio y legible.
* **Despliegue Multi-stage:** Preparado para producción con una imagen Docker basada en Alpine Nginx, garantizando un peso mínimo y máximo rendimiento.

---

## 🛠️ Stack Tecnológico

* **Core:** React 18 + JavaScript
* **Build Tool:** Vite (HMR ultra rápido)
* **Estilos:** Tailwind CSS
* **Gráficos:** Recharts
* **Iconos:** Lucide React
* **Infraestructura:** Docker + Nginx (Alpine)

---

## 👁️ Cómo ver una previsualización

Puedes levantar este proyecto de dos formas: en modo desarrollo local o utilizando el contenedor optimizado de producción.

### Opción A: Modo Desarrollo (Local)
Ideal para modificar el contenido o los estilos en tiempo real.

1.  Clona el repositorio e instala las dependencias:
    ```bash
    npm install
    ```
2.  Ejecuta el servidor de desarrollo de Vite:
    ```bash
    npm run dev
    ```
3.  Abre tu navegador y visita: `http://localhost:5173`

### Opción B: Previsualización de Producción (Docker)
Ideal para comprobar el rendimiento final exactamente como se verá en el servidor.

1.  Construye la imagen Docker localmente:
    ```bash
    docker build -t dev-portfolio-preview .
    ```
2.  Levanta el contenedor en el puerto 8080:
    ```bash
    docker run -d -p 8080:80 --name my-portfolio-preview dev-portfolio-preview
    ```
3.  Abre tu navegador y visita: `http://localhost:8080`
4.  *Para detener y limpiar la previsualización:* `docker rm -f my-portfolio-preview`

---

## 📂 Estructura del Proyecto

La separación de responsabilidades es la regla de oro aquí. Si quieres actualizar tu currículum, **solo necesitas tocar la carpeta `/data`**.

```text
src/
├── assets/        # Recursos estáticos e iconos
├── components/
│   ├── layout/    # Navbar, Footer (Estructura global)
│   ├── sections/  # Hero, DAFO, Actividades, Trayectoria
│   └── ui/        # Botones, Cards, Modales, Badges
├── data/          # 🧠 EL CEREBRO: Archivos JS con toda la info
├── hooks/         # Lógica reutilizable (Intersection Observers)
├── styles/        # CSS global y utilidades
└── App.jsx        # Ensamblaje principal