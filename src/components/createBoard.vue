<template>
  <div class="createBoard">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createBoardModal">
      New Board
    </button>

    <!-- Modal -->
    <div class="modal fade" id="createBoardModal" tabindex="-1" aria-labelledby="createBoardModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createBoardModalLabel">
              New Board
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createBoard" class="form">
              <h4>New Board</h4>
              <div class="mb-3">
                <label for="boardName" class="form-label">Name</label>
                <input type="text"
                       name="boardName"
                       class="form-input"
                       placeholder="My New Board"
                       required
                       v-model="newBoard.name"
                >
              </div>
              <div class="mb-3">
                <label for="boardDescription" class="form-label">Description</label>
                <textarea type="text"
                          name="boardDescription"
                          class="form-input"
                          placeholder="This is my first board!"
                          rows="3"
                          v-model="newBoard.description"
                >
                </textarea>
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
export default {
  name: 'CreateBoard',
  setup() {
    const newBoard = {}
    return {
      newBoard,
      async createBoard() {
        boardsService.makeBoard(newBoard)
      }
    }
  }
}
</script>
