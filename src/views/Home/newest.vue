<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-05 17:51:35
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-05 22:10:01
-->
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NSpace, NSkeleton, NDivider, NIcon } from "naive-ui";
import { ArrowForwardCircleOutline } from "@vicons/ionicons5";
import axios from "axios";
// 频道接口
interface New {
  id: number;
  title: string;
  picture: string;
  description: string;
  likes: number;
  comments: number;
  seen: number;
}

let loading = ref(true);
let newests = ref<New[]>();

// 异步获取数据
async function getdata() {
  setTimeout(() => {
    axios
      .get("/api/getNewest")
      .then((res) => {
        newests.value = res.data.data;
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
  <!-- <n-space vertical v-show="loading"> -->
  <!-- <n-skeleton height="40px" width="33%" /> -->
  <!-- <n-skeleton height="40px" width="66%" :sharp="false" /> -->
  <!-- <n-skeleton height="40px" round /> -->
  <!-- <n-skeleton height="40px" circle /> -->
  <!-- </n-space> -->

  <div v-if="newests">
    <p class="title">
      最新
      <n-icon>
        <!-- 跳转箭头 -->
        <ArrowForwardCircleOutline />
      </n-icon>
    </p>
    <n-divider />
    <div class="channelcard" v-for="newest in newests">
      <div class="new-title">
        {{ newest.title }}
      </div>

      <!-- 分割线 -->
      <n-divider />
    </div>
  </div>
</template>
<style scoped>
.n-divider:not(.n-divider--vertical):nth-child(1){
  margin-top: 110px;
}
.n-divider:not(.n-divider--vertical){
  margin-top: 0px;
  margin-bottom: 0px;
}
.channelcard {
  max-height: 5rem;
  width: 100vw;
}
.channelcard:hover{
  background-color: rgb(241, 241, 241);
}
.title {
  font-size: large;
  /* before触发的前提 */
  position: relative;
  padding-left: 0.25rem;
  padding-bottom: 0;
}
.title::before {
  content: "";
  position: absolute;
  background: linear-gradient(#d4fc79, #96e6a1);
  bottom: -4px;
  height: 0.25rem;
  width: 2rem;
  border-radius: 0.25rem;
}

.new-title {
  position: relative;
  padding-left: 0.5rem;
  padding-top: 12px;
  padding-bottom: 0px;
  margin-bottom: 12px;
  
}
.new-title::before{
  position: absolute;
  content: "";
  bottom: -1px;
  width: 0;
  height: 0.25rem;
  background: linear-gradient(#d4fc79, #96e6a1);
  
}
.new-title:hover::before{
  animation: bolan 2s;
}
@keyframes bolan{
  0%{
    width: 0;
  }
  30%{
    width:4rem
  }
  60%{
    width: 5rem;
  }
  80%{
    width: 6rem;
  }
  100%{
    width: 100%;
  }
}
</style>
