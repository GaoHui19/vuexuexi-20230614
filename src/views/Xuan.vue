<template>
  <div class="tab-container">
    <div class="tab-bar">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="tab-item"
        :class="{ active: index === currentIndex }"
        @click="changeTab(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="tab-content">
      <div v-show="currentIndex === 0">这是首页</div>
      <div v-show="currentIndex === 1">这是分类</div>
      <div v-show="currentIndex === 2">这是我的</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { title: '首页' },
  { title: '分类' },
  { title: '我的' },
];

const currentIndex = ref(0);

function changeTab(index) {
  currentIndex.value = index;
}
</script>

<style>
.tab-container {
  width: 800px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.tab-bar {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}

.tab-item {
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 4px;
  padding: 8px 16px;
}

.tab-item.active {
  color: #007aff;
  border-color: #007aff;
  background: pink;
}

.tab-content {
  height: 100%;
  padding: 16px;
  overflow-y: auto;
}
</style>
