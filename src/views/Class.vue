<template>
    <div>
      <h2>Class</h2>
      <div class="box" :class="{ 'blue-class': flag }"></div>
      <button @click="changeColor">点击</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  let flag = ref(false)
  
  function changeColor() {
    flag.value = !flag.value
  }
  </script>
  
  <style scoped>
  .box {
    width: 100%;
    height: 100px;
    background-color: #ccc;
  }
  
  .blue-class {
    background-color: blue;
  }
  </style>
  