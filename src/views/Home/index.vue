<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-02 13:03:16
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-20 17:57:31
-->
<script setup lang="ts">
import { ref } from "vue";
import {
  NSpace,
  NLayout,
  NLayoutHeader}
from "naive-ui";
import Navigation from "../../components/NavigationBar/index.vue";
import banner from "../../components/Banner/index.vue";
import coverflow from "../../components/CoverFlow/index.vue";
</script>
<template>
  <n-space>
    <n-layout>
      <!-- 导航栏组件 -->
      <n-layout-header style="">
        <Navigation></Navigation>
      </n-layout-header>
      <n-layout>
        <!-- 侧边栏容器-->
        <div id="sideBarContainer"></div>
        <!-- 中间Banner部分 -->
            <banner title="掉发收集站"/>

        <!-- CoverFlow部分 -->
        <coverflow/>
        <!-- Footer部分 -->
      </n-layout>
    </n-layout>
  </n-space>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.n-layout {
  width: 100vw;
}
.n-layout-header {
  /* width: 100%; */
  background: linear-gradient(45deg, #4af884, #90f6e3, #82e2c4);
}

.n-layout-scroll-container {
  padding: 5px 0 5px 0;
}
.n-layout-content {
  background-color: rgb(245, 245, 245);
  max-height: 240px;
}
.n-layout-sider {
  width: 10px;
}
</style>
