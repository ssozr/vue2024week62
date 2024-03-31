<template>
  <div class="container mt-15">
    <h2 class="fs-1 text-center mb-8 border-bottom border-primary border-2 pb-3">陪伴無數朋友們，重新認識自己</h2>
    <swiper
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper pb-5 "
    >
      <swiper-slide v-for="(article) in articlesData" :key="article.id" class="bg-success">
        <div class="card my-5 bg-success border-0">
          <div class="card-body">
            <h5 class="card-title text-start">{{ article.title }}</h5>
            <p class="card-text text-start">{{ article.description }}</p>
            <a href="#" class="btn btn-primary">更多故事</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  </template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  },
  data () {
    return {
      articlesData: [],
      mySwiper: ''
    }
  },
  methods: {
    getArticleData () {
      axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/articles`)
        .then((res) => {
          this.articlesData = res.data.articles
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    }
  },
  mounted () {
    this.getArticleData()
  }
}

</script>

<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
