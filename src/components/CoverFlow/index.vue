<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-20 17:05:15
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-20 22:17:03
-->
<script setup lang="ts">
import { Lazy, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/less/effect-coverflow';
import 'swiper/less/pagination'
import 'swiper/less'
import { onMounted, ref } from "vue";
import axios from "axios";
interface Channel {
  id: number;
  name: string;
  picture: string;
  description: string;
}

const modules = [Lazy, EffectCoverflow, Pagination]
let channels = ref<Channel[]>();

onMounted(() => {
  axios
    .get("/api/Channel")
    .then((res) => {
      channels.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
})
</script>
<template>

  <swiper v-if="channels" :effect="'coverflow'" :lazy="true" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 25,
      stretch: 0,
      depth: 650,
      modifier: 1,
      slideShadows: true
    }" :pagination="true" :modules="modules" class="swiper-wrapper">
    <!-- <div class="swiper-wrapper"> -->
    <swiper-slide  v-for="channel in channels" class="swiper-slide">
      <div class="picture">
        <img
          :src="channel.picture"
          alt="">
      </div>
      <div class="detail">
        <h3>{{ channel.name }}</h3>
        <span>{{ channel.description }}</span>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>

</template>
<style scoped lang="less">
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: var(--bg-color);
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 320px;
  background-color: rgb(237, 237, 237);
  overflow: hidden;
  border-radius: 8px;
}

.picture {
  width: 320px;
  height: 320px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.detail {
  padding: 25px 20px;
  font-weight: 600;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 20px;
  }

  span {
    display: block;
    font-size: 16px;
    color: #f44336;
  }
}
</style>