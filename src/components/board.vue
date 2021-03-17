<template>
  <div class="board">
    <div class=" card shadow">
      <router-link :to="{name: 'BoardPage', params: {id: board.id}}">
        <div class="card-body">
          <h5 class="card-title">
            {{ board.name }}
          </h5>
          <p class="card-text">
            {{ board.description }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { reactive } from 'vue'
export default {
  props: {
    board: { type: Object, required: true }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
