/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-30 17:43:43
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-10-30 17:59:07
 */
function s(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms*1000));
}
export default  async function sleep(ms:number){
    await s(ms)
}