<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-26 16:11:10
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-01 15:51:32
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import  axios  from 'axios';
import { NEllipsis,NIcon } from 'naive-ui'
import { TimerOutline} from '@vicons/ionicons5'
import sleep from '../utils/sleep';

interface card {
    id: number,
    content: string,
    date: Date,
    imgurl:string,
    title?:string
}

let items = reactive<card[]>([]) //假数据


function getData(){
    axios.get('/api/getNote')
    .then(res=>{
        items.push(res.data.data)
        // alert(JSON.stringify(items))
    }).catch(err=>{
        alert(err+"asd")
    })
}

onMounted(()=>getData())
</script>

<template>
    <!-- 一定要用v-for来访问ref数组！！！！！！！！！！ -->
    <div class="card-wrapper" v-for="item in items"> 
        <div class="leftcontainer">
            <img class="card-img" :src="item['imgurl']"/>
        </div>
        <div class="rightcontainer">
            <div class="content">
                <n-ellipsis
                :tooltip="false"
                :line-clamp="2" 
                style="max-width:16rem"
                expand-trigger="click">
                    {{ item['content'] }}
                </n-ellipsis>
            </div>
            <div class="time">
                <p>
                    <n-icon size="20">
                        <TimerOutline/>
                    </n-icon>
                    {{ item['date'] }}
                </p>
            </div>
        </div>
    </div>
</template>
<style>
.card-wrapper {
    display: flex;
    position: relative;
    height: 15rem;
    width: 25rem;
    outline-color: aqua;
    outline-offset: 1px 1px;
    background-color: rgb(240, 238, 238);
    border-radius: 20px;
    box-shadow: 3px 2px;
}

.leftcontainer{
    display: flex;
}
.rightcontainer{
    position: relative;
}
.card-img{
    border-radius: 20px 0 0 20px;
    height: 15rem;
    width: 9rem;
    margin: auto;
}

img:hover{
    transition: ease-in 2s;
}
.content {
    text-overflow: ellipsis;
    height: 10rem;
    margin-top: 1em;
    font-size: 16px;
}

.time {
    right: 2px;
    bottom: 0.5rem;
    position: absolute;
}
</style>