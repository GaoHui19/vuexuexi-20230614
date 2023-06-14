<template>
    <div class="carousel" @mouseover="stopTimer" @mouseleave="startTimer">
      <div class="carousel-inner">
        <!-- 添加最后一张图片 -->
        <div :class="['carousel-item', { active: currentIndex === -1 }]">
          <img :src="items[items.length - 1].img" class="d-block w-100" alt="">
        </div>
        <!-- 轮播图 -->
        <div v-for="(item, index) in items" :key="index" :class="['carousel-item', { active: index === currentIndex }]">
          <img :src="item.img" class="d-block w-100" alt="">
        </div>
        <!-- 添加第一张图片 -->
        <div :class="['carousel-item', { active: currentIndex === items.length }]">
          <img :src="items[0].img" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" @click="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="carousel-indicators">
        <button v-for="(item, index) in items" :key="index" type="button" :class="['btn', 'btn-sm', 'me-2', { active: index === currentIndex % items.length }]" @click="goTo(index)">{{ index + 1 }}</button>
      </div>
    </div>
    <router-link to="/reactive">Reactive</router-link>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  export default {
    setup() {
      const items = [
        { img: 'https://great.wzznft.com/i/2023/06/12/xd2y4o.png' },
        { img: 'https://great.wzznft.com/i/2023/06/12/xd4p4l.jpg' },
        { img: 'https://great.wzznft.com/i/2023/06/12/xd5gu9.jpg' },
        { img: 'https://great.wzznft.com/i/2023/06/12/xd5gu9.jpg' } // 添加最后一张图片
      ]
  
      const currentIndex = ref(items.length - 1) // 将初始位置设为最后一张图片的下标
      let timer = null
  
      const startTimer = () => {
        timer = setInterval(() => {
          next()
        }, 3000)
      }
  
      const stopTimer = () => {
        clearInterval(timer)
      }
  
      const prev = () => {
        if (currentIndex.value === 0) { // 如果当前为第一张图片，跳转到最后一张图片
          currentIndex.value = items.length
        } else {
          currentIndex.value--
        }
      }
  
      const next = () => {
        if (currentIndex.value === items.length) { // 如果当前为最后一张图片，跳转到第一张图片
          currentIndex.value = 0
        } else {
          currentIndex.value++
        }
      }
  
      const goTo = (index) => {
        currentIndex.value = index
      }
  
      onMounted(() => {
        startTimer()
      })
  
      onUnmounted(() => {
        stopTimer()
      })
  
      return {
        items,
        currentIndex,
        prev,
        next,
        goTo,
        startTimer,
        stopTimer
      }
    }
  }
  </script>
  
  <style>
  .carousel {
    position: relative;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .6s ease-in-out;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-top: -1.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    cursor: pointer;
    transition: opacity .15s ease-in-out;
  }
  
  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    opacity: 0.8;
  }
  
  .carousel-control-prev {
    left: 1rem;
  }
  
  .carousel-control-next {
    right: 1rem;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    fill: #fff;
  }
  
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23fff' class='bi bi-chevron-left' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' d='M10.354 1.646a.5.5 0 0 1 0 .708L5.707 8l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
  }
  
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23fff' class='bi bi-chevron-right' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' d='M5.646 1.646a.5.5 0 0 1 0 .708l4.647 4.646-4.647 4.646a.5.5 0 0 1 .708.708l5-5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
  
  .carousel-indicators {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .carousel-indicators button {
    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  
  .carousel-indicators button.active {
    background-color: #fff;
  }
  </style>
  