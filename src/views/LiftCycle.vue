<template>
    <div>
      <h2>生命周期示例</h2>
      <p>{{ message }}</p>
      <button @click="updateMessage">更新消息</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';
  
  export default {
    setup() {
      const message = ref('Hello, Vue 3!');
      
      // 在组件挂载后调用
      onMounted(() => {
        console.log('组件挂载完成！');
      });
  
      // 在组件更新后调用
      onUpdated(() => {
        console.log('组件更新完成！');
      });
  
      // 在组件卸载前调用
      onBeforeUnmount(() => {
        console.log('组件即将被卸载！');
      });
  
      function updateMessage() {
        message.value = 'Hello, Vue 3!';
      }
  
      return {
        message,
        updateMessage,
      };
    },
  };
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
  