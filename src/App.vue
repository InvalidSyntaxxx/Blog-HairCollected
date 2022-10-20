<!-- <script setup lang="ts"> -->
<!-- This starter template is using Vue 3 <script setup> SFCs -->
<!-- // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<!-- // import HelloWorld from './components/HelloWorld.vue' -->
<!-- // </script> -->

<template>
  
  <div v-if="flag" class="main">
  <p :class="[flag ? 'active' : 'inactive','title']">{{titleText}}</p>
    <form action="/">
    <button @click.prevent="submit" type="submit" class="btn">点我有惊喜！</button>
    </form>
  <audio  
    preload="auto"
    src="https://www.xzmp3.com/down/1d133c39d94f.mp3">在这里</audio>
  </div>
</template>

<script setup lang="ts">
  const titleText: string = '王远日是太笨蛋'
  const flag: boolean = true
  const submit = () =>{
    alert('别点了王远日太笨蛋！');
  }
</script>

<style>
.main{
  background-color: aqua;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(https://img.zmtc.com/2021/0617/20210617054007202.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: fill;
}
.btn{
  position: relative;
  margin-top: 250px;
  margin-bottom: 200px;
  left: 45%;
}
.title{
  font-size: 30px;
  background-color: bisque;
}
.active{
  color: chartreuse;
}
.inactive{
  color: azure;
}
p{
  /* margin-top: 200px; */
  text-align: center;
}
</style>
