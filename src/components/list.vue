<template>
  <div class="List card">
    {{ list.name }}
    <br />
    <CreateTask :list="list" />
    <Task v-for="task in state.tasks" :key="task.id" :task="task" />
    <button class="btn btn-danger" @click="deleteList">
      Delete List
    </button>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { boardsService } from '../services/BoardsService'

export default {
  name: 'List',
  props: {
    list: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      tasks: computed(() => AppState.tasks[props.list.id])
    })
    onMounted(() => {
      boardsService.getTaskByListId(props.list.id)
    })
    return {
      state,
      deleteList() {
        boardsService.deleteList(props.list.id)
      }

    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

</style>
