<template>
  <swiper
    :pagination="true"
    :modules="modules"
    class="mySwiper pb-3"
    :space-between="50"
  >
    <swiper-slide>
      <RouterLink :to="`product/${classData[0].id}`">
        <div class="row">
          <div
            class="card border-primary border-0 bg-primary"
            style="width: auto"
          >
            <div
              class="bg-primary border-primary d-flex justify-content-center"
            >
              <div
                class="rounded-circle border border-secondary position-relative"
              >
                <div class="teacher-1 m-5"></div>
              </div>
            </div>
            <div class="card-body bg-primary">
              <h5 class="card-title my-4 text-center fw-bold">
                {{ classData[0].unit }}
              </h5>
              <p class="card-text mb-6 fs-6">
                人的一生中，與自己的對話，多過與別人的對話
                但我們對自己講的話，不一定是溫和，真實，有幫助，
                有時甚至毫不尊重．
              </p>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-secondary rounded-pill px-10 py-3"
                  @click="changePage()"
                >
                  課程連結
                </button>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </swiper-slide>
    <swiper-slide>
      <RouterLink :to="`product/${classData[1].id}`">
        <div class="row">
          <div
            class="card border-primary border-0 bg-primary"
            style="width: auto"
          >
            <div
              class="bg-primary border-primary d-flex justify-content-center"
            >
              <div
                class="rounded-circle border border-secondary position-relative"
              >
                <div class="teacher-2 m-5"></div>
              </div>
            </div>
            <div class="card-body bg-primary">
              <h5 class="card-title my-4 text-center fw-bold">
                {{ classData[1].unit }}
              </h5>
              <p class="card-text mb-6 fs-6">
                人的一生中，與自己的對話，多過與別人的對話
                但我們對自己講的話，不一定是溫和，真實，有幫助，
                有時甚至毫不尊重．
              </p>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-secondary rounded-pill px-10 py-3"
                  @click="changePage()"
                >
                  課程連結
                </button>
              </div>
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

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
  props: ['classData'],
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  },
  methods: {
    changePage () {
      this.$router.push('/teachers')
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
  padding-bottom: 30px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #f8c343;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -4px;
}

.teacher-1 {
  background-image: url("../assets/images/Ellipse 14.png");
  height: 134px;
  width: 134px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
}
.teacher-2 {
  background-image: url("../assets/images/teacher2.png");
  height: 134px;
  width: 134px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
}
:deep(.swiper-pagination-bullet) {
    background-color: #F79E1B !important; /* 使用更具体的选择器，并添加 !important 提高优先级 */
}
</style>
