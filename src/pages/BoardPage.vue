<template>
  <div class="BoardPage">
    {{ board.name }}
    <br />
    {{ board.description }}
  </div>
  <List v-for="list in lists" :key="list.id" :list="list" />
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { boardsService } from '../services/BoardsService'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const board = computed(() => AppState.activeBoard)
    const lists = computed(() => AppState.lists)
    onMounted(() => {
      boardsService.getBoardById(route.params.id)
      boardsService.getListByBoardId(route.params.id)
    })
    return {
      board,
      lists
    }
  }
}
</script>
