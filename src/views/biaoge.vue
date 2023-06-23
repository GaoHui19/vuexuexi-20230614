<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>男女</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <button @click="edit(item)">修改</button>
              <button @click="remove(item)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <edit-form v-if="showEditForm" :item="currentItem" @save="save" @cancel="cancel"></edit-form>
  
      <add-form v-if="showAddForm" @add="add" @cancel="cancelAdd"></add-form>
  
      <button @click="showAddForm = true">添加</button>
    </div>
  </template>
  
  <script>
  import EditForm from '../components/EditForm.vue';
  import AddForm from '../components/AddForm.vue';
  
  export default {
    components: {
      EditForm,
      AddForm,
    },
    data() {
      return {
        items: [
          { id: 1, name: '张三', age: 18, gender: '男' },
          { id: 2, name: '李四', age: 20, gender: '女' },
          { id: 3, name: '王五', age: 22, gender: '男' },
        ],
        showEditForm: false,
        currentItem: null,
        showAddForm: false,
      };
    },
    methods: {
      edit(item) {
        this.currentItem = item;
        this.showEditForm = true;
      },
      remove(item) {
        this.items = this.items.filter(i => i.id !== item.id);
      },
      save(item) {
        const index = this.items.findIndex(i => i.id === item.id);
        this.$set(this.items, index, item);
        this.showEditForm = false;
      },
      cancel() {
        this.showEditForm = false;
      },
      add(item) {
        this.items.push({
          ...item,
          id: Date.now(),
        });
        this.showAddForm = false;
      },
      cancelAdd() {
        this.showAddForm = false;
      },
    },
  };
  </script>