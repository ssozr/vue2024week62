<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
    style="height: 100%;"
    :breakpoints="{
      768: {
        slidesPerView: 3
      }
    }"
  >
    <swiper-slide
      v-for="(product, i) in otherClassData"
      :key="i"
      @click="changPage(product.id)"
    >
      <RouterLink :to="`/product/${product.id}`" class="h-100 d-block">
        <div class="card-group h-100">
          <div class="card bg-primary border-0 pt-4 h-100">
            <div class="d-flex justify-content-center">
              <div
                class="d-flex justify-content-center align-items-center border rounded-circle border-secondary"
              >
                <img
                  :src="product.imageUrl"
                  class="card-img-top rounded-circle card-img p-5 img-fluid"
                  alt="導師照片"
                />
              </div>
            </div>
            <div class="card-body text-center p-0 mt-5">
              <h2 class="card-title fs-4">{{ product.title }}</h2>
              <div class="mt-8 mb-6">
                <p class="card-text fs-6">{{ product.description }}</p>
              </div>
            </div>
            <div class="card-footer text-center bg-secondary text-white">
              課程連結
            </div>
          </div>
        </div>
      </RouterLink>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import { RouterLink } from 'vue-router'

export default {
  props: ['otherClassData'],
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  setup () {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay]
    }
  },
  methods: {
    changPage (id) {
      this.$emit('chang-page', id)
    }
  }
}
</script>

<style scoped>
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
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: auto;
}

.swiper-slide img {
  display: block;
}

.card-img {
  object-fit: cover;
  object-position: center;
  height: 268px;
  width: 268px;
  @media (max-width: 768px) {
    height: 134px;
    width: 134px;
  }
}
.product {
  border: 1px solid #F8C343;
}

:deep(.swiper-pagination-bullet) {
    background-color: #F79E1B !important; /* 使用更具体的选择器，并添加 !important 提高优先级 */
}
</style>
