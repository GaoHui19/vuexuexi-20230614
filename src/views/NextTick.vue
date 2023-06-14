<template>
  <div>
    <h2>NextTick</h2>

    <div ref="div">{{ message }}</div>
    <button @click="changeMessage">改变</button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue';

export default {
  setup() {
    const message = ref(10);
    const div = ref(null);

    function changeMessage() {
      message.value = 20;

      nextTick(() => {
        console.log(div.value.innerHTML);
      });
    }

    return {
      message,
      div,
      changeMessage,
    };
  },
};
</script>

<style></style>
