<template>
    <div>
      <img v-show="show" src="https://bhimgs.com/i/2023/06/12/pf9sxf.png" alt="图片" width="200" height="200">
      <button @click="toggleShow">{{ show ? '隐藏' : '显示' }}</button>
    </div>
    <router-link to="/jisuanqi">Reactive 查看计算器</router-link>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true,
      };
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      },
    },
  };
  </script>
  