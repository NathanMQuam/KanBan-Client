<template>
  <div class="home flex-grow-1 container">
    <div class="row">
      <Board class="col-6 my-3" v-for="board in state.boards" :key="board.id" :board="board" />
    </div>
  </div>
  <div>
    <CreateBoard />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState.js'
import Board from '../components/Board'
import createBoard from '../components/createBoard'

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
    Board,
    createBoard
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
