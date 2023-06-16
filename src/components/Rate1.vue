<template>
  <div class="rate-box" :style="rateTheme" @mouseleave="resetWidth">
    <span v-for="item in 5" :key="item" @mouseenter="changeWidth(item)">☆</span>
    <div class="black-star-box" :style="fontWidth">
      <span class="black-star" v-for="item in 5" :key="item" @mouseenter="changeWidth(item)" @click="onRate(item)">★</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let props = defineProps({
  theme: {
    type: String,
    default: 'orange'
  },
  value: {
    type: Number,
    default: 2
  }
})

let emit = defineEmits(['updateRate'])

let width = ref(props.value);

function changeWidth(w) {
  width.value = w;
}

function resetWidth() {
  width.value = props.value;
}

function onRate(rate) {
  emit('updateRate', rate)
}

let fontWidth = computed(() => {
  return `width: ${width.value * 16}px;`
})

let rateTheme = computed(() => {
  console.log(props.theme)
  return `color: ${props.theme};`
})
</script>

<style scoped>
.rate-box {
  position: relative;
}
.black-star-box {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}
span {
  width: 16px;
  display: inline-block;
  text-align: center;
}
</style>