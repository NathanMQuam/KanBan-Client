import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Board } from '../models/Board'
import { List } from '../models/List'
import { Task } from '../models/Task'
import { Comment } from '../models/Comment'

class BoardsService {
  async getBoards() {
    const res = await api.get('api/boards')
    AppState.boards = res.data.map(b => new Board(b))
  }

  async getBoardById(id) {
    AppState.activeBoard = new Board()
    const res = await api.get('api/boards/' + id)
    AppState.activeBoard = new Board(res.data)
  }

  async getListByBoardId(id) {
    const res = await api.get(`api/boards/${id}/lists`)
    AppState.lists = res.data.map(l => new List(l))
  }

  async getTaskByListId(id) {
    const res = await api.get(`api/lists/${id}/tasks`)
    AppState.tasks[id] = res.data.map(t => new Task(t))
  }

  async getCommentByTaskId(id) {
    const res = await api.get(`api/tasks/${id}/comments`)
    AppState.comments[id] = res.data.map(c => new Comment(c))
  }
}

export const boardsService = new BoardsService()
