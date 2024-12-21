/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite o acesso de qualquer endereço IP
    port: 5173,       // Porta configurada para o frontend
  }
})
*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 3000,
  strictPort: true,
 },
 server: {
  port: 3000,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:3000",
 },
});