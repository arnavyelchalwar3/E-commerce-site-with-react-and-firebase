import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // You can add other aliases here if needed
    },
    // Resolve image imports from src directory
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.css', '.jpg', '.jpeg', '.png', '.gif', '.svg'],
    modules: [
      // Allow importing modules as if src/ was the root
      {
        name: 'src',
        // Resolve ./src as the root directory
        resolve: '/src',
      },
      // Allow importing modules as if the project root was the root
      {
        name: 'projectRoot',
        // Resolve . as the project root directory
        resolve: '.',
      },
    ],
  },
});
