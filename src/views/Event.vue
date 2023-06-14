<template>
  <div>
    <button @click="increment">增加计数器</button>
    <p>计数器的值是：{{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 在 setup 函数中定义组件数据和方法
const count = ref(0);
function increment() {
  count.value++;
}
</script>

<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007aff;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
