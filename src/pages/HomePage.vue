<template>
  <div class="home flex-grow-1 align-items-center justify-content-center container">
    <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1> -->
    <div class="row">
      <Board class="col-6 my-3" v-for="board in state.boards" :key="board.id" :board="board" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState.js'
import Board from '../components/Board'

export default {
  setup() {
    const state = reactive({
      boards: computed(() => AppState.boards)
    })
    return {
      state
    }
  },
  components: {
    Board
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
