<template>
 <div>
  <h2>Father</h2>
  <Child :hoter="hot" @change-hoter="handler" />
 </div>
</template>

<script setup>
import Child from '@/components/Child.vue';
import { ref } from 'vue';

let hot = ref('天儿真暖和啊');

function handler(str) {
  console.log(str);
  hot.value = str;
}
</script>

<style scoped></style>