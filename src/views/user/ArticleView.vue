<template>
    <div class="container">
          <div class="text-end mt-4">
            <button type="button" class="btn btn-primary" @click=" openModal()">
              建立新的文章
            </button>
          </div>
          <table class="table mt-4">
            <thead>
              <tr>
                <th>文章名稱</th>
                <th>
                  日期
                </th>
                <th>
                  作者
                </th>
                <th>
                  是否啟用
                </th>
                <th>
                  編輯
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in ariticleData.articles" :key="i">
                <td>{{ item.title }}</td>
                <td>{{ time(item.create_at) }}</td>
                <td>{{ item.author }}</td>
                <td>
                  <span class="text-success" v-if="item.isPublic">啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary btn-sm" @click="openEditModla(item)">
                      編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="delArticle(item.id)">
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal -->
        <div id="productModal" ref="articleModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
             aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
              <div class="modal-header bg-dark text-white">
                <h5 id="productModalLabel" class="modal-title">
                  <span>新增產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label for="imageUrl" class="form-label">輸入圖片網址</label>
                        <input type="text" class="form-control"
                               placeholder="請輸入圖片連結" v-model="data.image">
                      </div>
                      <img class="img-fluid" src="" alt="要新增的圖片">
                    </div>
                    <div>
                      <button type="button" class="btn btn-outline-primary btn-sm d-block w-100">
                        新增圖片
                      </button>
                    </div>
              <!--       <div v-else>
                      <button class="btn btn-outline-danger btn-sm d-block w-100">
                        刪除圖片
                      </button>
                    </div> -->
                  </div>
                  <div class="col-sm-8">
                    <div class="mb-3">
                      <label for="title" class="form-label">標題</label>
                      <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="data.title">
                    </div>

                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label for="category" class="form-label">作者</label>
                        <input id="category" type="text" class="form-control" v-model="data.author"
                               placeholder="請輸入作者">
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label for="origin_price" class="form-label">標籤</label>
                        <input id="origin_price" type="text" min="0" class="form-control" placeholder="請輸入標籤" v-model="data.tag">
                      </div>
                      <div class="mb-3 col-md-6">
                        <label for="date" class="form-label" v-if="!date">日期</label>
                        <label for="date" v-else>發布日期:{{  time(date) }}</label>
                        <input id="date" type="date" min="0" class="form-control" v-model="data.create_at"
                               placeholder="請輸入日期">
                      </div>
                    </div>
                    <hr>

                    <div class="mb-3">
                      <label for="description" class="form-label">文章描述</label>
                      <textarea id="description" type="text" class="form-control" v-model="data.description" placeholder="請輸入產品 描述">
                      </textarea>
                    </div>
                    <div class="mb-3">
                      <label for="content" class="form-label">這是內容</label>
                      <textarea id="description" type="text" class="form-control" v-model="data.content"
                                placeholder="請輸入說明內容">
                      </textarea>
                    </div>
                    <div class="mb-3">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input"  id="is_enabled" v-model="data.isPublic">
                        <label class="form-check-label" for="is_enabled" >是否啟用</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                  取消
                </button>
                <button type="button" class="btn btn-primary" @click="newArticle()">
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
        <Loading v-model:active="isLoading"></Loading>
        <Pagination :pagination="pagination" @change-page="changePage" v-if="pagination.total_pages >= 2"></Pagination>
  </template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
import Pagination from '@/components/PaginationView.vue'
import { Modal } from 'bootstrap'
import axios from 'axios'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  data () {
    return {
      isLoading: false,
      date: '',
      modal: true,
      ariticleData: {},
      articleModal: '',
      pagination: {},
      dataId: '',
      data: {
        title: '',
        description: '',
        image: '',
        tag: '',
        create_at: '',
        author: '',
        isPublic: false,
        content: ''
      }
    }
  },
  methods: {
    getAriticle () {
      axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/articles`)
        .then((res) => {
          this.ariticleData = res.data
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    openEditModla (item) {
      this.isLoading = true
      axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/article/${item.id}`)
        .then((res) => {
          this.data = { ...res.data.article }
          this.articleModal.show()
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
        .finally(() => {
          this.isLoading = false
        })
      this.modal = false
      this.date = item.create_at
      this.data.create_at = this.time(item.create_at)
      this.dataId = item.id
    },
    openModal () {
      this.modal = true
      this.data = {
        title: '',
        description: '',
        image: '',
        tag: '',
        create_at: '',
        author: '',
        isPublic: false,
        content: ''
      }
      this.articleModal.show()
    },
    newArticle () {
      if (this.modal === true) {
        this.timeChange()
        const data = { ...this.data }
        axios.post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/article`, { data })
          .then((res) => {
            this.data = {}
            Swal.fire(`${res.data.message}`)
            this.getAriticle()
            this.articleModal.hide()
          })
          .catch((err) => {
            alert(err.data.message).error(err)
          })
      } else {
        this.timeChange()
        const data = { ...this.data }
        axios.put(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/article/${this.dataId}`, { data })
          .then((res) => {
            this.data = {}
            this.getAriticle()
            Swal.fire(`${res.data.message}`)
            this.articleModal.hide()
          })
          .catch((err) => {
            alert(err.data.message).error(err)
          })
      }
    },
    timeChange () {
      const date = new Date(this.data.create_at)
      date.setHours(0, 0, 0, 0)
      const timestamp = date.getTime() / 1000
      this.data.create_at = timestamp
    },
    time (at) {
      const date = new Date(at * 1000)
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return date.toLocaleString('zh-TW', options)
    },
    delArticle (id) {
      axios.delete(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/article/${id}`)
        .then((res) => {
          this.getAriticle()
          Swal.fire(`${res.data.message}`)
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    changePage (page) {
      this.getProducts(page)
    }
  },
  components: {
    Loading,
    Pagination
  },
  mounted () {
    this.isLoading = true
    this.getAriticle()
    this.articleModal = new Modal(this.$refs.articleModal)
  }
}
</script>
