import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Board } from '../models/Board'
import { List } from '../models/List'
import { Task } from '../models/Task'
import { Comment } from '../models/Comment'
import { logger } from '../utils/Logger'

class BoardsService {
  async getBoards() {
    try {
      const res = await api.get('api/boards')
      AppState.boards = res.data.map(b => new Board(b))
    } catch (error) {
      logger.error(error)
    }
  }

  async getBoardById(id) {
    try {
      AppState.activeBoard = new Board()
      const res = await api.get('api/boards/' + id)
      AppState.activeBoard = new Board(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async getListByBoardId(id) {
    try {
      const res = await api.get(`api/boards/${id}/lists`)
      AppState.lists = res.data.map(l => new List(l))
    } catch (error) {
      logger.error(error)
    }
  }

  async getTaskByListId(id) {
    try {
      const res = await api.get(`api/lists/${id}/tasks`)
      AppState.tasks[id] = res.data.map(t => new Task(t))
    } catch (error) {
      logger.error(error)
    }
  }

  async getCommentByTaskId(id) {
    try {
      const res = await api.get(`api/tasks/${id}/comments`)
      AppState.comments[id] = res.data.map(c => new Comment(c))
    } catch (error) {
      logger.error(error)
    }
  }

  async makeBoard(boardData) {
    try {
      const res = await api.post('api/boards', new Board(boardData))
      logger.log(boardData)
      logger.log(res.data)
      AppState.activeBoard = new Board(res.data)
      this.getBoardById(AppState.activeBoard.id)
    } catch (error) {
      logger.error(error)
    }
  }

  async makeList(listData) {
    const res = await api.post('api/lists', new List(listData))
    AppState.activeBoard = new Board(res.data)
    this.getListByBoardId(AppState.activeBoard.id)
  }

  async makeTask(taskData) {
    const res = await api.post('api/tasks', new Task(taskData))
    AppState.activeBoard = new Board(res.data)
  }
}

export const boardsService = new BoardsService()
