<!-- EditForm.vue -->
<template>
  <div>
    <div><label>姓名：<input type="text" v-model="form.name"></label></div>
    <div><label>年龄：<input type="number" v-model="form.age"></label></div>
    <div><label>男女：<input type="text" v-model="form.gender"></label></div>

    <button @click="save">保存</button>
    <button @click="$emit('cancel')">取消</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      form: {...this.item},
    };
  },
  methods: {
    save() {
      this.$emit('save', this.form);
    },
  },
};
</script>