/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-07-04 19:37:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-08 11:06:24
 */
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  ],
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 8888, // 端口号
    host: "0.0.0.0",
    hmr: true,
    },
    
})
