<template>
    <h1>這是後台</h1>
    <nav>
        <RouterLink to="article">文章管理</RouterLink>|
        <RouterLink to="order">訂單管理</RouterLink> |
        <RouterLink to="products">課程管理</RouterLink>|
        <RouterLink to="voucher">優惠券管理</RouterLink>|
        <RouterLink to="/">返回首頁</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL } = import.meta.env

export default {
  methods: {
    check () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)ssozrToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      axios.defaults.headers.common.Authorization = token
      axios.post(`${VITE_APP_API_URL}/v2/api/user/check`)
        .then((res) => {
          console.log('驗證成功', res.data.success)
        })
        .catch(() => {
          alert('請先登入')
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.check()
  }
}
</script>
