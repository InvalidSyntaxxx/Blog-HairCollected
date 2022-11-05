<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-05 20:36:02
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-05 20:55:16
-->
<script setup>
import { NTabs, NTabPane } from 'naive-ui';
import axios from 'axios'
import { onMounted, ref } from "vue";
// 异步获取数据
async function getdata() {
setTimeout(() => {
  axios
    .get("/api/getTabs")
    .then((res) => {
      channels.value = res.data.data;
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
}, 500); //模拟网速慢
}

onMounted(() => {
getdata();
});

</script>
<template>
     <n-tabs type="line" animated>
      <n-tab-pane  name="home" tab="首页">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="文章">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="实验">
        七里香
      </n-tab-pane>
    </n-tabs>
</template>