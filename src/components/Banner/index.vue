<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-09 19:26:39
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-20 21:24:07
-->
<script lang="ts">
import { onMounted, ref, getCurrentInstance } from "vue";
// 引入LXGW WenKai / 霞鹜文楷：
// https://github.com/chawyehsu/lxgw-wenkai-webfont
import "lxgw-wenkai-lite-webfont/style.css";
import { computed } from "@vue/reactivity";
interface BannerClassOption {
  /**
   * banner的展示动画，
   * 分别有：typing、bubbles、waves。
   * 默认为 typing
   */
  typing?: Boolean;
  bubbles?: Boolean;
  waves?: Boolean;
  /**
   * 是否隐藏 banner
   * 默认为 false
   */
  hidden?: Boolean;
}
let color = '#fafafa'
let bannerClassOption = ref<BannerClassOption>({
  bubbles: true,
  hidden: true,
});
const activeClass = computed(() => {
  if (bannerClassOption.value.typing) return "typing";
  return bannerClassOption.value.bubbles ? "bubbles" : "waves";
});

export default {
  props: {
    title: String,
  },
  mounted() {
    let bubbles = document.getElementById("bubbles");
    if (bannerClassOption.value.bubbles) {
      let bArray: number[] = [];
      let sArray = [4, 6, 8, 10];
      for (var i = 0; i < bubbles!.clientWidth+20; i++) {
        bArray.push(i);
      }
      function randomValue(arr: number[]) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      function createNode(size: number,color:string) {
        const template =
          '<div class="individual-bubble" style="left: ' +
          randomValue(bArray) +
          "px; width: " +
          size +
          "px; height:" +
          size +
          'px;position: absolute;bottom:10px ;border-radius: 100%;background-color: '+
          color+';z-index: 1;"></div>';
        let Node = document.createElement("div");
        Node.innerHTML = template;
        return Node;
      }
      setInterval(function () {
        let size = randomValue(sArray);
        let Node = createNode(size,color);
        bubbles!.appendChild(Node);
        Node.animate([
          { transform: "translateY(0px)", opacity: 0.7 }, 
          { transform: "translateY(-2rem)", opacity: 0.1 }],
           3000);
        setTimeout(() => bubbles?.removeChild(Node), 3000);
      }, 350);
    }
  },
  data() {
    return {
      bannerClassOption,
      activeClass,
    };
  },
};
</script>
<template>
  <div class="banner-outer">
    <div class="banner-inner" :title="title">
      <div :class="bannerClassOption" :id="activeClass">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "lxgw-wenkai-lite-webfont/style.css";
  .banner-outer {
    font-family: "LXGW WenKai Lite", sans-serif;
    display: table;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);

    .banner-inner {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      .bubbles {
        display: inline-block;
        position: relative;
        h1 {
          position: relative;
          margin: 1em 0 0;
          z-index: 2;
          color: #f0f8ff;
        }
        .individual-bubble {
          position: absolute;
          border-radius: 100%;
          // bottom: 10px;
          background-color: rgb(240, 231, 231);
          z-index: 1;
        }
      }
      .typing {
        color: rgb(229, 243, 229);
        // animation: typing 2s steps(42, end), blink-caret 0.75s step-end infinite;
        word-break: break-all;
        overflow: hidden;
      }
    }
  }
</style>
