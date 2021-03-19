<template>
  <div class="List card">
    {{ list.name }}
    <br />
    <CreateTask :list="list" />
    <Task v-for="task in state.tasks" :key="task.id" :task="task" />
    <button class="btn btn-danger" @click="deleteList">
      <i class="fa fa-trash" aria-hidden="true"></i>
      List
    </button>
    <button class="btn btn-warning" v-if="state.moveHere" @click="moveTask">
      Move Here
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
      moveHere: computed(() => AppState.moveHere),
      user: computed(() => AppState.user),
      tasks: computed(() => AppState.tasks[props.list.id]),
      lists: computed(() => AppState.lists)
    })
    onMounted(() => {
      boardsService.getTaskByListId(props.list.id)
    })
    return {

      state,
      deleteList() {
        boardsService.deleteList(props.list.id)
      },
      moveTask() {
        boardsService.moveTask(props.list.id, AppState.movingTask.id)
      }

    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

</style>
