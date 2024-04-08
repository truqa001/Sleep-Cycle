import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { VitePWA } from "vite-plugin-pwa";
import { VitePWAOptions } from "vite-plugin-pwa";

export const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
  },
  injectRegister: "auto",
  manifest: {
    name: "Sleep Cycle",
    short_name: "Sleep Cycle",
    description: "A simple sleep cycle calculator",
    icons: [
      {
        src: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#120a39",
    background_color: "#1d3551",
    display: "standalone",
    scope: "/SleepCycle/",
    start_url: "/SleepCycle",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SleepCycle/",
  plugins: [react(), VitePWA(manifestForPlugin)],
  // ** In order to make tailwind classes work, apply these lines
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      src: "/src",
      ["@components"]: "/src/components",
      public: "/public",
    },
  },
});
