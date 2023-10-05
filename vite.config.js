import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
const env = loadEnv('develoment', process.cwd(), 'VITE');
export default defineConfig({
  plugins: [react()],
  server:{
    port: env.VITE_PORT,
    host: env.VITE_HOST
  }
})
