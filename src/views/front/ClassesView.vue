<template>
  <div class="container-fluid" data-aos="fade-right">
    <div class="container mt-30 pb-15 px-0">
      <div class="mb-4">
        <div class="btn btn-primary">
          <select
            class="btn btn-primary px-0 py-3 border-0"
            @change="changeClass"
            v-model="changeData"
          >
            <option value="" selected>全部課程</option>
            <option value="自我成長">自我成長</option>
            <option value="感情婚姻">感情婚姻</option>
            <option value="人際關係">人際關係</option>
            <option value="諮商談話">諮商談話</option>
          </select>
        </div>
      </div>
      <div class="row">
        <RouterLink
          :to="`/product/${product.id}`"
          v-for="(product, i) in classData"
          :key="i"
          class="col-lg-4 col-md-6 mb-8 border-0 card-group justify-content-center product"
        >
          <div class="card h-100 bg-primary border-0 pt-4">
            <div class="d-flex justify-content-center">
              <div
                class="d-flex justify-content-center align-items-center border rounded-circle border-secondary"
                style="width: 308px; height: 308px"
              >
                <img
                  :src="product.imageUrl"
                  class="card-img-top rounded-circle card-img p-5"
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
              詳細介紹
            </div>
          </div>
        </RouterLink>
      </div>
      <Pagination
        :class="{ 'd-none': pagination.total_pages === 1 }"
        :pagination="pagination"
        @change-page="changePage"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import { RouterLink } from 'vue-router'
import searchStore from '@/stores/search'
import { mapState } from 'pinia'
import axios from 'axios'
const { VITE_APP_API_NAME, VITE_APP_API_URL } = import.meta.env
export default {
  data () {
    return {
      filterValue: '',
      dropdownText: '課程篩選',
      classData: [],
      pagination: {},
      changeData: ''
    }
  },
  computed: {
    ...mapState(searchStore, ['categoryData'])
  },
  components: {
    Pagination,
    RouterLink
  },
  methods: {
    getClassData (page = 1) {
      axios
        .get(
          `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/products/?page=${page}`
        )
        .then((res) => {
          this.classData = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    changePage (page) {
      this.getClassData(page)
    },
    changeClass (category) {
      const a = category.target.value
      axios
        .get(
          `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/products/?category=${a}`
        )
        .then((res) => {
          this.classData = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    searchClass (category) {
      axios
        .get(
          `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/products/?category=${category}`
        )
        .then((res) => {
          this.changeData = category
          this.classData = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    text () {
      if (this.categoryData) {
        this.searchClass(this.categoryData)
      } else {
        this.getClassData()
      }
    }
  },
  mounted () {
    this.text()
  }
}
</script>

<style scoped>
.card-img {
  height: 268px;
  width: 268px;
  object-fit: cover;
  object-position: center;
}
.card {
  border: 1px solid #f8c343;
  transition: all 0.15s ease;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
}
.card:hover {
  border: 1px solid #f79e1b;
  transform: scale(1.1);
  box-shadow: 0 20px 40px rgb(0, 0, 0, 0.3);
}
</style>
