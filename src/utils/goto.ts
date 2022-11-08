/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 21:20:16
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-08 21:32:09
 */
import { useRouter } from 'vue-router'
const route = useRouter()
export default function goto(url:string) {
    route.push(url)
}
export  function goback(){
    route.go(-1)
}