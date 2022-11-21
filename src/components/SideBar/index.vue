<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 16:03:06
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-21 14:43:26
-->
<script setup lang="ts">
import { DrawerPlacement, NDrawer, NDrawerContent } from "naive-ui";
import { provide, ref } from "vue";
import SideBarIcon from './sideBarIcon.vue';
import { getWidth } from "../../utils/calc";


let sideBarWidth = getWidth(0.618);

let active = ref(false);
let placement = ref<DrawerPlacement>("left");
const activate = (place: DrawerPlacement) => {
  active.value = !active.value;
  placement.value = place;

};

provide('active',active);

</script>
<template>
  <div class="wrapper" >
    <SideBarIcon v-model:active="active" @activate="activate"/>
    <div class="drawer">
      <n-drawer
        :placement="placement"
        :width="sideBarWidth"
        v-model:show="active"
        :trap-focus="false"
        :block-scroll="false"
        to="#sideBarContainer"
      >
        <n-drawer-content title="掉发收集站">
          <div>
            <!-- 左侧标题 -->
            <h1>公告</h1>
            <!-- 左侧内容 -->
            什么都没做呢，别急...

          </div>
        </n-drawer-content>
      </n-drawer>
    </div>
  </div>
</template>
<style lang="less" scoped>
@mediaPhone: "(min-width: 768px)";
.n-icon {
  padding-left: 10px;
  /* margin-top: 10px; 此属性不起效果*/
  bottom: -5px;
}
.wrapper {
  // position: relative;
}

#drawer-target {
  position: absolute;
  width: 100vw;
  height: 100vh;
  // top: 4rem
}
</style>
