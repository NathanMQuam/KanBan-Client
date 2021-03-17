import { AppState } from '../AppState'
import { Board } from '../models/Board'
import { api } from './AxiosService'

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
}

export const boardsService = new BoardsService()
