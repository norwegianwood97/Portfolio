import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = 'Portfolio_260514';
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProduction ? `/${repositoryName}/` : '/',
});
