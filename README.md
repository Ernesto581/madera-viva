# MaderaViva 🌲

> Guía interactiva sobre tipos de madera, técnicas de carpintería y herramientas esenciales.

[![Demo en vivo](https://img.shields.io/badge/demo-vercel-brightgreen?style=flat-square&logo=vercel)](https://madera-viva.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-97.5%25-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-bundler-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-styles-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/Licencia-MIT-yellow?style=flat-square)](LICENSE)

---

## 🌐 Demo

👉 **[madera-viva.vercel.app](https://madera-viva.vercel.app)**

---

## ✨ Funcionalidades

| Sección | Descripción |
|---|---|
| 🪵 **Catálogo de maderas** | Explora distintos tipos de madera con sus características, usos y propiedades. |
| 📊 **Datos curiosos** | Visualización de datos interesantes sobre el mundo de la madera con gráficos (Recharts). |
| 🔧 **Herramientas** | Guía de herramientas esenciales para carpintería, desde manuales hasta eléctricas. |
| 🪚 **Técnicas** | Aprende técnicas de carpintería con descripciones detalladas. |
| 🧠 **Quiz interactivo** | Pon a prueba tus conocimientos sobre madera y carpintería. |
| 🎨 **Animaciones fluidas** | Transiciones y micro-interacciones con Framer Motion. |
| 📱 **Diseño responsivo** | Interfaz adaptable a cualquier dispositivo. |

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| [React 18](https://react.dev/) | Librería de UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Vite](https://vite.dev/) | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos utility-first |
| [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | Componentes accesibles |
| [React Router](https://reactrouter.com/) | Navegación SPA |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones |
| [Recharts](https://recharts.org/) | Gráficos y visualización |
| [TanStack Query](https://tanstack.com/query) | Gestión de estado asíncrono |
| [Vitest](https://vitest.dev/) | Testing |

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Ernesto581/madera-viva.git

# Entrar al directorio
cd madera-viva

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:8080`.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run build:dev` | Build en modo desarrollo |
| `npm run preview` | Preview del build generado |
| `npm run lint` | Ejecuta ESLint |
| `npm run test` | Ejecuta tests con Vitest |
| `npm run test:watch` | Tests en modo watch |

---

## 📂 Estructura del proyecto

```
madera-viva/
├── public/               # Archivos estáticos
├── src/
│   ├── components/       # Componentes de la UI
│   │   └── ui/           # Componentes base (shadcn/ui)
│   ├── data/             # Datos de maderas y contenido
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilidades y helpers
│   ├── pages/            # Páginas de la app
│   │   ├── Index.tsx     # Página principal
│   │   └── NotFound.tsx  # Página 404 personalizada
│   └── test/             # Tests
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar MaderaViva:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature: `git checkout -b feature/mi-nueva-feature`.
3. Realiza tus cambios y haz commit: `git commit -m "feat: agregar nueva feature"`.
4. Sube tu rama: `git push origin feature/mi-nueva-feature`.
5. Abre un Pull Request.

---

## 👤 Autor

**Ernesto Linares** — [@Ernesto581](https://github.com/Ernesto581)

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
