<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-01 18:10:26
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-04 15:26:09
-->
<!-- 导航栏组件 -->
<script setup lang="ts">
import axios from 'axios';
import { NDropdown, NButton, NAvatar, NText, useMessage } from 'naive-ui';
import { h, onMounted, ref } from 'vue';

interface User {
    id: number,
    username: string,
    description: string,
    avatar: string
}
// const emit = defineEmits(['inFoucs','submit','increse'])

let user = ref<User>()
let message = useMessage()
let label1 = '被@89次'
let label2 = '加入群100个'
let options = [
    {
        key: 'header',
        type: 'render',
        render: rederCustomerHeader
    },
    {
        key: 'header-divider',
        type: 'divider'
    },
    {
        label: label1,
        key: 'stmt2'
    },
    {
        label: label2,
        key: 'stmt3'
    }
]

function getUserData(username: string) {
    axios.get('api/getUser/' + username)
        .then((res) => {
            user.value = res.data.data //赋值时ref需要付给.value属性、
            // message.info(JSON.stringify(user.value))
        })
        .catch(err => {
            console.log(err)
        })
}
function rederCustomerHeader() {
    return h(
        'div',
        {
            style: 'display:flex;align-items:center;padding:8px 12px;'
        },
        [
            h(NAvatar, {
                round: true,
                style: 'margin-right:12px;',
                src: user.value?.avatar
            }),
            h(
                'div', null, [
                h('div', null, [h(NText, { depth: 2 }, { default: () => user.value?.username })]),
                h('div', { style: 'font-size:12px;' }, [
                    h(
                        NText,
                        { depth: 3 },
                        {
                            default: () => user.value?.description
                        }
                    )
                ])
            ]
            )
        ]
    )
}
function handleSelect(key: string | number) {
    message.info(String(key))
}

onMounted(() => {
    getUserData("admin")
})

</script>
<template>
    <header>
        <n-dropdown trigger="click" :options="options" @select="handleSelect">
            <n-button @click="$emit('increase',1)">
                关于我
            </n-button>
        </n-dropdown>
    </header>
</template>