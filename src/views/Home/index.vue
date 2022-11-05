<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-02 13:03:16
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-04 14:46:43
-->
<script setup lang="ts">
import { ref } from 'vue';
import Navigation from '../../components/NavigationBar/index.vue'
let dynamicProps = ref('Tishi')
let count = ref(0)
dynamicProps.value = "这是动态的props！"

</script> 
<template>
    <Navigation 
    class="touchuan" 
    title="staticProps" 
    :dynamic-props="dynamicProps"
    @increase="(n)=> count += n"/>
    {{ count }}
</template>