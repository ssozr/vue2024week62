import router from '@/router'
import { defineStore } from 'pinia'

const searchStore = defineStore('search', {
  state: () => {
    return {
      categoryData: ''
    }
  },
  actions: {
    search (category) {
      this.categoryData = category
      router.push('/products')
    },
    searchOff () {
      this.categoryData = ''
    }
  }
})

export default searchStore
