<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="fixed-top bg-success">
      <div class="border-bottom">
        <div class="container">
          <div class="header row">
            <div
              class="d-flex justify-content-between py-4 m-0 align-items-center"
            >
              <div>
                <RouterLink to="/" @click="changeBtn()"
                  ><img
                    h-24
                    src="@/assets/images/Logo.png"
                    alt="網站logo,正視心靈四個字圖示"
                /></RouterLink>
              </div>
              <button
                type="button"
                class="btn btn-primary d-md-none d-flex"
                @click="menuByn()"
              >
                <span class="material-symbols-outlined text-light"> menu </span>
              </button>
              <div class="d-none d-md-block">
                <ul class="d-flex m-0 p-0 header-list align-items-center">
                  <li class="me-6">
                    <RouterLink
                      to="/articles"
                      :class="{ active: isActive('/articles') }"
                      >文章分享</RouterLink
                    >
                  </li>
                  <li class="me-6">
                    <RouterLink
                      to="/about"
                      :class="{ active: isActive('/about') }"
                      >關於我們</RouterLink
                    >
                  </li>
                  <li class="me-6">
                    <RouterLink
                      to="/products"
                      @click="searchOff"
                      :class="{ active: isActive('/products') }"
                      >課程列表</RouterLink
                    >
                  </li>
                  <li class="position-relative">
                    <RouterLink to="/cart"
                      ><span class="material-symbols-outlined">
                        shopping_cart </span
                      ><span
                        v-if="carts.length"
                        class="badge rounded-pill bg-danger position-absolute bottom-50"
                        >{{ carts.length }}</span
                      ></RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu" :class="{ 'd-none': !menuContent }">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <ul class="mt-15">
              <li class="fs-6 text-center mb-8" @click="changeBtn()">
                <RouterLink to="/articles">文章分享</RouterLink>
              </li>
              <li class="fs-6 text-center mb-8" @click="changeBtn()">
                <RouterLink to="/about">關於我們</RouterLink>
              </li>
              <li class="fs-6 text-center mb-8" @click="changeBtn()">
                <RouterLink to="/products" @click="searchOff"
                  >課程列表</RouterLink
                >
              </li>
              <li
                class="fs-6 text-center mb-8 position-relative"
                @click="changeBtn()"
              >
              <RouterLink to="/cart"
                      ><span class="material-symbols-outlined">
                        shopping_cart </span
                      ><span
                        v-if="carts.length"
                        class="badge rounded-pill bg-danger position-absolute bottom-50"
                        >{{ carts.length }}</span
                      ></RouterLink
                    >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!menuContent" class="flex-grow-1">
      <RouterView />
    </div>
    <div class="container footer" v-if="!menuContent">
      <div class="row">
        <div class="text-center">
          <div class="mb-17">
            <RouterLink @click="WindowTop()" to="/">
              <img
                src="@/assets/images/Logo.png"
                alt="網站logo,正視心靈四個字圖示"
            /></RouterLink>
          </div>
          <div class="d-flex justify-content-center mb-2">
            <div class="img-line"></div>
          </div>
          <ul class="fs-6 text-gray-04 mb-3">
            <li class="mb-1">
              <a href="mailto:a913723@gmail.com">客服信箱:a913723@gmail.com</a>
            </li>
            <li><a href="tel:0912345678">客服電話：0912345678</a></li>
          </ul>
          <p class="f-7 mb-8 text-center">
            正視心靈 © 2023 Copyright
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cart'
import searchStore from '@/stores/search'
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
      menuContent: false
    }
  },
  methods: {
    menuByn () {
      this.menuContent = !this.menuContent
    },
    WindowTop () {
      window.scrollTo(0, 0)
    },
    changeBtn () {
      this.menuContent = false
    },
    isActive (route) {
      return this.$route.path === route
    },
    ...mapActions(cartStore, ['getCartDataPinia']),
    ...mapActions(searchStore, ['searchOff'])
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  mounted () {
    this.getCartDataPinia()
  }
}
</script>

<style scoped>
.active {
  font-weight: bold; /* 活动链接的样式 */
}
</style>
