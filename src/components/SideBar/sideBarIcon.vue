<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 19:25:06
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-24 16:03:12
-->

<!-- 1、对于父组件监听子组件事件，子组件向父组件传值——emit
     2、当父组件的响应式对象 [发生更改时], 不能使用defineProps获得父组件的响应式对象
     3、对于2可以使用依赖注入provide、inject
 -->
<script setup lang="ts">
import { inject, ref } from "vue";

const active = inject<boolean>('active')
let iconclass = ref({
  icon: true,
  active: active,
});


</script>
<template>
  <label for="check" class="sidebar-button" @change="$emit('activate', 'left')">
    <input type="checkbox" id="check" :checked="iconclass.active"/>
    <span></span>
    <span></span>
    <span></span>
  </label>
</template>
<style lang="less" scoped>
@text-color: #2c3e50;
@icon-transition: 0.3s ease;

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;

  .sidebar-button {
    display: flex;
    flex-direction: column;
    padding: 9px 1rem;
    width: 2rem;
    cursor: pointer;

    span {
      background-color: #060c21;
      height: 3px;
      
      border-radius: 50px;
      transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

      &:nth-of-type(1) {
        width: 50%;
      }

      &:nth-of-type(2) {
        margin: 6px 0;
        width: 100%;
      }

      &:nth-of-type(3) {
        width: 75%;
      }
    }

    input[type="checkbox"] {
      display: none;

      &:checked~span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(5px, 0px);
      }

      &:checked~span:nth-of-type(2) {
        width: 98%;
        transform-origin: top;
        transform: rotatez(-45deg);
      }

      &:checked~span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(14px, -4px) rotatez(45deg);
      }
    }
  }
}
</style>
