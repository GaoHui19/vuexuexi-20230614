<template>
  <div class="tab-bar">
    <ul class="tab-list">
      <li v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{ active: activeTab === index }">
        {{ tab.title }}
      </li>
    </ul>
    <keep-alive>
      <component :is="activeTabComponent" :key="activeTab" v-if="activeTabComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TabHome from '../components/tabS/TabHome.vue';
import TabCategory from '../components/tabS/TabCategory.vue';
import TabProfile from '../components/tabS/TabProfile.vue';

const tabs = ref([
  { title: '首页', component: TabHome },
  { title: '分类', component: TabCategory },
  { title: '我的', component: TabProfile }
]);

const activeTab = ref(0);

const activeTabComponent = computed(() => {
  return tabs.value[activeTab.value]?.component;
});
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
}

.tab-list {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.tab-list li {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #eee;
  border-right: 1px solid #ccc;
}

.tab-list li:last-child {
  border-right: none;
}

.tab-list li.active {
  background-color: #ccc;
}
</style>
