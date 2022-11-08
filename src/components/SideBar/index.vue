<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 16:03:06
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-08 21:53:59
-->
<script setup lang="ts">
import { NIcon, DrawerPlacement, NDrawer, NDrawerContent } from "naive-ui";
import { provide, ref } from "vue";
import { ReorderThree, Close } from "@vicons/ionicons5";
import SideBarIcon from './sideBarIcon.vue';


let sideBarWidth = 502;
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
        :width:="sideBarWidth"
        v-model:show="active"
        :trap-focus="false"
        :block-scroll="false"
        to="#sideBarContainer"
      >
        <n-drawer-content title="掉发收集站">
          <div>
            <!-- 左侧内容 -->
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
