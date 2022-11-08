<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-31 17:59:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-08 15:45:11
-->
<script setup lang="ts">
import { NEmpty, NButton } from 'naive-ui';
</script>
<template>
    <div class="content">
        <n-empty description="这里什么也找不到">
            <template #extra>
                <n-button size="small" tag="a" href="/" target="_blank">
                    常回家看看
                </n-button>
            </template>
        </n-empty>
    </div>
</template>
<style>
/* 完全居中最好的办法 */
.content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
</style>