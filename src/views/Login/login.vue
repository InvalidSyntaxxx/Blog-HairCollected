<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-30 20:56:05
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-01 17:51:09
-->
<script setup lang="ts">

import { NIcon, NForm, NSpace, NInput, NButton, useMessage } from 'naive-ui'
import { FlashOutline, LockClosed } from "@vicons/ionicons5";
import { useRouter } from "vue-router";

const message = useMessage()
const router = useRouter()

function handleLoginClick() {
    message.info('Success Login!')
    router.push('/register')
}

</script>
<template>
    <section>
        <!-- 背景颜色 -->
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
            <!-- 背景圆 -->
            <div class="circle" style="--x:0"></div>
            <div class="circle" style="--x:1"></div>
            <div class="circle" style="--x:2"></div>
            <div class="circle" style="--x:3"></div>
            <div class="circle" style="--x:4"></div>
            <!-- 登录框 -->
            <div class="container">
                <div class="form">
                    <h2 >用户登录</h2>
                    <n-form>
                        <n-space>
                            <n-input placeholder="用户名">
                                <template #prefix>
                                    <n-icon :component="FlashOutline"/>
                                </template>
                            </n-input>
                            <n-input type="password" show-password-on="mousedown" placeholder="密码" :maxlength="8">
                                <template #prefix>
                                    <n-icon :component="LockClosed" />
                                </template>
                            </n-input>
                        </n-space>
                        <n-button ghost type="info" @click="handleLoginClick">
                            Login Now!
                        </n-button>
                        <p class="forget">忘记密码?<a
                                href="https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html?v=4.0">
                                点击重置
                            </a></p>
                        <p class="forget">没有账户?<a href="https://ssl.zc.qq.com/v3/index-chs.html">
                                点击注册
                            </a></p>
                    </n-form>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
/* 使用flex布局，让内容垂直和水平居中 */
section {
    /* 相对定位 */
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片 */
    background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
}

/* 背景颜色 */
section .color {
    /* 绝对定位 */
    position: absolute;
    /* 使用filter(滤镜) 属性，给图像设置高斯模糊*/
    filter: blur(200px);
}


section .color:nth-child(1) {
    top: -350px;
    width: 600px;
    height: 600px;
    background: #85e3ff;
}

section .color:nth-child(2) {
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background: #fefc6a;
}

.box {
    position: relative;
}

/* 背景圆样式 */

.box .circle {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    /* backdrop-filter 属性为一个元素后面区域添加模糊效果 */
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    /* 使用filter(滤镜) 属性，改变颜色。
    hue-rotate(deg)  给图像应用色相旋转 
    calc() 函数用于动态计算长度值 
    var() 函数调用自定义的CSS属性值x*/
    filter: hue-rotate(calc(var(--x) * 70deg));
    /* 调用动画animate，需要10s完成动画，
    linear表示动画从头到尾的速度是相同的，
    infinite指定动画应该循环播放无限次*/
    animation: animate 10s linear infinite;
    /* 动态计算动画延迟几秒播放 */
    animation-delay: calc(var(--x) * -1s);
}

/* 背景圆动画 */

@keyframes animate {

    0%,
    100% {
        transform: translateY(-50px);
    }

    50% {
        transform: translateY(50px);
    }
}

.box .circle:nth-child(1) {
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
}

.box .circle:nth-child(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
}

.box .circle:nth-child(3) {
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
    z-index: 2;
}

.box .circle:nth-child(4) {
    bottom: -80px;
    left: 100px;
    width: 60px;
    height: 60px;
}

.box .circle:nth-child(5) {
    top: -80px;
    left: 140px;
    width: 60px;
    height: 60px;
}

/* 登录框样式 */

.container {
    position: relative;
    width: 500px;
    min-height: 400px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.form {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0px;
}

/* 登录标题样式 */

.form h2 {
    text-align: center;
    position: relative;
    color: rgb(105, 243, 227);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 5px;
    margin-bottom: 30px;
    cursor: pointer;
}

/* 登录标题的左划线样式 */
.form h2::before {
    content: "";
    position: absolute;
    left: -10px;
    width: 3px;
    height: 0;
    background: #fff;
    transition: 0.5s;
}

.form h2:hover:before {
    height: 2rem;
    background-color: #666;
}

.form .inputBox {
    width: 100%;
    margin-top: 20px;
}

/* 输入框样式 */

.form .inputBox input {
    width: 100%;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    border: none;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form .inputBox input::placeholder {
    color: #fff;
}

/* 登录按钮样式 */

.form .inputBox input[type="submit"] {
    background: #fff;
    color: #666;
    max-width: 100px;
    margin-bottom: 20px;
    font-weight: 600;
    cursor: pointer;
}

.forget {
    margin-top: 6px;
    color: #fff;
    letter-spacing: 1px;
}

.forget a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}

n-input{
    width: 100%;
}
</style>