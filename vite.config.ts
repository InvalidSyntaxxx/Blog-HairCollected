import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 8888, // 端口号
    host: "0.0.0.0",
    hmr: true,
    },
})
