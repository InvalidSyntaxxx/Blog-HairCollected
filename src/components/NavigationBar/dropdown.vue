<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-05 16:09:23
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-05 22:53:13
-->
<script setup lang="ts">
import axios from "axios";

import {
  NButton,
  NIcon,
  NDropdown,
  NAvatar,
  NText,
  useMessage,
} from "naive-ui";
import { ReorderThree, Close } from "@vicons/ionicons5";
import { h, onMounted, ref } from "vue";

interface User {
  id: number;
  username: string;
  description: string;
  avatar: string;
}

let user = ref<User>();
let isopen = ref(false); //侧边栏打开状态
let message = useMessage();
let aboutme = "关于我";
let homepage = "查看主页";
let props = defineProps(['size'])

function getUserData(username: string) {
  axios
    .get("api/getUser/" + username)
    .then((res) => {
      user.value = res.data.data; //赋值时ref需要付给.value属性、
    })
    .catch((err) => {
      console.log(err);
    });
}
let options = [
  {
    key: "header",
    type: "render",
    render: rederCustomerHeader,
  },
  {
    key: "header-divider",
    type: "divider",
  },
  {
    label: aboutme,
    key: "关于我",
  },
  {
    label: homepage,
    key: "这就是主页啦!博主太懒了只有主页",
  },
];

function rederCustomerHeader() {
  return h(
    "div",
    {
      style:
        "display:flex;align-items:center;padding:8px 12px;max-width:100vw;",
    },
    [
      h(NAvatar, {
        size: 48,
        style: "margin-right:12px;min-width:32px;min-height:32px",
        src: user.value?.avatar,
      }),
      h("div", null, [
        h("div", null, [
          h(NText, { depth: 2 }, { default: () => user.value?.username }),
        ]),
        h("div", { style: "font-size:12px;" }, [
          h(
            NText,
            { depth: 3 },
            {
              default: () => user.value?.description,
            }
          ),
        ]),
      ]),
    ]
  );
}

function handleSelect(key: string | number) {
  message.info(String(key));
}

onMounted(() => {
  getUserData("王远昭");
});
</script>
<template>
    <!-- 下拉菜单 -->
  <n-dropdown
    trigger="click"
    :options="options"
    :show-arrow="true"
    @select="handleSelect"
    :show="isopen"
  >
  <!-- 打开、关闭时动画 -->
    <div @click="isopen = !isopen">
      <n-icon v-if="isopen" :size="props.size">
        <close />
      </n-icon>
      <n-icon v-else :size="props.size">
        <reorder-three />
      </n-icon>
    </div>
  </n-dropdown>
</template>
<style scoped>
*{
  display: inline-block;
}
.n-icon {
  padding-left: 10px;
  /* margin-top: 10px; 此属性不起效果*/
  bottom: -5px;
}
</style>
