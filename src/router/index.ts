/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-30 20:17:51
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-02 13:06:39
 */
import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from '../views/login.vue'
import RegisterView from '../views/register.vue'
import NotFoundView from '../views/404/404.vue'
import HomeView from '../views/Home/index.vue'
const routes = [
    {
        path: '/',
        redirect: 'Home'
    },
    {
        path:'/Home',
        name:'Home',
        component:HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    //此项不再需要在最底部啦！！
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/404',
        name: '404',
        component: NotFoundView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // `routes: routes` 的缩写
})
export default router

