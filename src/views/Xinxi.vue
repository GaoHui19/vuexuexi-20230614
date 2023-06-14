<template>
  <div class="form-container">
    <h2>个人信息录入</h2>
    <form>
      <div class="form-group">
        <label for="name">姓名：</label>
        <input id="name" type="text" v-model.trim="form.name" />
      </div>
      <div class="form-group">
        <label for="signature">个人签名：</label>
        <textarea id="signature" v-model.trim="form.signature"></textarea>
      </div>
      <div class="form-group">
        <label for="married">婚姻状况：</label>
        <div class="radio-group">
          <label>
            <input type="radio" v-model="form.married" value="已婚" />
            已婚
          </label>
          <label>
            <input type="radio" v-model="form.married" value="未婚" />
            未婚
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>爱好：</label>
        <div class="checkbox-group">
          <label><input type="checkbox" v-model="form.hobbies" value="篮球" />篮球</label>
          <label><input type="checkbox" v-model="form.hobbies" value="足球" />足球</label>
          <label><input type="checkbox" v-model="form.hobbies" value="电竞" />电竞</label>
          <label><input type="checkbox" v-model="form.hobbies" value="跳舞" />跳舞</label>
          <label><input type="checkbox" v-model="form.hobbies" value="唱歌" />唱歌</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="city">户籍所在地：</label>
        <input id="city" type="text" v-model.trim="form.city" />
      </div>
      <div class="form-group">
        <label for="province">所在地：</label>
        <select id="province" v-model="form.province">
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="广州">广州</option>
          <option value="深圳">深圳</option>
        </select>
      </div>
      <div class="form-group">
        <button class="submit-btn" @click.prevent="submitForm">提交</button>
        <button class="reset-btn" @click.prevent="resetForm">重置</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue';

const form = ref({
  name: "",
  signature: "",
  married: "",
  hobbies: [],
  single: false,
  city: "",
  province: "",
});

const submitForm = () => {
  if (!form.value.name || !form.value.signature || !form.value.married || !form.value.city || !form.value.province) {
    alert("请完整填写个人信息！");
    return;
  }
  console.log(toRaw(form));
};

const resetForm = () => {
  form.value = {
    name: "",
    signature: "",
    married: "",
    hobbies: [],
    single: false,
    city: "",
    province: "",
  };
};
</script>

<style scoped>
.form-container {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}

.form-group {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.form-group > label {
  flex: 0 0 150px;
  text-align: right;
  margin-right: 10px;
}

.radio-group,
.checkbox-group,
.switch-group,
.form-group > select,
.form-group > input {
  flex: 1;
}

.radio-group > label,
.checkbox-group > label,
.switch-group > label {
  margin-right: 10px;
}

.form-group > input[type="checkbox"],
.form-group > input[type="radio"] {
  margin-right: 5px;
}

.submit-btn,
.reset-btn {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn {
  background-color: #42b983;
  color: #fff;
  border: none;
  margin-right: 10px;
}

.reset-btn {
  background-color: #fff;
  color: #42b983;
  border: 1px solid #42b983;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.checkbox-group label {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
}
</style>
