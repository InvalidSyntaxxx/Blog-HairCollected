<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-28 00:56:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-12-08 18:58:01
-->
<script setup lang="ts">
</script>
<template>
    <section>
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </section>
</template>
<style scoped lang="less">
@wave-height: 100px;

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 40px;
    
    section {
        position: relative;
        width: 100%;
        background: var(--bg-color);
        overflow: hidden;
        .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: @wave-height;
            background: url(../../assets/img/wave.png);
            background-size: 1000px @wave-height;
        }
            .wave1 {
                animation: animate 30s linear infinite;
                z-index: 3;
                opacity: 1;
                animation-delay: 0s;
                bottom: 0;
            }

            /* Wave 2 */


            .wave2 {
                animation: animate 15s linear infinite;
                z-index: 2;
                opacity: 0.5;
                animation-delay: -5s;
                bottom: 10px;
            }

            /* Animate wave 1 & wave 2 */

            @keyframes animate {
                0% {
                    background-position-x: 0;
                }

                100% {
                    background-position-x: 1000px;
                }
            }

            /* Wave 3 */


            .wave3 {
                animation: animate2 30s linear infinite;
                z-index: 1;
                opacity: 0.2;
                animation-delay: -2s;
                bottom: 15px;
            }


            /* Wave 4 */

            .wave4 {
                animation: animate2 5s linear infinite;
                z-index: 0;
                opacity: 0.7;
                animation-delay: -5s;
                bottom: 20px;
            }

            /* Animate wave 3 & wave 4 */

            @keyframes animate2 {
                0% {
                    background-position-x: 0;
                }

                100% {
                    background-position-x: -1000px;
                }
            }

        
    }
}
</style>