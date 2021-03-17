export class List {
  constructor(data) {
    this.id = data._id || data.id || ''
    this.creatorId = data.creatorId || ''
    this.name = data.name || ''
    this.description = data.description || ''
    this.boardId = data.boardId || ''
  }
}
