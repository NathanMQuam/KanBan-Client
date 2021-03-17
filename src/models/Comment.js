export class Comment {
  constructor(data) {
    this.id = data._id || data.id || ''
    this.creatorId = data.creatorId || ''
    this.body = data.body || ''
    this.taskId = data.taskId || ''
  }
}
