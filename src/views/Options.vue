<template>
 <div>
  <h2>选项式API-ToDoList</h2>

<h2>小目标列表</h2>
<input type="text" v-model="message" @keyup.enter="addTodo">
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.name }} - <span @click="remove(todo.id)">删除</span></li>
</ul>
 </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      message: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (!this.message) return;
      this.n++;
      this.todos.push({ id: this.n, name: this.message });
      this.message = '';
    },
    remove(id) {
      this.todos = this.todos.filter((item) => {
        return item.id !== id;
      })
    }
  }
}
</script>

<style scoped></style>