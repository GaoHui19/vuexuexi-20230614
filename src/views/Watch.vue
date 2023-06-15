<template>
    <div>
      VueWatch'
      <input type="text" v-model="message" :disabled="disabled" />
      <p>message变化次数：{{ count }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, watch } from "vue";
  
  // 创建一个响应式数据 message 和计数器 count
  let message = ref("");
  let count = ref(0);
  let intervalId;
  let disabled = ref(false);
  
  // 创建一个响应式数据 obj
  const obj = reactive({ count: 0 });
  
  // 监听 message 数据的变化并更新计数器
  watch(
    () => message.value,
    (newValue, oldValue) => {
      console.log("message值从" + oldValue + "变成了" + newValue);
      if (newValue.indexOf("a") !== -1) {
        alert("你输入了a");
      }
      count.value++;
      if (count.value >= 5) {
        clearInterval(intervalId);
        disabled.value = true;
        alert("计数已停止");
      }
    }
  );
  
  // 监听 obj.count 数据的变化并输出信息
  watch(() => obj.count, (newValue, oldValue) => {
    console.log("obj.count值从" + oldValue + "变成了" + newValue);
  });
  
  // 对 obj.count 进行加减操作
  intervalId = setInterval(() => {
    obj.count++;
  }, 1000);
  setInterval(() => {
    obj.count--;
  }, 2000);
  </script>
  
  <style scoped>
  /* 样式代码 */
  </style>
  