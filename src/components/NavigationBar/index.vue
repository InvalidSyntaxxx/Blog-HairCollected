<!-- 
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-01 18:10:26
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-06 00:09:48
-->
<!-- 导航栏组件 -->
<script setup lang="ts">
import { NIcon } from "naive-ui";
import { HomeOutline } from "@vicons/ionicons5";
import dropdown from "./dropdown.vue";
let baseLogoUrl =
  "https://wangwangyz.site/my/static/cropped-%E7%AB%99%E7%82%B9logo.png";
let size = { smallsize: 28, mediumsize: 32, largesize: 36 };
</script>
<template>
  <div class="nav-container">
    <div class="nav-left">
        <!-- 下拉菜单 -->
        <dropdown :size="size.mediumsize"></dropdown>
    </div>
    <!-- 中间主页 -->
    <!-- //设置一个jump to！ -->
    <div class="nav-middle" @click="/\/home/"> 
      <n-icon :size="size.smallsize">
        <HomeOutline />
      </n-icon>
    </div>
    <!-- 博客个人信息 -->
    <div class="nav-right">
      <img :src="baseLogoUrl" alt="Logo" />
    </div>
  </div>
</template>
<style scoped>
* {
  max-width: 100vw;
  display: inline-block;
}
.nav-container{
    width: 100vw;
    /* padding-left: 2rem; */
    /* padding-right: 2rem ; */
}
.nav-left{
    width: 2rem;
}
.nav-middle {
  text-align: center;
  width: calc(100% - 4rem - 5px);  /* 目前的办法就是这个了 */
}
.nav-right {
    box-sizing: border-box;
  width: 2rem;
  float: right;
  margin-right: 5px;
  padding-top: 4px;
}
.nav-right > img {
  user-select: none;
  max-width: 2rem;
}
</style>
