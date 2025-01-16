# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
mize_intern_pjt
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ icon-192x192.png
│  └─ icon-512x512.png
├─ pwa-assets.config.js
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ aircondition.png
│  │  ├─ id_icon.png
│  │  ├─ light.png
│  │  ├─ lightbulb.png
│  │  ├─ newaircondition.png
│  │  ├─ power.png
│  │  ├─ pw_icon.png
│  │  ├─ react.svg
│  │  ├─ remotecontrol.png
│  │  ├─ sensor.png
│  │  └─ tv.png
│  ├─ components
│  │  ├─ Card
│  │  │  ├─ Card.jsx
│  │  │  └─ Card_style.jsx
│  │  ├─ EnvironmentalSensorCard
│  │  │  ├─ EnvironmentalSensorCard.jsx
│  │  │  └─ EnvironmentalSensorCard_style.jsx
│  │  ├─ Modal
│  │  │  ├─ FilterModal.jsx
│  │  │  └─ FilterModal_style.jsx
│  │  ├─ PlugPresenceCard
│  │  │  ├─ PlugPresenceCard.jsx
│  │  │  └─ PlugPresenceCard_style.jsx
│  │  └─ PolarSPOTMiniCard
│  │     ├─ PolarSPOTMiniCard.jsx
│  │     └─ PolarSPOTMiniCard_style.jsx
│  ├─ index.css
│  ├─ Layout.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ homepage
│  │  │  ├─ devices
│  │  │  │  ├─ Devices.jsx
│  │  │  │  ├─ Devices_style.jsx
│  │  │  │  └─ test.js
│  │  │  ├─ Filter
│  │  │  │  ├─ Filter.jsx
│  │  │  │  └─ Filter_style.jsx
│  │  │  ├─ Header
│  │  │  │  ├─ Header.jsx
│  │  │  │  └─ Header_style.jsx
│  │  │  ├─ Home.jsx
│  │  │  └─ Home_style.jsx
│  │  └─ loginpage
│  │     ├─ Login.jsx
│  │     └─ Login_style.jsx
│  ├─ PWABadge.css
│  ├─ PWABadge.jsx
│  └─ styles
│     ├─ colors
│     │  └─ index.js
│     └─ fonts
│        └─ index.js
└─ vite.config.js

```