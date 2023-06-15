<template>
    <div>
      <h2>Baidu Search</h2>
      <div>
        <input type="text" v-model="query" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { watch, ref } from "vue";
  
  const query = ref("");
  
  watch(query, async (newValue, oldValue) => {
    const response = await fetch(`/sugrec?prod=pc&wd=${newValue}`);
    const data =  response.json();
    console.log(data);
  });
  </script>
  
  <style scoped>
  /* 样式代码 */
  </style>