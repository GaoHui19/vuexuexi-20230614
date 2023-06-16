<template>
  <div class="box" @mouseleave="resetWidth" :style="themeColor">
    <span v-for="item in 5" :key="item" @mouseenter="changeWidth(item)">☆</span>
    <div class="rate" :style="width">
      <span v-for="item in 5" :key="item" @mouseenter="changeWidth(item)" @click="changeRate(item)">★</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let props = defineProps({
  rate: {
    type: Number,
    default: 0
  },
  theme: String
})

let emit = defineEmits(['changeRate'])

let w = ref(props.rate);

let width = computed(() => {
  return `width:${w.value * 16}px;`
})

function changeWidth(item) {
  w.value = item;
}

function resetWidth() {
  w.value = props.rate;
}

function changeRate(item) {
  emit('changeRate', item)
}

let themeColor = computed(() => {
  return `color: ${props.theme};`
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  position: relative;
}
.rate {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
}
span {
  display: inline-block;
  width: 16px;
}
</style>