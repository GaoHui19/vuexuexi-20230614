<template>
  <Seec4 />
  <ul>
    <li v-for="({ name, id }, index) of list">{{ name }} - {{ index }}</li>
  </ul>
  <ul>
    <li v-for="(item, index) in arr">
      {{ item }}
    </li>
  </ul>
  <button @click="remove">删除</button>
  <ul>
    <li v-for="(value, key) in obj">{{ key }}</li>
  </ul>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue';

let arr = ref([1, 2, 3]);

function remove()  {
  arr.value =  arr.value.filter((item, index) => {
    if (index !== 0) {
      return item
    }
  })
}

const child = defineComponent(() => {
  return () => {
    return h('div', Math.random())
  }
})

let list = ref([
  {
    id: 1,
    name: '小红',
  },
  {
    id: 2,
    name: '小明'
  }
])

let obj = {
  a: 1, 
  b: 2,
  c: 3
}

</script>

<style scoped>
</style>