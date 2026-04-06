# Restaurante Hong Kong - Sitio Web

SPA (Single Page Application) para el menú de un restaurante chino con navegación basada en scroll.

## Stack Tecnológico

- **Vite** - Build tool
- **React 18** - UI framework
- **Tailwind CSS v4** - Estilos
- **GSAP** - Animaciones
- **Material Symbols** - Iconografía

## Idiomas

- Español (predeterminado)
- Inglés
- Alemán

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo (http://localhost:5173)
npm run build    # Build de producción
npm run preview  # Vista previa del build
npm run lint     # ESLint
```

## Estructura del Proyecto

```
src/
├── main.jsx              # Punto de entrada
├── App.jsx               # Componente raíz, datos del menú
├── index.css             # Tailwind + estilos personalizados
└── components/
    ├── layout/           # Sidebar, MobileHeader, Footer
    └── sections/         # Hero, MenuSection

resources/
├── images/               # Imágenes de comida, logos
├── *.json               # Archivos de datos del menú
```

## Configuración de Tailwind v4

Este proyecto usa el plugin `@tailwindcss/vite`. La configuración del tema se define en `src/index.css` mediante la directiva `@theme`.

## Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `surface` | `#fbf9f1` | Fondo principal |
| `primary` | `#6b000e` | Rojo carmesí |
| `primary-container` | `#960018` | Rojo oscuro |
| `secondary` | `#735c00` | Dorado |
| `on-primary` | `#ffffff` | Texto sobre primary |

## Tipografía

- **Noto Serif** - Encabezados
- **Manrope** - Cuerpo del texto

## Arquitectura

- Navegación scroll con sidebar fijo en desktop
- Menú hamburguesa en móvil
- Componente `MenuSection` reutilizable con variantes (entrantes, principales, postres)

## Convenciones Git

```
feat:     Nueva funcionalidad
fix:      Corrección de bugs
style:    Cambios de estilo
docs:     Documentación
refactor: Refactorización
test:     Tests
```

## Referencias

- [`goal.md`](./goal.md) - Visión del proyecto
- [`AGENTS.md`](./AGENTS.md) - Guía para desarrolladores

## Licencia

Privado - Todos los derechos reservados