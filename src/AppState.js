import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  boards: [
    {
      name: 'Board Title',
      description: 'Board description, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet...',
      id: 'testId'
    }
  ],
  activeBoard: {},
  lists: [],
  activeList: {},
  tasks: [],
  activeTask: {},
  comments: []
})
