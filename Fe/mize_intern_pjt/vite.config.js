import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "MIZE IOT CONTROL",
        short_name: "IOT CONTROL",
        icons: [
          {
            src: "/icons/maskable_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: "/",
        description: "MIZE IOT CONTROL",
        background_color: "#0078D4",
        theme_color: "#ffffff",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@", replacement: "/src" },
    ],
  },
});
// import { VitePWA } from "vite-plugin-pwa";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: "autoUpdate",
//       injectRegister: false,

//       pwaAssets: {
//         disabled: false,
//         config: true,
//       },

//       manifest: {
//         name: "mize_intern_pjt",
//         short_name: "mize_intern_pjt",
//         description: "mize_intern_pjt",
//         theme_color: "#ffffff",
//       },

//       workbox: {
//         globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
//         cleanupOutdatedCaches: true,
//         clientsClaim: true,
//       },

//       devOptions: {
//         enabled: true,
//         navigateFallback: "index.html",
//         suppressWarnings: true,
//         type: "module",
//       },
//     }),
//   ],
//   resolve: {
//     alias: [
//       { find: "@components", replacement: "/src/components" },
//       { find: "@", replacement: "/src" },
//     ],
//   },
// });
