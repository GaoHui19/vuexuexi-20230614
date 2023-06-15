<template>
    <div>
      <h2>Vue 3 生命周期</h2>
      <div>
        <button @click="updateData">更新数据</button>
        <button @click="destroyInstance">销毁实例</button>
      </div>
    </div>
  </template>
  
  <script>
  import { onBeforeCreate, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, reactive } from 'vue'
  
  export default {
    setup() {
      const state = reactive({
        message: 'Hello, Vue 3!'
      })
  
      onBeforeCreate(() => {
        console.log('Vue 3 beforeCreate')
      })
      onMounted(() => {
        console.log('Vue 3 mounted')
      })
      onBeforeUpdate(() => {
        console.log('Vue 3 beforeUpdate')
      })
      onUpdated(() => {
        console.log('Vue 3 updated')
      })
      onBeforeUnmount(() => {
        console.log('Vue 3 beforeUnmount')
      })
      onUnmounted(() => {
        console.log('Vue 3 unmounted')
      })
      onErrorCaptured((err, vm, info) => {
        console.log('Vue 3 errorCaptured', err, vm, info)
      })
  
      const updateData = () => {
        state.message = 'Hello, Vue 3!'
      }
  
      const destroyInstance = () => {
        // 直接返回 undefined 以触发组件实例的销毁
        return undefined
      }
  
      return {
        state,
        updateData,
        destroyInstance
      }
    }
  }
  </script>
  