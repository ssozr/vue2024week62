import router from '@/router'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      goCart: false,
      addCartBtn: false
    }
  },
  actions: {
    getCartDataPinia () {
      axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    addCart (item, qtyNum) {
      this.addCartBtn = true
      const data = {
        product_id: item.id,
        qty: qtyNum
      }
      axios.post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`, { data })
        .then((res) => {
          if (this.goCart === false) {
            this.addCartBtn = false
            Swal.fire(`${res.data.message}`)
            this.getCartDataPinia()
          } else {
            this.goCart = false
            this.getCartDataPinia()
            router.push('/cart')
          }
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    changeGoCart (item) {
      this.goCart = true
      this.addCart(item, 1)
    }
  }
})

export default cartStore
