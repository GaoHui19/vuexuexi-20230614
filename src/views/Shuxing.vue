<template>
  <div class="container">
    <!-- 添加千分符 -->
    <div class="item">
      <p>添加千分符:</p>
      <p>{{ formatNumber(1000) }}</p>
      <p>{{ formatNumber(1888888) }}</p>
    </div>

    <!-- 手机号脱敏 -->
    <div class="item">
      <p>手机号脱敏:</p>
      <p>{{ hidePhoneNumber('18240006561') }}</p>
    </div>

    <!-- 日期处理 -->
    <div class="item">
      <p>日期处理:</p>
      <p>{{ formatDate('2023-10-20') }}</p>
    </div>

    <!-- 去除首尾空格 -->
    <div class="item">
      <p>去除首尾空格:</p>
      <p>{{ trimString(' 张三') }}</p>
      <p>{{ trimString(' abc ') }}</p>
    </div>

    <!-- 交易类型转义 -->
    <div class="item">
      <p>交易类型转义:</p>
      <p>{{ getTransactionType(0) }}</p>
      <p>{{ getTransactionType(1) }}</p>
      <p>{{ getTransactionType(2) }}</p>
      <p>{{ getTransactionType(3) }}</p>
      <p>{{ getTransactionType(4) }}</p>
      <p>{{ getTransactionType(5) }}</p>
      <p>{{ getTransactionType(6) }}</p>
    </div>

    <!-- 替换字符串 -->
    <div class="item">
      <p>替换字符串:</p>
      <p>{{ replaceString('真真好好天天假假', '好', '坏') }}</p>
    </div>

    <!-- 两位数补零 -->
    <div class="item">
      <p>两位数补零:</p>
      <p>{{ addZero(8) }}</p>
      <p>{{ addZero(10) }}</p>
    </div>

    <!-- 数组去重 -->
    <div class="item">
      <p>数组去重:</p>
      <p>{{ uniqueArray([1, 'str', 2, 3, 'str', 2, 2, 1]) }}</p>
    </div>
  </div>
</template>

<script setup>
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const hidePhoneNumber = (phoneNumber) => {
  return phoneNumber.substr(0, 3) + '****' + phoneNumber.substr(7);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

const trimString = (str) => {
  return str.trim();
};

const getTransactionType = (type) => {
  const types = ['充值', '提现', '计息', '结息', '支付', '长款', '退款'];
  return types[type];
};

const replaceString = (str, oldStr, newStr) => {
  return str.replaceAll(oldStr, newStr);
};

const addZero = (num) => {
  return num.toString().padStart(2, '0');
};

const uniqueArray = (arr) => {
  return Array.from(new Set(arr));
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 200px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
