<template>
  <div class="Task card">
    {{ task.name }}
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { boardsService } from '../services/BoardsService'

export default {
  props: {
    task: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      comment: computed(() => AppState.comments[props.task.id])

    })
    onMounted(() => {
      boardsService.getCommentByListId(props.task.id)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
