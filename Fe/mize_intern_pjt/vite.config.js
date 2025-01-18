import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import os from "os"; // 네트워크 인터페이스 정보 가져오기

// https://vitejs.dev/config/
export default defineConfig(() => {
  // 현재 머신의 네트워크 IP 가져오기
  const getLocalNetworkIp = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
      const iface = interfaces[interfaceName];
      for (const alias of iface) {
        if (alias.family === "IPv4" && !alias.internal) {
          return alias.address; // 로컬 네트워크 IP
        }
      }
    }
    return "localhost"; // 기본값
  };

  const localNetworkIp = getLocalNetworkIp();
  return {
    plugins: [
      mkcert(),
      react(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: false,

        pwaAssets: {
          disabled: false,
          config: true,
        },

        manifest: {
          name: "IoTControl",
          short_name: "IoTControl",
          description: "Mize_Intern_Pjt_IoTControl",
          theme_color: "#ffffff",
          start_url: "/",
          display: "standalone",
          icons: [
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
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
    server: {
      https: true,
      host: true,
      proxy: {
        "/api": {
          target: `http://${localNetworkIp}:3002`,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: [
        { find: "@components", replacement: "/src/components" },
        { find: "@", replacement: "/src" },
      ],
    },
  };
});
