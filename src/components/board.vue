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
      <button class="btn btn-danger" @click="deleteBoard">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { boardsService } from '../services/BoardsService'
// import { reactive } from 'vue'
export default {
  props: {
    board: { type: Object, required: true }
  },
  setup(props) {
    return {
      deleteBoard() {
        boardsService.deleteBoard(props.board.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
