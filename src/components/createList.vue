<template>
  <div class="createList">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createListModal">
      + List
    </button>

    <!-- Modal -->
    <div class="modal fade" id="createListModal" tabindex="-1" aria-labelledby="createListModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createListModalLabel">
              + List
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createList" class="form">
              <div class="mb-3">
                <label for="listName" class="form-label">Name</label>
                <input type="text"
                       name="listName"
                       class="form-input"
                       placeholder="My New List"
                       required
                       v-model="newList.name"
                >
              </div>
              <div class="mb-3">
                <label for="listDescription" class="form-label">Description</label>
                <textarea type="text"
                          name="listDescription"
                          class="form-input"
                          placeholder="This is my first list!"
                          rows="3"
                          v-model="newList.description"
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
import { AppState } from '../AppState'
import { boardsService } from '../services/BoardsService'
import $ from 'jquery'

export default {
  name: 'CreateList',
  setup() {
    const newList = {}
    return {
      newList,
      async createList() {
        newList.boardId = AppState.activeBoard.id
        boardsService.makeList(newList)
        // FIXME: Not dismissing
        $('#createListModal').modal('hide')
      }
    }
  }
}
</script>
