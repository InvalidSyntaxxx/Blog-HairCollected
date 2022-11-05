<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-02 13:03:16
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-05 21:21:19
-->
<script setup lang="ts">
import { ref } from "vue";
import {
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter,
} from "naive-ui";
import Navigation from "../../components/NavigationBar/index.vue";
import carousel from "./carousel.vue";
import channelComponent from "./newest.vue";
import tabs from "./tabs.vue";
</script>
<template>
  <n-space>
    <n-layout>
      <!-- 导航栏组件 -->
      <n-layout-header style="">
        <Navigation></Navigation>
      </n-layout-header>

      <n-layout has-sider>
        <!-- 左侧内容部分 -->
        <n-layout-sider content-style="padding: 0 1psx 0 0;" width="61.8%">
          <!-- 轮播图 -->
          <carousel />
        </n-layout-sider>

        <!-- 右侧内容部分 -->
        <n-layout-content style="padding:0">
          <!-- 右侧频道 -->
          <channelComponent />
        </n-layout-content>
      </n-layout>

      <!-- Footer部分 -->
      <n-layout-footer>
        <!-- Tabs -->
        <n-layout-content>
          <tabs />
        </n-layout-content>
      </n-layout-footer>
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
