<template>
  <div>
    <h2>Array Remove</h2>
    <p>原数组：{{ arr }}</p>
    <p>新数组：{{ newArr }}</p>

    <button @click="remove">移除元素</button>

    <h2>Dynamic Components</h2>
    <component :is="child" />

    <button @click="changeChild">改变组件</button>

    <h2>Array Map</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>

    <button @click="changeList">改变列表</button>
  </div>
</template>

<script>
import { ref, defineComponent, h, watchEffect } from 'vue';

// Array Remove
let arr = [1, 2, 3];

function remove() {
  const arr2 = arr.filter((item, index) => {
    if (index === 1) {
      return item === 4;
    }
    return item;
  });

  arr = arr2;
}

// Dynamic Components
const child1 = defineComponent({
  setup() {
    return () => h('div', Math.random());
  },
});

const child2 = defineComponent({
  setup() {
    return () => h('p', 'Hello, World!');
  },
});

let child = ref(child1);

function changeChild() {
  child.value = child.value === child1 ? child2 : child1;
}

// Array Map
let list = ref([1, 2, 3]);

function changeList() {
  list.value = list.value.map((item) => item * 2);
}

// 暴露组件配置
export default {
  name: 'ArrayRemove',

  // 使用 setup 函数
  setup() {
    const newArr = ref([]);

    // 监听 arr 变化
    watchEffect(() => {
      newArr.value = arr.slice(0, 2);
    });

    return {
      arr: ref(arr),
      newArr,
      remove,
      child,
      changeChild,
      list,
      changeList,
    };
  },
};
</script>

<style></style>
