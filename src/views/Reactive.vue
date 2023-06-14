<!-- <template>
    <div>
      <h1>{{ title }}</h1>
      <p>Current count: {{ count }}</p>
      <p>Current color: {{ settings.color }}</p>
      <p>Current font: {{ settings.font }}</p>
      <p>Current user: {{ user.name }}</p>
      <p>Current user email: {{ user.email }}</p>
      <button @click="increment">Increment</button>
      <button @click="changeColor">Change Color</button>
      <button @click="changeUserName">Change User Name</button>
      <button @click="changeUserEmail">Change User Email</button>
      <button @click="printData">Print Data</button>
    </div>
  </template>
  
<script>
import { reactive, watch } from 'vue';

export default {
    setup() {
        // 创建一个 reactive 对象 state
        const state = reactive({
            // 给 state 对象添加 title 属性
            title: 'Deep Reactive Example',
            // 给 state 对象添加 count 属性
            count: 0,
            // 创建一个嵌套的 reactive 对象 settings
            settings: reactive({
                // 给 settings 对象添加 color 属性
                color: 'red',
                // 给 settings 对象添加 font 属性
                font: 'Arial',
            }),
            // 创建一个嵌套的 reactive 对象 user
            user: reactive({
                // 给 user 对象添加 name 属性
                name: 'John Doe',
                // 给 user 对象添加 email 属性
                email: 'john@example.com',
            }),
        });

        // 监听 settings.color 属性的变化
        watch(() => state.settings.color, (newValue, oldValue) => {
            console.log(`Color changed from ${oldValue} to ${newValue}`);
        });

        // 定义一个函数 increment
        function increment() {
            // 修改 state.count 属性的值
            state.count++;
        }

        // 定义一个函数 changeColor
        function changeColor() {
            // 根据当前的 settings.color 属性值来切换颜色
            state.settings.color = state.settings.color === 'red' ? 'blue' : 'red';
        }

        // 定义一个函数 changeUserName
        function changeUserName() {
            // 根据当前的 user.name 属性值来切换用户名
            state.user.name = state.user.name === 'John Doe' ? 'Jane Doe' : 'John Doe';
        }

        // 定义一个函数 changeUserEmail
        function changeUserEmail() {
            // 根据当前的 user.email 属性值来切换用户邮箱
            state.user.email = state.user.email === 'john@example.com' ? 'jane@example.com' : 'john@example.com';
        }

        // 定义一个函数 printData
        function printData() {
            // 打印 state 对象的 JSON 字符串
            console.log(JSON.parse(JSON.stringify(state)));
        }

        // 返回所需的数据和函数
        return {
            title: state.title,
            count: state.count,
            settings: state.settings,
            user: state.user,
            increment,
            changeColor,
            changeUserName,
            changeUserEmail,
            printData,
        };
    },
};
</script>
   -->


   <template>
    <h2>Reactive</h2>
    <div>{{ obj2.foo.count }}</div>
    <button @click="increment">增加</button>
    <!-- 数组 -->
    <ul @click="decrement">
      <li v-for="item in arr">{{ item }}</li>
    </ul>
  </template>
  
  <script setup>
  // 引入 reactive 函数
  import { reactive } from 'vue';
  
  // 定义一个普通对象 count
  let count = { count: 0 };
  // 使用 reactive 函数将 count 转换为响应式对象 obj
  let obj = reactive({ count: 0 });
  // 获取 obj.count 的值
  let n = obj.count;
  // 判断 count 和 obj 是否相等
  console.log(count === obj);
  // 使用 reactive 函数将 obj 转换为响应式对象 obj3
  let obj3 = reactive(obj);
  // 判断 obj3 和 obj 是否相等
  console.log(obj3 === obj);
  // 定义一个深层响应式对象 obj2
  let obj2 = reactive({ foo: { count: 0 } });
  // 定义一个响应式数组 arr
  let arr = reactive([1, 2, 3]);
  
  // 定义函数 increment，用于增加 obj2.foo.count 的值
  function increment() {
    obj2.foo.count++;
  }
  
  // 定义函数 decrement，用于删除数组 arr 的最后一个元素
  function decrement() {
    arr.pop();
  }
  </script>
  
  <style></style>
  