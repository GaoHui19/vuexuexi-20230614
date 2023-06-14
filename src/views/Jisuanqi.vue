<template>
    <div>
      <input type="text" v-model="num1" />
      <select v-model="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" v-model="num2" />
      <button @click="calculate">=</button>
      <button @click="clear">清空</button>
      <span>{{ result }}</span>
    </div>
    <router-link to="/banners">查看轮播图</router-link>
  </template>
  
  <script setup>
    import { ref } from 'vue';
  
    const num1 = ref('');
    const num2 = ref('');
    const operator = ref('+');
    const result = ref('');
  
    function calculate() {
      switch (operator.value) {
        case '+':
          result.value = Number(num1.value) + Number(num2.value);
          break;
        case '-':
          result.value = Number(num1.value) - Number(num2.value);
          break;
        case '*':
          result.value = Number(num1.value) * Number(num2.value);
          break;
        case '/':
          result.value = Number(num1.value) / Number(num2.value);
          break;
        default:
          result.value = '';
      }
    }
  
    function clear() {
      num1.value = null;
      num2.value = null;
      operator.value = '+';
      result.value = null;
    }
  </script>
  
  <style>
    input[type="text"], select, button {
      font-size: 24px;
      height: 40px;
      padding: 0 10px;
      margin: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      background-color: #4CAF50;
      border: none;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #3e8e41;
    }
    span {
      font-size: 24px;
      margin: 10px;
    }
  </style>
  