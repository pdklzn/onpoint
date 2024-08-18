import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  preview: {
    port: 3000
  },
  server: {
    port: 3000,
    open: true,
  },
  root: "./src",
  publicDir: "public",
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@app/components": path.resolve(__dirname, "./src/components"),
  //     "@app/images": path.resolve(__dirname, "./public/image"),
  //   }
  // },
  build: {
    target: "es2015",
    outDir: "../dist",
    rollupOptions: {
      input: {
        app: "./src/index.html"
      }
    }
  }
})
