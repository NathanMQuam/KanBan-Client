export class Task {
  constructor(data) {
    this.id = data._id || data.id || ''
    this.creatorId = data.creatorId || ''
    this.name = data.name || ''
    this.description = data.description || ''
    this.listId = data.listId || ''
    this.boardId = data.boardId || ''
  }
}
