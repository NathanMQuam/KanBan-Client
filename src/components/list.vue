<template>
  <div class="List">
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'List',
  setup() {
    const state = reactive({
      name: '',
      description: '',
      creatorId: '',
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
