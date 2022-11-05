/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-07-04 19:37:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-10-31 17:50:51
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import "./mock" //之前在挂载的uri看不到数据，是因为没使用，所以一直看不到数据+axios报404
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

createApp(App).use(router).mount('#app')
