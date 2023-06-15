<template>
    <div class="nav-box">
      <div class="nav">
        <div class="nav-item" :class="{ active: activeTab === 'home' }" @click="selectTab('home')">首页</div>
        <div class="nav-item" :class="{ active: activeTab === 'category' }" @click="toggleSubNav('category')">
          分类
          <div class="sub-nav" v-show="subNavCategory">
            <div class="sub-nav-item" :class="{ active: subActiveTab === 'gaming' }" @click="selectSubTab('gaming')">电竞类的</div>
            <div class="sub-nav-item" :class="{ active: subActiveTab === 'help' }" @click="selectSubTab('help')">问题求助</div>
            <div class="sub-nav-item" :class="{ active: subActiveTab === 'feedback' }" @click="selectSubTab('feedback')">反馈</div>
          </div>
        </div>
        <div class="nav-item" :class="{ active: activeTab === 'help' }" @click="toggleSubNav('help')">
          帮助
          <div class="sub-nav" v-show="subNavHelp">
            <div class="sub-nav-item" :class="{ active: subActiveTab === 'feedback' }" @click="selectSubTab('feedback')">反馈</div>
            <div class="sub-nav-item" :class="{ active: subActiveTab === 'help' }" @click="selectSubTab('help')">问题求助</div>
          </div>
        </div>
      </div>
      <div class="content"></div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const activeTab = ref('home')
    const subActiveTab = ref(null)
    const subNavCategory = ref(false)
    const subNavHelp = ref(false)
  
    function selectTab(tabName) {
      activeTab.value = tabName
      subNavCategory.value = false
      subNavHelp.value = false
    }
  
    function toggleSubNav(navName) {
      if (navName === 'category') {
        subNavCategory.value = !subNavCategory.value
        subNavHelp.value = false
      } else if (navName === 'help') {
        subNavHelp.value = !subNavHelp.value
        subNavCategory.value = false
      }
    }
  
    function selectSubTab(tabName) {
      subActiveTab.value = tabName
    }
  </script>
  
  <style>
    .nav-box {
      width: 800px;
      height: 500px;
      border: 2px solid #000;
      display: flex;
    }
  
    .nav {
      width: 200px;
      height: 100%;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
    }
  
    .nav-item {
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      cursor: pointer;
      border: 1px solid #ccc;
    }
  
    .active {
      background-color: #fff;
      font-weight: bold;
    }
  
    .sub-nav {
      margin-left: 20px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
    }
  
    .sub-nav-item {
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      cursor: pointer;
    }
  
    .sub-nav-item.active {
      background-color: #eee;
    }
  
    .content {
      flex: 1;
    }
    
  </style>
  