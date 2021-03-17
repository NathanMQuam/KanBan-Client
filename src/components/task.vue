<template>
  <div class="Task">
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Task',
  setup() {
    const state = reactive({
      name: '',
      description: '',
      creatorId: '',
      listId: '',
      boardId: ''
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
