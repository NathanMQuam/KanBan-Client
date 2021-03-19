<template>
  <div class="Comment card">
    <small>{{ state.user.name }}</small>
    <p>{{ comment.name }}</p>
    <button class="btn btn-danger" @click="deleteComment">
      <i class="fa fa-trash" aria-hidden="true"></i>
      Comment
    </button>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'
import { boardsService } from '../services/BoardsService'
export default {
  name: 'Comment',
  props: {
    comment: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user)

    })
    return {
      state,
      deleteComment() {
        boardsService.deleteComment(props.comment.id)
      }
    }
  }
}
</script>

<style>

</style>
