<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-05 14:33:31
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-05 19:19:16
-->
<script setup lang="ts">
import { NCarousel } from "naive-ui";

</script>
<template>
      <n-carousel autoplay show-arrow>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel>
</template>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
