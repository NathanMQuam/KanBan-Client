<template>
  <div class="createTask">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createTaskModal" @click="setActiveList">
      New Task
    </button>

    <!-- Modal -->
    <div class="modal fade" id="createTaskModal" tabindex="-1" aria-labelledby="createTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createTaskModalLabel">
              New Task
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createTask" class="form">
              <div class="mb-3">
                <label for="taskName" class="form-label">Name</label>
                <input type="text"
                       name="taskName"
                       class="form-input"
                       placeholder="My New Task"
                       required
                       v-model="newTask.name"
                >
              </div>
              <div class="mb-3">
                <label for="taskDescription" class="form-label">Description</label>
                <textarea type="text"
                          name="taskDescription"
                          class="form-input"
                          placeholder="This is my first task!"
                          rows="3"
                          v-model="newTask.description"
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
import { AppState } from '../AppState'

export default {
  name: 'CreateTask',
  props: {
    list: Object
  },
  setup(props) {
    const newTask = {}
    return {
      setActiveList() {
        AppState.activeList = AppState.lists.find(l => l.id === props.list.id)
        console.log(AppState.activeList)
      },
      newTask,
      async createTask() {
        newTask.boardId = AppState.activeBoard.id
        newTask.listId = AppState.activeList.id
        boardsService.makeTask(newTask)
      }
    }
  }
}
</script>
