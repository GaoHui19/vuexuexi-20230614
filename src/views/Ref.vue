<template>
  <div>
    <h2>Ref 页面</h2>
    <div>
      {{ count }}
      <button v-on:click="increment">增加</button>
      <button v-on:click="decrement">减少</button>
    </div>
    <router-link to="/directive">查看常见命令的作用</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 创建一个名为 count 的响应式变量
const count = ref(0);

// 增加 count 的值
function increment() {
  count.value++;
}

// 减少 count 的值，如果已经为 0，则弹出提示框
function decrement() {
  if (count.value > 0) {
    count.value--;
  } else {
    alert("已经为 0！");
  }
}
</script>

<style></style>
