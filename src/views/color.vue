<!-- <template>
    <div>
      <h1 :style="{ color: color }">Random color generator</h1>
      <button @click="generateColor">Generate</button>
    </div>
  </template>
  
  <script>
  import { randomColor } from '../components/color.js';
  
  export default {
    data() {
      return {
        color: '',
      };
    },
    methods: {
      generateColor() {
        this.color = randomColor();
      },
    },
  };
  </script>
  
  <style scoped>
  h1, button {
    display: block;
    margin: 20px;
  }
  </style> -->

  <template>
    <div>
      <h1 :style="{ color: color }">Random color generator</h1>
      <button @click="generateColor">Generate</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'; // 导入 ref 函数
  import { randomColor } from '../components/color.js';
  
  const color = ref('');
  const generateColor = () => {
    color.value = randomColor();
  };
  </script>
  
  <style scoped>
  h1, button {
    display: block;
    margin: 20px;
  }
  </style>
  