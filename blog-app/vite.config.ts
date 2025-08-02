import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.lastIndexOf(".md") !== -1) {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
})
