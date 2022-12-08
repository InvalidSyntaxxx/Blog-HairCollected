<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import {
    AlarmOutline,
    BarChartOutline,
    CalendarOutline,
    ChatboxEllipsesOutline,
    ExpandOutline,
    GameControllerOutline,
    MoonOutline,
    SettingsOutline,
    CloseCircleOutline
} from '@vicons/ionicons5'
import { NIcon } from "naive-ui"
let main = ref();
let navigation: any = ref<HTMLElement>();
let close = ref();
onMounted(() => {

})
</script>
<template>
    <div class="main" ref="main">
        <div class="navigation" ref="navigation" @click="navigation.classList.add('active')">
            <span style="--i: 0; --x: -1; --y: -1">
                <n-icon>
                    <AlarmOutline />
                </n-icon>
            </span>
            <span style="--i: 4; --x: 0; --y: -1"><n-icon>
                    <BarChartOutline />
                </n-icon></span>
            <span style="--i: 1; --x: 1; --y: -1"><n-icon>
                    <CalendarOutline />
                </n-icon></span>
            <span style="--i: 5; --x: -1; --y: 0"><n-icon>
                    <ChatboxEllipsesOutline />
                </n-icon></span>
            <span style="--i: 6; --x: 1; --y: 0"> <n-icon>
                    <ExpandOutline />
                </n-icon></span>
            <span style="--i: 2; --x:-1; --y: 1"> <n-icon>
                    <GameControllerOutline />
                </n-icon></span>
            <span style="--i: 7; --x: 0; --y: 1"> <n-icon>
                    <MoonOutline />
                </n-icon></span>
            <span style="--i: 3; --x: 1; --y: 1"> <n-icon>
                    <SettingsOutline />
                </n-icon></span>
        </div>
        <div class="close" ref="close" @click="navigation.classList.remove('active')">
            <n-icon>
                <CloseCircleOutline />
            </n-icon>
        </div>
    </div>
</template>
<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 999;

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #121212;
    }

    .main {
        position: absolute;
        bottom: .1em;
        right: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        height: 170px;

        // PC端增大间距
        @media(min-width: 768px) {
            margin: 0 5em 1em 0;
        }

        .navigation {
            position: relative;
            width: 40px;
            height: 40px;
            /*   background: rgba(255,255,255,0); */
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;

            span {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 7px;
                height: 7px;
                background: #fff;
                transform: translate(calc(14px * var(--x)), calc(14px * var(--y)));
                /*  动画实现的关键  */
                transition: transform 0.5s, width 0.5s, height 0.5s, background 0.5s;
                transition-delay: calc(0.1s * var(--i));

                /* 对图标进行样式处理，根据不同图标库进行处理 */
                i {
                    transition: 0.5s;
                    font-size: 0em;
                    color: #fff;
                }
            }

            &.active {
                span {
                    width: 45px;
                    height: 45px;
                    border-radius: .5em;
                    background: #1f2536;
                    transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));

                    i {
                        font-size: 1.5em;

                        &:hover {
                            color: #2dfc52;
                            filter: drop-shadow(0 0 2px #2dfc52) drop-shadow(0 0 5px #2dfc52) drop-shadow(0 0 15px #2dfc52);
                        }
                    }
                }

                &~.close {
                    width: 45px;
                    height: 45px;
                    border-radius: .5em;
                    background: #2dfc52;
                    transition-delay: 0.8s;
                    pointer-events: initial;

                    i {
                        scale: 1;
                        transition-delay: 1s;
                    }
                }
            }

            &~.close {
                i {
                    scale: 0;
                    font-size: 1.5em;
                    color: #10121c;
                    transition: .5s;
                }
            }
        }

        .close {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 7px;
            height: 7px;
            background: #fff;
            transition: 0.5s;
            transition-delay: 0.4s;
            /*  pointer-events 用来干啥的？  */
            pointer-events: none;
        }

    }
}
</style>