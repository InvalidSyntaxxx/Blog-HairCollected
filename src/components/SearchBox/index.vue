<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-24 17:08:33
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-26 23:06:11
-->
<script setup lang="ts">
import { NIcon, NSpace, NDropdown } from "naive-ui";
import { SearchOutline } from "@vicons/ionicons5";
import { h, ref } from "vue";
let size = { smallsize: 28, mediumsize: 32, largesize: 36 };
let options =  [
        {
          key: 'Search',
          type: 'render',
          render: renderSearchBox
        }]

let iconClass = ref({
    'animate-swing':true
})
function renderSearchBox(){
    return h(
        'div',
        {
            style:''
        },
        [   
             
        ]
    )
}
</script>

<template>

    <n-space>
        <n-dropdown trigger="click" :options="options">
            <div :class="iconClass" >
            <n-icon :size="size.mediumsize">
                <SearchOutline />
            </n-icon>
        </div>
        </n-dropdown>
    </n-space>
</template>
<style scoped lang="less">
* {
    --animation-duration: 1s;
}
.animate-swing {
	animation: swing 0s ease-in-out forwards;
    &:hover{
        animation-duration: var(--animation-duration); /* 巧妙但不实用 */
    }
    &:active{
        animation: none; /*取消过渡*/
    }
}

@keyframes swing {
	0% {
		transform: rotate(-3deg);
	}
	20% {
		transform: rotate(8deg);
	}
	40% {
		transform: rotate(-8deg);
	}
	60% {
		transform: rotate(8deg);
	}
	80% {
		transform: rotate(-14deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

</style>