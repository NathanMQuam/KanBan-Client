<template>
  <div class="Task card">
    {{ task.name }}
    <br />
    <CreateComment :task="task" />
    <Comment v-for="comment in state.comments" :key="comment.id" :comment="comment" />
    <button class="btn btn-danger" @click="deleteTask">
      <i class="fa fa-trash" aria-hidden="true"></i>
      Task
    </button>
    <button class="btn btn-info" @click="openMoveTask">
      Change List
    </button>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { boardsService } from '../services/BoardsService'
import CreateComment from '../components/createComment'

export default {
  props: {
    task: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      comments: computed(() => AppState.comments[props.task.id])

    })
    onMounted(() => {
      boardsService.getCommentByTaskId(props.task.id)
    })
    return {
      state,
      deleteTask() {
        boardsService.deleteTask(props.task.id)
      },
      openMoveTask() {
        AppState.movingTask = props.task
        boardsService.openMoveTask()
      }
    }
  },
  components: {
    CreateComment
  }
}
</script>

<style lang="scss" scoped>

</style>
