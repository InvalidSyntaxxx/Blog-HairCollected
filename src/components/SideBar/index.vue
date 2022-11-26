<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 16:03:06
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-24 16:01:20
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
            <div class="title">公告</div>
            <!-- 左侧内容 -->
            <br/>
            什么都没做呢，别急...

          </div>
        </n-drawer-content>
      </n-drawer>
    </div>
  </div>
</template>
<style lang="less" scoped>
@mediaPhone: "(min-width: 768px)";
.wrapper {
  display: block;
}


</style>
