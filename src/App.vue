<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-07-04 19:37:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-10-23 00:09:44
-->
<!-- <script setup lang="ts"> -->
<!-- This starter template is using Vue 3 <script setup> SFCs -->
<!-- // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<!-- // import HelloWorld from './components/HelloWorld.vue' -->
<!-- // </script> -->

<template>
  <div v-if="isseen">
    <!-- 内联箭头函数 -->
    <button v-on:click="(event)=> warn('WARNING',event)">
      当前值：{{ now }}
    </button>

    <a :href="url" @click.once="show()" target="_blank"><b>百度</b></a>
    <!-- v-bind 指令将表达式 url 的值绑定到元素的 href attribute 上 -->
</div>
  <table border="1">
    <tr >
      <td v-for="attr in attributes">{{attr}}</td>
    </tr>
    <tr v-for="book in books">
      <td>{{book.name}}</td>
      <td>{{book.author}}</td>
      <td>{{book.year}}</td>
    </tr>
  </table>
<!-- 动态属性 -->
<!-- 当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，
  我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写
  此外：单文件组件内的模板不受此限制 -->
<button @[eventname]="dosomething">试试到我上面~</button>
</template>

<script lang="ts">
import { nextTick } from 'vue';

export default{
  data(){
    return {isseen, count: 0,url,eventname,books,attributes};
  },
  // 方法调用总是会在重渲染发生时再次执行函数。
  methods:{
    dosomething(){
      this.count++;
      this.isseen = !this.isseen;
      nextTick(
        () => {
          // 访问更新后的 DOM
        }
      )
    },
    show(){
      alert("click.Stop")
    },
    warn(message:string, event:Event){
      if(event){
        event.preventDefault()
      }
      alert(message)
    }
  },

// 计算属性
// 计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时
// 才重新计算。这意味着只要 author.books 不改变，无论多少次访问
//  publishedBooksMessage 都会立即返回先前的计算结果

  computed:{
    now(){
      this.count++;
      return new Date().toLocaleString()
      // return this.count%2 == 1 ? "奇数":"偶数"
    }
  },
  mounted(){
    this.dosomething();
  }
}
  var isseen = true;
  const url = "https://www.baidu.com";

  const attributes = ["书本名","作者","年份"]
  const books = [
    {name:'哈姆雷特',author:"莎士比亚", year:1984},
    {name:"巴黎圣母院",author:"雨果",year:2000},
    {name:"巴黎圣母院",author:"雨果",year:2000},
    {name:"巴黎圣母院",author:"雨果",year:2000},
    {name:"巴黎圣母院",author:"雨果",year:2000}
  ]

  // const eventNames = ['click','mousemove','focus']
  const eventname = "click"

</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

table{
  font-size: 1.5em;
  font-family:Arial, Helvetica, sans-serif;
}
tr:nth-child(1){
  background-color: rgb(213, 245, 234);
}
tr:nth-child(even){
  background-color: rgb(230, 228, 225);
}
tr:hover{
  background-color: rgb(215, 212, 207);
}
</style>
