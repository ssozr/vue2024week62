<template>
  <div class="articles" data-aos="fade-right">
    <div class="container mt-30 mb-15">
      <div class="row">
        <RouterLink
          :to="`/article/${item.id}`"
          v-for="(item, i) in articleData"
          :key="i"
        >
          <div class="card mb-3 p-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="item.image" alt="文章示意圖片" />
              </div>
              <div class="col-md-8">
                <div
                  class="card-body d-flex flex-column justify-content-between"
                >
                  <div class="mb-3">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="card-text mb-0 d-flex align-items-end">
                      <small class="text-muted">{{
                        time(item.create_at)
                      }}</small>
                    </p>
                    <button type="button" class="btn btn-primary">
                      閱讀全文
                    </button>
                  </div>
                </div>
              </div>
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
import axios from 'axios'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  data () {
    return {
      articleData: [],
      pagination: {}
    }
  },
  components: {
    Pagination,
    RouterLink
  },
  methods: {
    getArticleData (page = 1) {
      axios
        .get(
          `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/articles/?page=${page}`
        )
        .then((res) => {
          this.articleData = res.data.articles
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    time (at) {
      const date = new Date(at * 1000)
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false
      }
      return date.toLocaleString('zh-TW', options)
    },
    changePage (page) {
      this.getClassData(page)
    }
  },
  mounted () {
    this.getArticleData()
  }
}
</script>
