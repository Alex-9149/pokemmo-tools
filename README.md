<div align="center">

# ⚡ PokeMMO Tools ⚡

*Tu centro de herramientas para optimizar cada sesión en PokeMMO*

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" alt="Pokeball" />
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png" width="80" alt="Greatball" />
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" width="80" alt="Ultraball" />

</div>

---

## 📖 ¿De qué trata el proyecto?

**PokeMMO Tools** es una plataforma web interactiva diseñada para jugadores de PokeMMO. Su objetivo es ofrecer herramientas prácticas y guías detalladas que ayuden a optimizar el farmeo de dinero, el entrenamiento de EVs y la crianza competitiva, todo en un solo lugar con un diseño moderno y rápido.

---

## ✨ Herramientas Disponibles

* **⚔️ Gym Farm Tracker:** Rastrea los 41 gimnasios de Kanto, Johto, Hoenn, Sinnoh y Teselia con cooldowns de 18h y cálculo automático de ganancias con/sin Amuleto Moneda. Guardado automático en `localStorage`.
* **⚡ Farmeo de EVs por Hordas:** Guía completa de spots con Dulce Aroma en las 5 regiones, con detector de estación en tiempo real y filtros por estadística.
* **🧬 Simulador de Crianza:** Calcula grupos huevo, compatibilidad, herencia de IVs, naturales con Piedraeterna y movimientos huevo heredados.
* **🌱 Plantación de Bayas:** *(En desarrollo)* Calculadora de cosecha y rentabilidad de bayas.

---

## 🚀 Tecnologías Utilizadas

| Categoría | Tecnología |
| :--- | :--- |
| **Framework** | Astro 7 (output estático) |
| **Estilos** | Tailwind CSS v4 + CSS personalizado |
| **Lenguaje** | TypeScript + JavaScript vanilla |
| **API de Sprites** | PokéAPI (sprites) |
| **Persistencia** | `localStorage` (sin backend) |
| **Control de Versiones** | Git & GitHub |

---

## 🛠️ Cómo Empezar en Local

### Requisitos
- Node.js v22 o superior

### Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/joseluisgilj9819-collab/Guide_Pokemmo.git
cd Guide_Pokemmo

# 2. Instala dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

### Comandos disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Genera el sitio estático en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

---

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para generar archivos estáticos puros (`output: 'static'`). Para publicar en GitHub Pages:

1. En `astro.config.mjs`, descomentar y ajustar el campo `base`:
   ```js
   base: '/Guide_Pokemmo/',
   ```
2. Hacer push a la rama `main`.
3. En GitHub → Settings → Pages → seleccionar la rama `main` y la carpeta `/dist`.

*(Próximamente: workflow de GitHub Actions incluido)*

---

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro       # Layout base con navbar y footer
├── components/
│   ├── Navbar.astro        # Navegación compartida
│   └── Footer.astro        # Pie de página
├── pages/
│   ├── index.astro         # Página de inicio (landing)
│   ├── gyms-farm.astro     # Gym Farm Tracker
│   ├── evs-farm.astro      # Farmeo de EVs
│   └── breeding.astro      # Simulador de Crianza
└── styles/
    └── global.css          # Tailwind v4 + tokens de diseño
```
