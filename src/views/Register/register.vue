<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-30 20:56:13
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-10-31 17:52:56
-->
<script setup>
import { NButton,useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()
const message = useMessage()
function handleRegisterClick(){
    message.error("Error! You can't register!")
    router.push('/login')
}
</script>
<template>
    <n-button type="warning" @click="handleRegisterClick">
        <p>Register!</p>
    </n-button>
    
</template>