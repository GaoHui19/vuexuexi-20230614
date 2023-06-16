<template>
  <span style="color: orange;">{{ rateStars }}</span>
</template>

<script setup>
import { ref, computed } from 'vue';

let props = defineProps({
  rate: {
    type: Number,
    default: 1
  }
})


let stars = ref('★★★★★☆☆☆☆☆');
let rateStars = computed(() => {
  return stars.value.slice(5 - props.rate, 10 - props.rate);
})

</script>

<style scoped></style>