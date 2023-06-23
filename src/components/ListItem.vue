<template>
  <div class="item">
    <div>
      <!-- 根据 flag 值来显示或隐藏文本 -->
      <span v-show="flag">{{ props.item.text }}</span>
      <!-- 根据 !flag 值来显示或隐藏输入框 -->
      <input v-show="!flag" type="text" v-model="childText">
    </div>
    <div>
      <button @click="remove">删除</button>
      <!-- 根据 flag 值来显示或隐藏修改按钮 -->
      <button v-show="flag" @click="modify">修改</button>
      <!-- 根据 !flag 值来显示或隐藏保存按钮 -->
      <button v-show="!flag" @click="save">保存</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义接收的 props
let props = defineProps({
  item: Object
});

// 定义要发出的事件
let emit = defineEmits(['remove', 'save']);

// 定义子组件内部的响应式数据
let childText = ref(props.item.text);

// 删除按钮点击事件处理函数
function remove() {
  emit('remove', props.item.id);
}

// 修改按钮点击事件处理函数
let flag = ref(true);
function modify() {
  flag.value = !flag.value;
}

// 保存按钮点击事件处理函数
function save() {
  flag.value = !flag.value;
  emit('save', props.item.id, childText.value);
}
</script>

<style scoped>
.item {
  width: 300px;
  border: 1px solid #000;
  padding: 20px;
  margin-top: 10px;
}

button {
  margin-right: 20px;
}
</style>
