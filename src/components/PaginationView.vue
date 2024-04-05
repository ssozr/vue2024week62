<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          @click.prevent="changePage(pagination.current_page - 1)"
          aria-label="Previous"
          :class="{ disabled: !pagination.has_pre }"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{ active: pagination.current_page === page }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          @click.prevent="changePage(pagination.current_page + 1)"
          aria-label="Next"
          :class="{ disabled: !pagination.has_next }"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    changePage (page) {
      this.$emit('changePage', page)
    }
  }
}
</script>
