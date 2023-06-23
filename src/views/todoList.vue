<template>
  <div class="todo">
    <!-- 输入框和新建按钮 -->
    <input type="text" v-model="message">
    <button @click="addItem">新建</button>
  </div>
  <!-- 使用过渡动画的列表 -->
  <transition-group name="fade">
    <div v-for="todo in todos" :key="todo.id">
      <!-- 渲染子组件 ListItem -->
      <ListItem
        :item="todo"
        @remove="removeHandler"
        @save="saveHandler"
      />
    </div>
  </transition-group>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import ListItem from '../components/ListItem.vue';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/wb';

let message = ref('');
let n = 0;
let todos = ref(loadFromLocalStorage('todos'));

function addItem() {
  if (!message.value) return;
  n++;
  todos.value.push({
    text: message.value,
    id: n
  });
  message.value = '';
}

function removeHandler(id) {
  todos.value = todos.value.filter(item => {
    return item.id !== id;
  });
}

function saveHandler(id, text) {
  todos.value = todos.value.map(item => {
    if (item.id === id) {
      item.text = text;
    }
    return item;
  });
}

onMounted(() => {
  n = todos.value.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
});

watch(todos, (newTodos) => {
  saveToLocalStorage('todos', newTodos);
}, { deep: true });
</script>

<style scoped>
.todo {
  width: 300px;
  border: 1px solid #000;
  padding: 20px;
}
button {
  margin-left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-leave-active,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
