<template>
  <div>
    <h2>首页</h2>
    <div>
      <router-link to="/ref">Ref</router-link>
      <router-link to="/shuxing">shuxing 练习</router-link>
      <router-link to="/xinxi"> xinxi 信息录入 练习</router-link>
      <router-link to="/class"> class </router-link>
      <router-link to="/v-for"> v-for </router-link>
      <router-link to="/event"> event </router-link>
      <router-link to="/liftCycle">LiftCycle</router-link>
      <router-link to="/xuan"> xuan</router-link>
      <router-link to="/xiaomubiao"> xiaomubiao </router-link>
      <router-link to="/Erjidaohang"> Erjidaohang </router-link>
      <router-link to="/Ref2"> Ref2 </router-link>
      <router-link to="/watch"> Watch </router-link>
      <router-link to="/Sousuo"> Sousuo </router-link>
      <router-link to="/Options"> Options </router-link>
      <router-link to="/color"> color </router-link>
      <router-link to="/starRating"> starRating </router-link>
      <router-link to="/Parent"> Parent.vue </router-link>
    </div>
    <router-view></router-view>

    <child /> 
  </div>

  
</template>

<script setup>
import child from "../components/child.js"

</script>

<style>
div {
  display: flex;
  flex-direction: column;
}
.router-link {
  margin-bottom: 10px;
}
</style>
