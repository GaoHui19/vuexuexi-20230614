<template>
    <div>
      <div class="stars">
        <div class="star" v-for="(star, index) in stars" :key="index" @click="toggleStar(star)">
          <span :class="{ 'star-selected': star.selected }">&#9733;</span>
        </div>
      </div>
      <button class="submit-button" @click="submit">提交</button>
    </div>
  </template>
  
  <script>
  import StarRating from '../components/stars/StarRating.js';
  
  export default {
    data() {
      return {
        starRating: new StarRating(),
        stars: [],
      };
    },
    created() {
      for (let i = 0; i < 5; i++) {
        this.starRating.addStar();
      }
      this.stars = this.starRating.selectedStars;
    },
    methods: {
      toggleStar(star) {
        star.select();
        for (let i = 0; i < this.stars.length; i++) {
          if (i <= this.stars.indexOf(star)) {
            this.stars[i].selected = true;
          } else {
            this.stars[i].selected = false;
          }
        }
      },
      submit() {
        this.starRating.submit();
      },
    },
  };
  </script>
  
  <style>
  .star {
    display: inline-block;
    padding: 5px;
    font-size: 40px;
    color: #e9e9e9;
    cursor: pointer;
  }
  .star:not(:last-child) {
    margin-right: 10px;
  }
  .star-selected {
    color: #ffd900;
  }
  .submit-button {
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .submit-button:hover {
    background-color: #0062cc;
  }
  </style>
  