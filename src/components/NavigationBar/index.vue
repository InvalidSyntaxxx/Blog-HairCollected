<!-- 
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-01 18:10:26
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-24 17:09:50
-->
<!-- 导航栏组件 -->
<script setup lang="ts">
import goto from "../../utils/goto";
import SideBar from "../SideBar/index.vue";
import SearchBox from "../SearchBox/index.vue";
import logo from "../../assets/logo.png";
let baseLogoUrl = logo;
</script>
<template>
  <div class="nav-container">
    <div class="nav-left ripple">
      <!-- 侧边栏 -->
      <SideBar />
    </div>
    <!-- 中间主页 -->
    <!-- //设置一个jump to！ -->
    <div class="nav-middle" @click="goto('/register')">
      <img :src="baseLogoUrl" alt="Logo" />
    </div>
    <!-- 博客个人信息 -->
    <div class="nav-right ripple">
      <!-- 搜索栏 -->
      <SearchBox/>
    </div>
  </div>
</template>
<style scoped lang="less">
* {
  max-width: 100vw;
  display: inline-block;

  .nav-container {
    display: flex;
    justify-content: center;
    width: 100vw;

    .nav-left {
      width: 4rem;
    }

    .nav-middle {
      text-align: center;
      width: calc(100% - 4rem - 5px);

      /* 目前的办法就是这个了 */
      img {
        user-select: none;
        max-width: 2rem;
      }
    }

    .nav-right {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      width: 4rem;
    }
  }
}
</style>
