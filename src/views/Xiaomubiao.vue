<template>
    <div class="target-container">
      <h2>小目标列表</h2>
      <div class="target-form">
        <!-- 绑定输入框的值为 newTarget -->
        <input type="text" v-model.trim="newTarget" @keyup.enter="addTarget" placeholder="添加一个小目标" />
      </div>
      <div class="target-count">共有 {{ targets.length }} 个小目标</div>
      <ul class="target-list">
        <!-- 使用 v-for 渲染 targets 数组 -->
        <li v-for="(target, index) in targets" :key="index">
          <!-- 显示小目标的文本 -->
          <span class="target-text">{{ target }}</span>
          <!-- 为删除按钮绑定点击事件，并传入当前索引值 -->
          <button @click="removeTarget(index)">X</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 定义响应式变量 targets 和 newTarget
  const targets = ref([]);
  const newTarget = ref('');
  
  // 定义添加小目标的函数
  function addTarget() {
    if (newTarget.value.trim()) {
      // 将新目标添加到 targets 数组中
      targets.value.push(newTarget.value.trim());
      // 清空输入框
      newTarget.value = '';
    }
  }
  
  // 定义删除小目标的函数
  function removeTarget(index) {
    // 从 targets 数组中移除指定索引处的目标
    targets.value.splice(index, 1);
  }
  </script>
  
  <style>
  .target-container {
    width: 600px;
    margin: 0 auto;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .target-form {
    margin-bottom: 16px;
  }
  
  .target-form input[type="text"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .target-count {
    margin-bottom: 16px;
  }
  
  .target-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .target-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 8px;
    font-size: 16px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  
  .target-list li .target-text {
    flex-grow: 1;
    margin-right: 8px;
  }
  </style>
  

<!-- 在这个功能中 使用了 targets 和 newTarget 两个 ref 来分别存储小目标列表和用户输入的新目标。我们使用了 v-for 指令来遍历小目标列表，并且使用了 @click 事件来监听删除目标按钮的点击事件。

在模板部分，我们将小目标列表的标题、输入框、目标数量和目标列表都写在组件中，使用了列表渲染、事件和表单绑定等功能来实现。

在样式部分，我们使用了 flex 布局来让删除目标按钮靠右对齐。我们还使用了 background-color 属性来改变目标的背景色，以及使用了 border-radius 属性来改变目标的圆角。 -->


<!-- vue3 -->
<!-- <template> -->
  <!-- <div class="target-container"> -->
    <!-- <h2>小目标列表</h2> -->
    <!-- <div class="target-form"> -->
      <!-- 绑定输入框的值为 newTarget -->
      <!-- <input type="text" v-model.trim="newTarget" @keyup.enter="addTarget" placeholder="添加一个小目标" /> -->
    <!-- </div> -->
    <!-- <div class="target-count">共有 {{ targets.length }} 个小目标</div> -->
    <!-- <ul class="target-list"> -->
      <!-- 使用 v-for 渲染 targets 数组 -->
      <!-- <li v-for="(target, index) in targets" :key="index"> -->
        <!-- 显示小目标的文本 -->
        <!-- <span class="target-text">{{ target }}</span> -->
        <!-- 为删除按钮绑定点击事件，并传入当前索引值 -->
        <!-- <button @click="removeTarget(index)">X</button>
      </li>
    </ul>
  </div>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      targets: [],
      newTarget: '',
    };
  },
  methods: {
    // 定义添加小目标的函数
    addTarget() {
      if (this.newTarget.trim()) {
        // 将新目标添加到 targets 数组中
        this.targets.push(this.newTarget.trim());
        // 清空输入框
        this.newTarget = '';
      }
    },

    // 定义删除小目标的函数
    removeTarget(index) {
      // 从 targets 数组中移除指定索引处的目标
      this.targets.splice(index, 1);
    },
  },
};
</script> -->

<!-- <style>
.target-container {
  width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h2 {
  margin-top: 0;
}

.target-form {
  margin-bottom: 16px;
}

.target-form input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.target-count {
  margin-bottom: 16px;
}

.target-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.target-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.target-list li .target-text {
  flex-grow: 1;
  margin-right: 8px;
}
</style> -->
