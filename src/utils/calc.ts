/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-11-08 22:49:37
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-08 22:59:46
 */
export default function getHeight(ratio: number){
    return document.body.clientHeight * ratio;
}

export function getWidth(ratio:number){
    return document.body.clientWidth * ratio;
}