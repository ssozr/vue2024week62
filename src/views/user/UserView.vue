<template>
    <nav>
        <RouterLink to="/admin/article">文章管理</RouterLink>|
        <RouterLink to="/admin/order">訂單管理</RouterLink> |
        <RouterLink to="/admin/products">課程管理</RouterLink>|
        <RouterLink to="/admin/voucher">優惠券管理</RouterLink>|
        <RouterLink to="/">登出</RouterLink>
    </nav>
    <RouterView v-if="show"></RouterView>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL } = import.meta.env

export default {
  data () {
    return {
      show: false
    }
  },
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
          this.show = true
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
