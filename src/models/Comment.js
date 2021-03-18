export class Comment {
  constructor(data) {
    this.id = data._id || data.id || ''
    this.creatorId = data.creatorId || ''
    this.name = data.name || ''
    this.taskId = data.taskId || ''
  }
}
