<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 19:25:06
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-08 21:11:57
-->

<!-- 1、对于父组件监听子组件事件，子组件向父组件传值——emit
     2、当父组件的响应式对象 [发生更改时], 不能使用defineProps获得父组件的响应式对象
     3、对于2可以使用依赖注入provide、inject
 -->
<script setup lang="ts">
import { inject, ref } from "vue";

const active = inject('active')
// const props = defineProps({
//   active: Boolean,
// });
// const emit = defineEmits(['activate'])
let iconclass = ref({
  icon: true,
  active: active,
});

// const handlerClick = (e:Event)=>{
    // emit('activate','left')
// }
</script>
<template>
  <div class="sidebar-button" @click="$emit('activate','left')">
    <div :class="iconclass">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<style lang="less" scoped>
@text-color: #2c3e50;
@icon-transition: 0.3s ease;
.sidebar-button {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
    // padding: 0.6rem;
  cursor: pointer;
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    cursor: inherit;
    span {
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: @text-color;
      transition: transform @icon-transition;
      &:nth-child(2) {
        margin: 6px 0;
      }
    }
  }
  .active {
    span {
      transition: transform @icon-transition;
      &:nth-child(1) {
        transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
        transform-origin: center;
      }
      &:nth-child(2) {
        transform: scale3d(0, 0, 1);
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate3d(6px, -6px, 0);
        transform-origin: center;
      }
    }
  }
}
</style>
