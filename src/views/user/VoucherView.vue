<template>
    <div class="container">
      <div class="text-end my-4">
      <button type="button" class="btn btn-primary" @click="openCouponMadl()">建立優惠券</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
          <tbody>
          <tr v-for="(item, i) in coupons.coupons" :key="i">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ time(item.due_date) }}</td>
          <td>
              <p v-if="item.is_enabled" class="text-secondary" >已啟用</p>
              <p v-else>未啟用</p>
          </td>
          <button type="button" class="btn btn-outline-primary" @click="openEdit(item)">編輯</button>
          <button type="button" class="btn btn-outline-danger" @click="openDelCoupon(item)">刪除</button>
          </tr>
      </tbody>
    </table>
    <Pagination
      :pagination="pagination"
      @change-page="changePage"
    ></Pagination>
    <loading v-model:active="isLoading"/>
    </div>

    <!-- 新增優惠券modal -->
    <div class="modal" tabindex="-1" ref="couponModal" id="couponModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{modalTitle}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
              <label for="title" class="form-label">優惠券名稱</label>
              <input type="text" class="form-control" id="title" v-model="couponData.title">
          </div>
          <div class="mb-3">
              <label for="coupon_code" class="form-label">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="couponData.code">
          </div>
          <div class="mb-3">
              <label for="due_date" class="form-label">到期日</label>
              <p v-if="!modal" class="py-0 my-0">目前到期日{{ time(editDate) }}</p><br>
              <input type="date" class="form-control" id="due_date" v-model="couponData.due_date">
          </div>
          <div class="mb-3">
              <label for="percent" class="form-label">折扣百分比</label>
              <br>
              <button type="button" class="btn btn-primary me-2 mb-2" @click="percentValue(1)" :disabled="couponData.percent === 100">+1</button>
              <button type="button" class="btn btn-primary  mb-2" @click="percentValue(10)" :disabled="couponData.percent > 90">+10</button>
              <input type="number" class="form-control" id="percent"  v-model="couponData.percent" :disabled="true">
              <button type="button" class="btn btn-primary me-2 mt-2" @click="percentValue(-1)" :disabled="couponData.percent === 0">-1</button>
              <button type="button" class="btn btn-primary  mt-2" @click="percentValue(-10)" :disabled="couponData.percent < 10">-10</button>
          </div>
          <div class="mb-3">
              <div class="form-check">
                  <label for="is_enabled" class="form-label">是否啟用</label>
                  <input type="checkbox" class="form-check-input" :true-value="1" :false-value="0" id="is_enabled" v-model="couponData.is_enabled">
              </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="newCoupon()">確定</button>
        </div>
      </div>
    </div>
    </div>
    <!-- 刪除優惠券modal刪除優惠券modal -->
    <div class="modal" tabindex="-1" ref="delCouponModal">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">{{ couponData.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <p>是否確認刪除此優惠券?</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="delCoupon()">確認刪除</button>
          </div>
          </div>
      </div>
    </div>
  </template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import Pagination from '@/components/PaginationView.vue'
import { Modal } from 'bootstrap'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      modalTitle: '',
      isLoading: false,
      modal: true,
      coupons: '',
      couponModal: '',
      delCouponModal: '',
      editDate: '',
      editId: '',
      delId: '',
      pagination: {},
      couponData: {
        title: '',
        code: '',
        due_date: '',
        percent: 1,
        is_enabled: 0
      }
    }
  },
  methods: {
    getCoupons (page = 1) {
      axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/coupons?page=${page}`)
        .then((res) => {
          this.coupons = res.data
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    openCouponMadl () {
      this.modalTitle = '建立優惠券'
      this.modal = true
      this.couponData = {
        percent: 1
      }
      this.couponData.is_enabled = 0
      this.couponModal.show()
    },
    openEdit (item) {
      this.modalTitle = '編輯優惠券'
      this.couponData = {}
      this.modal = false
      this.couponData = { ...item }
      this.editId = item.id
      this.editDate = this.couponData.due_date
      this.couponData.due_date = this.couponData.due_date * 1000
      this.couponModal.show()
    },
    newCoupon () {
      this.isLoading = true
      if (this.modal === false) {
        this.timeChange()
        const data = { ...this.couponData }
        axios.put(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/coupon/${this.editId}`, { data })
          .then((res) => {
            this.getCoupons()
            Swal.fire(`${res.data.message}`)
            if (res.data.success === true) {
              this.couponModal.hide()
            }
          })
          .catch((err) => {
            alert(err.data.message)
          })
      } else {
        this.timeChange()
        const data = { ...this.couponData }
        axios.post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/coupon`, { data })
          .then((res) => {
            if (res.data.success === true) {
              this.couponModal.hide()
            }
            Swal.fire(`${res.data.message}`)
            this.getCoupons()
          })
          .catch((err) => {
            alert(err.data.message)
          })
      }
    },
    timeChange () {
      const date = new Date(this.couponData.due_date)
      date.setHours(0, 0, 0, 0)
      const timestamp = date.getTime() / 1000
      this.couponData.due_date = timestamp
    },
    time (at) {
      const date = new Date(at * 1000)
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return date.toLocaleString('zh-TW', options)
    },
    openDelCoupon (item) {
      this.couponData = { ...item }
      this.delCouponModal.show()
      this.delId = item.id
    },
    delCoupon () {
      this.loading = true
      axios.delete(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/coupon/${this.delId}`)
        .then((res) => {
          Swal.fire(`${res.data.message}`)
          this.getCoupons()
          this.delCouponModal.hide()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    changePage (page) {
      this.getCoupons(page)
    },
    percentValue (a) {
      this.couponData.percent += a
    }
  },
  components: {
    Pagination,
    Loading
  },
  mounted () {
    this.isLoading = true
    this.getCoupons()
    this.couponModal = new Modal(this.$refs.couponModal)
    this.delCouponModal = new Modal(this.$refs.delCouponModal)
  }
}

</script>
