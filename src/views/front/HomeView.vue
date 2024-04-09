<template>
  <loading v-model:active="isLoading" />
  <div
    data-aos="fade-right"
    class="container-fluid banner px-0 d-flex align-items-center mb-15 mb-md-30 position-relative"
  >
    <div class="container">
      <div class="row">
        <div class="px-0 ms-3 col-md-5 col-8 mt-49">
          <h1 class="mb-0 fs-1">用我們的專業，幫您看見內心</h1>
          <label for="search"
            ><h4 class="mt-md-8 pb-md-6 mt-3 pb-3 mb-0">我想看見...</h4></label
          >
          <div class="input-group">
            <select class="form-select d-none d-md-block" id="search" @change="searchCategory">
              <option class="d-none d-md-block" value="選擇一個你想了解的領域" :disabled="true" selected>
                選擇一個你想了解的領域
              </option>
              <option value="自我成長">自我成長</option>
              <option value="感情婚姻">感情婚姻</option>
              <option value="人際關係">人際關係</option>
              <option value="諮商談話">諮商談話</option>
            </select>
            <select class="form-select d-md-none" id="search" @change="searchCategory">
              <option class="d-md-none" value="課程分類" :disabled="true" selected>
                課程分類
              </option>
              <option value="自我成長">自我成長</option>
              <option value="感情婚姻">感情婚姻</option>
              <option value="人際關係">人際關係</option>
              <option value="諮商談話">諮商談話</option>
            </select>
            <button
              type="button"
              class="input-group-text btn-outline-light btn d-flex text-black"
            >
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-aos="fade-right" class="container second mb-md-30 mb-15">
    <div class="row">
      <div class="d-flex justify-content-center">
        <h2
          class="fs-1 text-center mb-18 border-bottom border-primary border-2 pb-3"
        >
          您內心的疑惑，我們懂
        </h2>
      </div>
      <div class="d-md-block d-flex justify-content-center">
        <ul class="row mb-0 p-0">
          <li class="col-lg-3 col-6">
            <div class="img-1"></div>
            <h5 class="text-center mt-md-6 mt-3 mb-0 fz-18">家人不懂我</h5>
          </li>
          <li class="col-lg-3 col-6">
            <div class="img-2"></div>
            <h5 class="text-center mt-md-6 mt-3 fz-18">我還能再愛嗎?</h5>
          </li>
          <li class="col-lg-3 col-6">
            <div class="img-3"></div>
            <h5 class="text-center mt-md-6 mt-3 fz-18">該換工作嗎?</h5>
          </li>
          <li class="col-lg-3 col-6">
            <div class="img-4"></div>
            <h5 class="text-center mt-md-6 mt-3 fz-18">我在追求什麼?</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    v-if="show"
    data-aos="fade-right"
    class="container-fluid bg-primary third pb-md-30 pb-15"
  >
    <div class="d-flex justify-content-center">
      <h2
        class="fs-1 text-center mb-md-15 mb-4 border-bottom border-secondary border-2 pb-3 pt-15"
      >
        讓專業，協助您看見真實
      </h2>
    </div>
    <div class="row">
      <swiper class="d-md-none" :class-data="classData"/>
    </div>
    <div class="row teacher">
      <div class="col-md-6 p-0 mb-6 mb-md-0">
        <RouterLink :to="`product/${classData[0].id}`">
          <div
            class="d-flex justify-content-md-end justify-content-center me-xxl-30 me-xl-15 me-md-3"
          >
            <div
              class="card border-primary border-3 bg-primary"
            >
              <div class="bg-primary border-primary">
                <div
                  class="rounded-circle border border-secondary position-relative"
                  style="width: 308px"
                >
                  <div class="teacher-1 m-5"></div>
                  <img
                    src="@/assets/images/Ellipse18.png"
                    alt="導師相片"
                    class="position-absolute top-0 end-0"
                  />
                </div>
              </div>
              <div class="card-body bg-primary p-0 text-center">
                <h5 class="card-title mt-6 text-center mb-8 fz-18 fw-bold">
                  {{ classData[0].unit }}
                </h5>
                <p class="card-text mb-6 fs-6">
                  {{ classData[0].description }}
                </p>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-secondary rounded-pill px-10 py-3 text-white"
                  >
                    查看課程介紹
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-6 p-0">
        <div
          class="d-flex justify-content-md-start justify-content-center ms-xxl-30 ms-xl-15 ms-md-3"
        >
          <RouterLink :to="`product/${classData[1].id}`">
            <div
              class="card border-primary border-3 bg-primary"
            >
              <div class="bg-primary border-primary">
                <div
                  class="rounded-circle border border-secondary position-relative"
                  style="width: 308px"
                >
                  <div class="teacher-2 m-5"></div>
                  <img
                    src="@/assets/images/Ellipse18.png"
                    alt="導師相片"
                    class="position-absolute bottom-0 end-0"
                  />
                </div>
              </div>
              <div class="card-body bg-primary p-0 text-center">
                <h5 class="card-title mt-6 text-center mb-8 fz-18 fw-bold">
                  {{ classData[1].unit }}
                </h5>
                <p class="card-text mb-6 fs-6">
                  {{ classData[1].description }}
                </p>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-secondary rounded-pill px-10 py-3 text-white"
                  >
                  查看課程介紹
                  </button>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <articleHome class="d-lg-block d-none"/>
  <articleHomeRwd class="d-lg-none"/>
  <div
    data-aos="fade-right"
    class="container-fluid bg-F7F3F0 pt-md-30 pt-15 pb-15 pb-md-30 fourth"
  >
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2
          class="fs-1 text-center mb-md-15 mb-8 border-bottom border-primary border-2 pb-3"
        >
          以最放鬆的方式，敘說您的故事
        </h2>
      </div>
      <ul class="row m-0 p-0">
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-1 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">數十位專業諮商師</p>
        </li>
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-2 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">１對１線上諮詢</p>
        </li>
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-3 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">自行決定對談時間</p>
        </li>
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-4 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">絕對注重隱私</p>
        </li>
      </ul>
    </div>
  </div>
  <div data-aos="fade-right" class="container-fluid fifth mb-8">
    <div class="container">
      <div class="row">
        <h2 class="text-white text-center mt-md-48 mt-15 fs-1 mb-md-6 mb-8">
          只差最後一步，就可以開始探索自己
        </h2>
        <div class="d-flex justify-content-center">
          <RouterLink
            to="products"
            type="button"
            class="btn btn-secondary rounded-pill fs-6 text-white px-10 py-3"
            >立即找到您的人生導師</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/SwiperComponent.vue'
import articleHome from '@/components/ArticleHome.vue'
import articleHomeRwd from '@/components/ArticleHomeRwd.vue'
import searchStore from '@/stores/search.js'
import { mapActions } from 'pinia'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
const { VITE_APP_API_NAME, VITE_APP_API_URL } = import.meta.env

export default {
  data () {
    return {
      classData: [],
      isLoading: false,
      show: false
    }
  },
  components: {
    swiper,
    articleHome,
    Loading,
    articleHomeRwd
  },
  methods: {
    getProductData () {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/products`)
        .then((res) => {
          this.classData = res.data.products
          this.show = true
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    searchCategory (category) {
      this.selected = category.target.value
      this.search(this.selected)
    },
    ...mapActions(searchStore, ['search'])
  },
  mounted () {
    this.isLoading = true
    this.getProductData()
  }
}
</script>
