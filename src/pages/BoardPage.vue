<template>
  <div class="BoardPage">
    {{ board }}
  </div>
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
    onMounted(() => boardsService.getBoardById(route.params.id))
    return {
      board
    }
  }
}
</script>
