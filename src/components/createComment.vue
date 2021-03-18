<template>
  <div class="createComment">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createCommentModal" @click="setActiveTask">
      New Comment
    </button>

    <!-- Modal -->
    <div class="modal fade" id="`createCommentModal" tabindex="-1" aria-labelledby="createCommentModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createCommentModalLabel">
              New Comment{{ task.name }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createComment" class="form">
              <div class="mb-3">
                <label for="commentName" class="form-label">Name</label>
                <input type="text"
                       name="commentName"
                       class="form-input"
                       placeholder="My New Comment"
                       required
                       v-model="newComment.name"
                >
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { boardsService } from '../services/BoardsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'CreateComment',
  props: {
    task: Object
  },
  setup(props) {
    const newComment = {}
    return {
      setActiveTask() {
        AppState.activeTask = props.task
        logger.log(AppState.activeTask)
      },
      newComment,
      async createComment() {
        logger.log('taskId', props.task.id)
        newComment.taskId = AppState.activeTask.id
        boardsService.makeComment(newComment)
      }
    }
  }
}
</script>
