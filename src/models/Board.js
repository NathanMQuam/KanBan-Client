export class Board {
  constructor(data = {}) {
    this.id = data._id || data.id || ''
    this.creatorId = data.creatorId || ''
    this.name = data.name || ''
    this.description = data.description || ''
    this.collaborators = data.collaborators || ['']
  }
}
